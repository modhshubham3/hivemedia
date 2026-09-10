import ComingSoonBadge from "@/components/ComingSoonBadge";
import HexField from "@/components/HexField";
import NotifyForm from "@/components/NotifyForm";
import Reveal from "@/components/Reveal";
import BrandLockup from "@/components/BrandLockup";
import StoryButton from "@/components/StoryButton";
import HeroArt from "@/components/HeroArt";

// Descriptions are the client's own, lifted from their demo. Web Development
// and Branding are additions, so those two lines are drafts to approve.
const SERVICES = [
  {
    name: "Influencer Marketing",
    body: "The right voices for your brand — creator partnerships that feel genuine, not rented.",
  },
  {
    name: "Content Creation",
    body: "Scroll-stopping content built around your brand voice — reels, posts and stories that don't feel like ads.",
  },
  {
    name: "Digital Marketing",
    body: "Campaigns across search and social, planned with a clear goal and measured against real numbers.",
  },
  {
    name: "Web Development",
    body: "Sites and landing pages that load fast, look like the rest of your brand, and are built to be found.",
  },
  {
    name: "Graphic Design",
    body: "Logos, brand kits and visuals that keep every touchpoint looking like it belongs to you.",
  },
  {
    name: "Social Media Management",
    body: "Calendars, captions and community — we keep your channels active so you don't have to.",
  },
  {
    name: "Branding",
    body: "Name, look, voice and the rules that hold them together, so the brand stays itself everywhere it shows up.",
  },
];

const PILLARS = [
  { title: "Strategy-led", body: "Every post has a reason to exist." },
  { title: "Creative-first", body: "Ideas before templates, always." },
  { title: "Growth-focused", body: "Measured against real numbers." },
];

const CONTACTS = [
  {
    href: "mailto:hivemedia.co.in@gmail.com",
    label: "hivemedia.co.in@gmail.com",
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
    href: "https://www.instagram.com/hivemedia.co.in",
    label: "@hivemedia.co.in",
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
          lg:px-14, so on wide screens the lockup sat off the hero's edge. */}
      <header className="relative z-10 mx-auto flex w-full max-w-[1780px] items-center justify-between px-[max(6vw,calc(env(safe-area-inset-left)+1rem))] pb-5 pt-[max(1.5rem,calc(env(safe-area-inset-top)+0.75rem))] lg:px-14">
        <a
          href="#top"
          className="logo-lockup flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
          aria-label="Hivemedia home"
        >
          <BrandLockup className="wipe-highlight" />
        </a>
        <div className="tagline hidden text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] sm:block">
          <span className="wipe-highlight">Creative Agency · Ahmedabad</span>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <main className="relative z-20 mx-auto flex w-full max-w-[1780px] flex-1 items-center px-[6vw] pb-14 pt-4 lg:px-14">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Reveal>
              <ComingSoonBadge />
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 text-[clamp(3rem,7vw,6.2rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-balance">
                We turn brands
                <br />
                into <span className="text-poster">buzz.</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mx-auto mt-6 max-w-[50ch] text-[clamp(1.1rem,1.4vw,1.3rem)] font-medium leading-relaxed text-[var(--ink-soft)] lg:mx-0">
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
        <div className="mx-auto max-w-[1780px] px-[6vw] py-20 lg:px-14 lg:py-24">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-6 max-w-[24ch] text-[clamp(2.2rem,4.6vw,3.8rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-balance">
              How we help a brand get noticed.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => (
                <li
                  key={s.name}
                  className="border-t border-[var(--hairline)] pt-6"
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="hex h-2 w-2 shrink-0 translate-y-[-2px] bg-[var(--ink)]"
                    />
                    <h3 className="text-[22px] font-bold tracking-[-0.02em]">
                      {s.name}
                    </h3>
                  </div>
                  <p className="mt-2.5 pl-[22px] text-[16.5px] leading-relaxed text-[var(--ink-soft)]">
                    {s.body}
                  </p>
                </li>
              ))}
              <li className="border-t border-[var(--hairline)] pt-6">
                <div className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="hex h-2 w-2 shrink-0 translate-y-[-2px] bg-[var(--yellow)]"
                  />
                  <h3 className="text-[22px] font-bold tracking-[-0.02em]">
                    Something else?
                  </h3>
                </div>
                <p className="mt-2.5 pl-[22px] text-[16.5px] leading-relaxed text-[var(--ink-soft)]">
                  Tell us what you&rsquo;re building and we&rsquo;ll say
                  straight away whether it&rsquo;s something we can do well.{" "}
                  <a
                    href="mailto:hivemedia.co.in@gmail.com"
                    className="font-semibold text-[var(--ink)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--ink)]"
                  >
                    hivemedia.co.in@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── How we work ────────────────────────────────────── */}
      <section className="relative z-10 border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1780px] px-[6vw] py-20 lg:px-14">
          <Reveal>
            <div className="grid gap-10 sm:grid-cols-3 sm:gap-12">
              {PILLARS.map((p) => (
                <div key={p.title} className="border-t-2 border-[var(--ink)] pt-6">
                  <h3 className="text-[clamp(1.55rem,2.6vw,2.05rem)] font-extrabold tracking-[-0.03em]">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-[18.5px] font-medium leading-relaxed text-[var(--ink)]">
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
        <div className="mx-auto flex max-w-[1780px] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-[6vw] py-7 text-center sm:justify-between sm:text-left lg:px-14">
          <nav aria-label="Contact" className="flex flex-wrap justify-center gap-7">
            {CONTACTS.map((c) => (
              <a
                key={c.href}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative inline-flex items-center gap-2 py-1 text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[var(--ink)] after:transition-transform after:duration-300 hover:after:scale-x-100"
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
