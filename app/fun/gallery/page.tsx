import { GallerySection } from "@/components/fun/sections/GallerySection";
import { getFunGalleryPhotos } from "@/lib/getFunGalleryPhotos";

/** Re-read /public/images/fun on each request so new drops show up. */
export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const photos = await getFunGalleryPhotos();
  return <GallerySection photos={photos} />;
}
