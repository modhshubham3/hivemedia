import type { MetadataRoute } from "next";

// Required under output: "export" — these are Route Handlers, and the build
// refuses to prerender them without it.
export const dynamic = "force-static";

/**
 * One page, so one entry. Worth having anyway — it gives Google a URL to
 * fetch on a brand-new domain instead of waiting to discover it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hivemedia.co.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
