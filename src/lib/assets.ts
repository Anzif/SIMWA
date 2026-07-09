// Base path the site is served from. Must match `basePath` in next.config.ts.
// Empty because the site is served from the root of the custom domain
// https://simwa.in. (Set to "/SIMWA" etc. only if hosting under a subpath.)
export const BASE_PATH = "";

// Prefix a public asset (e.g. "/images/logo.png") with the base path so it
// resolves correctly when the site is hosted under a subpath. Next.js only
// auto-prefixes <Link> and next/image, not plain <img>/<object> src strings.
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
