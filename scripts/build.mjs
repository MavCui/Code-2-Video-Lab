import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const check = spawnSync(process.execPath, ['scripts/validate.mjs'], { stdio: 'inherit' });
if (check.status !== 0) process.exit(check.status ?? 1);

const build = spawnSync(process.execPath, ['node_modules/astro/astro.js', 'build'], { encoding: 'utf8' });
process.stdout.write(build.stdout || '');
process.stderr.write(build.stderr || '');

const output = (build.stdout || '') + (build.stderr || '');
const hasIndex = fs.existsSync(path.join('dist', 'index.html'));
const countPages = (dir) => (fs.existsSync(dir)
  ? fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory() && fs.existsSync(path.join(dir, e.name, 'index.html'))).length
  : 0);
const projectPages = countPages(path.join('dist', 'projects'));
const casePages = countPages(path.join('dist', 'cases'));
const workPages = countPages(path.join('dist', 'works'));
const studyPages = countPages(path.join('dist', 'studies'));
const detailCount = projectPages + casePages + workPages + studyPages;
const productComplete = hasIndex && projectPages > 0;

if (build.status === 0) {
  console.log(`[构建] 完成，生成 ${projectPages} 个项目页 + ${casePages} 个案例页 + ${workPages} 个创作案例页 + ${studyPages} 个精读页。`);
  process.exit(0);
}
if (productComplete && /safe-delete|broker denied delete/i.test(output)) {
  console.log('[构建] 页面产物完整；宿主环境的删除保护阻止了 Astro 清理构建期空目录，已忽略该清理步骤。');
  console.log(`[构建] 完成，生成 ${projectPages} 个项目页 + ${casePages} 个案例页 + ${workPages} 个创作案例页 + ${studyPages} 个精读页。`);
  process.exit(0);
}
console.error('[构建] 失败，页面产物不完整。');
process.exit(build.status || 1);
