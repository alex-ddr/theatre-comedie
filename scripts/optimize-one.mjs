import path from 'node:path';
import { promises as fs } from 'node:fs';
import sharp from 'sharp';

const ROOT = process.cwd();
const INPUT_DIR = path.join(ROOT, 'public', 'img');
const OUTPUT_DIR = path.join(INPUT_DIR, 'optimized');

const VARIANTS = [
  { suffix: 'card', width: 400, quality: 50 },
  { suffix: 'hero', width: 1000, quality: 60 },
];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function run(filename) {
  try {
    await ensureDir(OUTPUT_DIR);
    const inputPath = path.join(INPUT_DIR, filename);
    const baseName = path.parse(filename).name;
    const image = sharp(inputPath, { failOn: 'none' });
    const metadata = await image.metadata();

    if (!metadata.width) {
      console.error('[skip] No width metadata:', filename);
      process.exit(2);
    }

    for (const variant of VARIANTS) {
      const outputPath = path.join(OUTPUT_DIR, `${baseName}-${variant.suffix}.webp`);
      console.log('Writing', outputPath);
      await sharp(inputPath, { failOn: 'none' })
        .resize({ width: Math.min(variant.width, metadata.width), withoutEnlargement: true, fit: 'cover' })
        .webp({ quality: variant.quality, effort: 5 })
        .toFile(outputPath);
    }

    console.log('[ok]', filename);
  } catch (err) {
    console.error('Error optimizing', filename, err && err.stack ? err.stack : err);
    process.exit(1);
  }
}

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/optimize-one.mjs <filename>');
  process.exit(1);
}

run(file);
