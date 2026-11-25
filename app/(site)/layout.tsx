import { SiteFooter } from "@/components/layout/siteFooter";
import { ContactSection } from "@/components/sections/contactSection";
import { HeroSection } from "@/components/sections/heroSection";
import { ProjectsSection } from "@/components/sections/projectsSection";
import Link from "next/link";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative">
        <div className="absolute top-4 right-6 z-40 md:right-12">
          <Link
            href="/fun"
            className="font-sans text-sm text-muted-foreground underline underline-offset-[0.15em] opacity-70 hover:text-foreground hover:opacity-100"
          >
            fun version
          </Link>
        </div>
        <main>
          <HeroSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
      {children}
    </>
  );
}
