"use client";

import { useState } from "react";
import { DISC_CROP } from "@/components/BrandLockup";
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
        {/* Rotating comb ring around the client's own logo disc */}
        <div className="relative mx-auto mb-7 h-[132px] w-[132px]">
          <svg
            viewBox="-110 -100 220 200"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            <g
              className="hex-spin"
              fill="none"
              stroke="var(--yellow-deep)"
              strokeWidth="3"
              opacity="0.45"
            >
              {RING.map((c) => (
                <path
                  key={`${c.x}-${c.y}`}
                  d={HEX}
                  transform={`translate(${c.x} ${c.y})`}
                />
              ))}
            </g>
          </svg>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2"
            style={DISC_CROP}
          />
        </div>

        {/* Letters are split for the drop animation, which destroys the word
            for assistive tech — so the heading carries its own label. */}
        <h2
          id="coming-soon-title"
          aria-label="Coming soon"
          className="font-[family-name:var(--font-syne)] text-[clamp(2rem,7vw,3.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]"
        >
          {/* One word per line, deliberately. Letters are inline-blocks, so
              left to wrap on its own the line broke mid-word as
              "COMING SO / ON", and at this size the two words never fit on
              one line inside the panel anyway. */}
          <span aria-hidden="true">
            {WORD.split(" ").map((word, w) => (
              <span key={word} className="block whitespace-nowrap">
                {word.split("").map((ch, i) => (
                  <span
                    key={`${w}-${i}`}
                    className="letter-drop text-poster"
                    style={{
                      animationDelay: `${0.25 + (w * 7 + i) * 0.055}s`,
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            ))}
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
