// Entry: copies the generated entry.png to /output/entry.png.
// The image is the entry; the program is a one-line copy.
// Image: a golden retriever puppy leaping through sunflowers at golden
// hour — pure joy, warm light, a fresh moment of delight, clean craft.
// Output is a whole PNG under 1 MiB.
// Repo makefun-ai-happy-v2: created AFTER ai-happy-01 opened (23:00 WIB
// 13 Nov 2026) — the first repo was created before open and was refused.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
