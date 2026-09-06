"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/lightswind/magnetic-button";

/**
 * Placeholder capture form. Until the client picks a mailing tool, this
 * hands off to email — no backend, nothing stored, nothing promised.
 */
export default function NotifyForm() {
  const [email, setEmail] = useState("");

  const submit = () => {
    const trimmed = email.trim();
    if (!trimmed) return;
    window.location.href =
      "mailto:hello@hivemedia.co.in?subject=Notify me at launch&body=" +
      encodeURIComponent(trimmed);
  };

  return (
    <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
        placeholder="your@email.com"
        aria-label="Email address"
        className="w-[min(320px,72vw)] rounded-full border-[1.5px] border-[var(--ink)] bg-white px-[22px] py-[15px] text-[15px] text-[var(--ink)] outline-none transition-shadow placeholder:text-[var(--ink-soft)] focus:shadow-hard"
      />
      <MagneticButton
        variant="dark"
        size="md"
        onClick={submit}
        className="font-[family-name:var(--font-syne)] text-[15px] font-bold"
      >
        Notify me
      </MagneticButton>
    </div>
  );
}
