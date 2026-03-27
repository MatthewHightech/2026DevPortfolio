import { ExternalLink } from "lucide-react";
import experience from "@/data/experience.json";

type Experience = (typeof experience)[number];

interface ExperienceCardProps {
  item: Experience;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="border border-border p-6 bg-card transition-colors">
      <div className="mb-4">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="text-xl">{item.company}</h3>
          {"link" in item && item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 text-muted-foreground transition-colors hover:text-accent"
              aria-label={`${item.company} — opens in new tab`}
            >
              <ExternalLink className="size-4" aria-hidden />
            </a>
          ) : null}
        </div>
        <p className="text-muted-foreground">{item.role}</p>
        <p className="font-mono text-xs text-muted-foreground mt-1">
          {item.period}
        </p>
      </div>

      {"skills" in item && item.skills.length > 0 ? (
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-2 py-1 border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <ul className="space-y-2">
        {item.achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3">
            <span className="text-muted-foreground">→</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

