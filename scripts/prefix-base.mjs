import fs from 'node:fs';
import path from 'node:path';

/**
 * GitHub Pages 项目站点部署在 /<repo>/ 子路径下，而站内链接与媒体地址都是根绝对路径。
 * 构建后统一加前缀，避免逐个模板改 import.meta.env.BASE_URL。
 * 未设置 BASE_PATH 时不改写，Vercel 等根路径部署保持原样。
 */
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
const dist = path.resolve('dist');

if (!base) {
  console.log('[prefix] 未设置 BASE_PATH，跳过路径改写');
  process.exit(0);
}

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(dist);

let total = 0;
for (const f of files) {
  const before = fs.readFileSync(f, 'utf8');
  let after = before
    .replace(/(\shref=")\/(?!\/)/g, `$1${base}/`)
    .replace(/(\ssrc=")\/(?!\/)/g, `$1${base}/`)
    .replace(/(\sposter=")\/(?!\/)/g, `$1${base}/`)
    .replace(/(\sdata-motion=")\/(?!\/)/g, `$1${base}/`)
    .replace(/new URL\('\/', location\.origin\)/g, `new URL('${base}/', location.origin)`)
    .replace(/location\.pathname === '\/'/g, `location.pathname === '${base}/'`);
  if (after !== before) {
    fs.writeFileSync(f, after);
    total++;
  }
}
console.log(`[prefix] 已为 ${total} 个 HTML 加上 ${base} 前缀`);
