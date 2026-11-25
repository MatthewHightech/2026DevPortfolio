"use client";

import { useState } from "react";

const STATEMENTS = [
  {
    id: "a",
    text: "I currently have a job",
    isLie: true,
    story:
      "So if you're company is growing, send me an email and would love to get in touch.",
  },
  {
    id: "b",
    text: "I've been attacked by a wild sea otter in the ocean",
    isLie: false,
    story:
      "April 2025 I was surfing at Jordan River and a sea otter climbed onto my board, then up my arm, onto my back and started biting me. I had to grab it, throw it off, and caught the next wave back to shore. Ask me more about it when we meet.",
  },
  {
    id: "c",
    text: "I once had a Software interview where I drove my interviewer home and was asked if we could pick up some chicken feed on the way",
    isLie: false,
    story:
      "I won't name the company or manager. He's the head of engineering at his company and also runs a farm with his wife and kids. Ask me for the full story sometime.",
  },
] as const;

export function TwoTruthsSection() {
  const [guessId, setGuessId] = useState<string | null>(null);
  const revealed = guessId !== null;
  const guessedLie = STATEMENTS.find((s) => s.id === guessId)?.isLie ?? false;

  return (
    <section id="two-truths" className="scroll-mt-2 py-1.5">
      <h2 className="mb-2 text-center font-['Comic_Sans_MS','Comic_Sans',cursive] text-[1.6rem] font-bold text-[#ffff66]">
        Two Truths and a Lie
      </h2>
      <p className="mb-3 text-left text-[1.15rem] leading-[1.45] text-[#ffff66]">
        Pick the lie. Then I&apos;ll let you know if you&apos;re right.
      </p>
      <div className="flex flex-col gap-2">
        {STATEMENTS.map((item, index) => (
          <div key={item.id}>
            <button
              type="button"
              className={`block w-full cursor-pointer border-2 border-dotted bg-transparent px-3 py-3 text-left font-['Times_New_Roman',Times,serif] text-[1.2rem] leading-snug text-[#ffff66] hover:enabled:bg-[#111] disabled:cursor-default ${
                guessId === item.id ? "border-[#ffff66]" : "border-[#666]"
              }`}
              disabled={revealed}
              onClick={() => setGuessId(item.id)}
            >
              <b>Choice {index + 1}:</b> {item.text}
              {revealed ? (
                <span
                  className={
                    item.isLie
                      ? "font-bold text-[#ff6666]"
                      : "font-bold text-[#66ff99]"
                  }
                >
                  {item.isLie ? " ← LIE" : " ← TRUTH"}
                </span>
              ) : null}
            </button>
            {revealed ? (
              <p className="mt-1.5 border-2 border-[#ffff66] bg-[#1a0033] px-3 py-2.5 text-[1.15rem] leading-relaxed text-[#ffff99]">
                <b
                  className={
                    item.isLie ? "text-[#ff6666]" : "text-[#66ff99]"
                  }
                >
                  {item.isLie ? "A Lie:" : "True story:"}
                </b>{" "}
                {item.story}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      {revealed ? (
        <div className="mt-3">
          <p className="mb-2 text-[1.15rem] text-[#ffff66]">
            <b>
              {guessedLie
                ? "Nice — you caught the lie!"
                : "Nope — that one was true."}
            </b>
          </p>
          <button
            type="button"
            className="mt-1.5 inline-block cursor-pointer rounded-full border-0 bg-[linear-gradient(#9cf,#36c_45%,#06a_70%,#9cf)] px-5 py-2 font-['Arial_Black',Arial,sans-serif] text-[1rem] font-black tracking-[0.06em] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.55),2px_2px_0_#000] active:shadow-[inset_0_2px_4px_#000]"
            onClick={() => setGuessId(null)}
          >
            Play again
          </button>
        </div>
      ) : null}
    </section>
  );
}
