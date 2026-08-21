"use client";

import { motion, useReducedMotion } from "framer-motion";
import { values } from "@/data/values";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="page-margin mx-auto flex max-w-7xl flex-col items-center pt-12 pb-10 text-center md:pt-16 md:pb-12"
    >
      <motion.p
        className="mb-8 max-w-xl text-body-lg leading-relaxed text-muted-foreground"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        My name is Matt Smith. <br />I&apos;m an engineer along with other things.<br />
        Here&apos;s a little about how I operate.
      </motion.p>

      <ul className="inline-flex w-full max-w-2xl flex-col space-y-2.5 text-left">
        {values.map((value, index) => (
          <motion.li
            key={value}
            className="text-values flex gap-2.5 text-foreground"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: prefersReducedMotion ? 0 : 0.06 * index,
            }}
          >
            <span
              className="mt-[0.05em] shrink-0 font-bold text-secondary"
              aria-hidden
            >
              »
            </span>
            <span>{value}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
