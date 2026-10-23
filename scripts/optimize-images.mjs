/**
 * Generates web-optimized versions of the local images used by the portfolio.
 *
 *   node scripts/optimize-images.mjs
 *
 * Sources live in public/assets/images, outputs go to public/images/opt and a
 * manifest (sizes + tiny blur placeholders) is written to src/data/image-manifest.json.
 * Re-run it whenever you add or replace one of the images listed below.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')),
  '..'
);
const SRC = path.join(ROOT, 'public/assets/images');
const OUT = path.join(ROOT, 'public/images/opt');
const MANIFEST = path.join(ROOT, 'src/data/image-manifest.json');

// Photos: responsive widths in AVIF + WebP with a blur placeholder.
const photos = [
  { key: 'portrait', file: 'about/me.png', widths: [480, 720, 960, 1280] },
  { key: 'degree', file: 'about/degree.jpg', widths: [640, 1200, 2000] },
];

// Logos: a single small WebP is plenty (rendered at ~40px, 3x for retina).
const logos = [
  'react',
  'next',
  'express',
  'nestjs',
  'node',
  'mongodb',
  'postgresql',
  'docker',
  'vercel',
  'aws',
  'cloudflare',
  'prisma',
  'ubuntu',
  'nginx',
  'firebase',
  'mongoose',
  'tailwind',
  'materialUI',
  'typescript',
  'skill4',
];

const blurDataURL = async (input) => {
  const buf = await sharp(input).resize(24).webp({ quality: 40 }).toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
};

const run = async () => {
  await fs.mkdir(path.join(OUT, 'skills'), { recursive: true });
  const manifest = {};

  for (const { key, file, widths } of photos) {
    const input = path.join(SRC, file);
    const meta = await sharp(input).metadata();
    const entry = {
      width: meta.width,
      height: meta.height,
      blur: await blurDataURL(input),
      avif: [],
      webp: [],
    };

    for (const w of widths.filter((x) => x <= meta.width)) {
      const base = sharp(input).rotate().resize(w);
      await base
        .clone()
        .avif({ quality: 55, effort: 6 })
        .toFile(path.join(OUT, `${key}-${w}.avif`));
      await base
        .clone()
        .webp({ quality: 78 })
        .toFile(path.join(OUT, `${key}-${w}.webp`));
      entry.avif.push([`/images/opt/${key}-${w}.avif`, w]);
      entry.webp.push([`/images/opt/${key}-${w}.webp`, w]);
    }
    manifest[key] = entry;
  }

  // Social share card (1200x630), cropped around the subject.
  await sharp(path.join(SRC, 'about/me.png'))
    .resize(1200, 630, { fit: 'cover', position: sharp.strategy.attention })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT, 'og.jpg'));
  manifest.og = { src: '/images/opt/og.jpg', width: 1200, height: 630 };

  for (const name of logos) {
    const out = `/images/opt/skills/${name}.webp`;
    await sharp(path.join(SRC, `skills/${name}.png`))
      .resize(128, 128, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(path.join(ROOT, 'public', out));
    manifest[`skills/${name}`] = out;
  }

  await fs.writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `Optimized ${photos.length} photos and ${
      logos.length
    } logos -> ${path.relative(ROOT, OUT)}`
  );
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
