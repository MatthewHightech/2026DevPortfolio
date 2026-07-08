"use client";

import { useState } from "react";
import { Github, Globe, Maximize2 } from "lucide-react";
import type projects from "@/data/projects.json";
import { MediaSlide, type ProjectMediaItem } from "@/components/ui/mediaSlide";
import { ProjectImage } from "@/components/ui/projectImage";
import { ProjectMediaLightbox } from "@/components/ui/projectMediaLightbox";
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

const HERO_IMAGE_MAX_HEIGHT = "min(70vh, 560px)";

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
              maxWidth={isPortrait ? "300px" : undefined}
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
  const media = (project.media ?? []) as ProjectMediaItem[];
  const heroMedia = media[0];
  const reversed = index % 2 === 1;

  const textBlock = (
    <div className="flex flex-col justify-center">
      <h3 className="text-headline-md mb-2">{project.title}</h3>
      {project.subtitle && (
        <p className="text-mono-meta mb-4 text-secondary">{project.subtitle}</p>
      )}
      <p className="mb-6 text-body-lg leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="border border-outline-variant px-2 py-1 text-mono-meta text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.githubUrl && (
          <TectonicButton href={project.githubUrl} external>
            <Github className="size-3.5" aria-hidden />
            GitHub
          </TectonicButton>
        )}
        {project.liveUrl &&
          (project.id.includes("ios-app") ? (
            <TectonicButton
              href={project.liveUrl}
              external
              ariaLabel="Download on the App Store"
            >
              App Store
            </TectonicButton>
          ) : (
            <TectonicButton href={project.liveUrl} external>
              <Globe className="size-3.5" aria-hidden />
              Team Website
            </TectonicButton>
          ))}
      </div>
    </div>
  );

  const mediaBlock = heroMedia ? (
    <HeroMedia item={heroMedia} onOpen={() => setLightboxOpen(true)} />
  ) : null;

  return (
    <>
      <article className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
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
