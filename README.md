# Batwe Ania

Non-profit website for the Batwe Ania ecological park, built with Astro, Sanity CMS, and deployed to Vercel.

## Prerequisites

- Node.js 18+
- A [Sanity](https://www.sanity.io/) account (free tier works)
- A [Vercel](https://vercel.com/) account for deployment

## Project structure

```
├── src/                 # Astro site
│   ├── components/      # Section components (Hero, Mission, etc.)
│   ├── layouts/         # BaseLayout with fonts and global shell
│   ├── lib/             # Sanity client, types, and queries
│   ├── pages/           # index.astro (home page)
│   └── styles/          # global.css (Tailwind + custom utilities)
├── studio/              # Sanity Studio (separate npm package)
│   ├── schemas/         # Document schemas (siteSettings, homePage)
│   ├── sanity.config.ts
│   └── sanity.cli.ts
├── tailwind.config.mjs  # Design tokens from prototype
└── astro.config.mjs
```

## Getting started

### 1. Astro site

```bash
npm install
cp .env.example .env
# Fill in your Sanity project ID (see step 3)
npm run dev
```

The site runs at `http://localhost:4321`. Without Sanity env vars it renders with fallback content from the prototype.

### 2. Sanity Studio

```bash
cd studio
npm install
cp .env.example .env
# Fill in SANITY_STUDIO_PROJECT_ID
npm run dev
```

The Studio runs at `http://localhost:3333`.

### 3. Create a Sanity project

If you don't already have a project:

```bash
cd studio
npx sanity init
```

This will create a project and dataset on sanity.io. Copy the project ID into both `.env` files:

- Root `.env`: `SANITY_PROJECT_ID=<your-id>`
- `studio/.env`: `SANITY_STUDIO_PROJECT_ID=<your-id>`

Then add CORS origins in the [Sanity management console](https://www.sanity.io/manage):

- `http://localhost:4321` (for local Astro dev)
- `http://localhost:3333` (for local Studio)
- Your production URL when deployed

### 4. Content setup

The Studio has two singleton documents:

- **Site Settings** — site name, navigation items, footer links, social links, copyright line.
- **Home Page** — all sections (hero, mission, sanctuary rules, trail map, contribute, gallery, contact) as structured fields.

Open the Studio, publish both documents, then rebuild the Astro site to pull in the content.

## Deployment

### Astro site on Vercel

1. Import the repo in Vercel.
2. Set the **Root Directory** to `.` (repo root).
3. Framework preset: **Astro** (auto-detected).
4. Add environment variables matching `.env.example`.
5. Deploy.

No `vercel.json` is required for this setup.

### Sanity Studio

Two options:

**Option A — Sanity-hosted** (recommended for simplicity):

```bash
cd studio
npx sanity deploy
```

This gives you a `<name>.sanity.studio` URL.

**Option B — Vercel:**

Create a second Vercel project pointing to the same repo with **Root Directory** set to `studio`. Framework preset: leave as "Other" and set the build command to `npx sanity build` with output directory `dist`.

## Scripts

| Location | Command | Description |
|----------|---------|-------------|
| Root | `npm run dev` | Start Astro dev server |
| Root | `npm run build` | Build static site to `dist/` |
| Root | `npm run preview` | Preview production build |
| `studio/` | `npm run dev` | Start Sanity Studio dev server |
| `studio/` | `npm run build` | Build Studio to `studio/dist/` |
| `studio/` | `npm run deploy` | Deploy Studio to sanity.studio |
