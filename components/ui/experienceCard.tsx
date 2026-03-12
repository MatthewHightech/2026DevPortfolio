import experience from "@/data/experience.json";

type Experience = (typeof experience)[number];

interface ExperienceCardProps {
  item: Experience;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="border-l-2 border-accent p-6 bg-card transition-colors">
      <div className="mb-4">
        <h3 className="text-xl mb-1">{item.company}</h3>
        <p className="text-muted-foreground">{item.role}</p>
        <p className="font-mono text-xs text-muted-foreground mt-1">
          {item.period}
        </p>
      </div>

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

