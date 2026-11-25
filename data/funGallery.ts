export type FunGalleryPhoto = {
  src: string;
  /** Portrait photos display as 9:16; landscape as 3:2. */
  orientation: "portrait" | "landscape";
};

/** Thumbnails for the masonry grid — small but sharp enough. */
export const FUN_GALLERY_THUMB_SIZES = "(max-width: 760px) 48vw, 280px";
export const FUN_GALLERY_THUMB_QUALITY = 60;

/** Full-view lightbox images. */
export const FUN_GALLERY_LIGHTBOX_SIZES =
  "(max-width: 1024px) 95vw, min(1200px, 90vw)";
export const FUN_GALLERY_LIGHTBOX_QUALITY = 82;

const PHOTO_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

export function isFunGalleryPhotoFilename(filename: string): boolean {
  const ext = filename.slice(filename.lastIndexOf(".")).toLowerCase();
  return PHOTO_EXTENSIONS.has(ext);
}
