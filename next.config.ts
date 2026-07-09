import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site (HTML/CSS/JS) into `out/` on build.
  output: "export",
  // Static export can't use the on-demand image optimizer.
  images: { unoptimized: true },
  // Emit `about/index.html` etc. so static hosts serve clean URLs.
  trailingSlash: true,
  // Served from https://<user>.github.io/SIMWA in production, so route/asset
  // URLs are prefixed with the repo name. Kept off in dev so `npm run dev`
  // stays at http://localhost:3000/. Must match BASE_PATH in src/lib/assets.ts.
  basePath: process.env.NODE_ENV === "production" ? "/SIMWA" : undefined,
};

export default nextConfig;
