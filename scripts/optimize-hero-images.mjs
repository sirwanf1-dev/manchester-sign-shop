import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesRoot = path.resolve('public/images');
const heroDir = path.join(imagesRoot, 'real-images');
const heroFiles = (await fs.readdir(heroDir))
  .filter(file => /^hero-\d+\.(?:png|jpe?g)$/i.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const optimizedHeroDir = path.join(heroDir, 'optimized');
await fs.mkdir(optimizedHeroDir, { recursive: true });

for (const file of heroFiles) {
  const input = path.join(heroDir, file);
  const output = path.join(optimizedHeroDir, file.replace(/\.(?:png|jpe?g)$/i, '.webp'));
  // Keep original files untouched; resize only oversized images and use high-quality WebP.
  await sharp(input)
    .rotate()
    .resize({ width: 1600, height: 900, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 88, effort: 6 })
    .toFile(output);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...await walk(full));
    else if (/\.(?:png|jpe?g)$/i.test(entry.name)) found.push(full);
  }
  return found;
}

// Product, sign and portfolio images use a 1000px maximum width, sufficient for their card layouts.
let converted = 0;
for (const folder of ['shop', 'signs', 'our-work']) {
  const dir = path.join(imagesRoot, folder);
  try {
    for (const input of await walk(dir)) {
      const output = input.replace(/\.(?:png|jpe?g)$/i, '.webp');
      await sharp(input)
        .rotate()
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 88, effort: 6 })
        .toFile(output);
      converted++;
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

console.log('Optimized ' + heroFiles.length + ' hero images and ' + converted + ' other images to resized, high-quality WebP.');
