import Image from "next/image";
import TextScrollMarquee from "@/components/lightswind/text-scroll-marquee";
import HexField from "@/components/HexField";
import NotifyForm from "@/components/NotifyForm";

const SERVICES =
  "Social Media  ⬡  Performance Ads  ⬡  Content Production  ⬡  Influencer Marketing  ⬡  Brand Films  ⬡  SEO  ⬡  Design & Identity  ⬡";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <HexField />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-[40%] z-0 h-[min(85vw,1000px)] w-[min(85vw,1000px)] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,206,0,.38), transparent 70%)",
        }}
      />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="relative z-10 flex items-center justify-between px-5 py-[22px] sm:px-8 lg:px-14">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo-bee.svg"
            alt=""
            width={40}
            height={34}
            priority
            className="h-[34px] w-auto"
          />
          <span className="font-[family-name:var(--font-syne)] text-[19px] font-bold tracking-[-0.01em]">
            Hivemedia
            <span className="text-[var(--yellow)]">.</span>
          </span>
        </div>
        <div className="hidden text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] sm:block">
          Digital Marketing · India
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-16 pt-10 text-center sm:px-8 lg:px-14">
        <div className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[var(--ink)] bg-[var(--yellow)] px-[18px] py-2.5 text-[12px] font-semibold uppercase tracking-[0.28em] shadow-hard">
          <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[var(--ink)]" />
          Coming Soon
        </div>

        <h1 className="mt-8 font-[family-name:var(--font-syne)] text-[clamp(3.4rem,13vw,9.5rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.015em] text-balance">
          Hive
          <br />
          <span className="text-poster">Media</span>
        </h1>

        <p className="mt-7 max-w-[56ch] text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed text-[var(--ink-soft)]">
          Something&rsquo;s buzzing. A digital marketing agency for brands that
          want to be seen &mdash;{" "}
          <strong className="font-semibold text-[var(--ink)]">
            social media, performance ads, content and influencer campaigns
          </strong>{" "}
          that actually move the needle.
        </p>

        <NotifyForm />

        <div className="mt-4 text-[13px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
          Launching 2026 · hivemedia.co.in
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
      <footer className="relative z-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 bg-[var(--ink)] px-5 py-7 text-center sm:px-8 sm:justify-between sm:text-left lg:px-14">
        <nav aria-label="Contact" className="flex flex-wrap justify-center gap-7">
          <a
            href="mailto:hello@hivemedia.co.in"
            className="inline-flex items-center gap-2 text-[14px] text-[var(--cream-deep)] transition-colors hover:text-[var(--yellow)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[15px] w-[15px] shrink-0">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            hello@hivemedia.co.in
          </a>
          <a
            href="tel:+919000000000"
            className="inline-flex items-center gap-2 text-[14px] text-[var(--cream-deep)] transition-colors hover:text-[var(--yellow)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[15px] w-[15px] shrink-0">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            +91 90000 00000
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-[var(--cream-deep)] transition-colors hover:text-[var(--yellow)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[15px] w-[15px] shrink-0">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @hive.media
          </a>
        </nav>
        <div className="w-full text-[12px] text-[var(--cream-deep)]/65 sm:w-auto sm:text-right">
          © 2026 Hive Media{" "}
          <span className="text-[var(--yellow)]/90">
            · demo preview — placeholder contacts
          </span>
        </div>
      </footer>
    </div>
  );
}
