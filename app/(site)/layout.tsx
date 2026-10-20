import { SiteFooter } from "@/components/layout/siteFooter";
import { HeroSection } from "@/components/sections/heroSection";
import { ProjectsSection } from "@/components/sections/projectsSection";
import { ContactSection } from "@/components/sections/contactSection";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      {children}
    </>
  );
}
