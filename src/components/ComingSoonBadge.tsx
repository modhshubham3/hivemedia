"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import NotifyForm from "@/components/NotifyForm";

const WORD = "COMING SOON";

// Pointy-top hexagon, R = 30.
const HEX = "M0,-30 L-25.98,-15 L-25.98,15 L0,30 L25.98,15 L25.98,-15 Z";

const RING = [
  { x: 51.96, y: 0 },
  { x: 25.98, y: -45 },
  { x: -25.98, y: -45 },
  { x: -51.96, y: 0 },
  { x: -25.98, y: 45 },
  { x: 25.98, y: 45 },
];

export default function ComingSoonBadge() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        title="Open the launch note"
        className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full border-[1.5px] border-[var(--ink)] bg-[var(--yellow)] py-2 pl-4 pr-2 text-[11px] font-bold uppercase tracking-[0.2em] shadow-hard transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hard-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
      >
        <span className="dot-ring relative h-[7px] w-[7px] rounded-full bg-[var(--ink)]" />
        Coming Soon
        {/* An arrow in its own well: without it the pill reads as a label,
            not a control. */}
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--ink)] transition-transform duration-200 group-hover:rotate-45">
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3"
            fill="none"
            stroke="var(--yellow)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 L17 7 M9 7 h8 v8" />
          </svg>
        </span>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="coming-soon-title"
        panelClassName="max-w-[580px] px-6 py-12 sm:px-10 text-center"
      >
        {/* Rotating comb ring with the bee resting inside */}
        <div className="mx-auto mb-7 w-[132px]">
          <svg viewBox="-110 -100 220 200" className="h-auto w-full">
            <g
              className="hex-spin"
              fill="none"
              stroke="var(--yellow-deep)"
              strokeWidth="3"
              opacity="0.5"
            >
              {RING.map((c) => (
                <path
                  key={`${c.x}-${c.y}`}
                  d={HEX}
                  transform={`translate(${c.x} ${c.y})`}
                />
              ))}
            </g>
            <path d={HEX} fill="var(--yellow)" stroke="var(--ink)" strokeWidth="4" />
            <g transform="translate(-29 -25) scale(0.52)" className="comb-bee">
              <g
                fill="none"
                stroke="#121110"
                strokeWidth="6.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              >
                <path d="M100.1 23 L93.1 49.1 L67 56.1 L47.9 37 L54.9 10.9 L81 3.9 Z" />
                <path d="M74.8 24.3 L71.3 45.6 L58.6 51.3 L49.3 35.7 L52.7 14.4 L65.4 8.7 Z" />
              </g>
              <g transform="rotate(-6 50 75)">
                <rect
                  x="8"
                  y="58"
                  width="84"
                  height="34"
                  rx="17"
                  fill="#FFFFFF"
                  stroke="#121110"
                  strokeWidth="6.5"
                />
                <path
                  d="M38 58 V92 M55 58 V92 M72 58 V92"
                  stroke="#121110"
                  strokeWidth="5.5"
                />
                <circle cx="25" cy="69" r="3.4" fill="#121110" />
                <path
                  d="M92 75 l9 -4 l2 6"
                  fill="none"
                  stroke="#121110"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>

        {/* Letters are split for the drop animation, which destroys the word
            for assistive tech — so the heading carries its own label. */}
        <h2
          id="coming-soon-title"
          aria-label="Coming soon"
          className="font-[family-name:var(--font-syne)] text-[clamp(2rem,7vw,3.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]"
        >
          <span aria-hidden="true">
          {WORD.split("").map((ch, i) =>
            ch === " " ? (
              <span key={i} className="inline-block w-[0.3em]" />
            ) : (
              <span
                key={i}
                className="letter-drop text-poster"
                style={{ animationDelay: `${0.25 + i * 0.055}s` }}
              >
                {ch}
              </span>
            ),
          )}
          </span>
        </h2>

        <p
          className="line-rise mx-auto mt-5 max-w-[40ch] text-[15px] leading-relaxed text-[var(--ink-soft)]"
          style={{ animationDelay: "0.95s" }}
        >
          The hive is still being built. Drop your email and we&rsquo;ll tell
          you the moment{" "}
          <strong className="font-semibold text-[var(--ink)]">
            hivemedia.co.in
          </strong>{" "}
          goes live.
        </p>

        <div className="line-rise" style={{ animationDelay: "1.1s" }}>
          <div className="flex justify-center [&>div]:justify-center">
            <NotifyForm />
          </div>
          <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
            Launching 2026 · Ahmedabad, India
          </p>
        </div>
      </Modal>
    </>
  );
}
