/**
 * The client's own logo artwork — not a redraw.
 *
 * Their file is a 6400x4267 JPEG holding two lockups. Neither is exactly
 * what a header needs: the upper one has no tagline but a white bee, the
 * lower one has the yellow bee but carries "Digital Marketing", which is
 * unreadable at this size. So the disc is cropped from the lower lockup and
 * the wordmark from the upper one, both from the same file.
 *
 * Crops are percentage-based, so they hold at any rendered size. The JPEG
 * has a white ground and no alpha; multiply blending drops the white against
 * the cream page and leaves the black, grey and yellow untouched.
 *
 * Measured with a canvas scan of the source, not by eye:
 *   disc     x 888-2144,  y 2226-3482  (1256 square)
 *   wordmark x 2328-5435, y 1082-1578
 */

const SRC = "/logo-lockup.jpg";

const DISC = {
  backgroundImage: `url(${SRC})`,
  backgroundSize: "509.55% 339.73%",
  backgroundPosition: "17.263% 73.929%",
  mixBlendMode: "multiply" as const,
};

const WORDMARK = {
  backgroundImage: `url(${SRC})`,
  backgroundSize: "205.99% 860.28%",
  backgroundPosition: "70.695% 28.693%",
  mixBlendMode: "multiply" as const,
};

export default function BrandLockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="logo-bee block h-9 w-9 shrink-0 bg-no-repeat"
        style={DISC}
      />
      <span
        aria-hidden="true"
        className="block h-[19px] w-[119px] shrink-0 bg-no-repeat"
        style={WORDMARK}
      />
      <span className="sr-only">Hivemedia</span>
    </span>
  );
}
