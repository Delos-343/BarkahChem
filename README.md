# BarkahChem Solutions - Landing Page

A modern, gradient-themed, gracefully-animated single-page site for the BarkahChem
Solutions online store (automotive care · fragrance · dishwashing · gum rosin).

Built with **Next.js 14 (App Router, TypeScript)**, **Tailwind CSS**, **Framer Motion**
and **lucide-react**, organised with **atomic design** and exported as a fully static
site for shared / cPanel hosting.

---

## Quick start (Yarn)

This project uses **Yarn** (pinned via the `packageManager` field, so Corepack picks
the right version automatically on Node 18+).

```bash
corepack enable      # one-time, enables the pinned Yarn
yarn install
yarn dev             # http://localhost:3000
```

## Production build (static export)

```bash
yarn build
```

Generates a self-contained static site in **`out/`** - plain HTML/CSS/JS, no server
required. A pre-built `out/` is included, and the same files are provided as
`barkahchem-static-site.zip`.

| Script | Does |
| --- | --- |
| `yarn dev` | Local dev server with hot reload |
| `yarn build` | Production build + static export to `out/` |
| `yarn start` | Serve the production build locally |
| `yarn lint` | Run Next.js/ESLint checks |

---

## Performance & scaling features

This build is set up to stay fast as the site grows:

- **Lazy-loaded sections** - below-the-fold organisms (product details, how-to-order,
  why-us, contact) are code-split with `next/dynamic` and stream in behind skeletons,
  keeping the initial JS payload small. SSR stays on, so content is still in the HTML
  for SEO.
- **Skeleton loading** - a reusable `Skeleton` atom (shimmer) plus per-section
  skeletons and a route-level `app/loading.tsx`. Ready to reuse the moment any section
  starts fetching live data from an API/CMS.
- **Lean animations** - Framer Motion is loaded via `LazyMotion` with only the
  `domAnimation` feature set and the lightweight `m` component, cutting the animation
  bundle. Reveal-on-scroll uses the `useInView` hook (never leaves content hidden).
- **`content-visibility: auto`** - offscreen sections skip rendering work until they
  approach the viewport, improving initial render and scroll performance on long pages.
- **Memoised cards** - repeated presentational components (`CategoryCard`,
  `ProductRow`, `FeatureCard`, `StatCounter`, `StepCard`, `ContactCard`) are wrapped in
  `React.memo`.
- **SEO routes** - `app/sitemap.ts` and `app/robots.ts` emit a static `sitemap.xml` and
  `robots.txt` on every build.

---

## Deploying to cPanel (wirogunan.idweb.host)

No Node.js needed on the server - this is a static site.

### Option A - upload the ready-made zip (easiest)

1. Log in to cPanel: `https://wirogunan.idweb.host:2083/`
2. Open **File Manager**.
3. Go into the folder your domain serves from - usually **`public_html`**.
4. **Upload** `barkahchem-static-site.zip`.
5. Right-click the uploaded zip → **Extract** into the current folder.
6. Make sure **`index.html` sits directly inside `public_html`** (not in a nested
   `out/` folder). If needed, open the extracted folder, Select All, and **Move** the
   files up one level.
7. Delete the zip and visit your domain. Done.

### Option B - upload the `out/` folder contents

Upload everything **inside** `out/` (`index.html`, `404.html`, `icon.svg`,
`robots.txt`, `sitemap.xml` and the `_next/` folder) into `public_html`.

### Deploying into a sub-directory

If the site lives at `example.com/store/`, set a base path in `next.config.mjs`:

```js
basePath: "/store",
assetPrefix: "/store",
```

then `yarn build` and upload `out/` into that sub-directory.

---

## Customising the content

Everything is data-driven - you rarely touch the components.

| What to change | File |
| --- | --- |
| Brand name, WhatsApp number, email, hours, nav links | `src/lib/site.ts` |
| Product categories & individual products | `src/lib/products.ts` |
| Stats, "why choose us" features, order steps | `src/lib/content.ts` |
| Colours, gradients, fonts, animations | `tailwind.config.ts` |
| Public site URL (for sitemap/robots/OG tags) | `src/lib/site.ts` (`url`) |

**Replace the placeholders** in `src/lib/site.ts`: the WhatsApp number
(`+62 812-XXXX-XXXX`) and email (`info@barkahchem.com`). Update once and every button,
link and the footer follow automatically.

---

## Project structure (atomic design)

```
src/
├── app/                 # layout, page, loading skeleton, globals, sitemap, robots, favicon
├── lib/                 # data layer - site config + product/content data
└── components/
    ├── atoms/           # Button, Icon, Logo, Pill, Container, GradientText, Aurora, Skeleton
    ├── molecules/       # CategoryCard, ProductRow, FeatureCard, StatCounter, StepCard, ContactCard…
    ├── organisms/       # Navbar, Hero, Categories, ProductShowcase, HowToOrder, WhyChooseUs,
    │                    #   Contact, Footer, WhatsAppFloat, SectionSkeleton
    ├── templates/       # LandingTemplate - composes + lazy-loads the page
    └── motion/          # MotionProvider (LazyMotion), Reveal, StaggerGroup, variants
```

## Notes

- **Animations require JavaScript.** A pure-CSS fallback (`@media (scripting: none)`)
  keeps all content visible if JS is disabled, and everything respects
  `prefers-reduced-motion`.
- **Fully responsive** from large desktops down to small phones.
- Fonts (Inter + Plus Jakarta Sans) load from Google Fonts at runtime.

## Security reminder

You shared your cPanel password in chat. Please **change it** in cPanel → *Password &
Security*, and avoid sending live credentials in plain text in future.
