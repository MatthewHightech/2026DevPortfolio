"use client";

import Image from "next/image";
import { useState } from "react";

/** Shared with lightbox so prefetch and display hit the same optimized URLs. */
export const PROJECT_IMAGE_SIZES = "(max-width: 1024px) 100vw, 896px";

type ProjectImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  /** CSS max-height value, e.g. `min(85dvh, 720px)` */
  maxHeight?: string;
  maxWidth?: string;
  bordered?: boolean;
  className?: string;
  onDimensionsLoad?: (dims: { width: number; height: number }) => void;
};

export function ProjectImage({
  src,
  alt,
  priority = false,
  loading,
  maxHeight = "min(85dvh, 720px)",
  maxWidth,
  bordered = false,
  className = "",
  onDimensionsLoad,
}: ProjectImageProps) {
  const [dims, setDims] = useState<{ width: number; height: number } | null>(
    null
  );

  return (
    <div
      className={`inline-flex max-w-full ${className}`}
      style={{ maxHeight, maxWidth }}
    >
      <Image
        src={src}
        alt={alt}
        width={dims?.width ?? 1200}
        height={dims?.height ?? 900}
        priority={priority}
        loading={priority ? undefined : loading}
        sizes={PROJECT_IMAGE_SIZES}
        className={`block h-auto w-auto max-w-full object-contain ${
          bordered ? "border border-outline-variant" : ""
        }`}
        style={{ maxHeight, maxWidth }}
        onLoad={(e) => {
          const img = e.currentTarget;
          const next = {
            width: img.naturalWidth,
            height: img.naturalHeight,
          };
          setDims(next);
          onDimensionsLoad?.(next);
        }}
      />
    </div>
  );
}
