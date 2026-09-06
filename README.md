# Hive Media — hivemedia.co.in

Website for **Hive Media**, a digital marketing agency.

**Status:** coming-soon page. Full site follows once client content arrives.

## Stack

- **Next.js 16** (App Router, TypeScript, static export-friendly)
- **Tailwind CSS 4** — theme tokens in `src/app/globals.css`
- **Lightswind UI** — `magnetic-button`, `text-scroll-marquee`

Add more Lightswind components as needed:

```bash
npx lightswind@latest add <component-name>
```

Only the components actually in use are kept in `src/components/lightswind/`. The
library ships 212; the rest were removed because several fail type-check against
their own peer-dependency versions and would break `next build`.

## Brand

| Token | Value | Use |
|---|---|---|
| Cream | `#FBF6E9` | page ground |
| Light yellow | `#FFCE00` | accent bands, buttons — sampled from the logo |
| Black | `#121110` | type, footer band |
| White | `#FFFFFF` | input and card surfaces |

Yellow is only ever used *behind* black type, never as text on cream — the two
are too close in lightness to read. All text pairs clear WCAG AA.

Logo assets live in `brand/`. `public/logo-bee.svg` is a **redraw** of the bee
mark as vector, because the supplied files are JPEGs with a grey background
baked in. Ask the designer for the original vector before using the logo in
print.

## Develop

Node 20+ required (this machine keeps Node 14 as the global default for other
projects, so run via the version folder directly):

```bash
npm run dev
```

## Deploy

Cloudflare, auto-deploying on every push to `main`.

Every route is prerendered, so `next.config.ts` sets `output: "export"` and
`next build` writes plain files to `./out`. `wrangler.toml` points Cloudflare's
static-asset serving at that directory — no Worker script and no Next.js
adapter involved.

Dashboard settings that matter:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |

Note that `npm run start` does **not** work in export mode. To preview the
built site locally:

```bash
npx serve out
```

## Placeholders still to replace

- Contact details in `src/app/page.tsx` (email, phone, Instagram) are dummy
- Services list in the marquee needs client confirmation
- No analytics, no form backend — the notify field opens a mail draft
