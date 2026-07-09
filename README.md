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

The site is optimized for deployment on [Vercel](https://vercel.com), the platform built by the creators of Next.js. Push to `main` and connect the repository in Vercel to enable automatic deployments. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
