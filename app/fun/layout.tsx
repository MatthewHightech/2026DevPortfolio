import { FunChrome } from "@/components/fun/FunChrome";
import { FunModeDocument } from "@/components/fun/FunModeDocument";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Matt Smith's Website — Fun Version",
  description: "The fun version of Matt Smith's homepage.",
};

export default function FunLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <FunModeDocument />
      <FunChrome>{children}</FunChrome>
    </>
  );
}
