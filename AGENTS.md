# AGENTS.md

Personal portfolio site: React 19 + Vite 8 + Tailwind CSS 4 (JavaScript only, no TypeScript).

## Commands

```bash
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run lint     # eslint .  — the only verification step; there are no tests or typecheck
npm run preview  # serve the production build locally
```

On this machine, PowerShell blocks `npm.ps1` (execution policy) — use `npm.cmd run lint` etc. in PowerShell, or run through cmd/bash.

Verify changes with `npm run lint` then `npm run build`. There is no test suite, typechecker, CI, or pre-commit hook.

## Demo/placeholder content

The site is filled with demo info pending real data: `public/resume.pdf` is a generated placeholder (replace with the real resume), the contact phone number (+880 1712-345678), degree title, and Softnio dates are illustrative. Project cards/modals use `public/project01-03.png` previews (mapped per project in the `projects` array in `src/components/Projects.jsx`). Don't treat these values as verified facts.

## Architecture

- Entry: `index.html` → `src/main.jsx` → `src/App.jsx`.
- Page sections live inline in `App.jsx` (Navbar, Hero, About, Contact, footer) plus split-out components: `src/components/Skills.jsx`, `Projects.jsx`, `Experience.jsx`.
- The nav is data-driven: `navLinks` in `App.jsx` must stay in sync with section `id` attributes (`#about`, `#skills`, `#projects`, `#experience`, `#contact`). Sections use `scroll-mt-24` so anchors clear the sticky header — keep that when adding sections.
- Content (skills, projects, experience, social links, email) is hardcoded as constants at the top of each component file — edit those, not markup.

## Tailwind v4 quirks

- No `tailwind.config.js`. Tailwind is wired via `@tailwindcss/vite` in `vite.config.js` and configured CSS-first through `@import "tailwindcss"` in `src/index.css`. Don't create a config file.
- Brand colors are used as inline arbitrary values, not theme tokens: navy `#14213d`, teal `#0d9488`, page bg `#f8fafc`. Follow that pattern (or add an `@theme` block in `index.css`) rather than mixing approaches.

## Assets

- Referenced images live in `public/` and are used by absolute path (e.g. `/sonia-profile.png`, `/favicon.svg`).
- `src/assets/` (vite.svg, react.svg, hero.png) is unused template leftover — don't import from it.

## Lint rules that bite

- ESLint flat config (`eslint.config.js`) lints only `**/*.{js,jsx}` and ignores `dist/`.
- `eslint-plugin-react-refresh` is enabled: component files may only export components. If you need to share non-component data, keep it unexported or move it to a non-component module.
- `eslint-plugin-react-hooks` is on the recommended ruleset — hooks rules are enforced even though there's no typechecker.
