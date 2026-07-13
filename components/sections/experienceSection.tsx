"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/sectionLabel";
import experience from "@/data/experience.json";

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="section-gap page-margin mx-auto max-w-7xl border-t border-outline-variant"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      >
        <SectionLabel section="SECTION_03" label="WORK EXPERIENCE" />

        <div className="space-y-16">
          {experience.map((item) => (
              <article key={item.id}>
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-headline-md">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-secondary"
                      >
                        {item.company}
                      </a>
                    </h3>
                    <p className="text-body-lg text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                  <p className="text-mono-meta shrink-0 text-muted-foreground">
                    {item.period.replace(/,/g, "").toUpperCase()}
                  </p>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-outline-variant px-2 py-1 text-mono-meta text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-body-lg leading-relaxed text-muted-foreground">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span
                        className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-muted-foreground"
                        aria-hidden
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
