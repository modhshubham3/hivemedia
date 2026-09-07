"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { LOGO_SRC } from "@/components/BrandLockup";

/**
 * Hero artwork: an unDraw illustration (Katerina Limpitsouni, undraw.co —
 * free for commercial use, no attribution required), recoloured to the
 * brand palette and carrying one badge per service listed on the page.
 *
 * The bee over it is the client's own artwork, not a redraw. Their file has
 * no alpha and the bee always sits on grey, so the grey is keyed out with an
 * SVG filter: blue channel into alpha, then a ramp. Their greys (#8C8C8C,
 * blue 140) fall to zero while the black outlines (blue 16) and the yellow
 * body (blue 0) stay solid — and the wing interiors, being the same grey,
 * come out hollow, which is exactly right.
 *
 * Checked against the source before wiring it up: of the disc region,
 * 1.23M pixels key to transparent, 344k stay — 209k black, 133k yellow,
 * zero grey survivors — and the result measures 1.109 wide-to-tall against
 * their bee's 1.105.
 *
 * Crop is the bee alone, measured off the source: x 1074-1943, y 2454-3239.
 */
const BEE_CROP = {
  backgroundImage: `url(${LOGO_SRC})`,
  backgroundSize: "736.48% 543.57%",
  backgroundPosition: "19.418% 70.477%",
  backgroundRepeat: "no-repeat",
  filter: "url(#grey-key)",
};

export default function HeroArt() {
  const [flying, setFlying] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const launch = () => {
    if (flying) return;
    setFlying(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlying(false), 7000);
  };

  return (
    <div className="relative w-full max-w-[500px]">
      {/* Keys the grey ground out of their JPEG so the bee can sit on the
          illustration without a plate behind it. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0"
        focusable="false"
      >
        <filter id="grey-key" colorInterpolationFilters="sRGB">
          {/* Alpha row is (-B + A_in), not (-B + 1). With the constant the
              area of the filter region that the background does not cover is
              transparent black — B=0, so alpha came out 1 and it rendered as
              a solid black frame around the bee. Multiplying by the incoming
              alpha keeps empty space empty. */}
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 -1 1 0"
          />
          <feComponentTransfer>
            <feFuncA type="linear" slope="2.4" intercept="-1.1" />
          </feComponentTransfer>
        </filter>
      </svg>

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
        className={`comb-bee absolute left-[3%] top-[6%] z-30 w-[16%] min-w-[44px] ${
          flying ? "is-flying" : ""
        }`}
        style={{ aspectRatio: "1.107" }}
      >
        <div
          className="bee-hit h-full w-full"
          style={BEE_CROP}
          onMouseEnter={launch}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
