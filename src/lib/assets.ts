// Base path the site is served from. Must match `basePath` in next.config.ts.
// Empty string in dev (served at "/"), "/SIMWA" in the GitHub Pages build.
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/SIMWA" : "";

// Prefix a public asset (e.g. "/images/logo.png") with the base path so it
// resolves correctly when the site is hosted under a subpath. Next.js only
// auto-prefixes <Link> and next/image, not plain <img>/<object> src strings.
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
