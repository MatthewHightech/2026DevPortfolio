import { SiteHeader } from "@/components/layout/siteHeader";
import { SiteFooter } from "@/components/layout/siteFooter";
import { HeroSection } from "@/components/sections/heroSection";
import { ProjectsSection } from "@/components/sections/projectsSection";
import { ExperienceSection } from "@/components/sections/experienceSection";
import { ContactSection } from "@/components/sections/contactSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
