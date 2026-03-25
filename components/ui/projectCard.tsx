import Image from "next/image";
import type projects from "@/data/projects.json";

type Project = (typeof projects)[number];

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
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl md:text-2xl">{project.title}</h3>
          </div>
          {project.subtitle && (
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          )}
        </div>
      </div>

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

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <span>GitHub</span>
          </a>
        )}
        {project.liveUrl &&
          (project.id.includes("ios-app") ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/ios.svg"
                alt="Download on the App Store"
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
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <span>Team Website</span>
            </a>
          ))}
      </div>
    </article>
  );
}

