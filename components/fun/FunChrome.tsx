import { FunScrollArea } from "@/components/fun/FunScrollArea";
import Link from "next/link";
import type { ReactNode } from "react";

const NAV = [
  { href: "/fun", label: "HOME PAGE", icon: true },
  { href: "/fun/fun-facts", label: "FUN FACTS" },
  { href: "/fun/gallery", label: "GALLERY" },
  { href: "/fun/secret-code", label: "SECRET CODE" },
] as const;

const navLinkClass =
  "font-comic inline-flex items-center gap-1.5 text-[1.1rem] font-bold uppercase text-[#c060ff] underline hover:text-[#e090ff]";

const backBtnClass =
  "inline-block cursor-pointer rounded-full border-0 bg-[linear-gradient(#9cf,#36c_45%,#06a_70%,#9cf)] px-[1.1rem] py-[0.35rem] font-['Arial_Black',Arial,sans-serif] text-[0.8rem] font-black tracking-[0.06em] text-white no-underline shadow-[inset_0_2px_0_rgba(255,255,255,0.55),2px_2px_0_#000] active:shadow-[inset_0_2px_4px_#000]";

export function FunChrome({ children }: { children: ReactNode }) {
  return (
    <FunScrollArea>
      <div className="relative min-h-full bg-black bg-[radial-gradient(rgba(255,255,255,0.35)_0.8px,transparent_0.8px),radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.15)_1.2px,transparent_1.2px),radial-gradient(rgba(255,255,255,0.28)_0.6px,transparent_0.6px)] bg-[length:97px_73px,61px_113px,143px_89px,53px_67px] bg-[position:12px_7px,41px_29px,3px_52px,28px_11px] px-2 pt-2 pb-8 font-['Times_New_Roman',Times,serif] text-[#ffff66] selection:bg-[#ffff66] selection:text-black">
        <div className="mb-2 flex justify-end px-2 pt-1 md:absolute md:top-4 md:right-12 md:z-40 md:mb-0 md:px-0 md:pt-0">
          <Link href="/" className={backBtnClass}>
            BACK
          </Link>
        </div>

        <h1 className="font-comic mb-3 mt-0 text-center text-[clamp(1.6rem,5vw,2.4rem)] font-bold leading-[1.15] text-[#ffff66] pt-1">
          Matt Smith&apos;s Website
        </h1>

        <div className="mx-auto grid max-w-[920px] grid-cols-1 items-start gap-3 min-[760px]:grid-cols-[160px_minmax(0,1fr)_110px] min-[760px]:gap-x-3 min-[760px]:gap-y-2">
          <nav
            className="mx-auto grid w-fit grid-cols-2 justify-items-center gap-x-6 gap-y-[0.75rem] pt-1 min-[760px]:mx-0 min-[760px]:flex min-[760px]:w-auto min-[760px]:grid-cols-none min-[760px]:flex-col min-[760px]:items-start min-[760px]:justify-items-start min-[760px]:gap-x-0"
            aria-label="Site"
          >
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {"icon" in item && item.icon ? (
                  // Plain <img> keeps GIF animation.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/images/fun/house02.gif"
                    alt=""
                    width={22}
                    height={20}
                    className="h-5 w-auto shrink-0 [image-rendering:pixelated]"
                    aria-hidden
                  />
                ) : null}
                {item.label}
              </Link>
            ))}
          </nav>

          <main className="min-w-0 px-1">{children}</main>

          <aside
            className="flex flex-row items-center justify-center gap-6 min-[760px]:flex-col min-[760px]:gap-8"
            aria-label="Sponsored"
          >
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-[100px] flex-col items-center gap-1.5 border border-[#36c] bg-[#9cf] px-1.5 pt-2 pb-3 text-center font-[Arial,Helvetica,sans-serif] text-[0.7rem] font-bold leading-[1.25] text-[#003] no-underline"
            >
              <strong className="text-[0.8rem] text-[#06c]">CLICK HERE</strong>
              <span>To Create your own Music CD&apos;s</span>
              <span className="text-[1.1rem] text-[#06c]" aria-hidden>
                ↓
              </span>
              <span
                className="grid size-[52px] place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff,#bbb_40%,#666_70%,#222)] text-[1.4rem] text-[#0ff] shadow-[0_0_8px_#0ff]"
                aria-hidden
              >
                ◉
              </span>
            </a>
            {/* Plain <img> keeps GIF animation. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/fun/mcspin2.gif"
              alt="Made with Mac"
              width={64}
              height={80}
              className="h-auto w-auto [image-rendering:pixelated]"
            />
          </aside>
        </div>

        <div className="mx-auto mt-5 flex max-w-[420px] flex-col items-center gap-[0.55rem]">
          <a
            href="https://evelazarus.com/five-eccentric-b-c-houses/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-2 border-2 border-black bg-[#ffe566] px-2 py-1.5 font-[Arial,Helvetica,sans-serif] text-[0.8rem] font-bold text-[#c00] no-underline"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/fun/dreamhome.webp"
              alt=""
              width={48}
              height={36}
              className="h-9 w-12 shrink-0 border border-black object-cover"
              aria-hidden
            />
            <span>
              Dreaming of buying a home?
              <br />
              <u>Click here!!!!!</u>
            </span>
          </a>
          <a
            href="mailto:mattsmithwebdev@gmail.com"
            className="inline-block border-[3px] border-[#cfc] bg-[#9d9] px-5 py-[0.45rem] font-['Times_New_Roman',Times,serif] text-base font-bold text-[#c00] no-underline [border-style:outset] [text-shadow:1px_1px_0_#fff]"
          >
            Click here to enter our chat room
          </a>
        </div>

        <footer className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2 pb-2 text-[0.9rem] text-[#ffff66]">
          <span>This page is hosted by</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/fun/gc.gif"
            alt="GeoCities"
            width={88}
            height={31}
            className="h-auto w-auto [image-rendering:pixelated]"
          />
        </footer>
      </div>
    </FunScrollArea>
  );
}
