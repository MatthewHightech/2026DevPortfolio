"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { ResumeModal } from "@/components/ui/resumeModal";

const EMAIL = "mattsmithwebdev@gmail.com";

const socialClass =
  "text-foreground transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary";

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
        className="max-w-5xl"
      >
        <h2 className="text-display-lg mb-3">Matt Smith</h2>

        <p className="text-headline-md mb-2 text-muted-foreground">
          Software Engineer (BSEng)
        </p>

        <div className="mb-10 flex items-center gap-3">
          <a
            href="https://github.com/MatthewHightech"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
            aria-label="GitHub profile"
          >
            <Github className="size-5" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-smith-softdev/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
            aria-label="LinkedIn profile"
          >
            <Linkedin className="size-5" aria-hidden />
          </a>
        </div>

        <div className="mb-10 space-y-4 text-body-lg leading-relaxed text-muted-foreground">
          <p>
            I have a very broad approach to engineering. I&apos;ve determined
            that the more I can explore, the more data I have to inform my
            decisions and the easier it is to learn new things. My pursuit of
            guitar,{" "}
            <a
              href="https://tovproductions.ca/video"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-outline-variant underline-offset-4 transition-colors hover:text-secondary hover:decoration-secondary"
            >
              cinematography
            </a>
            , surfing and woodworking have all helped me become a more
            effective engineer. I&apos;m constantly learning how to learn.
          </p>
          <p>
            I&apos;m in the pursuit of building tools that people genuinely
            love using and delivering value to communities through
            organization, education, public safety, and healthcare.
          </p>
        </div>

        <p className="mb-8 text-body-lg leading-relaxed text-muted-foreground">
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
