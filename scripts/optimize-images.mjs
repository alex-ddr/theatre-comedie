import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const INPUT_DIR = path.join(ROOT, "public", "img");
const OUTPUT_DIR = path.join(INPUT_DIR, "optimized");

const VARIANTS = [
  { suffix: "card", width: 640, quality: 72 },
  { suffix: "hero", width: 1280, quality: 78 },
];

const SOURCE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function getImageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => {
      if (!entry.isFile()) return false;
      const ext = path.extname(entry.name).toLowerCase();
      return SOURCE_EXTENSIONS.has(ext);
    })
    .map((entry) => entry.name)
    .filter((name) => !name.includes("og-image"));
}

async function optimizeFile(fileName) {
  const inputPath = path.join(INPUT_DIR, fileName);
  const baseName = path.parse(fileName).name;
  const image = sharp(inputPath, { failOn: "none" });
  const metadata = await image.metadata();

  if (!metadata.width) {
    console.warn(`[skip] No width metadata: ${fileName}`);
    return;
  }

  for (const variant of VARIANTS) {
    const outputPath = path.join(OUTPUT_DIR, `${baseName}-${variant.suffix}.webp`);
    await sharp(inputPath, { failOn: "none" })
      .resize({
        width: Math.min(variant.width, metadata.width),
        withoutEnlargement: true,
        fit: "cover",
      })
      .webp({ quality: variant.quality, effort: 5 })
      .toFile(outputPath);
  }

  console.log(`[ok] ${fileName}`);
}

async function main() {
  await ensureDir(OUTPUT_DIR);
  const files = await getImageFiles(INPUT_DIR);

  if (files.length === 0) {
    console.log("No source images found in public/img");
    return;
  }

  for (const fileName of files) {
    await optimizeFile(fileName);
  }

  console.log(`Optimized ${files.length} image(s) into public/img/optimized`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
