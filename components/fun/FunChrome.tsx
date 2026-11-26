import {
  HouseIcon,
  PlaneLeft,
  PlaneRight,
} from "@/components/fun/clipArt";
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
  "inline-flex items-center gap-1.5 font-['Times_New_Roman',Times,serif] text-[0.95rem] font-bold uppercase text-[#c060ff] underline hover:text-[#e090ff]";

const backBtnClass =
  "mt-1.5 inline-block cursor-pointer rounded-full border-0 bg-[linear-gradient(#9cf,#36c_45%,#06a_70%,#9cf)] px-[1.1rem] py-[0.35rem] font-['Arial_Black',Arial,sans-serif] text-[0.8rem] font-black tracking-[0.06em] text-white no-underline shadow-[inset_0_2px_0_rgba(255,255,255,0.55),2px_2px_0_#000] active:shadow-[inset_0_2px_4px_#000]";

export function FunChrome({ children }: { children: ReactNode }) {
  return (
    <FunScrollArea>
      <div className="relative min-h-full bg-black bg-[radial-gradient(#5a4cff_1px,transparent_1px),radial-gradient(#3a6aff_1px,transparent_1px)] bg-[length:52px_52px,37px_37px] bg-[position:0_0,18px_26px] px-2 pt-2 pb-8 font-['Times_New_Roman',Times,serif] text-[#ffff66] selection:bg-[#ffff66] selection:text-black">
        <div className="mx-auto mt-1 mb-3 w-max max-w-full border border-black bg-[#b8d4ff] px-[0.55rem] py-[0.2rem] text-center">
          <a
            href="/fun"
            className="font-[Arial,Helvetica,sans-serif] text-[0.7rem] font-bold text-[#0033cc] underline"
          >
            WE WILL PAY YOU $5 JUST FOR SIGNING UP! CLICK HERE NOW
          </a>
        </div>

        <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
          <PlaneLeft className="hidden shrink-0 [image-rendering:pixelated] sm:block" />
          <h1 className="m-0 text-center font-['Comic_Sans_MS','Comic_Sans',cursive] text-[clamp(1.6rem,5vw,2.4rem)] font-bold leading-[1.15] text-[#ffff66]">
            Matt Smith&apos;s Website
          </h1>
          <PlaneRight className="hidden shrink-0 [image-rendering:pixelated] sm:block" />
        </div>

        <div className="mx-auto grid max-w-[920px] grid-cols-1 items-start gap-3 min-[760px]:grid-cols-[140px_minmax(0,1fr)_110px] min-[760px]:gap-x-3 min-[760px]:gap-y-2">
          <nav className="flex flex-col items-start gap-[0.65rem] pt-1" aria-label="Site">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {"icon" in item && item.icon ? <HouseIcon /> : null}
                {item.label}
              </Link>
            ))}
            <Link href="/" className={backBtnClass}>
              BACK
            </Link>
          </nav>

          <main className="min-w-0 px-1">{children}</main>

          <aside
            className="flex flex-col items-center gap-8"
            aria-label="Sponsored"
          >
            <a
              href="/fun"
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
            href="/fun"
            className="flex w-full items-center gap-2 border-2 border-black bg-[#ffe566] px-2 py-1.5 font-[Arial,Helvetica,sans-serif] text-[0.8rem] font-bold text-[#c00] no-underline"
          >
            <span
              className="h-9 w-12 shrink-0 border border-black bg-[linear-gradient(135deg,#6a4_25%,transparent_25%)_-4px_0_/_12px_12px,linear-gradient(#8cf_0_55%,#3a3_55%)]"
              aria-hidden
            />
            <span>
              Dreaming of buying a home?
              <br />
              <u>Click here!!!!!</u>
            </span>
          </a>
          <a
            href="/fun"
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
