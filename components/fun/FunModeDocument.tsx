"use client";

import { useEffect } from "react";

/** Fun-site document chrome: lock page scroll so the retro scroller owns it. */
export function FunModeDocument() {
  useEffect(() => {
    const { documentElement, body } = document;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyBg = body.style.backgroundColor;

    documentElement.classList.add("fun-site");
    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.backgroundColor = "#000";

    return () => {
      documentElement.classList.remove("fun-site");
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.backgroundColor = prevBodyBg;
    };
  }, []);

  return null;
}
