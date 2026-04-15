# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build for production (SSR)
npm run generate  # Build as static site
npm run preview   # Preview production build
```

## Architecture

Single-page restaurant showcase built with **Nuxt 3** (static generation) + **Tailwind CSS** + **@nuxt/image**.

- `pages/index.vue` — the entire site lives in one page (hero, menu, about, gallery, reservation form, footer)
- `nuxt.config.ts` — modules registered here: `@nuxtjs/tailwindcss`, `@nuxt/image`. Head metadata (fonts, favicon) configured in `app.head`
- `tailwind.config.ts` — custom color palette: `cream`, `warm-gray`, `charcoal`, `terracotta`. Custom fonts: `font-serif` (Playfair Display), `font-sans` (Inter)
- `assets/css/main.css` — Tailwind directives + `scroll-behavior: smooth`
- `public/` — static assets served at root (favicon goes here as `favicon.png`)

## Design tokens

| Token | Value | Usage |
|---|---|---|
| `cream` | `#F9F5EF` | Page background |
| `warm-gray` | `#8C7B6B` | Secondary text, borders |
| `charcoal` | `#2C2C2C` | Primary text |
| `terracotta` | `#C1440E` | CTAs, accents |
| `font-serif` | Playfair Display | Headings, brand name |
| `font-sans` | Inter | Body text |
