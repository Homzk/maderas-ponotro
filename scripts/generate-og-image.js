/**
 * Generate public/og-image.jpg (1200×630) from the Hero's main slide.
 *
 * Output is composed of:
 *   1) Slide 1.webp resized to 1200×630 (fit: cover, center)
 *   2) A dark linear-gradient overlay on the bottom half (transparent → 0.75 alpha)
 *   3) An SVG overlay with the brand title, subtitle and a top-right location badge
 *
 * The branding is rendered as a single SVG composited on top of the photo so the
 * text layout is deterministic regardless of which system fonts sharp can resolve
 * (the SVG only requests broadly-available family fallbacks: Georgia, Helvetica, Arial).
 *
 * Run:   npm run generate:og
 */
import sharp from 'sharp'
import { stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC = join(ROOT, 'public', 'Slide 1.webp')
const OUT = join(ROOT, 'public', 'og-image.jpg')

const W = 1200
const H = 630
const FOREST = '#065F46'

const overlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgb(0,0,0)" stop-opacity="0" />
      <stop offset="100%" stop-color="rgb(0,0,0)" stop-opacity="0.75" />
    </linearGradient>
  </defs>

  <!-- Dark gradient on the lower half so the title remains legible on any photo -->
  <rect x="0" y="315" width="${W}" height="315" fill="url(#bottomFade)" />

  <!-- Main title — duplicated with a small offset to simulate text-shadow -->
  <text x="62" y="522" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="600" fill="rgb(0,0,0)" fill-opacity="0.4">Maderas Ponotro</text>
  <text x="60" y="520" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="600" fill="#ffffff">Maderas Ponotro</text>

  <!-- Subtitle with letter-spacing for a wider, more institutional feel -->
  <text x="60" y="580" font-family="Helvetica, Arial, sans-serif" font-size="22" letter-spacing="4" fill="rgb(255,255,255)" fill-opacity="0.92">ELABORACIÓN · IMPREGNACIÓN · DESPACHO</text>

  <!-- Top-right badge: brand green pill with location label -->
  <g transform="translate(960, 30)">
    <rect width="210" height="42" rx="6" fill="${FOREST}" />
    <text x="105" y="28" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="500" letter-spacing="2" fill="#ffffff">CAÑETE · BIOBÍO</text>
  </g>
</svg>`

await sharp(SRC)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .composite([{ input: Buffer.from(overlaySvg), top: 0, left: 0 }])
    .jpeg({ quality: 85, progressive: true })
    .toFile(OUT)

const { size } = await stat(OUT)
console.log(`✓ Generated ${OUT} (${(size / 1024).toFixed(1)} KB)`)
