# Vasavi Uppari — Portfolio

A personal portfolio website for Vasavi Uppari, a fashion designer, commercial stylist, and brand marketing professional based in Leicester, UK. Built with TanStack Start and deployed on Netlify.

## Key Technologies

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + inline styles (fashion palette) |
| Content | Content Collections (type-safe markdown) |
| Deployment | Netlify (with Netlify Forms for contact) |
| Language | TypeScript 5.7 (strict mode) |

## Running Locally

```bash
npm install
npm run dev        # Development server at http://localhost:3000
npm run build      # Production build
npm run preview    # Preview production build
```

Or with the Netlify CLI (recommended — emulates Netlify Forms):

```bash
netlify dev        # Runs at http://localhost:8888
```

## Environment Variables

None required for basic portfolio functionality. The contact form uses Netlify Forms (no backend needed).

## Content

All portfolio content lives in `/content/`:

- `content/jobs/` — Work experience entries
- `content/education/` — Education history
- `content/projects/` — Portfolio work showcase

Edit the markdown files to update content. Frontmatter fields are validated by Zod schemas in `content-collections.ts`.
