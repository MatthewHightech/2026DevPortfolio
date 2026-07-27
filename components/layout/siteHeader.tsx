"use client";

import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "#projects", label: "PROJECTS" },
  { href: "#experience", label: "WORK EXPERIENCE" },
  { href: "#contact", label: "CONTACT" },
] as const;

const socialClass =
  "text-foreground transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-background/85 backdrop-blur-sm">
      <div className="page-margin mx-auto flex h-14 max-w-7xl items-center justify-between gap-4">
        <Link
          href="#"
          className="text-mono-meta shrink-0 text-foreground transition-colors hover:text-secondary"
        >
          Matt Smith
        </Link>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-mono-meta text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-3 sm:hidden" aria-label="Main mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-mono-meta text-[0.625rem] text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://github.com/MatthewHightech"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
            aria-label="GitHub profile"
          >
            <Github className="size-4" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-smith-softdev/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
            aria-label="LinkedIn profile"
          >
            <Linkedin className="size-4" aria-hidden />
          </a>
          <a
            href="/Matt_Smith_Resume.pdf"
            download="Matt_Smith_Resume.pdf"
            className={`inline-flex items-center gap-1.5 text-mono-meta ${socialClass}`}
          >
            <Download className="size-3.5" aria-hidden />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
