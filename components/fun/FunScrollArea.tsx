"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

const BUTTON = 16;
const MIN_THUMB = 24;
const ARROW_STEP = 40;

type Metrics = {
  scrollTop: number;
  scrollHeight: number;
  clientHeight: number;
};

function bevelRaised(extra = "") {
  return `border-t border-l border-white border-r border-b border-black bg-[#c0c0c0] shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf] ${extra}`;
}

function bevelPressed(extra = "") {
  return `border-t border-l border-black border-r border-b border-white bg-[#c0c0c0] shadow-[inset_1px_1px_0_#808080,inset_-1px_-1px_0_#dfdfdf] ${extra}`;
}

export function FunScrollArea({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    startY: number;
    startScrollTop: number;
  } | null>(null);
  const holdRef = useRef<number | null>(null);

  const [metrics, setMetrics] = useState<Metrics>({
    scrollTop: 0,
    scrollHeight: 1,
    clientHeight: 1,
  });
  const [pressed, setPressed] = useState<"up" | "down" | "thumb" | null>(null);

  const refresh = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setMetrics({
      scrollTop: el.scrollTop,
      scrollHeight: Math.max(el.scrollHeight, 1),
      clientHeight: Math.max(el.clientHeight, 1),
    });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    refresh();
    el.addEventListener("scroll", refresh, { passive: true });

    const ro = new ResizeObserver(refresh);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);

    window.addEventListener("resize", refresh);
    return () => {
      el.removeEventListener("scroll", refresh);
      ro.disconnect();
      window.removeEventListener("resize", refresh);
    };
  }, [refresh]);

  // Re-measure after route/content swaps.
  useEffect(() => {
    const id = window.requestAnimationFrame(refresh);
    return () => window.cancelAnimationFrame(id);
  }, [children, refresh]);

  const maxScroll = Math.max(0, metrics.scrollHeight - metrics.clientHeight);
  const trackHeight = Math.max(0, metrics.clientHeight - BUTTON * 2);
  const thumbHeight =
    maxScroll === 0
      ? trackHeight
      : Math.max(
          MIN_THUMB,
          Math.round((metrics.clientHeight / metrics.scrollHeight) * trackHeight),
        );
  const thumbTravel = Math.max(0, trackHeight - thumbHeight);
  const thumbTop =
    maxScroll === 0
      ? 0
      : Math.round((metrics.scrollTop / maxScroll) * thumbTravel);

  const scrollBy = useCallback((delta: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTop += delta;
  }, []);

  const stopHold = useCallback(() => {
    if (holdRef.current !== null) {
      window.clearInterval(holdRef.current);
      holdRef.current = null;
    }
    setPressed(null);
  }, []);

  const startHold = useCallback(
    (dir: "up" | "down") => {
      setPressed(dir);
      scrollBy(dir === "up" ? -ARROW_STEP : ARROW_STEP);
      holdRef.current = window.setInterval(() => {
        scrollBy(dir === "up" ? -ARROW_STEP : ARROW_STEP);
      }, 50);
    },
    [scrollBy],
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragRef.current || !scrollerRef.current) return;
      const travel = thumbTravel || 1;
      const max = Math.max(
        0,
        scrollerRef.current.scrollHeight - scrollerRef.current.clientHeight,
      );
      const deltaY = e.clientY - dragRef.current.startY;
      scrollerRef.current.scrollTop =
        dragRef.current.startScrollTop + (deltaY / travel) * max;
    };
    const onUp = () => {
      dragRef.current = null;
      setPressed((p) => (p === "thumb" ? null : p));
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [thumbTravel]);

  useEffect(() => () => stopHold(), [stopHold]);

  const onTrackPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || !scrollerRef.current || !trackRef.current) {
      return;
    }
    const rect = trackRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const page = metrics.clientHeight * 0.9;
    if (y < thumbTop) scrollBy(-page);
    else if (y > thumbTop + thumbHeight) scrollBy(page);
  };

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-black">
      <div
        ref={scrollerRef}
        className="fun-site-scroll min-w-0 flex-1 overflow-x-hidden overflow-y-scroll"
      >
        {children}
      </div>

      <aside
        className="flex h-full w-4 shrink-0 flex-col bg-[#c0c0c0]"
        aria-hidden
      >
        <button
          type="button"
          aria-label="Scroll up"
          className={`grid h-4 w-4 shrink-0 place-items-center p-0 ${
            pressed === "up" ? bevelPressed() : bevelRaised()
          }`}
          onPointerDown={(e) => {
            e.preventDefault();
            startHold("up");
          }}
          onPointerUp={stopHold}
          onPointerLeave={stopHold}
        >
          <span className="block size-0 border-x-[4px] border-b-[5px] border-x-transparent border-b-black" />
        </button>

        <div
          ref={trackRef}
          className="relative min-h-0 flex-1"
          style={{
            backgroundColor: "#c0c0c0",
            backgroundImage: `
              linear-gradient(45deg, #fff 25%, transparent 25%),
              linear-gradient(-45deg, #fff 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #fff 75%),
              linear-gradient(-45deg, transparent 75%, #fff 75%)
            `,
            backgroundSize: "2px 2px",
            backgroundPosition: "0 0, 0 1px, 1px -1px, -1px 0",
          }}
          onPointerDown={onTrackPointerDown}
        >
          <button
            type="button"
            aria-label="Scroll thumb"
            className={`absolute right-0 left-0 box-border w-full p-0 ${
              pressed === "thumb" ? bevelPressed() : bevelRaised()
            }`}
            style={{ top: thumbTop, height: Math.max(thumbHeight, MIN_THUMB) }}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setPressed("thumb");
              dragRef.current = {
                startY: e.clientY,
                startScrollTop: scrollerRef.current?.scrollTop ?? 0,
              };
            }}
          />
        </div>

        <button
          type="button"
          aria-label="Scroll down"
          className={`grid h-4 w-4 shrink-0 place-items-center p-0 ${
            pressed === "down" ? bevelPressed() : bevelRaised()
          }`}
          onPointerDown={(e) => {
            e.preventDefault();
            startHold("down");
          }}
          onPointerUp={stopHold}
          onPointerLeave={stopHold}
        >
          <span className="block size-0 border-x-[4px] border-t-[5px] border-x-transparent border-t-black" />
        </button>
      </aside>
    </div>
  );
}
