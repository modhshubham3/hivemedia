"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

const HEAD = ["We", "turn", "brands", "into"];

const LINES: { text: string; accent?: string }[] = [
  { text: "A digital marketing studio built on one idea —" },
  { text: "good marketing should feel less like", accent: "noise" },
  { text: "and more like", accent: "connection." },
  { text: "Content, campaigns and creative" },
  { text: "that make people", accent: "stop scrolling." },
];

export default function StoryButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="group mt-5 inline-flex items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
      >
        <span className="play-btn relative grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] border-[var(--ink)] bg-[var(--ink)] transition-transform duration-200 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-[3px] h-4 w-4" aria-hidden="true">
            <path d="M8 5.5 L19 12 L8 18.5 Z" fill="var(--yellow)" />
          </svg>
        </span>
        <span className="text-[13.5px] font-semibold text-[var(--ink)]">
          Play our story
          <span className="block text-[12px] font-normal text-[var(--ink-soft)]">
            30 seconds, no sound needed
          </span>
        </span>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="story-title"
        panelClassName="max-w-[700px] px-6 py-14 sm:px-12"
      >
        {/* Words are split into blocks to stagger the rise, so the heading
            supplies its own label rather than an unspaced run of words. */}
        <h2
          id="story-title"
          aria-label="We turn brands into buzz."
          className="font-[family-name:var(--font-syne)] text-[clamp(2.1rem,6vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em]"
        >
          <span aria-hidden="true">
          {HEAD.map((w, i) => (
            <span
              key={w}
              className="line-rise mr-[0.28em] inline-block"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              {w}
            </span>
          ))}
          <span
            className="line-rise relative inline-block"
            style={{ animationDelay: "0.63s" }}
          >
            <span className="text-poster">buzz.</span>
            <svg
              viewBox="0 0 300 24"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M4 15 C 60 5, 120 20, 180 10 S 268 6, 296 13"
                fill="none"
                stroke="var(--yellow-deep)"
                strokeWidth="6"
                strokeLinecap="round"
                className="underline-draw"
                style={{ animationDelay: "1s" }}
              />
            </svg>
          </span>
          </span>
        </h2>

        <div className="mt-10 space-y-2.5">
          {LINES.map((l, i) => (
            <p
              key={l.text}
              className="line-rise text-[clamp(1.05rem,2vw,1.35rem)] leading-snug text-[var(--ink-soft)]"
              style={{ animationDelay: `${1.15 + i * 0.22}s` }}
            >
              {l.text}
              {l.accent && (
                <>
                  {" "}
                  <span className="relative inline-block font-semibold text-[var(--ink)]">
                    <span className="relative z-10">{l.accent}</span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[-4px] bottom-[2px] -z-0 h-[0.48em] bg-[var(--yellow)]"
                    />
                  </span>
                </>
              )}
            </p>
          ))}
        </div>

        <div
          className="line-rise mt-11 flex flex-wrap items-center gap-4 border-t border-[var(--hairline)] pt-7"
          style={{ animationDelay: "2.4s" }}
        >
          <a
            href="mailto:hello@hivemedia.co.in"
            className="rounded-full bg-[var(--ink)] px-6 py-3 text-[14px] font-semibold text-[var(--cream)] transition-all hover:-translate-y-0.5 hover:bg-[var(--yellow)] hover:text-[var(--ink)] hover:shadow-hard"
          >
            Start a project
          </a>
          <span className="text-[13px] text-[var(--ink-soft)]">
            Launching 2026 · hivemedia.co.in
          </span>
        </div>
      </Modal>
    </>
  );
}
