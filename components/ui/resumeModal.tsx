"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Download, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const RESUME_HREF = "/Matt_Smith_Resume.pdf";
const RESUME_FILENAME = "Matt_Smith_Resume.pdf";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex min-h-[100dvh] w-screen items-center justify-center bg-primary/95 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
      onClick={onClose}
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
        className="flex h-[min(90dvh,920px)] w-full max-w-4xl flex-col overflow-hidden border border-outline-variant bg-background"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-outline-variant px-4 py-3">
          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            className="group relative inline-flex items-center gap-2 overflow-hidden border border-primary bg-primary px-4 py-2 text-mono-meta text-on-primary transition-colors"
          >
            <span
              className="absolute inset-y-0 left-0 z-0 w-0 bg-background transition-all duration-300 ease-out group-hover:w-full"
              aria-hidden
            />
            <span className="relative z-10 flex items-center gap-2 transition-colors group-hover:text-foreground">
              <Download className="size-3.5" aria-hidden />
              Download
            </span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="border border-outline-variant p-2 text-foreground transition-colors hover:bg-surface-container"
            aria-label="Close resume"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        <iframe
          title="Matt Smith Resume"
          src={`${RESUME_HREF}#toolbar=0`}
          className="h-full w-full flex-1 bg-surface-container"
        />
      </motion.div>
    </div>,
    document.body
  );
}
