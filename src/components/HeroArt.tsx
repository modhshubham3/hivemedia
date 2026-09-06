"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { DISC_CROP } from "@/components/BrandLockup";

/**
 * Hero artwork. The scene is an unDraw illustration (Katerina Limpitsouni,
 * undraw.co — free for commercial use, no attribution required), recoloured
 * to the brand palette.
 *
 * The bee laid over it is a crop of the client's own logo disc rather than
 * a drawn copy, so the mark on the page is identical to the mark in their
 * file. It flies on hover.
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

      {/* The flight lives on the wrapper, not inside an SVG: an SVG clips at
          its viewBox, which trapped the bee in a box. */}
      <div
        className={`comb-bee absolute left-[5%] top-[10%] aspect-square w-[15%] min-w-[38px] ${
          flying ? "is-flying" : ""
        }`}
      >
        <div
          className="bee-hit h-full w-full"
          style={DISC_CROP}
          onMouseEnter={launch}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
