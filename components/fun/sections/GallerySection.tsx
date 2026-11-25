"use client";

import {
  FUN_GALLERY_LIGHTBOX_QUALITY,
  FUN_GALLERY_LIGHTBOX_SIZES,
  FUN_GALLERY_THUMB_QUALITY,
  FUN_GALLERY_THUMB_SIZES,
  type FunGalleryPhoto,
} from "@/data/funGallery";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";

function FunGalleryLightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: FunGalleryPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, onPrev, onNext]);

  if (!mounted || !photo) return null;

  const stop = (e: MouseEvent) => e.stopPropagation();

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-3"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
        onClick={onClose}
      >
        <X className="size-5" />
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        disabled={index === 0}
        className="absolute left-2 z-10 rounded-full bg-black/60 p-2 text-white disabled:opacity-30 hover:enabled:bg-black/80 sm:left-4"
        onClick={(e) => {
          stop(e);
          onPrev();
        }}
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        type="button"
        aria-label="Next photo"
        disabled={index === photos.length - 1}
        className="absolute right-2 z-10 rounded-full bg-black/60 p-2 text-white disabled:opacity-30 hover:enabled:bg-black/80 sm:right-4"
        onClick={(e) => {
          stop(e);
          onNext();
        }}
      >
        <ChevronRight className="size-6" />
      </button>

      <div
        className="relative h-[min(90dvh,900px)] w-[min(95vw,1200px)]"
        onClick={stop}
      >
        <Image
          src={photo.src}
          alt=""
          fill
          priority
          quality={FUN_GALLERY_LIGHTBOX_QUALITY}
          sizes={FUN_GALLERY_LIGHTBOX_SIZES}
          className="object-contain"
        />
      </div>

      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        {photos.map((item, i) => {
          if (Math.abs(i - index) > 2 || i === index) return null;
          return (
            <Image
              key={item.src}
              src={item.src}
              alt=""
              width={1200}
              height={900}
              sizes={FUN_GALLERY_LIGHTBOX_SIZES}
              quality={FUN_GALLERY_LIGHTBOX_QUALITY}
              loading="eager"
              fetchPriority="low"
            />
          );
        })}
      </div>
    </div>,
    document.body,
  );
}

export function GallerySection({ photos }: { photos: FunGalleryPhoto[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : Math.max(0, i - 1))),
    [],
  );
  const goNext = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : Math.min(photos.length - 1, i + 1),
      ),
    [photos.length],
  );

  return (
    <section className="scroll-mt-2 py-1.5">
      <h2 className="mb-3 text-center font-['Comic_Sans_MS','Comic_Sans',cursive] text-[1.6rem] font-bold text-[#ffff66]">
        Gallery
      </h2>

      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        {photos.slice(0, 6).map((photo) => (
          <Image
            key={`prefetch-${photo.src}`}
            src={photo.src}
            alt=""
            width={1200}
            height={900}
            sizes={FUN_GALLERY_LIGHTBOX_SIZES}
            quality={FUN_GALLERY_LIGHTBOX_QUALITY}
            loading="eager"
            fetchPriority="low"
          />
        ))}
      </div>

      <div className="columns-2 gap-1">
        {photos.map((photo, index) => {
          const aspect =
            photo.orientation === "portrait" ? "aspect-[9/16]" : "aspect-[3/2]";
          return (
            <button
              key={photo.src}
              type="button"
              aria-label={`Open photo ${index + 1}`}
              className="mb-1 block w-full break-inside-avoid overflow-hidden p-0"
              onClick={() => setLightboxIndex(index)}
            >
              <span className={`relative block w-full ${aspect}`}>
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes={FUN_GALLERY_THUMB_SIZES}
                  quality={FUN_GALLERY_THUMB_QUALITY}
                  // First row+ of the masonry grid is above the fold / LCP-prone.
                  priority={index < 8}
                  loading={index < 8 ? "eager" : "lazy"}
                  className="object-cover"
                />
              </span>
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null ? (
        <FunGalleryLightbox
          photos={photos}
          index={lightboxIndex}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}
    </section>
  );
}
