/**
 * The client's logo, cropped straight from their artwork — not a redraw.
 *
 * Their file is a 6400x4267 JPEG holding two lockups. This uses the lower
 * one whole: grey disc, yellow bee, "Hivemedia." and the Digital Marketing
 * line, exactly as they supplied it.
 *
 * Crops are percentages so they hold at any rendered size. The JPEG has a
 * white ground and no alpha, so multiply blending drops the white against
 * the cream page and leaves black, grey and yellow untouched.
 *
 * Rectangles measured by scanning the source on a canvas, not by eye:
 *   full lower lockup  x 888-5435, y 2226-3482
 *   disc only          x 888-2144, y 2226-3482  (used by the flying bee)
 */

export const LOGO_SRC = "/logo-lockup.jpg";

/** Grey disc with the bee — the mark on its own. */
export const DISC_CROP = {
  backgroundImage: `url(${LOGO_SRC})`,
  backgroundSize: "509.55% 339.73%",
  backgroundPosition: "17.263% 73.929%",
  backgroundRepeat: "no-repeat",
  mixBlendMode: "multiply" as const,
};

/** Disc plus wordmark plus tagline. Aspect 3.62:1. */
const FULL_CROP = {
  backgroundImage: `url(${LOGO_SRC})`,
  backgroundSize: "140.75% 339.73%",
  backgroundPosition: "47.923% 73.929%",
  backgroundRepeat: "no-repeat",
  mixBlendMode: "multiply" as const,
};

export default function BrandLockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span
        aria-hidden="true"
        className="logo-bee block h-12 w-[174px] shrink-0"
        style={FULL_CROP}
      />
      <span className="sr-only">Hivemedia — Digital Marketing</span>
    </span>
  );
}
