import { Mail, Github, Linkedin } from "lucide-react";
import { SectionLabel } from "@/components/ui/sectionLabel";
import projects from "@/data/projects.json";
import experience from "@/data/experience.json";
import { ProjectCard } from "@/components/ui/projectCard";
import { ExperienceCard } from "@/components/ui/experienceCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* About Section */}
      <section className="flex items-center px-6 py-8 md:px-12 lg:px-16 max-w-6xl mx-auto relative">
        <div className="w-full py-4">
            <SectionLabel index="001" label="About" />

            <div className="flex flex-col gap-6 flex-row items-center justify-left pb-6">
              <div className="shrink-0">
                <div className="relative h-32 w-32 rounded-2xl border border-border bg-card overflow-hidden">
                  <Image
                    src="/images/Profile.png"
                    alt="Portrait of Matt Smith"
                    fill
                    sizes="128px"
                    className="object-cover origin-center"
                  />
                </div>
              </div>

              <div className="h-32 flex flex-col">
                <h1 className="text-5xl font-bold leading-tight">
                  Matt
                </h1>
                <h1 className="text-5xl font-bold leading-tight">
                  Smith
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-3 pb-8 md:flex-row md:gap-6">
              <a
                href="https://github.com/MatthewHightech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/MatthewHightech</span>
              </a>

              <a
                href="https://www.linkedin.com/in/matthew-smith-softdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/matthew-smith-softdev</span>
              </a>
            </div>
            

            <div className="text-xl md:text-2xl mb-8 max-w-2xl">
              <p>Full Stack Software Engineer.</p>
              <p>Love leading teams and being led by others.</p>
            </div>

            <div className="max-w-2xl space-y-4 leading-relaxed">
              <div className="">
                <p className="m-0">I value ownership, accountability and trust.</p>
                <p className="m-0">I value measuring twice and cutting once.</p>
                <p className="m-0">I value failing fast.</p>
                <p className="m-0">I value calculated risks.</p>
                <p className="m-0">
                  I value simplicity as a default and complexity when necessary.
                </p>
                <p className="m-0">
                  I value questioning everything, knowing when to make a decision and
                  maintaining the ability to adapt.
                </p>
              </div>
              <p>
                I have a very board approach to engineering. I've determined that the more I can explore, the more data I have to inform my decisions and the easier it is to learn new things. My pursuit of guitar,{" "}
                <a
                  href="https://tovproductions.ca/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  cinematography
                </a>
                , surfing and woodworking have all helped me become a more effective engineer.
                I'm constantly learning how to learn.
              </p>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-12 lg:px-16 py-8 max-w-6xl mx-auto relative">
        <SectionLabel index="002" label="Projects" />

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-12 lg:px-16 py-8 max-w-6xl mx-auto relative">
        <SectionLabel index="003" label="Experience" />

        <div className="space-y-6">
          {experience.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-16 py-8 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-lg mb-4 leading-relaxed">
            Always happy to chat and looking to join a motivated software team in the Victoria area for October 2026!
          </p>

          <div className="space-y-4 mb-16">
            <a
              href="mailto:mattsmithwebdev@gmail.com"
              className="flex items-center gap-3 hover:text-accent transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span className="border-b border-border group-hover:border-accent">
                mattsmithwebdev@gmail.com
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
