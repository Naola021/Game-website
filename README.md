# [Your Gaming Company] — Website

Official marketing website for DemoGame Company, an independent game development studio. Built with [Astro](https://astro.build/), plain CSS,Typescript and vanilla JavaScript.

## About This Project

This site showcases the studio's games, services, past projects, and team, and provides a way for players, clients, and partners to get in touch.

**Pages:**

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, featured products, featured projects, services overview, contact CTA |
| Services | `/services` | What the studio offers, plus FAQ |
| Products | `/products` | Games developed/published, with filters |
| Projects | `/projects` | Portfolio of client/co-development work |
| About | `/about` | Studio story, timeline, team, mission & vision |
| Contact | `/contact` | Contact form (with validation), studio details, map |

Full architecture and page-behavior documentation: [`docs/architecture.md`](./docs/architecture.md).

## Tech Stack

- **[Astro](https://astro.build/)** — static site framework (`.astro` files: HTML-like markup + a small script block for logic)
- **Plain CSS** — scoped `<style>` blocks per page, shared brand variables (colors) defined once in `src/layouts/PageLayout.astro`
- **Vanilla JavaScript** — used only where real interactivity is needed (mobile menu, FAQ accordion, form validation, scroll effects) — no frontend framework (React/Vue) is used
- **TypeScript** — used minimally, only in config/data files (e.g. page frontmatter, `src/navigation.ts`)

## Getting Started

**Requirements:** Node.js ≥ 22.12.0

```bash
# 1. Clone the repo
git clone https://github.com/Amargna/fms-website.git
cd fms-website

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev
```

Then open **http://localhost:4321** in your browser.

### Other commands

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server with live reload |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Check the project for errors |

## Project Structure

```
src/
├── layouts/
│   ├── Layout.astro       → base HTML document (head, SEO meta tags) — don't need to edit this often
│   └── PageLayout.astro   → header, footer, announcement banner, and brand color variables (shared site-wide)
├── pages/
│   ├── index.astro        → Home
│   ├── services.astro     → Services
│   ├── products.astro     → Products
│   ├── projects.astro     → Projects
│   ├── about.astro        → About
│   └── contact.astro      → Contact
public/
└── logo.svg                → studio logo (used in header and footer)
docs/
└── architecture.md         → full site architecture & page-behavior spec
```

### How to update site-wide branding (colors, header, footer)

All colors are defined once as CSS variables inside `src/layouts/PageLayout.astro` (`:root { ... }`). Changing a value there updates every page automatically — no need to edit individual page files.

The logo is an image at `public/logo.svg` — replace that file to update the logo across the whole site.

### How to update a single page

Open the relevant file in `src/pages/`. Each page has its own scoped `<style>` block at the bottom for anything specific to that page, and pulls shared colors/fonts from the variables set in `PageLayout.astro`.

## Still To Do

- [ ] Replace placeholder content  with real copy
- [ ] Add real game/project images, team photos, and hero background
- [ ] Update `src/config.yaml` with final site name and SEO metadata
- [ ] Add real studio address for the Contact page map

## Deployment

```bash
npm run build
```

Generates a static build in `./dist/`, deployable to any static hosting provider (Netlify, Vercel, etc.). Deployment configs for both are already present in the repo root (`netlify.toml`, `vercel.json`).

## License

MIT — see [`LICENSE.md`](./LICENSE.md).
