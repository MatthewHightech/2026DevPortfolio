"use client";

import Image from "next/image";
import type { ProjectMediaItem } from "@/components/ui/mediaSlide";
import { PROJECT_IMAGE_SIZES } from "@/components/ui/projectImage";

type ProjectMediaPrefetchProps = {
  media: ProjectMediaItem[];
};

/**
 * Warms the Next.js image cache for gallery images so the lightbox
 * can navigate without waiting on cold downloads.
 */
export function ProjectMediaPrefetch({ media }: ProjectMediaPrefetchProps) {
  const images = media.filter((item) => item.type === "image");
  if (images.length === 0) return null;

  return (
    <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
      {images.map((item) => (
        <Image
          key={item.link}
          src={item.link}
          alt=""
          width={1200}
          height={900}
          sizes={PROJECT_IMAGE_SIZES}
          loading="eager"
          fetchPriority="low"
        />
      ))}
    </div>
  );
}
