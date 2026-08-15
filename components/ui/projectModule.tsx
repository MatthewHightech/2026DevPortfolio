"use client";

import { useState } from "react";
import { Github, Globe, Maximize2 } from "lucide-react";
import type projects from "@/data/projects.json";
import { MediaSlide, type ProjectMediaItem } from "@/components/ui/mediaSlide";
import { ProjectImage } from "@/components/ui/projectImage";
import { ProjectMediaLightbox } from "@/components/ui/projectMediaLightbox";
import { ProjectMediaPrefetch } from "@/components/ui/projectMediaPrefetch";
import { TectonicButton } from "@/components/ui/tectonicButton";
import {
  type ImageDimensions,
  isPortraitImage,
} from "@/lib/imageOrientation";

type Project = (typeof projects)[number];

type ProjectModuleProps = {
  project: Project;
  index: number;
};

const HERO_IMAGE_MAX_HEIGHT = "min(50vh, 380px)";

function HeroMedia({
  item,
  onOpen,
}: {
  item: ProjectMediaItem;
  onOpen: () => void;
}) {
  const [dims, setDims] = useState<ImageDimensions | null>(null);
  const isYoutube = item.type === "youtube";
  const isPortrait = item.type === "image" && isPortraitImage(dims);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block h-full w-full cursor-pointer text-left"
      aria-label={`Open media gallery for ${item.alt}`}
    >
      {isYoutube ? (
        <div className="relative aspect-video w-full overflow-hidden border border-outline-variant">
          <div className="pointer-events-none h-full w-full">
            <MediaSlide
              item={item}
              priority={false}
              imageMaxHeight={HERO_IMAGE_MAX_HEIGHT}
            />
          </div>
          <span className="absolute right-3 top-3 flex items-center gap-1.5 border border-outline-variant bg-background/90 px-2 py-1 text-mono-meta text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 className="size-3" aria-hidden />
            VIEW ALL
          </span>
        </div>
      ) : item.type === "image" ? (
        <div className="flex w-full justify-center">
          <div className="relative inline-flex">
            <ProjectImage
              src={item.link}
              alt={item.alt}
              maxHeight={HERO_IMAGE_MAX_HEIGHT}
              maxWidth={isPortrait ? "220px" : undefined}
              bordered
              className="transition-transform duration-500 group-hover:scale-[1.01]"
              priority={false}
              onDimensionsLoad={setDims}
            />
            <span className="absolute right-3 top-3 flex items-center gap-1.5 border border-outline-variant bg-background/90 px-2 py-1 text-mono-meta text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <Maximize2 className="size-3" aria-hidden />
              VIEW ALL
            </span>
          </div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden border border-outline-variant">
          <MediaSlide item={item} imageMaxHeight={HERO_IMAGE_MAX_HEIGHT} />
          <span className="absolute right-3 top-3 flex items-center gap-1.5 border border-outline-variant bg-background/90 px-2 py-1 text-mono-meta text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 className="size-3" aria-hidden />
            VIEW ALL
          </span>
        </div>
      )}
    </button>
  );
}

export function ProjectModule({ project, index }: ProjectModuleProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [warmGallery, setWarmGallery] = useState(false);
  const media = (project.media ?? []) as ProjectMediaItem[];
  const heroMedia = media[0];
  const reversed = index % 2 === 1;

  const textBlock = (
    <div className="flex flex-col justify-center">
      <h3 className="text-headline-md mb-3">{project.title}</h3>

      <ul className="mb-4 space-y-2 text-body-lg leading-snug text-muted-foreground">
        {project.description.map((point) => (
          <li key={point} className="flex gap-3">
            <span
              className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-muted-foreground"
              aria-hidden
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="text-mono-meta mb-4 text-muted-foreground">
        {project.techStack.join(" · ")}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.githubUrl && (
          <TectonicButton href={project.githubUrl} external variant="primary">
            <Github className="size-3.5" aria-hidden />
            GitHub
          </TectonicButton>
        )}
        {project.liveUrl && (
          <TectonicButton
            href={project.liveUrl.link}
            external
            variant="primary"
            ariaLabel={project.liveUrl.text}
          >
            <Globe className="size-3.5" aria-hidden />
            {project.liveUrl.text}
          </TectonicButton>
        )}
      </div>
    </div>
  );

  const mediaBlock = heroMedia ? (
    <div
      onMouseEnter={() => setWarmGallery(true)}
      onFocusCapture={() => setWarmGallery(true)}
    >
      <HeroMedia item={heroMedia} onOpen={() => setLightboxOpen(true)} />
    </div>
  ) : null;

  return (
    <>
      <article className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
        {(warmGallery || lightboxOpen) && <ProjectMediaPrefetch media={media} />}
        {reversed ? (
          <>
            {mediaBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {mediaBlock}
          </>
        )}
      </article>

      {media.length > 0 && (
        <ProjectMediaLightbox
          media={media}
          initialIndex={0}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
