"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/sectionLabel";
import { ValuesList } from "@/components/ui/valuesList";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="section-gap page-margin mx-auto max-w-7xl">
      <SectionLabel section="SECTION_01" label="ABOUT" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <motion.div
          className="lg:col-span-4 lg:col-start-1"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden bg-surface-container">
              <Image
                src="/images/Profile.png"
                alt="Portrait of Matt Smith"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 280px, 320px"
                className="object-cover object-center"
              />
          </div>
        </motion.div>

        <div className="lg:col-span-8 lg:col-start-5">
          <motion.h1
            className="text-display-lg mb-3 max-w-3xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.1,
            }}
          >
            Matt Smith
          </motion.h1>

          <motion.p
            className="text-headline-md mb-2 text-muted-foreground"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              delay: prefersReducedMotion ? 0 : 0.12,
            }}
          >
            Software Generalist
          </motion.p>

          <motion.p
            className="text-mono-meta mb-12 text-muted-foreground"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              delay: prefersReducedMotion ? 0 : 0.14,
            }}
          >
            UVic Software Engineering Grad 2026
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: prefersReducedMotion ? 0 : 0.15,
            }}
          >
            <ValuesList />
          </motion.div>

          <motion.div
            className="mt-12 max-w-2xl space-y-4 text-body-lg leading-relaxed text-muted-foreground"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.4,
            }}
          >
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
              I'm in the pursuit of building tools that people genuinely love using, and deliver value to communities through education, safety, organization, and improved health.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
