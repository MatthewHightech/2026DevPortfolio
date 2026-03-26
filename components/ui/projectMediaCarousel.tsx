"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TouchEvent as ReactTouchEvent } from "react";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const DESKTOP_VISIBLE_SLOTS = 4;
const MOBILE_BREAKPOINT = "(max-width: 767px)";
const SWIPE_THRESHOLD_PX = 50;
const SLIDE_MIN_WIDTH_PX = 200;
const GAP_PX = 8;

const VIEWPORT_HEIGHT_PX = 400;

export type ProjectMediaItem = {
  type: "image" | "video" | "youtube";
  link: string;
  alt: string;
};

function useIsMobile() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(MOBILE_BREAKPOINT);
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(MOBILE_BREAKPOINT).matches,
    () => false
  );
}

function sortYoutubeFirst(items: ProjectMediaItem[]): ProjectMediaItem[] {
  return [...items].sort((a, b) => {
    const aY = a.type === "youtube" ? 0 : 1;
    const bY = b.type === "youtube" ? 0 : 1;
    return aY - bY;
  });
}

function youtubeVideoId(link: string): string | null {
  try {
    const u = new URL(link);
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      return id || null;
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      if (u.pathname.startsWith("/embed/"))
        return u.pathname.split("/")[2] ?? null;
      if (u.pathname.startsWith("/shorts/"))
        return u.pathname.split("/")[2] ?? null;
    }
  } catch {
    return null;
  }
  return null;
}

function MediaSlide({ item }: { item: ProjectMediaItem }) {
  const boxClass =
    "relative h-full w-full min-h-0 min-w-0 overflow-hidden rounded border border-border bg-muted/40 flex items-center justify-center";

  if (item.type === "youtube") {
    const id = youtubeVideoId(item.link);
    if (!id) {
      return (
        <div className={boxClass}>
          <p className="px-2 text-center text-xs text-muted-foreground">
            Invalid YouTube URL
          </p>
        </div>
      );
    }
    return (
      <div className={boxClass}>
        <iframe
          title={item.alt}
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div className="relative h-full w-full min-h-0 min-w-0 overflow-hidden rounded border border-border bg-muted/40">
        <video
          className="h-full w-full object-cover object-top"
          controls
          playsInline
          preload="metadata"
        >
          <source src={item.link} />
        </video>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full min-h-0 min-w-0 overflow-hidden rounded border border-border bg-muted/40">
      <Image
        src={item.link}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover object-top"
      />
    </div>
  );
}

export function ProjectMediaCarousel({ media }: { media: ProjectMediaItem[] }) {
  const sorted = useMemo(() => sortYoutubeFirst(media), [media]);
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useIsMobile();
  const touchStartX = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportW, setViewportW] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const visibleSlots = isMobile ? 1 : DESKTOP_VISIBLE_SLOTS;

  const maxStart = Math.max(0, sorted.length - visibleSlots);
  const start = Math.min(startIndex, maxStart);
  const canScroll = sorted.length > visibleSlots;
  const showArrows = !isMobile && canScroll;
  const showSwipe = isMobile && sorted.length > 1;

  const slideWidthPx =
    viewportW > 0 && visibleSlots > 0
      ? (viewportW - (visibleSlots - 1) * GAP_PX) / visibleSlots
      : 0;

  const trackX =
    slideWidthPx > 0 ? -start * (slideWidthPx + GAP_PX) : 0;

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setViewportW(el.clientWidth));
    ro.observe(el);
    setViewportW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setStartIndex((i) => Math.min(i, Math.max(0, sorted.length - visibleSlots)));
  }, [sorted.length, visibleSlots]);

  const goPrev = () => setStartIndex((i) => Math.max(0, i - 1));
  const goNext = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  const goToIndex = (i: number) => {
    const target = Math.max(
      0,
      Math.min(i - visibleSlots + 1, maxStart)
    );
    setStartIndex(target);
  };

  const onTouchStart = (e: ReactTouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: ReactTouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  return (
    <div
      className="relative mb-4 mx-4"
      style={{ minHeight: VIEWPORT_HEIGHT_PX }}
    >
      <div
        className={`relative ${showArrows ? "px-10" : ""} ${showSwipe ? "touch-pan-y select-none" : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project media"
        onTouchStart={showSwipe ? onTouchStart : undefined}
        onTouchEnd={showSwipe ? onTouchEnd : undefined}
      >
        {showArrows && (
          <button
            type="button"
            onClick={goPrev}
            disabled={start <= 0}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded border border-border bg-card/95 p-1.5 text-foreground shadow-sm transition-opacity hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
            aria-label="Previous media"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
        )}
        <div
          ref={viewportRef}
          className="w-full overflow-hidden"
          style={{ height: VIEWPORT_HEIGHT_PX }}
        >
          <motion.div
            className="flex h-full gap-2"
            animate={{ x: trackX }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.38,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ width: "max-content" }}
          >
            {sorted.map((item, i) => (
              <div
                key={`${item.link}-${i}`}
                className="h-full shrink-0"
                style={{
                  width:
                    slideWidthPx > 0
                      ? slideWidthPx
                      : `min(100%, ${SLIDE_MIN_WIDTH_PX}px)`,
                }}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${sorted.length}`}
              >
                <MediaSlide item={item} />
              </div>
            ))}
          </motion.div>
        </div>
        {showArrows && (
          <button
            type="button"
            onClick={goNext}
            disabled={start >= maxStart}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded border border-border bg-card/95 p-1.5 text-foreground shadow-sm transition-opacity hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
            aria-label="Next media"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        )}
      </div>

      <div
        className="mt-3 flex flex-wrap justify-center gap-1.5"
        role="tablist"
        aria-label="Media position"
      >
        {sorted.map((_, i) => {
          const inView =
            i >= start && i < start + visibleSlots;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={inView}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => goToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                inView
                  ? "w-4 bg-accent"
                  : "w-1.5 bg-muted-foreground/35 hover:bg-muted-foreground/55"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
