/**
 * Renders the social share image and PNG app icons from HTML/SVG using
 * Playwright's Chromium. Run after changing brand colours or copy:
 *   node tools/generate-images.mjs
 * Requires Playwright (`npm i -D playwright` or a global install).
 */
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const font = (f) => `data:font/woff2;base64,${readFileSync(`${root}public/fonts/${f}`).toString('base64')}`;
const markUrl = `data:image/png;base64,${readFileSync(`${root}src/assets/brand/meridian-mark.png`).toString('base64')}`;
// Square icon: the logo mark centred on brand blue.
const icon = (size) => `<div style="width:${size}px;height:${size}px;background:#0a4498;display:grid;place-items:center"><img src="${markUrl}" style="width:${size}px;height:auto"></div>`;

const og = `<!doctype html><html><head><style>
@font-face{font-family:A;src:url(${font('archivo-var.woff2')});font-weight:100 900;font-stretch:62% 125%}
@font-face{font-family:M;src:url(${font('plex-mono-500.woff2')})}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#0b1e36;color:#f3f0e8;font-family:A;position:relative;overflow:hidden;padding:72px 80px}
.grid{position:absolute;inset:0;background-image:linear-gradient(#1f3a5c 1px,transparent 1px),linear-gradient(90deg,#1f3a5c 1px,transparent 1px);background-size:40px 40px;opacity:.6;-webkit-mask-image:linear-gradient(90deg,transparent 30%,#000)}
.line{position:absolute;top:0;bottom:0;left:820px;width:3px;background:#0a4498}
.eye{font-family:M;font-size:22px;letter-spacing:.12em;text-transform:uppercase;color:#9cbdf2;position:relative}
h1{position:relative;margin-top:36px;font-size:78px;line-height:.98;font-weight:800;font-stretch:118%;letter-spacing:-.035em;max-width:900px}
h1 em{font-style:normal;color:#9cbdf2}
.foot{position:absolute;left:80px;bottom:64px;display:flex;gap:48px;font-family:M;font-size:22px;letter-spacing:.06em;color:#b4bfce}
.brand{position:absolute;right:80px;bottom:56px;display:flex;align-items:center;gap:16px;font-weight:800;font-stretch:122%;font-size:34px;text-transform:uppercase}
.brand img{height:64px;width:auto;border-radius:3px}
</style></head><body><div class="grid"></div><div class="line"></div>
<p class="eye">Commercial contractor · Wixom, Michigan</p>
<h1>Commercial interiors built <em>to the drawings</em> — on time and on budget.</h1>
<div class="foot"><span>(248) 669-3910</span><span>mymeridianconstruction.com</span></div>
<div class="brand"><img src="${markUrl}"><span>Meridian</span></div>
</body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(og);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${root}public/og-default.png` });

for (const [name, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512], ['favicon-32.png', 32]]) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<style>*{margin:0}</style>${icon(size)}`);
  await page.evaluate(() => Promise.all([...document.images].map((i) => i.decode())));
  await page.screenshot({ path: `${root}public/${name}`, omitBackground: true });
}
await browser.close();

// Wrap the 32px PNG in an ICO container for legacy /favicon.ico requests.
const png = readFileSync(`${root}public/favicon-32.png`);
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // one image
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync(`${root}public/favicon.ico`, Buffer.concat([header, png]));
unlinkSync(`${root}public/favicon-32.png`);
console.log('Generated og-default.png and icons');
