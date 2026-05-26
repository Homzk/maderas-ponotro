/**
 * Generate public/logo-seo-square.jpg (1200×1200) from public/logo-seo.png.
 *
 * The source (public/logo-seo.png — actually a JPEG despite the extension) is a
 * horizontal banner with the white Maderas Ponotro logo centered over a
 * forest-textured green background. Google's Organization JSON-LD `logo` renders
 * best as a square, so this:
 *   1) Reads the source dimensions
 *   2) Crops the largest centered square (sides for landscape, top/bottom for portrait)
 *   3) Resizes that square to 1200×1200
 *   4) Outputs JPEG q88 — the source is already a lossy JPEG, so PNG would only
 *      bloat the file (~10×) without any quality gain. q88 stays well under 300 KB.
 *
 * The original is never overwritten — only logo-seo-square.jpg is produced.
 *
 * Run:   npm run generate:logo-seo
 */
import sharp from 'sharp'
import { stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC = join(ROOT, 'public', 'logo-seo.png')
const OUT = join(ROOT, 'public', 'logo-seo-square.jpg')

const SIZE = 1200

const image = sharp(SRC)
const { width, height } = await image.metadata()

// Largest centered square that fits inside the source
const side = Math.min(width, height)
const left = Math.round((width - side) / 2)
const top = Math.round((height - side) / 2)

console.log(`Source: ${width}×${height}  →  centered ${side}×${side} crop at (${left}, ${top})  →  ${SIZE}×${SIZE}`)

await image
    .extract({ left, top, width: side, height: side })
    .resize(SIZE, SIZE, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 88, progressive: true })
    .toFile(OUT)

const { size } = await stat(OUT)
console.log(`✓ Generated ${OUT} (${(size / 1024).toFixed(1)} KB)`)
