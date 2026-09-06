"use client";

import { useRef, useState } from "react";

/**
 * Hero visual: a hive lattice rendered with depth — layered comb panels,
 * a reach network traced between them, and the bee resting on the focal
 * cell. Abstract rather than illustrated, and built from the brand's own
 * hexagon so it reads as identity rather than decoration.
 *
 * Restraint is the point: hairline strokes, one yellow panel, soft shadows,
 * and planes that drift at different rates instead of anything blinking.
 */

const INK = "#121110";

// Pointy-top hexagon, R = 52.
const HEX = "M0,-52 L-45.03,-26 L-45.03,26 L0,52 L45.03,26 L45.03,-26 Z";

// Where the network nodes sit, and the order they arrive in.
const NODES = [
  { x: 168, y: 168, r: 4.5, delay: 1.15 },
  { x: 286, y: 214, r: 5.5, delay: 1.35 },
  { x: 146, y: 288, r: 4, delay: 1.55 },
  { x: 330, y: 124, r: 3.5, delay: 1.75 },
  { x: 236, y: 96, r: 3, delay: 1.95 },
];

export default function BrandVisual() {
  const [flying, setFlying] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const launch = () => {
    if (flying) return;
    setFlying(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlying(false), 2800);
  };

  // viewBox is cropped to the artwork plus room for the drop shadows; the
  // full 480x420 box left the composition floating in dead space.
  return (
    <svg
      viewBox="96 48 292 324"
      className="h-auto w-full max-w-[460px]"
      role="img"
      aria-label="A layered honeycomb lattice with a bee resting on the centre cell"
    >
      <defs>
        <linearGradient id="panel" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="var(--cream-alt)" />
        </linearGradient>
        <linearGradient id="panelAccent" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="var(--yellow)" />
          <stop offset="100%" stopColor="var(--yellow-deep)" />
        </linearGradient>
        <filter id="lift" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="12"
            floodColor={INK}
            floodOpacity="0.09"
          />
        </filter>
        <filter id="liftSm" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow
            dx="0"
            dy="5"
            stdDeviation="7"
            floodColor={INK}
            floodOpacity="0.07"
          />
        </filter>
      </defs>

      {/* Recessed lattice — the room the panels sit in */}
      <g
        stroke={INK}
        strokeWidth="1.1"
        fill="none"
        opacity="0.13"
        className="drift-c"
      >
        <path d={HEX} transform="translate(240 206) scale(2.55)" />
        <path d={HEX} transform="translate(240 206) scale(1.85)" />
      </g>

      {/* Reach network */}
      <path
        d="M168 168 L286 214 L146 288 M286 214 L330 124 M168 168 L236 96"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.28"
        className="trace"
      />

      {/* Back panel */}
      <g className="drift-b">
        <path
          d={HEX}
          transform="translate(330 124) scale(0.66)"
          fill="url(#panel)"
          stroke={INK}
          strokeWidth="1.8"
          filter="url(#liftSm)"
        />
      </g>

      {/* Small pale panel */}
      <g className="drift-c">
        <path
          d={HEX}
          transform="translate(236 96) scale(0.44)"
          fill="var(--yellow-pale)"
          stroke={INK}
          strokeWidth="1.8"
          filter="url(#liftSm)"
        />
      </g>

      {/* Lower panel */}
      <g className="drift-b">
        <path
          d={HEX}
          transform="translate(146 288) scale(0.6)"
          fill="url(#panel)"
          stroke={INK}
          strokeWidth="1.8"
          filter="url(#liftSm)"
        />
      </g>

      {/* Main panel, with a hint of content structure */}
      <g className="drift-a">
        <path
          d={HEX}
          transform="translate(168 168) scale(1.02)"
          fill="url(#panel)"
          stroke={INK}
          strokeWidth="2"
          filter="url(#lift)"
        />
        <g stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.22">
          <path d="M140 158 h56" />
          <path d="M140 172 h38" />
          <path d="M140 186 h48" />
        </g>
      </g>

      {/* Focal panel — the one place yellow lands */}
      <g className="drift-a" style={{ animationDelay: "-2.6s" }}>
        <path
          d={HEX}
          transform="translate(286 214) scale(0.9)"
          fill="url(#panelAccent)"
          stroke={INK}
          strokeWidth="2"
          filter="url(#lift)"
        />

        {/* Bee resting on the focal cell */}
        <g
          className={`comb-bee ${flying ? "is-flying" : ""}`}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <g
            transform="translate(259 187) scale(0.4)"
            className="bee-hit"
            onMouseEnter={launch}
          >
            <g
              fill="none"
              stroke={INK}
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
                fill="#FFFFFF"
                stroke={INK}
                strokeWidth="6.5"
              />
              <path
                d="M38 58 V92 M55 58 V92 M72 58 V92"
                stroke={INK}
                strokeWidth="5.5"
                fill="none"
              />
              <circle cx="25" cy="69" r="3.4" fill={INK} />
              <path
                d="M92 75 l9 -4 l2 6"
                fill="none"
                stroke={INK}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </g>

      {/* Network nodes, arriving after the line traces */}
      <g fill={INK}>
        {NODES.map((n) => (
          <circle
            key={`${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            className="node"
            style={{ animationDelay: `${n.delay}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
