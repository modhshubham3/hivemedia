"use client";

import { useRef, useState } from "react";

/**
 * Hero artwork: a honeycomb cluster with the bee at its centre.
 * The hexagon is the client's own logo shape, so the hero's main visual
 * carries the brand rather than decorating around it.
 * Clicking the bee sends it on a loop around the comb.
 */

// Pointy-top hexagon, R = 30, centred on the origin.
const HEX = "M0,-30 L-25.98,-15 L-25.98,15 L0,30 L25.98,15 L25.98,-15 Z";

type Cell = { x: number; y: number; fill: string; delay: number };

// Axial honeycomb coordinates → pixel positions.
// Mostly outline. Two pale cells and one accent are enough to read as a comb;
// the fully-yellow version dominated the page.
const CELLS: Cell[] = [
  { x: 51.96, y: 0, fill: "accent", delay: 0.05 },
  { x: 25.98, y: -45, fill: "pale", delay: 0.1 },
  { x: -25.98, y: -45, fill: "line", delay: 0.15 },
  { x: -51.96, y: 0, fill: "line", delay: 0.2 },
  { x: -25.98, y: 45, fill: "pale", delay: 0.25 },
  { x: 25.98, y: 45, fill: "line", delay: 0.3 },
  { x: 77.94, y: -45, fill: "line", delay: 0.35 },
  { x: 77.94, y: 45, fill: "line", delay: 0.4 },
  { x: -77.94, y: -45, fill: "line", delay: 0.45 },
  { x: -77.94, y: 45, fill: "line", delay: 0.5 },
  { x: -51.96, y: -90, fill: "line", delay: 0.55 },
  { x: 51.96, y: 90, fill: "line", delay: 0.6 },
  { x: 0, y: -90, fill: "line", delay: 0.65 },
  { x: 0, y: 90, fill: "pale", delay: 0.7 },
];

const FILLS: Record<string, { fill: string; cls: string }> = {
  accent: { fill: "var(--yellow)", cls: "comb-cell comb-solid" },
  pale: { fill: "var(--yellow-pale)", cls: "comb-cell comb-pale" },
  line: { fill: "transparent", cls: "comb-cell comb-line" },
};

export default function Honeycomb() {
  const [flying, setFlying] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const launch = () => {
    if (flying) return;
    setFlying(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlying(false), 2800);
  };

  return (
    <svg
      viewBox="-150 -140 300 280"
      className="h-auto w-full max-w-[500px]"
      role="img"
      aria-label="A honeycomb with a bee at its centre"
    >
      <g stroke="var(--ink)" strokeWidth="2.4" strokeLinejoin="round" opacity="0.85">
        {CELLS.map((c) => {
          const f = FILLS[c.fill];
          return (
            <path
              key={`${c.x}-${c.y}`}
              d={HEX}
              transform={`translate(${c.x} ${c.y})`}
              fill={f.fill}
              className={f.cls}
              style={{ animationDelay: `${c.delay}s, ${1 + c.delay * 1.4}s` }}
            />
          );
        })}

        {/* Centre cell holds the bee — kept white so the mark reads cleanly */}
        <path d={HEX} fill="#FFFFFF" className="comb-cell" />
      </g>

      <g className={`comb-bee ${flying ? "is-flying" : ""}`}>
        {/* Hover flourish only — no action behind it, so it stays out of the
            tab order rather than announcing itself as a control. */}
        <g
          transform="translate(-29 -25) scale(0.52)"
          className="bee-hit"
          onMouseEnter={launch}
        >
          <g
            fill="none"
            stroke="#121110"
            strokeWidth="6.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path d="M100.1 23 L93.1 49.1 L67 56.1 L47.9 37 L54.9 10.9 L81 3.9 Z" />
            <path d="M74.8 24.3 L71.3 45.6 L58.6 51.3 L49.3 35.7 L52.7 14.4 L65.4 8.7 Z" />
          </g>
          <g transform="rotate(-6 50 75)">
            <rect
              x="8"
              y="58"
              width="84"
              height="34"
              rx="17"
              fill="#FFCE00"
              stroke="#121110"
              strokeWidth="6.5"
            />
            <path
              d="M38 58 V92 M55 58 V92 M72 58 V92"
              stroke="#121110"
              strokeWidth="5.5"
              fill="none"
            />
            <circle cx="25" cy="69" r="3.4" fill="#121110" />
            <path
              d="M92 75 l9 -4 l2 6"
              fill="none"
              stroke="#121110"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
