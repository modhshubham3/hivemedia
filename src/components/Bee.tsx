/**
 * The bee mark, kept in one place so the header logo, the favicon and every
 * on-page bee stay identical. Geometry matches public/logo-bee.svg — change
 * both together.
 */

export const BEE_VIEWBOX = "-9 -2 126 126";

export function BeeMark({ bodyFill = "#FFCE00" }: { bodyFill?: string }) {
  return (
    <>
      <g
        fill="none"
        stroke="#121110"
        strokeWidth="6.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M52 30 L64 8 L88 8 L100 30 L88 52 L64 52 Z" />
        <path d="M33 32 L41.5 11 L58.5 11 L67 32 L58.5 53 L41.5 53 Z" />
      </g>
      <g transform="rotate(-6 50 86)">
        <rect
          x="8"
          y="62"
          width="84"
          height="48"
          rx="24"
          fill={bodyFill}
          stroke="#121110"
          strokeWidth="6.5"
        />
        <path
          d="M38 62 V110 M55 62 V110 M72 62 V110"
          stroke="#121110"
          strokeWidth="5.5"
          fill="none"
        />
        <circle cx="26" cy="76" r="3.6" fill="#121110" />
        <path
          d="M92 82 l9 -4 l2 6"
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
