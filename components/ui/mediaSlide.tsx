"use client";

import { youtubeEmbedUrl } from "@/lib/youtube";
import { ProjectImage } from "@/components/ui/projectImage";

export type ProjectMediaItem = {
  type: "image" | "video" | "youtube";
  link: string;
  alt: string;
};

const embedFrameClass =
  "relative h-full w-full min-h-0 overflow-hidden border border-outline-variant";

type MediaSlideProps = {
  item: ProjectMediaItem;
  priority?: boolean;
  /** CSS max-height for images */
  imageMaxHeight?: string;
  /** `fill` expands to parent; `inline` shrink-wraps for lightbox click-through */
  layout?: "fill" | "inline";
};

export function MediaSlide({
  item,
  priority = false,
  imageMaxHeight = "min(85dvh, 720px)",
  layout = "fill",
}: MediaSlideProps) {
  if (item.type === "youtube") {
    const embedUrl = youtubeEmbedUrl(item.link);
    if (!embedUrl) {
      return (
        <div
          className={`${layout === "inline" ? "flex aspect-video w-[min(90vw,56rem)] items-center justify-center border border-outline-variant" : embedFrameClass}`}
        >
          <p className="px-2 text-center text-xs text-muted-foreground">
            Invalid YouTube URL
          </p>
        </div>
      );
    }
    if (layout === "inline") {
      return (
        <div className="aspect-video w-[min(90vw,56rem)] overflow-hidden border border-outline-variant">
          <iframe
            title={item.alt}
            src={embedUrl}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <div className={embedFrameClass}>
        <iframe
          title={item.alt}
          src={embedUrl}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (item.type === "video") {
    if (layout === "inline") {
      return (
        <video
          className="max-h-[min(85dvh,720px)] max-w-[min(90vw,56rem)] border border-outline-variant object-contain"
          controls
          playsInline
          preload="metadata"
        >
          <source src={item.link} />
        </video>
      );
    }
    return (
      <div className={embedFrameClass}>
        <video
          className="h-full w-full object-contain"
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
    <ProjectImage
      src={item.link}
      alt={item.alt}
      priority={priority}
      maxHeight={imageMaxHeight}
      bordered
    />
  );
}
