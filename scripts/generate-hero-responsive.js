// Generates responsive WebP variants for the hero slides.
// Source images live in public/ with legacy (inconsistent) names; outputs go to
// public/hero/ with clean names: hero-{n}-{width}.webp
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const outDir = join(publicDir, 'hero')

// index (1-based) -> legacy source filename
const sources = {
  1: 'Slide 1.webp',
  2: 'slide-2.webp',
  3: 'slide-3.webp',
  4: 'Slide 4 .webp',
}

const widths = [640, 1024, 1536, 1920]

async function run() {
  await mkdir(outDir, { recursive: true })
  for (const [n, file] of Object.entries(sources)) {
    for (const w of widths) {
      const out = join(outDir, `hero-${n}-${w}.webp`)
      await sharp(join(publicDir, file))
        .resize({ width: w })
        .webp({ quality: 72, effort: 6 })
        .toFile(out)
      const { size } = await sharp(out).metadata().then(() => import('node:fs').then(fs => fs.promises.stat(out)))
      console.log(`hero-${n}-${w}.webp  ${(size / 1024).toFixed(0)} KB`)
    }
  }
}

run()
