"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient honeycomb: hexagon outlines drifting upward behind the hero.
 * Custom-drawn rather than a library background — the hexagon is the
 * client's own logo motif, so it carries brand meaning a generic
 * dot/grid pattern wouldn't.
 */
export default function HexField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const hexes = Array.from({ length: 14 }, () => ({
      px: Math.random(),
      py: Math.random(),
      r: (14 + Math.random() * 46) * dpr,
      v: (0.12 + Math.random() * 0.3) * dpr,
      sway: Math.random() * Math.PI * 2,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.004,
      o: 0.1 + Math.random() * 0.16,
    }));

    const paint = () => {
      ctx.clearRect(0, 0, width, height);
      for (const h of hexes) {
        if (!reduce) {
          h.py -= h.v / height;
          h.rot += h.vr;
          h.sway += 0.006;
          if (h.py * height < -h.r * 2) {
            h.py = 1 + (h.r * 2) / height;
            h.px = Math.random();
          }
        }
        const cx = h.px * width + Math.sin(h.sway) * 18 * dpr;
        const cy = h.py * height;
        ctx.beginPath();
        for (let k = 0; k < 6; k++) {
          const a = h.rot + (k * Math.PI) / 3;
          const x = cx + h.r * Math.cos(a);
          const y = cy + h.r * Math.sin(a);
          if (k === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(190,140,10,${h.o})`;
        ctx.lineWidth = 1.3 * dpr;
        ctx.stroke();
      }
      if (!reduce) frame = requestAnimationFrame(paint);
    };
    paint();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
