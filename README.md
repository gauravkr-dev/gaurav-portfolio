# Gaurav's Portfolio

A modern personal portfolio built with Next.js and TypeScript showcasing projects, skills, services, and contact information.

**Live demo:** <https://gauravkr-dev.vercel.app>



<img width="1919" height="886" alt="Portfolio_new" src="https://github.com/user-attachments/assets/808af23a-f1c0-46ef-a3da-b05ee0e6fa49" />



**Technologies:** Next.js (App Router), TypeScript, Tailwind/PostCSS, React

**Project purpose:** This repository hosts a clean, component-driven portfolio that highlights work, experience, and ways to contact the owner.

## Features

- **Hero, About & Contact sections**: Intro, biography, and contact form components.
- **Projects showcase**: Project cards with descriptions and links.
- **Services & Pricing**: Service offerings and pricing cards.
- **Responsive design**: Mobile-first layout and accessible components.
- **Reusable UI primitives**: Shared UI components in `components/` and `ui/` for consistency.

## Repository Structure

- `app/` — Next.js App Router pages and layout. Main entrypoint is [app/page.tsx](app/page.tsx).
- `app/_components/` — Page sections: Hero, About, Projects, Contact, etc.
- `components/` — Reusable components (e.g. `pricing-card.tsx`, animated primitives).
- `ui/` — Small UI primitives and icons.
- `lib/` — Utility functions.
- `hooks/` — Custom React hooks.
- `public/` — Static assets.

## Getting Started

Prerequisites: Node.js (18+ recommended) and a package manager (`npm`, `pnpm`, or `yarn`).

1. Install dependencies

```bash
npm install
# or
# pnpm install
# or
# yarn
```

1. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Create production build
- `npm run start` — Run production build locally
- `npm run lint` — Run ESLint (if configured)

## How to Customise

- Update content in `app/_components/` (AboutSection, ProjectSection, etc.) to change displayed text and projects.
- Replace images in `public/` and update references in the components.
- Modify styles in `app/globals.css` or Tailwind/PostCSS config to change visual theme.

## Deployment

You can deploy to Vercel (recommended for Next.js) or any static hosting that supports Next.js builds.

Example (Vercel):

1. Connect the repo to Vercel.
2. Set build command: `npm run build` and output directory (Vercel auto-detects Next.js).

## Contributing

Feel free to open issues or PRs for improvements. For local changes, follow the usual fork → branch → PR flow.

---
