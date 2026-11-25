import { CameraIcon } from "@/components/fun/clipArt";
import Link from "next/link";

const bodyClass =
  "mx-auto mb-[0.65rem] max-w-[34rem] text-center text-[1.25rem] leading-[1.45] text-[#ffff66] [&_a]:text-[#c060ff] [&_a]:underline hover:[&_a]:text-[#e090ff]";

export function FunIntroSection() {
  return (
    <section className="scroll-mt-2 py-1.5">
      <h2 className="mb-[0.65rem] flex flex-wrap items-center justify-center gap-[0.45rem] text-center font-['Comic_Sans_MS','Comic_Sans',cursive] text-[clamp(1.15rem,3vw,1.5rem)] font-bold text-white">
        <CameraIcon />
        <span>Welcome to my Homepage</span>
        <CameraIcon />
      </h2>
      <p className={bodyClass}>
        This is where I put all the less-polished fun stuff that
        doesn't feel professional enough for my portfolio.<br /><br /> If you don't have fun, please tell me so I can change that.
        <br /><br />
        Dig around, find some easter eggs, learn about my interests, some comedic failures, and I hope it gives
        you a better sense of who Matt Smith is.
      </p>
      <p className="mt-3 text-center text-[1.0rem] text-[#ffff66]">
        Thanks for visiting my home, please email me at <a href="mailto:mattsmithwebdev@gmail.com" className="text-blue-500 hover:underline">mattsmithwebdev@gmail.com</a> about anything that caught your interest (also accepting jokes, only if they're funny).
      </p>
    </section>
  );
}
