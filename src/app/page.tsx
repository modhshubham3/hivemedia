import Image from "next/image";
import ComingSoonBadge from "@/components/ComingSoonBadge";
import HexField from "@/components/HexField";
import NotifyForm from "@/components/NotifyForm";
import Reveal from "@/components/Reveal";
import StoryButton from "@/components/StoryButton";
import HeroArt from "@/components/HeroArt";

const SERVICES = [
  "Content Creation",
  "Digital Marketing",
  "Web Development",
  "Influencer Marketing",
  "Graphic Design",
  "Social Media Management",
  "Content Distribution",
];

const PILLARS = [
  { title: "Strategy-led", body: "Every post has a reason to exist." },
  { title: "Creative-first", body: "Ideas before templates, always." },
  { title: "Growth-focused", body: "Measured against real numbers." },
];

const CONTACTS = [
  {
    href: "mailto:hello@hivemedia.co.in",
    label: "hello@hivemedia.co.in",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    href: "tel:+917600955697",
    label: "+91 76009 55697",
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    ),
  },
  {
    href: "https://instagram.com/Hivemedia.co.in",
    label: "@Hivemedia.co.in",
    external: true,
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <HexField />

      {/* ── Header ─────────────────────────────────────────── */}
      {/* Padding respects the notch: on a phone the lockup was sitting hard
          against the top edge and clipping. */}
      {/* Padding must stay classes, not inline style: inline always beat
          lg:px-8, so on wide screens the lockup sat off the hero's edge. */}
      <header className="relative z-10 mx-auto flex w-full max-w-[1160px] items-center justify-between px-[max(6vw,calc(env(safe-area-inset-left)+1rem))] pb-5 pt-[max(1.5rem,calc(env(safe-area-inset-top)+0.75rem))] lg:px-8">
        <a
          href="#top"
          className="logo-lockup flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
          aria-label="Hivemedia home"
        >
          <Image
            src="/logo-bee.svg"
            alt=""
            width={32}
            height={32}
            priority
            className="logo-bee h-8 w-8"
          />
          <span className="wipe-highlight font-[family-name:var(--font-syne)] text-[18px] font-bold tracking-[-0.01em]">
            Hivemedia<span className="text-[var(--yellow-deep)]">.</span>
          </span>
        </a>
        <div className="tagline hidden text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] sm:block">
          <span className="wipe-highlight">Creative Agency · Ahmedabad</span>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto flex w-full max-w-[1160px] flex-1 items-center px-[6vw] pb-14 pt-4 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Reveal>
              <ComingSoonBadge />
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(2.7rem,6vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-balance">
                We turn brands
                <br />
                into <span className="text-poster">buzz.</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mx-auto mt-6 max-w-[46ch] text-[clamp(1rem,1.25vw,1.075rem)] leading-relaxed text-[var(--ink-soft)] lg:mx-0">
                A creative digital agency built on one idea: good marketing
                should feel less like noise and more like connection. Content,
                campaigns and creative that make people stop scrolling.
                <StoryButton />
              </p>
            </Reveal>

            <Reveal delay={240}>
              <NotifyForm />
              <p className="mt-3.5 text-[12.5px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                Launching 2026 · hivemedia.co.in
              </p>
            </Reveal>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroArt />
          </div>
        </div>
      </main>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="relative z-10 border-t border-[var(--hairline)] bg-[var(--cream-alt)]">
        <div className="mx-auto max-w-[1160px] px-[6vw] py-14 lg:px-8">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 max-w-[22ch] font-[family-name:var(--font-syne)] text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight tracking-[-0.015em]">
              How we help a brand get noticed.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 border-b border-[var(--hairline)] pb-4 text-[15px] font-medium"
                >
                  <span
                    aria-hidden="true"
                    className="hex h-2.5 w-2.5 shrink-0 bg-[var(--yellow)]"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── How we work ────────────────────────────────────── */}
      <section className="relative z-10 border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1160px] px-[6vw] py-14 lg:px-8">
          <Reveal>
            <div className="grid gap-8 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.title}>
                  <h3 className="font-[family-name:var(--font-syne)] text-[17px] font-bold">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[var(--ink-soft)]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-[var(--hairline)] bg-[var(--cream-alt)]">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-[6vw] py-7 text-center sm:justify-between sm:text-left lg:px-8">
          <nav aria-label="Contact" className="flex flex-wrap justify-center gap-7">
            {CONTACTS.map((c) => (
              <a
                key={c.href}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative inline-flex items-center gap-2 py-1 text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[var(--yellow)] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[15px] w-[15px] shrink-0"
                >
                  {c.icon}
                </svg>
                {c.label}
              </a>
            ))}
          </nav>
          <div className="w-full text-[12px] text-[var(--ink-soft)] sm:w-auto sm:text-right">
            © 2026 Hivemedia · Ahmedabad, India
          </div>
        </div>
      </footer>
    </div>
  );
}
