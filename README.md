# Netflix Homepage Clone (Prototype)

A frontend-only, pixel-accurate recreation of the netflix.com (US, logged-out) homepage, built for design exploration and demonstration.

> **Unofficial.** This project is not affiliated with, endorsed by, or connected to Netflix. It is a non-commercial prototype and must not be deployed or presented as an official Netflix site.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · Lucide React. There's no backend, API, auth, analytics or storage.

## What works

- **Trending Now** carousel: horizontal scroll, previous/next paging, card hover scale, title preview modal on click
- **FAQ** accordion (one item open at a time)
- **Language selector** in the header and footer, synced in local state
- **Email fields** accept input and show Netflix's validation messages. Submit is always blocked, and nothing is stored or sent.
- **Sign In** opens a mock "prototype only" dialog
- Responsive layout using Netflix's breakpoints: `<600`, `600–959`, `960–1279`, `≥1280`

## Project layout

```
app/            layout, page, global styles (breakpoints, gradients, curve, rank numerals)
components/     Header, Hero, EmailForm, AdsBanner, TrendingNow, TitleModal, ValueProps, Faq, Footer, …
lib/data.ts     static copy, titles, FAQ and footer content
lib/styles.ts   shared container / section classes
public/images/  section illustrations (SVG)
```

## Notes on assets

Layout values (spacing, sizes, colors, gradients) were measured from the live page's computed styles at 1440, 1024, 768 and 390px.

The hero artwork, posters, title art and the Netflix Sans font are **loaded at runtime from Netflix's public CDNs**. They aren't stored in this repo. Netflix rotates these URLs, so images may eventually stop loading. If that happens, update the URLs in `lib/data.ts`. All Netflix names, logos, artwork and fonts belong to Netflix, Inc.
