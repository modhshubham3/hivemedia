"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BeeMark, BEE_VIEWBOX } from "@/components/Bee";

/**
 * Hero artwork: an unDraw illustration (Katerina Limpitsouni, undraw.co —
 * free for commercial use, no attribution required), recoloured to the
 * brand palette and carrying one badge per service listed on the page.
 *
 * The bee over it is the transparent redraw, not the client's disc crop:
 * the disc is a filled grey circle, so it blanked out the artwork beneath.
 * It flies on hover.
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
        alt="A content team producing and publishing social media content, with a badge for each service"
        width={960}
        height={757}
        priority
        className="h-auto w-full"
      />

      {/* Flight sits on the wrapper: an SVG clips at its viewBox, which
          trapped the bee in a box when the animation lived inside it. */}
      <div
        className={`comb-bee absolute left-[3%] top-[6%] w-[16%] min-w-[40px] ${
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
