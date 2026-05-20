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

Single-page React app (Vite + Tailwind) for a Chilean lumber company. No router — the entire site is one scrollable page with anchor-based navigation (`#inicio`, `#productos`, `#proceso`, `#historia`, `#contacto`). Note: `react-router-dom` is listed in `package.json` but is not imported anywhere; do not assume routing is wired up. The `src/pages/` directory exists but is empty.

**Entry point:** `src/main.jsx` wraps `<App>` in `<QuotationCartProvider>`.

**Page layout (`src/App.jsx`):** Hero is loaded eagerly (above the fold); all other sections use `React.lazy` + `<Suspense>` for code-splitting.

**State:** A single global context (`src/context/QuotationCartContext.jsx`) manages the quotation cart using `useReducer`. No external state library. Cart contents are persisted to `localStorage` under the key `maderas-quotation-cart` and rehydrated on mount via `loadFromStorage()` (storage failures are swallowed silently). The cart drives the contact form — `getCartMessage()` serialises items (including configured `selectedLength`, `options.cepillada/impregnada`, `category`, and `isSpecialOrder` details) into a formatted string with `═══` separators sent via EmailJS. `scrollToContact()` closes the cart drawer and scrolls to `#contacto`.

**Contact / email flow:**
- `src/utils/emailService.js` — EmailJS integration, requires three env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`. `emailjs-com` is dynamically imported (keeps it out of the initial bundle). The destination address is configured in the EmailJS dashboard, NOT hardcoded in the frontend. In dev mode (`import.meta.env.DEV`) with missing env vars, `sendEmail` simulates a successful send (800 ms delay) instead of throwing — production still throws.
- `src/utils/emailService.js` also exports `CONTACT_INFO` (public `email`, `executives[]` with names/phones/whatsapp, `branches[]` with embed `mapUrl` for each ubicación, `hours`) and link helpers `getWhatsAppLink` / `getMailtoLink` / `getTelLink`. The public contact email is `Contacto.maderasponotro@gmail.com`.
- `src/utils/validation.js` — pure validation helpers used by the contact form. `validateForm(data, { hasCartItems })` makes the `message` field optional when the cart has items.
- `src/components/contact/ContactSection.jsx` renders a branch switcher driven by `CONTACT_INFO.branches` and swaps the embedded Google Maps iframe per selection. When the cart has items, the layout switches from 2 to 3 columns to include `QuotationSummary`.

**Product data:** Static array in `src/data/products.js`. Cart items can have a `cartItemId` (for configured variants like specific lengths/treatments) that overrides `id` for uniqueness in all reducer cases (`ADD_ITEM` / `REMOVE_ITEM` / `UPDATE_QUANTITY`).

**Products section:** `src/components/products/ProductGrid.jsx` renders catalog cards with a responsive initial visible count (3/4/6/8 per breakpoint) and inline quantity controls. `ProductDetailModal.jsx` is lazy-loaded from `App.jsx` and rendered only when a product is selected. `SpecialOrderCTA.jsx` lets users submit free-form custom orders that enter the cart with `isSpecialOrder: true`.

**Hero:** `src/components/layout/Hero.jsx` is a manual carousel with 4 slide components in `src/components/layout/Hero/Slides/Slide1–4.jsx` and touch swipe support. Backgrounds are defined in `src/constants/heroData.js`. A local `useExpandable` hook lives at `src/components/layout/Hero/hooks/useExpandable.js`.

**Animations:** `src/hooks/useScrollReveal.js` provides `useScrollReveal` (single element) and `useScrollRevealStagger` (staggered list/grid), both based on `IntersectionObserver`. Tailwind exposes a custom keyframe/animation set (`float`, `ken-burns`, `pan-slow`, `shimmer`, `pulse-gold`, `slide-up`, `slide-down`, `scale-in`, `spin-slow`, `bounce-once`) defined in `tailwind.config.js`.

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
- Manual chunks split React (`react-vendor`) and react-icons (`fa`, `fa6`, `fi`, `hi` subpaths grouped into `react-icons`) into separate bundles.
