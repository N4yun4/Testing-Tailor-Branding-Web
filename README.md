# Atelier Noctra — Digital Atelier

A pristine, high-end landing page for a **bespoke costume & couture tailor**,
built to the *"Digital Atelier"* design system — a Parisian couture house
crossed with a master theatrical tailor.

🇮🇩 **Bahasa Indonesia** (luxury loanwords — *atelier, haute couture, bespoke,
corsetry* — kept intentionally).
🌗 **Dark / light theme** — defaults to the visitor's OS setting and remembers
their choice in `localStorage`.

> *"Tuhan ada di setiap jahitan."*

---

## ✦ Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + Vite 6 + TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) + CSS variable theming |
| Motion | Framer Motion (magnetic buttons, spotlight cards, staggered reveals, marquee) |
| Icons | `@phosphor-icons/react` (no emojis anywhere) |
| Fonts | Playfair Display (editorial serif) + Plus Jakarta Sans |
| Images | Unsplash (curated, verified couture imagery) |

## ✦ Quick start

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # type-check + production build -> dist/
npm run preview   # preview the production build
```

## ✦ Project structure

```
.
├── index.html                 # Vite entry + pre-paint theme script
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css              # Tailwind import + theme tokens + keyframes
│   ├── data.ts                # garments, craft steps, tiers, budgets, nav
│   ├── hooks/useTheme.ts       # OS-default theme, persisted on toggle
│   └── components/
│       ├── Header.tsx          # floating glass nav, scroll-aware, mobile menu
│       ├── Hero.tsx            # asymmetric hero + kinetic marquee
│       ├── Vault.tsx           # asymmetric grid of SpotlightCards (4:5)
│       ├── Craft.tsx           # editorial zig-zag (not a 3-card row)
│       ├── Commission.tsx      # form w/ error + submitting + success states
│       ├── Footer.tsx
│       ├── ThemeToggle.tsx
│       ├── MagneticButton.tsx  # cursor-magnetic, motion-value driven
│       ├── SpotlightCard.tsx   # cursor-tracked illuminated border
│       └── Reveal.tsx          # staggered scroll reveals
├── .github/workflows/deploy.yml
└── vite.config.ts             # base: "./" for GitHub Pages sub-paths
```

## ✦ Design system — The Midnight Boutique

| Token | Dark | Light |
|-------|------|-------|
| Background | `#141312` (Obsidian, never pure black) | `#ECE6DB` (warm parchment) |
| Surface | `#211E1D` | `#F7F2E9` |
| Accent | `#C5A880` (Antique Gold) | `#9A7B4F` (deepened gold) |
| Text | `#EAE6DF` (Silk White) | `#211E1B` |
| Muted | `#8C857B` | `#6E665B` |

- **The Hairline Rule** — no heavy drop-shadows; cards use a 1px gold border at
  25% opacity. The SpotlightCard adds a cursor-tracked glow *on top of* that
  hairline, so the rule holds at rest.
- **Section dividers** — a single razor-thin line, gold at 15% opacity.
- Every colour is a CSS variable swapped under `:root[data-theme="…"]`, so the
  whole system re-themes from one place.

## ✦ Deploy to GitHub Pages

The included workflow builds with Node and publishes `dist/` automatically.

```bash
git init
git add .
git commit -m "Atelier Noctra — React + Tailwind + Framer Motion"
git branch -M main
git remote add origin https://github.com/N4yun4/Testing-Tailor-Branding-Web.git
git push -u origin main
```

Then **GitHub → Settings → Pages → Source → GitHub Actions**. Every push to
`main` type-checks, builds, and redeploys. (`base: "./"` in `vite.config.ts`
keeps asset paths working under the project sub-path.)

## ✦ Customising

- **Garments / craft / budgets** — edit [`src/data.ts`](src/data.ts).
- **Commission form** — currently a front-end demo (`setTimeout`). Point the
  `onSubmit` handler in [`src/components/Commission.tsx`](src/components/Commission.tsx)
  at Formspree / Getform to receive real briefs.
- **Sizing Guide PDF** — drop a file in `public/` and link it from the footer.

## ✦ License

MIT — see [LICENSE](LICENSE).
