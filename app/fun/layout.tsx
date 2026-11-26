import { FunChrome } from "@/components/fun/FunChrome";
import { FunModeDocument } from "@/components/fun/FunModeDocument";
import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import type { ReactNode } from "react";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Matt Smith's Website — Fun Version",
  description: "The fun version of Matt Smith's homepage.",
};

export default function FunLayout({ children }: { children: ReactNode }) {
  return (
    <div className={comicNeue.variable}>
      <FunModeDocument />
      <FunChrome>{children}</FunChrome>
    </div>
  );
}
