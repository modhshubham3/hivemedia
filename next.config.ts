import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route is prerendered, so the site ships as plain files — no Node
  // runtime and no Cloudflare adapter needed. Build output lands in ./out.
  output: "export",

  // Static export has no image-optimisation server; the only image is an SVG.
  images: { unoptimized: true },

  trailingSlash: true,
};

export default nextConfig;
