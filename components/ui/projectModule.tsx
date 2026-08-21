"use client";

import { useState } from "react";
import { Github, Globe } from "lucide-react";
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
};

const HERO_IMAGE_MAX_HEIGHT = "min(50vh, 420px)";

function HeroMedia({
  item,
  title,
  onOpen,
}: {
  item: ProjectMediaItem;
  title: string;
  onOpen: () => void;
}) {
  const [dims, setDims] = useState<ImageDimensions | null>(null);
  const isYoutube = item.type === "youtube";
  const isPortrait = item.type === "image" && isPortraitImage(dims);

  const overlay = (
    <span
      className="absolute inset-0 z-10 flex items-center justify-center bg-primary/70 px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      aria-hidden
    >
      <span className="text-headline-md text-center text-on-primary">{title}</span>
    </span>
  );

  return (
    <button
      type="button"
      onClick={onOpen}
      className={
        isYoutube || item.type === "video"
          ? "group relative block w-full cursor-pointer text-left"
          : "group relative mx-auto block w-fit max-w-full cursor-pointer text-left"
      }
      aria-label={`Open gallery for ${title}`}
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
          {overlay}
        </div>
      ) : item.type === "image" ? (
        <div className="relative inline-flex max-w-full leading-none">
          <ProjectImage
            src={item.link}
            alt={item.alt}
            maxHeight={HERO_IMAGE_MAX_HEIGHT}
            maxWidth={isPortrait ? "240px" : undefined}
            bordered
            priority={false}
            onDimensionsLoad={setDims}
          />
          {overlay}
        </div>
      ) : (
        <div className="relative w-full overflow-hidden border border-outline-variant">
          <MediaSlide item={item} imageMaxHeight={HERO_IMAGE_MAX_HEIGHT} />
          {overlay}
        </div>
      )}
    </button>
  );
}

export function ProjectModule({ project }: ProjectModuleProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [warmGallery, setWarmGallery] = useState(false);
  const media = (project.media ?? []) as ProjectMediaItem[];
  const heroMedia = media[0];

  if (!heroMedia) return null;

  return (
    <>
      <article className="relative mx-auto w-full max-w-3xl">
        {(warmGallery || lightboxOpen) && <ProjectMediaPrefetch media={media} />}

        <div
          onMouseEnter={() => setWarmGallery(true)}
          onFocusCapture={() => setWarmGallery(true)}
        >
          <HeroMedia
            item={heroMedia}
            title={project.title}
            onOpen={() => setLightboxOpen(true)}
          />
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
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
        )}
      </article>

      <ProjectMediaLightbox
        media={media}
        title={project.title}
        techStack={project.techStack}
        description={project.description}
        initialIndex={0}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
