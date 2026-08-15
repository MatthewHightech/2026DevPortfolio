"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ResumeModal } from "@/components/ui/resumeModal";

const EMAIL = "mattsmithwebdev@gmail.com";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="contact"
      className="section-gap page-margin mx-auto max-w-7xl border-t border-outline-variant"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      >
        <p className="mb-8 max-w-xl text-body-lg leading-relaxed text-muted-foreground">
          Always happy to chat. I&apos;m looking to join a motivated software
          team in the Victoria area for October 2026.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="text-body-lg text-foreground underline decoration-outline-variant underline-offset-4 transition-colors hover:text-secondary hover:decoration-secondary"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden border border-primary bg-primary px-5 py-2.5 text-mono-meta text-on-primary transition-colors"
          >
            <span
              className="absolute inset-y-0 left-0 z-0 w-0 bg-background transition-all duration-300 ease-out group-hover:w-full"
              aria-hidden
            />
            <span className="relative z-10 transition-colors group-hover:text-foreground">
              View Resume
            </span>
          </button>
        </div>
      </motion.div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
