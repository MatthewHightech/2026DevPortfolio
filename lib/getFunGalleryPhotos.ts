import {
  isFunGalleryPhotoFilename,
  type FunGalleryPhoto,
} from "@/data/funGallery";
import { readdir } from "fs/promises";
import path from "path";
import sharp from "sharp";

const FUN_IMAGES_DIR = path.join(process.cwd(), "public", "images", "fun");

/**
 * Reads every photo in /public/images/fun at request/build time.
 * GIFs (badges) are skipped; orientation comes from real pixel size.
 */
export async function getFunGalleryPhotos(): Promise<FunGalleryPhoto[]> {
  const entries = await readdir(FUN_IMAGES_DIR, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && isFunGalleryPhotoFilename(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

  const photos = await Promise.all(
    files.map(async (filename): Promise<FunGalleryPhoto> => {
      const filepath = path.join(FUN_IMAGES_DIR, filename);
      const { width = 1, height = 1 } = await sharp(filepath).metadata();
      return {
        src: `/images/fun/${encodeURIComponent(filename).replace(/%2F/gi, "/")}`,
        orientation: height > width ? "portrait" : "landscape",
      };
    }),
  );

  return photos;
}
