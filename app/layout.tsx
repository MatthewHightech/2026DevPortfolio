import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Hanken_Grotesk, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  preload: true,
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  preload: false,
  adjustFontFallback: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mattsmith.sh"),
  title: "Matt Smith — Software Engineer Portfolio",
  description:
    "Software engineer generalist portfolio — projects, experience, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} bg-background text-foreground antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
