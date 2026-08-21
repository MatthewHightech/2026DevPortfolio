"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MediaSlide, type ProjectMediaItem } from "@/components/ui/mediaSlide";

type ProjectMediaLightboxProps = {
  media: ProjectMediaItem[];
  title: string;
  techStack: string[];
  description: string[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
};

function stopClose(e: React.MouseEvent) {
  e.stopPropagation();
}

/** Keep image slides mounted (hidden) so navigating reuses the browser/Next cache. */
function shouldKeepMounted(item: ProjectMediaItem, i: number, index: number) {
  if (i === index) return true;
  return item.type === "image";
}

export function ProjectMediaLightbox({
  media,
  title,
  techStack,
  description,
  initialIndex = 0,
  open,
  onClose,
}: ProjectMediaLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(media.length - 1, i + 1));
    };
    document.addEventListener("keydown", onKey);
    const { overflow, overscrollBehavior } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      document.body.style.overscrollBehavior = overscrollBehavior;
    };
  }, [open, media.length, onClose]);

  const goPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIndex((i) => Math.min(media.length - 1, i + 1));
    },
    [media.length]
  );

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200]"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
    >
      <div
        className="absolute inset-0 bg-primary backdrop-blur-md"
        aria-hidden
        onClick={onClose}
      />
      <button
        type="button"
        onClick={onClose}
        className="pointer-events-auto absolute right-4 top-4 z-20 border border-on-primary/30 p-2 text-on-primary transition-colors hover:bg-on-primary/10 md:right-6 md:top-6"
        aria-label="Close project"
      >
        <X className="size-5" aria-hidden />
      </button>
      <div
        className="absolute inset-0 overflow-y-auto overscroll-none bg-primary p-4"
        onClick={onClose}
      >
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
          className="pointer-events-none relative mx-auto flex min-h-full w-full max-w-6xl flex-col items-center justify-center py-6"
          onClick={stopClose}
        >
        <div className="pointer-events-auto mb-6 w-full text-center">
          <h2 className="text-headline-md mb-3 text-on-primary">{title}</h2>
          <p className="text-mono-meta text-on-primary/70">
            {techStack.join(" · ")}
          </p>
        </div>

        <p className="text-mono-meta mb-3 text-on-primary/60">
          MEDIA {String(index + 1).padStart(2, "0")} /{" "}
          {String(media.length).padStart(2, "0")}
        </p>

        <div className="relative flex w-full items-center justify-center px-12 md:px-16">
          {media.length > 1 && (
            <button
              type="button"
              onClick={goPrev}
              disabled={index <= 0}
              className="pointer-events-auto absolute left-0 top-1/2 z-10 -translate-y-1/2 border border-outline-variant bg-background p-2 text-foreground transition-colors hover:bg-surface-container disabled:opacity-30 md:left-2"
              aria-label="Previous media"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
          )}

          <div
            className="pointer-events-auto relative h-[min(55dvh,520px)] w-full max-w-5xl"
            onClick={stopClose}
          >
            {media.map((slide, i) => {
              if (!shouldKeepMounted(slide, i, index)) return null;
              const isActive = i === index;
              return (
                <div
                  key={slide.link}
                  className={
                    isActive
                      ? "absolute inset-0 flex items-center justify-center"
                      : "hidden"
                  }
                  aria-hidden={!isActive}
                >
                  <MediaSlide
                    item={slide}
                    layout="inline"
                    imageMaxHeight="min(55dvh, 520px)"
                    priority={Math.abs(i - index) <= 1}
                    loading="eager"
                  />
                </div>
              );
            })}
          </div>

          {media.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              disabled={index >= media.length - 1}
              className="pointer-events-auto absolute right-0 top-1/2 z-10 -translate-y-1/2 border border-outline-variant bg-background p-2 text-foreground transition-colors hover:bg-surface-container disabled:opacity-30 md:right-2"
              aria-label="Next media"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          )}
        </div>

        {media.length > 1 && (
          <div
            className="pointer-events-auto mt-4 flex flex-wrap justify-center gap-1.5"
            role="tablist"
            aria-label="Media position"
            onClick={stopClose}
          >
            {media.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to media ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all ${
                  i === index
                    ? "w-4 bg-secondary"
                    : "w-1.5 bg-on-primary/40 hover:bg-on-primary/60"
                }`}
              />
            ))}
          </div>
        )}

        <ul className="pointer-events-auto mt-8 w-full max-w-3xl space-y-3 text-left text-body-lg leading-relaxed text-on-primary/85">
          {description.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-secondary"
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        </motion.div>
      </div>
    </div>,
    document.body
  );
}
