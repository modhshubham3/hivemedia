"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Accessible dialog: closes on Escape and on backdrop click, locks the page
 * behind it, and returns focus to whatever opened it.
 */
export default function Modal({
  open,
  onClose,
  labelledBy,
  children,
  panelClassName = "",
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  panelClassName?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    restoreTo.current = document.activeElement as HTMLElement | null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the panel so screen readers land inside the dialog.
    const id = window.setTimeout(() => panelRef.current?.focus(), 20);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(id);
      restoreTo.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  // Portalled to the body so a trigger can sit inside a paragraph without
  // nesting a dialog inside phrasing content.
  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(18,17,16,0.55)] p-5 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`modal-panel relative max-h-[88svh] w-full overflow-y-auto rounded-[22px] border-[2px] border-[var(--ink)] bg-[var(--cream)] outline-none ${panelClassName}`}
        style={{ boxShadow: "10px 12px 0 var(--ink)" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border-[1.5px] border-[var(--ink)] bg-[var(--cream)] transition-all hover:bg-[var(--yellow)] hover:shadow-hard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
