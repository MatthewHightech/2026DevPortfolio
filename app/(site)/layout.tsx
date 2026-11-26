import { SiteFooter } from "@/components/layout/siteFooter";
import { ContactSection } from "@/components/sections/contactSection";
import { HeroSection } from "@/components/sections/heroSection";
import { ProjectsSection } from "@/components/sections/projectsSection";
import Link from "next/link";

const funVersionLinkClass =
  "font-sans text-sm text-muted-foreground underline underline-offset-[0.15em] opacity-70 hover:text-foreground hover:opacity-100";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative">
        <div className="absolute top-4 right-6 z-40 hidden md:right-12 md:block">
          <Link href="/fun" className={funVersionLinkClass}>
            fun version
          </Link>
        </div>
        <main>
          <HeroSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <div className="page-margin mx-auto max-w-7xl pb-2 md:hidden">
          <Link href="/fun" className={funVersionLinkClass}>
            fun version
          </Link>
        </div>
        <SiteFooter />
      </div>
      {children}
    </>
  );
}
