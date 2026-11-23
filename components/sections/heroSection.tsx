import { values } from "@/data/values";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="page-margin mx-auto flex max-w-7xl flex-col items-center pt-12 pb-10 text-center md:pt-16 md:pb-12"
    >
      <p className="hero-rise mb-8 max-w-xl text-body-lg leading-relaxed text-muted-foreground">
        My name is Matt Smith. <br />
        I&apos;m a software engineer along with other things.
        <br />
        Here&apos;s a little about how I operate:
      </p>

      <div className="inline-flex w-full max-w-2xl flex-col text-left">
        <p
          className="hero-rise text-values mb-2.5 text-foreground"
          style={{ animationDelay: "60ms" }}
        >
          I value
        </p>

        <ul className="flex flex-col space-y-2.5">
          {values.map((value, index) => (
            <li
              key={value}
              className="hero-rise text-values flex gap-2.5 text-foreground"
              style={{ animationDelay: `${120 + index * 60}ms` }}
            >
              <span
                className="mt-[0.05em] shrink-0 font-bold text-secondary"
                aria-hidden
              >
                »
              </span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
