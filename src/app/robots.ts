import type { MetadataRoute } from "next";

// Required under output: "export" — these are Route Handlers, and the build
// refuses to prerender them without it.
export const dynamic = "force-static";

/**
 * Nothing is private on a one-page site, so everything is crawlable. The
 * sitemap line is what actually earns its keep: the domain is days old and
 * has no inbound links, so Google has no other way to find it.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hivemedia.co.in/sitemap.xml",
  };
}
