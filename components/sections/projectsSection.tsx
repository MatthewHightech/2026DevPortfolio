"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectModule } from "@/components/ui/projectModule";
import projects from "@/data/projects.json";

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="section-gap page-margin mx-auto max-w-7xl border-t border-outline-variant"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      >
        <div className="space-y-14">
          {projects.map((project) => (
            <ProjectModule key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
