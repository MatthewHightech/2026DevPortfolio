"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/sectionLabel";
import { ContactForm } from "@/components/ui/contactForm";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

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
        <SectionLabel section="SECTION_04" label="CONTACT" />

        <p className="mb-4 max-w-xl text-headline-md">
          Get in touch
        </p>
        <p className="mb-12 max-w-xl text-body-lg leading-relaxed text-muted-foreground">
          Always happy to chat. I&apos;m looking to join a motivated software
          team in the Victoria area for October 2026.
        </p>

        <ContactForm />
      </motion.div>
    </section>
  );
}
