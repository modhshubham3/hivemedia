import Image from "next/image";
import { LOGO_SRC } from "@/components/BrandLockup";

/**
 * Hero artwork: a Storyset illustration (freepik.com — free for commercial
 * use with attribution; the credit is in the footer), recoloured to the
 * brand palette. Only the stock accents were remapped — skin, hair and lip
 * tones are left alone, since recolouring those turns faces yellow.
 *
 * The bee over it is the client's own artwork, not a redraw. Their file has
 * no alpha and the bee always sits on grey, so the grey is keyed out with an
 * SVG filter: blue channel into alpha, then a ramp. Their grey (#8C8C8C,
 * blue 140) falls to zero while the black outlines (blue 16) and the yellow
 * body (blue 0) stay solid — and the wing interiors, being that same grey,
 * come out hollow, which is exactly right.
 *
 * Checked against the source before wiring it up: of the disc region, 1.23M
 * pixels key to transparent and 344k stay — 209k black, 133k yellow, zero
 * grey survivors — and the result measures 1.109 wide-to-tall against their
 * bee's 1.105.
 *
 * It roams the page on a loop (see bee-roam in globals.css); no hover
 * needed, so this stays a server component.
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
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Keys the grey ground out of their JPEG so the bee can sit on the
          illustration without a plate behind it. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0"
        focusable="false"
      >
        <filter id="grey-key" colorInterpolationFilters="sRGB">
          {/* Alpha row is (-B + A_in), not (-B + 1). With the constant, the
              part of the filter region the background does not cover is
              transparent black — B=0 — so alpha came out 1 and rendered as a
              solid black frame. Multiplying by incoming alpha keeps empty
              space empty. */}
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
        src="/art-social-media.svg"
        alt="A social media post coming out of a phone, surrounded by Facebook and Instagram icons, a hashtag and likes"
        width={500}
        height={500}
        priority
        className="h-auto w-full"
      />

      <div
        aria-hidden="true"
        className="comb-bee absolute left-[3%] top-[6%] w-[16%] min-w-[46px]"
        style={{ aspectRatio: "1.107", ...BEE_CROP }}
      />
    </div>
  );
}
