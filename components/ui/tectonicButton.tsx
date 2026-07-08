import Link from "next/link";
import type { ReactNode } from "react";

const baseClass =
  "group relative inline-flex items-center gap-2 overflow-hidden border border-outline px-4 py-2 text-mono-meta text-foreground transition-colors";

type TectonicButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function TectonicButton({
  href,
  children,
  external = false,
  variant = "ghost",
  className = "",
  ariaLabel,
}: TectonicButtonProps) {
  const fillClass =
    variant === "primary"
      ? "bg-primary group-hover:w-full"
      : "bg-primary group-hover:w-full";

  const content = (
    <>
      <span
        className={`absolute inset-y-0 left-0 z-0 w-0 ${fillClass} transition-all duration-300 ease-out`}
        aria-hidden
      />
      <span className="relative z-10 flex items-center gap-2 transition-colors group-hover:text-on-primary">
        {children}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
