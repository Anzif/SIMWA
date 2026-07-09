# SIMWA

Official website of **SIMWA** — a Muslim welfare association dedicated to education, community welfare, and service. The site showcases news, events, the managing committee, a photo gallery, learning resources, and contact information.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Features

- **Home** — landing page with highlights, the five pillars, and hadith reflections
- **About** — the association's mission and story
- **Committee** — profiles of managing committee members
- **Gallery** — event and community photo galleries
- **News** — announcements and program updates
- **Learning** — Islamic learning resources
- **Contact** — get in touch with the association
- **Admin** — dashboard for managing content (in progress)

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router
- [React 19](https://react.dev)
- [TypeScript 5](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Supabase](https://supabase.com) — backend/database (planned)
- [sharp](https://sharp.pixelplumbing.com) & [heic-convert](https://www.npmjs.com/package/heic-convert) — image processing

## Getting Started

**Prerequisites:** Node.js 20+ and npm.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
simwa-site/
├── public/
│   ├── images/          # Committee, gallery, and landing images
│   └── pdfs/            # Newsletters and documents
├── scripts/             # Image refresh / processing utilities
└── src/
    ├── app/             # Pages (about, committee, gallery, news, etc.)
    ├── components/      # Shared UI components
    └── lib/             # Content data and helpers
```

Site content (news, committee members, hadiths, etc.) lives in [`src/lib/content.ts`](src/lib/content.ts).

## Deployment

This is a **fully static site** — `npm run build` produces a self-contained `out/` folder of HTML, CSS, and JS (configured via `output: "export"` in [`next.config.ts`](next.config.ts)). No server or backend is required.

```bash
npm run build   # generates ./out
```

Deploy the `out/` folder to any static host — GitHub Pages, Netlify, Cloudflare Pages, Vercel, or plain object storage. All interactivity (gallery tabs, PDF viewer, contact form) runs in the browser.

### GitHub Pages (automated)

This repo ships a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds the site and publishes it to GitHub Pages on every push to `main`.

**One-time setup:** in the repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

The site is served from the `/SIMWA` subpath (`https://<user>.github.io/SIMWA`), configured via `basePath` in [`next.config.ts`](next.config.ts) and the `asset()` helper in [`src/lib/assets.ts`](src/lib/assets.ts). Both are production-only, so `npm run dev` stays at `http://localhost:3000/`.

> If you rename the repository or use a custom domain, update `basePath` in `next.config.ts` and `BASE_PATH` in `src/lib/assets.ts` to match (or set both to `""` for a root/custom domain).
