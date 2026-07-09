import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site (HTML/CSS/JS) into `out/` on build.
  output: "export",
  // Static export can't use the on-demand image optimizer.
  images: { unoptimized: true },
  // Emit `about/index.html` etc. so static hosts serve clean URLs.
  trailingSlash: true,
  // Served from the root of the custom domain https://simwa.in, so no
  // basePath is needed. (If you ever host under a subpath instead, set
  // basePath here and BASE_PATH in src/lib/assets.ts to match.)
};

export default nextConfig;
