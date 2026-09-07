/**
 * The bee, transparent — for the one that flies over the illustration,
 * where the client's disc crop would blank out whatever sat beneath it.
 *
 * Geometry is measured off their artwork with a canvas scan rather than
 * eyeballed. Source bee occupies x 1267-2769, y 1451-2810 of their JPEG;
 * scaled by 0.08 that gives this canvas:
 *
 *   wings   x 10-112, y 0-53    (aspect 1.93)
 *   body    x  6-102, y 54-102  (aspect 1.97 — the earlier draw was 2.5,
 *                                which is what made it look wrong)
 *   antenna x 102-120
 *   stroke  6.3
 *
 * The header logo and favicon use their file directly; this is only for the
 * places that need alpha. An exact transparent bee needs the designer's
 * vector — this is the closest a redraw gets.
 */

export const BEE_VIEWBOX = "-4 -4 130 118";

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
        {/* right wing, larger and partly behind */}
        <path d="M44 26 L61 0 L95 0 L112 26 L95 52 L61 52 Z" />
        {/* left wing, narrower and in front — nesting these was what read
            as a hexagon with a diamond inside */}
        <path d="M10 27 L24 1 L52 1 L66 27 L52 53 L24 53 Z" />
      </g>
      <g transform="rotate(-6 54 78)">
        <rect
          x="3"
          y="51"
          width="102"
          height="55"
          rx="27.5"
          fill={bodyFill}
          stroke="#121110"
          strokeWidth="6.3"
        />
        <path
          d="M40 51 V106 M60 51 V106 M80 51 V106"
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
