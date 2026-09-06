"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Reveals children once as they scroll into view. Starts visible and only
 * hides itself after mount, so the content is never trapped behind JS.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    el.classList.add("reveal");
    el.style.transitionDelay = `${delay}ms`;

    const show = () => el.classList.add("is-in");

    // Already on screen at mount (the hero) — reveal without waiting for the
    // observer, which never fires in a browser that isn't painting.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(show);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);

    // Last resort: content must never stay hidden because an observer or a
    // frame callback did not run.
    const failsafe = window.setTimeout(show, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
