import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public/images/real-images');
const files = (await fs.readdir(dir))
  .filter(file => /^hero-\d+\.(?:png|jpe?g)$/i.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const optimizedDir = path.join(dir, 'optimized');
await fs.mkdir(optimizedDir, { recursive: true });

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(
    optimizedDir,
    file.replace(/\.(?:png|jpe?g)$/i, '.webp')
  );

  await sharp(input)
    .webp({ quality: 82, effort: 4 })
    .toFile(output);
}

console.log(`Optimized ${files.length} hero images to WebP.`);
