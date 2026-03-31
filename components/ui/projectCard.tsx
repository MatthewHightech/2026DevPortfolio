import Image from "next/image";
import { Github, Globe } from "lucide-react";
import type projects from "@/data/projects.json";
import {
  ProjectMediaCarousel,
  type ProjectMediaItem,
} from "@/components/ui/projectMediaCarousel";

type Project = (typeof projects)[number];

const linkButtonClass =
  "inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-muted hover:text-accent hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card";

const appStoreLinkClass =
  "inline-flex cursor-pointer items-center rounded-md border border-border bg-card p-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="border border-border p-6 bg-card transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl md:text-2xl">{project.title}</h3>
          </div>
          {project.subtitle && (
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          )}
        </div>
      </div>

      {project.media && project.media.length > 0 && (
        <ProjectMediaCarousel
          key={project.id}
          media={project.media as ProjectMediaItem[]}
        />
      )}

      <p className="mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-1 border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
          >
            <Github className="size-4 shrink-0" aria-hidden />
            <span>GitHub</span>
          </a>
        )}
        {project.liveUrl &&
          (project.id.includes("ios-app") ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store (opens in new tab)"
            >
              <Image
                src="/images/ios.svg"
                alt=""
                width={90}
                height={30}
                className="h-9 w-auto"
              />
            </a>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkButtonClass}
            >
              <Globe className="size-4 shrink-0" aria-hidden />
              <span>Team Website</span>
            </a>
          ))}
      </div>
    </article>
  );
}

