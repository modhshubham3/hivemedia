"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/**
 * Hero artwork. The scene itself is an unDraw illustration (Katerina
 * Limpitsouni, undraw.co — free for commercial use, no attribution
 * required), recoloured to the brand palette. The bee is ours, laid over
 * it so the brand mark still appears in the hero; it flies on hover.
 */
export default function HeroArt() {
  const [flying, setFlying] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const launch = () => {
    if (flying) return;
    setFlying(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlying(false), 2800);
  };

  return (
    <div className="relative w-full max-w-[500px]">
      <Image
        src="/hero-illustration.svg"
        alt="A content team producing and publishing social media content"
        width={960}
        height={757}
        priority
        className="h-auto w-full"
      />

      {/* The flight lives on this wrapper, not inside the SVG: an SVG clips
          at its viewBox, so animating within it trapped the bee in a box. */}
      <div
        className={`comb-bee absolute left-[6%] top-[12%] w-[13%] min-w-[34px] ${
          flying ? "is-flying" : ""
        }`}
      >
        <svg
          viewBox="-6 -8 118 118"
          aria-hidden="true"
          className="bee-hit h-auto w-full"
          onMouseEnter={launch}
        >
          <g>
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
                fill="#FFCE00"
                stroke="#121110"
                strokeWidth="6.5"
              />
              <path
                d="M38 58 V92 M55 58 V92 M72 58 V92"
                stroke="#121110"
                strokeWidth="5.5"
                fill="none"
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
    </div>
  );
}
