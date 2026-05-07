# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build (outputs dist/)
npm run preview   # preview the production build locally
npm run lint      # ESLint check
```

No test suite is configured. There is no single-test command.

## Architecture

Single-page React app (Vite + Tailwind) for a Chilean lumber company. No router — the entire site is one scrollable page with anchor-based navigation (`#inicio`, `#productos`, `#proceso`, `#historia`, `#contacto`).

**Entry point:** `src/main.jsx` wraps `<App>` in `<QuotationCartProvider>`.

**Page layout (`src/App.jsx`):** Hero is loaded eagerly (above the fold); all other sections use `React.lazy` + `<Suspense>` for code-splitting.

**State:** A single global context (`src/context/QuotationCartContext.jsx`) manages the quotation cart using `useReducer`. No external state library. The cart drives the contact form — `getCartMessage()` serialises cart items into a formatted string sent via EmailJS.

**Contact / email flow:**
- `src/utils/emailService.js` — EmailJS integration, requires three env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`. `emailjs-com` is dynamically imported (keeps it out of the initial bundle).
- `src/utils/validation.js` — pure validation helpers used by the contact form.
- When the cart has items, the message field becomes optional (`hasCartItems` flag in `validateForm`).

**Product data:** Static array in `src/data/products.js`. Cart items can have a `cartItemId` (for configured variants like specific lengths/treatments) that overrides `id` for uniqueness.

**Hero:** `src/components/layout/Hero.jsx` is a manual carousel with 4 slide components (`Hero/Slides/Slide1–4.jsx`) and touch swipe support. Backgrounds are defined in `src/constants/heroData.js`.

**Animations:** `src/hooks/useScrollReveal.js` provides `useScrollReveal` (single element) and `useScrollRevealStagger` (staggered list/grid), both based on `IntersectionObserver`.

## Styling conventions

Tailwind with a custom design system in `tailwind.config.js`:
- **Colors:** `forest-dark/forest/forest-medium/forest-light` (greens), `accent-gold/accent-gold-light/accent-gold-dark` (bronze), `cream/cream-dark`, `charcoal/charcoal-light`.
- **Fonts:** `font-sans` (Open Sans, body), `font-display` (Montserrat, headings/buttons).
- **Breakpoints:** Two custom height-based screens — `short` (max-height 750 px) and `medium-h` (751–900 px), used for Hero sizing on small-viewport devices.
- Reusable component classes defined in `src/index.css` under `@layer components`: `btn-primary`, `btn-secondary`, `btn-outline`, `section-title`, `section-subtitle`, `card`.

## Build plugins

`vite.config.js` uses:
- `vite-plugin-compression` — generates `.br` (Brotli) files at build time.
- `vite-plugin-image-optimizer` — optimises WebP/JPEG/PNG at quality 80.
- Manual chunks split React (`react-vendor`) and react-icons into separate bundles.
