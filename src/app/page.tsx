import Image from "next/image";
import TextScrollMarquee from "@/components/lightswind/text-scroll-marquee";
import HexField from "@/components/HexField";
import Honeycomb from "@/components/Honeycomb";
import NotifyForm from "@/components/NotifyForm";
import Reveal from "@/components/Reveal";

const SERVICES =
  "Content Creation  ⬡  Digital Marketing  ⬡  Influencer Marketing  ⬡  Graphic Design  ⬡  Social Media Management  ⬡  Content Distribution  ⬡";

const PILLARS = ["Strategy-led", "Creative-first", "Growth-focused"];

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

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-[62%] top-[38%] z-0 h-[min(70vw,780px)] w-[min(70vw,780px)] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,206,0,.34), transparent 70%)",
        }}
      />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="relative z-10 mx-auto flex w-full max-w-[1160px] items-center justify-between px-[6vw] py-5 lg:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo-bee.svg"
            alt=""
            width={34}
            height={29}
            priority
            className="h-[29px] w-auto"
          />
          <span className="font-[family-name:var(--font-syne)] text-[18px] font-bold tracking-[-0.01em]">
            Hivemedia<span className="text-[var(--yellow-deep)]">.</span>
          </span>
        </div>
        <div className="hidden text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] sm:block">
          Digital Marketing · India
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto flex w-full max-w-[1160px] flex-1 items-center px-[6vw] pb-16 pt-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left column */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[var(--ink)] bg-[var(--yellow)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] shadow-hard">
                <span className="dot-ring relative h-[7px] w-[7px] rounded-full bg-[var(--ink)]" />
                Coming Soon
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(2.7rem,6vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-balance">
                We turn brands
                <br />
                into{" "}
                <span className="relative inline-block">
                  <span className="text-poster">buzz.</span>
                  <svg
                    viewBox="0 0 300 24"
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 15 C 60 5, 120 20, 180 10 S 268 6, 296 13"
                      fill="none"
                      stroke="var(--yellow-deep)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      className="underline-draw"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mx-auto mt-6 max-w-[46ch] text-[clamp(1rem,1.25vw,1.075rem)] leading-relaxed text-[var(--ink-soft)] lg:mx-0">
                A digital marketing studio built on one idea: good marketing
                should feel less like noise and more like connection. Content,
                campaigns and creative that make people stop scrolling.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {PILLARS.map((p) => (
                  <li
                    key={p}
                    className="cursor-default rounded-full border border-[var(--hairline)] bg-white/70 px-3.5 py-1.5 text-[12.5px] font-medium text-[var(--ink-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-[var(--yellow)] hover:text-[var(--ink)] hover:shadow-hard"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={310}>
              <NotifyForm />
              <p className="mt-3.5 text-[12.5px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                Launching 2026 · hivemedia.co.in
              </p>
            </Reveal>
          </div>

          {/* Right column — honeycomb */}
          <div className="flex justify-center lg:justify-end">
            <Honeycomb />
          </div>
        </div>
      </main>

      {/* ── Services marquee ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="relative z-10 border-y-[1.5px] border-[var(--ink)] bg-[var(--yellow)] py-4"
      >
        <TextScrollMarquee
          baseVelocity={2}
          direction="left"
          className="font-[family-name:var(--font-syne)] !text-[15px] font-bold uppercase tracking-[0.16em] text-[var(--ink)]"
        >
          {SERVICES}
        </TextScrollMarquee>
      </div>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="relative z-10 bg-[var(--ink)]">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-[6vw] py-7 text-center sm:justify-between sm:text-left lg:px-8">
          <nav aria-label="Contact" className="flex flex-wrap justify-center gap-7">
            {CONTACTS.map((c) => (
              <a
                key={c.href}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative inline-flex items-center gap-2 py-1 text-[14px] text-[var(--cream-deep)] transition-colors hover:text-[var(--yellow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--yellow)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[var(--yellow)] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[15px] w-[15px] shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                >
                  {c.icon}
                </svg>
                {c.label}
              </a>
            ))}
          </nav>
          <div className="w-full text-[12px] text-[var(--cream-deep)]/60 sm:w-auto sm:text-right">
            © 2026 Hivemedia · Ahmedabad, India
          </div>
        </div>
      </footer>
    </div>
  );
}
