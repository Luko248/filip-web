# ddbfilio — portfolio web

Modern, dark **neo / glassmorphism** one-page portfolio for **Filip Barborík**
(stage name **ddbfilio**, formerly *Dream Diven Boy* and *Filio*) — an
underground rap artist from Brno, active since 2008.

Built with **Astro** + **Tailwind CSS v4**, following a **CSS-first** approach
(the [`css-first`](https://github.com/luko248/css-first-skill) skill): the rich
effects use modern, mostly zero-JS CSS — `backdrop-filter` glass, `color-mix()`,
scroll-driven reveal animations (`animation-timeline: view()`), scroll-snap
sections, conic halos and an animated aurora background.

## Sections

- **Hero** — animated name + tagline
- **Story** — the three artistic identities (Filio → Dream Diven Boy → ddbfilio)
- **Music** — live embedded Spotify player + selected discography
- **Gallery** — CSS-art poster tiles for eras & releases
- **Connect** — links to every social & music platform

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview
```

## Editing content

All copy and links live in [`src/data/site.ts`](src/data/site.ts) — a single
source of truth. Each link is flagged `verified: true/false`; the `false` ones
are best-guess handles derived from the artist's aliases and should be confirmed
before going live.

## Photos

No third-party photos are bundled (copyright). The gallery uses CSS-generated
artwork. To add real photos of the artist, see
[`public/images/README.md`](public/images/README.md).

## Accessibility

Respects `prefers-reduced-motion` and `prefers-reduced-transparency`, uses
logical properties, semantic landmarks and labelled icon links.
