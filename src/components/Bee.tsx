/**
 * The bee, transparent — for the one that flies over the illustration,
 * where the client's disc crop would blank out whatever sat beneath it.
 *
 * Geometry measured off their JPEG with a canvas scan. The first pass got
 * the wings wrong: it scanned black pixels down to y 2110, which caught the
 * body's own top outline (that starts near y 2084) and reported the wings
 * as wider than the body. Cutting above the outline gives the real figures.
 *
 * Source (bee occupies x 1267-2769, y 1451-2810), scaled by 0.08:
 *   wings   x 22-112, y  0-47   (w 89, aspect 1.90 — inset 5 from the
 *                                body's left, overhanging 10 on the right)
 *   body    x  6-102, y 54-102  (w 96, aspect 1.97)
 *   antenna x 102-120
 *   stroke  6.3
 *
 * The header logo and favicon use their file directly; this is only for the
 * places that need alpha. An exact transparent bee needs the designer's
 * vector — this is as close as a redraw gets.
 */

export const BEE_VIEWBOX = "-5 -6 133 120";

export function BeeMark({ bodyFill = "#FFCE00" }: { bodyFill?: string }) {
  return (
    <>
      <g
        fill="none"
        stroke="#121110"
        strokeWidth="6.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* right wing, larger */}
        <path d="M52 23.5 L67 0 L97 0 L112 23.5 L97 47 L67 47 Z" />
        {/* left wing, narrower, overlapping the right one rather than
            nested inside it */}
        <path d="M22 24 L34 1 L56 1 L68 24 L56 47 L34 47 Z" />
      </g>
      <g transform="rotate(-6 54 78)">
        <rect
          x="3.15"
          y="50.85"
          width="101.9"
          height="54.7"
          rx="27.35"
          fill={bodyFill}
          stroke="#121110"
          strokeWidth="6.3"
        />
        <path
          d="M40 50.85 V105.55 M60 50.85 V105.55 M80 50.85 V105.55"
          stroke="#121110"
          strokeWidth="5.4"
          fill="none"
        />
        <circle cx="22" cy="68" r="3.8" fill="#121110" />
        <path
          d="M105 78 l11 -5 l3 7"
          fill="none"
          stroke="#121110"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  );
}
