"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BeeMark, BEE_VIEWBOX } from "@/components/Bee";

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
          viewBox={BEE_VIEWBOX}
          aria-hidden="true"
          className="bee-hit h-auto w-full"
          onMouseEnter={launch}
        >
          <BeeMark />
        </svg>
      </div>
    </div>
  );
}
