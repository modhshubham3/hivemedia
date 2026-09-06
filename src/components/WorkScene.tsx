"use client";

import { useRef, useState } from "react";

/**
 * Hero artwork: two people at work, drawn in the same bold-outline language
 * as the bee logo so the illustration belongs to the brand rather than
 * sitting beside it. The bee flies over the desk on hover.
 */

const INK = "#121110";
const HEX = "M0,-30 L-25.98,-15 L-25.98,15 L0,30 L25.98,15 L25.98,-15 Z";

export default function WorkScene() {
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
      viewBox="0 0 480 400"
      className="h-auto w-full max-w-[520px]"
      role="img"
      aria-label="Two people working at a desk, with a bee flying overhead"
    >
      {/* ── Floating comb cards ─────────────────────────── */}
      <g stroke={INK} strokeWidth="4" strokeLinejoin="round">
        <path
          d={HEX}
          transform="translate(66 78) scale(0.95)"
          fill="none"
          opacity="0.35"
          className="comb-cell"
          style={{ animationDelay: "0.1s" }}
        />
        <path
          d={HEX}
          transform="translate(246 46) scale(0.8)"
          fill="var(--yellow-pale)"
          className="comb-cell"
          style={{ animationDelay: "0.2s" }}
        />
        <path
          d={HEX}
          transform="translate(424 74) scale(0.9)"
          fill="none"
          opacity="0.35"
          className="comb-cell"
          style={{ animationDelay: "0.3s" }}
        />
      </g>

      {/* ── Seated person, typing ───────────────────────── */}
      <g stroke={INK} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        {/* torso */}
        <path
          d="M110 296 V228 C110 209 123 198 140 198 C157 198 170 209 170 228 V296 Z"
          fill="var(--yellow)"
        />
        {/* arms reaching to the keyboard */}
        <path
          d="M116 234 C108 262 130 286 172 288"
          fill="none"
          strokeWidth="12"
        />
        <path
          d="M164 234 C186 250 198 270 202 286"
          fill="none"
          strokeWidth="12"
        />
        {/* head */}
        <circle cx="140" cy="158" r="27" fill="#FFFFFF" />
        <path d="M113 158 A27 27 0 0 0 167 158 Z" fill={INK} stroke="none" />
        {/* face: a calm line, no features to caricature */}
        <path d="M131 166 q9 7 18 0" fill="none" strokeWidth="4" />
      </g>

      {/* ── Laptop ──────────────────────────────────────── */}
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round">
        <rect x="196" y="232" width="80" height="56" rx="6" fill="#FFFFFF" />
        <path d="M214 250 h44 M214 262 h30" strokeWidth="4" opacity="0.45" />
        <path d="M186 296 H286 L292 286 H192 Z" fill="#FFFFFF" />
      </g>

      {/* ── Standing person, presenting a comb card ─────── */}
      <g stroke={INK} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        <path
          d="M320 296 V188 C320 168 333 157 350 157 C367 157 380 168 380 188 V296 Z"
          fill="#FFFFFF"
        />
        <path d="M380 198 C404 202 416 210 420 220" fill="none" strokeWidth="12" />
        <circle cx="350" cy="118" r="27" fill="#FFFFFF" />
        <path d="M323 118 A27 27 0 0 0 377 118 Z" fill={INK} stroke="none" />
        <circle cx="379" cy="100" r="11" fill={INK} stroke="none" />
        <path d="M341 126 q9 7 18 0" fill="none" strokeWidth="4" />
      </g>

      {/* card being held */}
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round">
        <path
          d={HEX}
          transform="translate(432 234) scale(0.86)"
          fill="var(--yellow)"
        />
        <path
          d="M420 228 h24 M420 240 h16"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>

      {/* ── Plant ───────────────────────────────────────── */}
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round">
        <path d="M56 266 H92 L86 296 H62 Z" fill="var(--yellow-pale)" />
        <path d="M74 266 V234" fill="none" strokeWidth="4" />
        <ellipse
          cx="60"
          cy="234"
          rx="9"
          ry="16"
          transform="rotate(-32 60 234)"
          fill="none"
          strokeWidth="4"
        />
        <ellipse
          cx="88"
          cy="230"
          rx="9"
          ry="16"
          transform="rotate(32 88 230)"
          fill="none"
          strokeWidth="4"
        />
      </g>

      {/* ── Desk ────────────────────────────────────────── */}
      <g fill={INK}>
        <rect x="24" y="294" width="432" height="14" rx="7" />
        <rect x="72" y="308" width="12" height="62" rx="6" />
        <rect x="396" y="308" width="12" height="62" rx="6" />
      </g>

      {/* ── Bee overhead ────────────────────────────────── */}
      <g
        className={`comb-bee ${flying ? "is-flying" : ""}`}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        {/* Handler sits on the painted group — an outer <g> only receives
            pointer events where its children actually draw. */}
        <g
          transform="translate(220 96) scale(0.42)"
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
              fill="var(--yellow)"
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
    </svg>
  );
}
