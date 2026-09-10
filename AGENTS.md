# AGENTS.md — Portfolio Architecture

## Overview

Personal portfolio for Vasavi Uppari — fashion designer, commercial stylist, and marketing professional. TanStack Start SSR app on Netlify.

## Directory Structure

```
content/           # Markdown content (type-safe via Content Collections)
  jobs/            # Work experience — each .md = one role
  education/       # Education — each .md = one institution
  projects/        # Portfolio work items — each .md = one project
  blog/            # Blog posts (schema kept, not linked in nav)
public/            # Static assets served at /
  Vasavi_Uppari_MASTER_CV_Final.pdf  # Downloadable CV
  contact.html     # Netlify Forms dummy endpoint (required for form submission)
src/
  routes/
    __root.tsx     # HTML shell + SiteNav + SiteFooter wrapping every page
    index.tsx      # Full landing page (hero, stats, about, work preview, contact teaser)
    resume.tsx     # Experience + education from content collections
    projects.tsx   # Work portfolio grid from content collections
    contact.tsx    # Contact form (Netlify Forms) + contact details
    blog/$slug.tsx # Blog post detail (route exists, not in nav)
  components/ui/   # Radix UI primitives (badge, card, etc.)
  lib/utils.ts     # cn() helper
  styles.css       # Tailwind import + fashion design tokens as CSS custom properties
content-collections.ts  # Zod schemas for all content types
```

## Design System

The site uses a bespoke fashion editorial palette, not the shadcn theme. Key CSS custom properties in `styles.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--cream` | `#f5f0e8` | Page background |
| `--ink` | `#1a1410` | Primary text, dark sections |
| `--muted-fg` | `#6b5e52` | Secondary text |
| `--gold` | `#b8922a` | Accent, section numbers |
| `--gold-light` | `#e8d5a3` | Gold on dark backgrounds |
| `--rose` | `#c4846a` | Italic emphasis colour |
| `--border-color` | `rgba(26,20,16,0.12)` | Dividers |
| `--serif` | Cormorant Garamond | Headings and editorial text |
| `--sans` | Jost | Body and UI text |

Styling uses **inline style objects** with CSS variables. Tailwind used sparingly for layout utilities.

## Content Collections

Schemas in `content-collections.ts`. Key fields:

- **jobs**: `jobTitle`, `company`, `location`, `startDate`, `endDate?`, `summary`, `tags[]`, `content`
- **education**: `school`, `summary`, `startDate`, `endDate?`, `tags[]`, `content`
- **projects**: `title`, `description`, `tags[]`, `github?`, `liveUrl?`, `image?`, `content`

## Navigation

Fixed top nav in `__root.tsx`. Pages: Home (`/`), Experience (`/resume`), Work (`/projects`), Contact (`/contact`).

## Contact Form

Uses Netlify Forms. POSTs to `/contact.html` (static dummy in `public/`) which Netlify uses to register the form schema at build time. `data-netlify="true"` on the `<form>` activates submission handling.

## Coding Conventions

- Inline style objects use CSS custom properties for the fashion palette
- Responsive breakpoints handled with `<style>` blocks at the bottom of each page component (CSS `@media` queries targeting className overrides)
- Content ordering done manually in route components with sorted arrays (e.g. `jobOrder` in `resume.tsx`)
- TypeScript strict mode — use `as const` for string literal style values
