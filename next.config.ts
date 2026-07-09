import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site (HTML/CSS/JS) into `out/` on build.
  output: "export",
  // Static export can't use the on-demand image optimizer.
  images: { unoptimized: true },
  // Emit `about/index.html` etc. so static hosts serve clean URLs.
  trailingSlash: true,
};

export default nextConfig;
