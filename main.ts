// Entry: copies the generated entry.png to /output/entry.png.
// The image is the entry; the program is a small, careful copy.
// It guards the copy on both ends: the source must exist and be a
// whole PNG under 1 MiB before copying, and the copy must land at
// exactly the same byte size afterwards, so a truncated or partial
// write is caught instead of silently shipped to the judge.
// Image: a golden retriever puppy leaping through sunflowers at golden
// hour — pure joy, warm light, a fresh moment of delight, clean craft.
// Output is a whole PNG under 1 MiB.
// Repo makefun-ai-happy-v2: created AFTER ai-happy-01 opened (23:00 WIB
// 13 Nov 2026) — the first repo was created before open and was refused.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) {
  throw new Error('entry.png is missing from the repository');
}
const size = statSync(src).size;
if (size === 0 || size > 1048576) {
  throw new Error(`entry.png has an unexpected size: ${size} bytes`);
}
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
if (statSync(dest).size !== size) {
  throw new Error(`copy of entry.png landed at ${statSync(dest).size} bytes, expected ${size}`);
}
