import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const input = path.join(process.cwd(), "public", "img", "tout-est-sous-controle.png");
const outDir = path.join(process.cwd(), "public", "img", "optimized");

await mkdir(outDir, { recursive: true });

const meta = await sharp(input, { failOn: "none" }).metadata();
if (!meta.width) {
  throw new Error("Missing width metadata");
}

const variants = [
  { suffix: "card", width: 640, quality: 72 },
  { suffix: "hero", width: 1280, quality: 78 },
];

for (const variant of variants) {
  const output = path.join(outDir, `tout-est-sous-controle-${variant.suffix}.webp`);
  await sharp(input, { failOn: "none" })
    .resize({
      width: Math.min(variant.width, meta.width),
      withoutEnlargement: true,
      fit: "cover",
    })
    .webp({ quality: variant.quality, effort: 5 })
    .toFile(output);
  console.log(output);
}
