import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import matter from 'gray-matter';

const execFileAsync = promisify(execFile);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const reportsDir = path.join(root, 'reports');
const taxonomy = JSON.parse(fs.readFileSync(path.join(root, 'src/data/taxonomy.json'), 'utf8'));

const forceLinks = process.argv.includes('--links');
const skipLinks = process.env.SKIP_LINK_PROBE === '1' && !forceLinks;

const errors = [];
const linkTargets = [];
const err = (file, msg) => errors.push(`[${file}] ${msg}`);
const has = (v) => v !== undefined && v !== null && String(v).trim() !== '';
const categoryLabels = taxonomy.industries.map((c) => c.label);
let assetCount = 0;
let motionCount = 0;

const abs = (p) => path.join(publicDir, String(p).replace(/^\//, ''));

function checkMotion(file, d, label) {
  if (!has(d.preview_motion)) return;
  const mp = abs(d.preview_motion);
  if (!fs.existsSync(mp)) err(file, `${label}动态预览不存在：${d.preview_motion}`);
  else if (fs.statSync(mp).size < 12000) err(file, `${label}动态预览文件过小，可能是空片段：${d.preview_motion}`);
  else {
    assetCount++;
    motionCount++;
  }
  const recs = d.media_records ?? [];
  if (recs.length && !recs.some((m) => m.file === d.preview_motion)) {
    err(file, `${label}动态预览未登记媒体使用依据：${d.preview_motion}`);
  }
}

function checkRecords(file, records, firstFile, label, name) {
  if (!records.length) err(file, `至少登记一条${label}媒体使用依据`);
  if (records.length && has(firstFile) && records[0].file !== firstFile) {
    err(file, `首条媒体登记必须与${label === '项目' ? '封面' : '封面/缩略图'}一致`);
  }
  for (const [i, m] of records.entries()) {
    for (const k of ['file', 'kind', 'sample_name', 'source_url', 'source_page', 'rights_holder', 'usage_basis', 'attribution']) {
      if (!has(m[k])) err(file, `第 ${i + 1} 条媒体登记缺少 ${k}`);
    }
    if (has(m.usage_basis) && String(m.usage_basis).trim().length < 15) err(file, `第 ${i + 1} 条媒体使用依据过于简略`);
    if (has(m.usage_basis) && /按仓库许可|同\s*LICENSE|由代码许可自动/.test(m.usage_basis)) {
      err(file, `第 ${i + 1} 条媒体使用依据不得由仓库代码许可推导`);
    }
    if (has(m.source_url)) linkTargets.push({ project: name || label, url: m.source_url, use: `媒体来源：${m.sample_name}` });
    if (has(m.source_page)) linkTargets.push({ project: name || label, url: m.source_page, use: `来源页面：${m.sample_name}` });
  }
}

/* ---------- 项目 ---------- */
const projectsDir = path.join(root, 'src/content/projects');
const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.md')).sort();
const projects = files.map((file) => {
  const parsed = matter(fs.readFileSync(path.join(projectsDir, file), 'utf8'));
  return { file, data: parsed.data, content: parsed.content };
});

for (const p of projects) {
  const d = p.data;
  if (!['draft', 'published'].includes(d.status)) err(p.file, 'status 必须是 draft 或 published');
  for (const k of ['id', 'slug', 'name']) if (!has(d[k])) err(p.file, `内部字段 ${k} 缺失`);
  if (has(d.slug) && !/^[a-z0-9-]+$/.test(d.slug)) err(p.file, 'slug 只能使用小写字母、数字与连字符');
}
const slugSeen = new Map();
for (const p of projects) {
  if (!has(p.data.slug)) continue;
  if (slugSeen.has(p.data.slug)) err(p.file, `slug 与 ${slugSeen.get(p.data.slug)} 重复`);
  slugSeen.set(p.data.slug, p.file);
}

const published = projects.filter((p) => p.data.status === 'published');
const drafts = projects.filter((p) => p.data.status === 'draft');
const required = ['one_liner', 'primary_category', 'overview', 'author', 'updated_at', 'verification_note', 'source_note', 'selection_note'];

for (const p of published) {
  const d = p.data;
  for (const k of required) if (!has(d[k])) err(p.file, `已发布项目缺少内部字段 ${k}`);

  if (!categoryLabels.includes(d.primary_category)) err(p.file, `主分类「${d.primary_category}」不在场景分类词表内`);
  const t = d.tags ?? {};
  for (const v of t.scenario ?? []) if (!categoryLabels.includes(v)) err(p.file, `应用场景标签「${v}」不在词表内`);
  for (const v of t.tech ?? []) if (!taxonomy.techTags.includes(v)) err(p.file, `技术标签「${v}」不在词表内`);
  for (const v of t.type ?? []) if (!taxonomy.typeTags.includes(v)) err(p.file, `项目类型「${v}」不在词表内`);
  for (const v of t.media_status ?? []) if (!taxonomy.mediaStatus.includes(v)) err(p.file, `内容状态「${v}」不在词表内`);
  if (!(d.card_tags ?? []).length) err(p.file, '卡片标签不能为空');
  if ((d.card_tags ?? []).length > 3) err(p.file, '卡片标签最多 3 个');

  if (!has(d.cover?.file) || !has(d.cover?.alt)) err(p.file, '封面文件与替代文字必须填写');
  const records = d.media_records ?? [];
  checkRecords(p.file, records, d.cover?.file, '项目', d.name);

  const cl = d.code_license;
  if (!has(cl?.spdx) || !has(cl?.source) || !has(cl?.note)) err(p.file, '代码许可必须登记 spdx / source / note');
  else if (!/不覆盖|不包含|不自动/.test(cl.note)) err(p.file, '代码许可说明必须明确其不覆盖预览媒体');
  if (has(cl?.source)) linkTargets.push({ project: d.name, url: cl.source, use: '代码许可来源' });

  const linkEntries = Object.entries(d.links ?? {}).filter(([, v]) => has(v));
  if (!linkEntries.length) err(p.file, '至少需要一个有效外部入口');
  for (const [k, v] of linkEntries) {
    if (!/^https?:\/\//.test(v)) err(p.file, `外链 ${k} 不是合法 http(s) 地址`);
    linkTargets.push({ project: d.name, url: v, use: `外部入口：${k}` });
  }

  const assets = [d.cover?.file, ...records.map((m) => m.file)].filter((v) => has(v));
  for (const a of assets) {
    const fp = abs(a);
    if (!fs.existsSync(fp)) err(p.file, `资产文件不存在：${a}`);
    else if (fs.statSync(fp).size === 0) err(p.file, `资产文件为空：${a}`);
    else assetCount++;
  }
  checkMotion(p.file, d, '项目');

  const plain = p.content.replace(/[#>*`\-\s]/g, '');
  if (plain.length < 200) err(p.file, `分析正文过短（${plain.length} 字），不能是空详情页`);
  if (!(d.limitations ?? []).length) err(p.file, '限制与注意事项不能为空');
  if (/本站已复现|已实测|实测通过|实测结果|实测画面/.test([d.overview, d.verification_note, p.content, ...(d.limitations ?? [])].join(''))) {
    err(p.file, '出现肯定式实测表述，但本站未运行代码');
  }
}

/* ---------- 网页案例 ---------- */
const casesDir = path.join(root, 'src/content/cases');
const caseFiles = fs.existsSync(casesDir) ? fs.readdirSync(casesDir).filter((f) => f.endsWith('.md')).sort() : [];
const cases = caseFiles.map((file) => ({ file, data: matter(fs.readFileSync(path.join(casesDir, file), 'utf8')).data }));
const casesPublished = cases.filter((c) => c.data.status === 'published');
const caseSlugs = new Set(casesPublished.map((c) => c.data.slug));

for (const c of casesPublished) {
  const d = c.data;
  for (const k of ['num', 'slug', 'title_zh', 'title_en', 'one_liner', 'industry', 'summary', 'updated_at', 'verification_note']) {
    if (!has(d[k])) err(c.file, `案例缺少内部字段 ${k}`);
  }
  if (has(d.industry) && !categoryLabels.includes(d.industry)) err(c.file, `行业「${d.industry}」不在行业词表内`);
  const tech = d.tech ?? [];
  if (!tech.length) err(c.file, '案例至少需要一个技术栈标签');
  for (const t of tech) if (!taxonomy.techTags.includes(t)) err(c.file, `技术栈标签「${t}」不在词表内`);
  if (!has(d.thumb?.file) || !has(d.thumb?.alt)) err(c.file, '案例缩略图与替代文字必须填写');
  if (!has(d.source?.html) || !has(d.source?.prompt) || !has(d.source?.page)) err(c.file, '案例来源必须包含 html / prompt / page');
  for (const [k, v] of Object.entries(d.source ?? {})) {
    if (!/^https?:\/\//.test(v)) err(c.file, `来源 ${k} 不是合法 http(s) 地址`);
  }
  linkTargets.push({ project: d.title_zh, url: d.source.page, use: '案例合集页' });

  const recs = d.media_records ?? [];
  checkRecords(c.file, recs, d.thumb?.file, '案例', d.title_zh);

  if (!has(d.license?.spdx) || !has(d.license?.source) || !has(d.license?.note)) err(c.file, '代码许可必须登记 spdx / source / note');
  else if (!/不覆盖|不包含|不推断|单独确认/.test(d.license.note)) err(c.file, '代码许可说明必须明确不覆盖媒体或不推断媒体权限');
  if (has(d.license?.source)) linkTargets.push({ project: d.title_zh, url: d.license.source, use: '代码许可来源' });

  if (String(d.summary ?? '').replace(/\s/g, '').length < 48) err(c.file, '案例说明过短（少于 48 字）');
  if (!(d.tech_notes ?? []).length) err(c.file, '技术要点不能为空');
  if (has(d.thumb?.file)) {
    const fp = abs(d.thumb.file);
    if (!fs.existsSync(fp)) err(c.file, `案例缩略图不存在：${d.thumb.file}`);
    else if (fs.statSync(fp).size === 0) err(c.file, `案例缩略图为空：${d.thumb.file}`);
    else assetCount++;
  }
  checkMotion(c.file, d, '案例');

  for (const r of d.related ?? []) {
    if (r === d.slug) err(c.file, '相关案例不能指向自身');
    else if (!caseSlugs.has(r)) err(c.file, `相关案例不存在或未发布：${r}`);
  }
}

/* ---------- 创作案例 ---------- */
const worksDir = path.join(root, 'src/content/works');
const workFiles = fs.existsSync(worksDir) ? fs.readdirSync(worksDir).filter((f) => f.endsWith('.md')).sort() : [];
const works = workFiles.map((file) => ({ file, data: matter(fs.readFileSync(path.join(worksDir, file), 'utf8')).data }));
const worksPublished = works.filter((w) => w.data.status === 'published');
const workSlugs = new Set(worksPublished.map((w) => w.data.slug));

for (const w of worksPublished) {
  const d = w.data;
  for (const k of ['num', 'slug', 'title_zh', 'one_liner', 'industry', 'author', 'summary', 'evidence_note', 'updated_at', 'verification_note']) {
    if (!has(d[k])) err(w.file, `创作案例缺少内部字段 ${k}`);
  }
  if (has(d.industry) && !categoryLabels.includes(d.industry)) err(w.file, `行业「${d.industry}」不在行业词表内`);
  const tech = d.tech ?? [];
  if (!tech.length) err(w.file, '创作案例至少需要一个技术栈标签');
  for (const t of tech) if (!taxonomy.techTags.includes(t)) err(w.file, `技术栈标签「${t}」不在词表内`);
  if (!has(d.cover?.file) || !has(d.cover?.alt)) err(w.file, '封面与替代文字必须填写');
  if (!has(d.source?.post) || !has(d.source?.doc) || !has(d.source?.doc_name) || !has(d.source?.doc_section)) {
    err(w.file, '来源必须包含 post / doc / doc_name / doc_section');
  }
  for (const k of ['post', 'doc']) {
    if (has(d.source?.[k]) && !/^https?:\/\//.test(d.source[k])) err(w.file, `来源 ${k} 不是合法 http(s) 地址`);
  }
  if (has(d.source?.post)) linkTargets.push({ project: d.title_zh, url: d.source.post, use: 'X 原帖' });
  if (has(d.source?.doc)) linkTargets.push({ project: d.title_zh, url: d.source.doc, use: '合集文档' });

  const recs = d.media_records ?? [];
  checkRecords(w.file, recs, d.cover?.file, '作品', d.title_zh);

  if (!has(d.license?.spdx) || !has(d.license?.source) || !has(d.license?.note)) err(w.file, '作品许可必须登记 spdx / source / note');
  else if (!/不推断|不覆盖|单独确认/.test(d.license.note)) err(w.file, '作品许可说明必须明确不推断媒体权限');
  if (has(d.license?.source)) linkTargets.push({ project: d.title_zh, url: d.license.source, use: '作品许可来源' });

  if (String(d.summary ?? '').replace(/\s/g, '').length < 48) err(w.file, '案例说明过短（少于 48 字）');
  if (!(d.highlights ?? []).length) err(w.file, '看点不能为空');
  if (has(d.cover?.file)) {
    const fp = abs(d.cover.file);
    if (!fs.existsSync(fp)) err(w.file, `封面不存在：${d.cover.file}`);
    else if (fs.statSync(fp).size === 0) err(w.file, `封面为空：${d.cover.file}`);
    else assetCount++;
  }
  checkMotion(w.file, d, '作品');

  for (const r of d.related ?? []) {
    if (r === d.slug) err(w.file, '相关作品不能指向自身');
    else if (!workSlugs.has(r)) err(w.file, `相关作品不存在或未发布：${r}`);
  }
}

/* ---------- 案例精读 ---------- */
const studiesDir = path.join(root, 'src/content/studies');
const studyFiles = fs.existsSync(studiesDir) ? fs.readdirSync(studiesDir).filter((f) => f.endsWith('.md')).sort() : [];
const studies = studyFiles.map((file) => ({ file, data: matter(fs.readFileSync(path.join(studiesDir, file), 'utf8')).data }));
const studiesPublished = studies.filter((s) => s.data.status === 'published');
const studySlugs = new Set(studiesPublished.map((s) => s.data.slug));

for (const s of studiesPublished) {
  const d = s.data;
  for (const k of ['num', 'slug', 'title', 'title_main', 'tag', 'one_liner', 'industry', 'updated_at', 'verification_note']) {
    if (!has(d[k])) err(s.file, `精读缺少内部字段 ${k}`);
  }
  if (has(d.industry) && !categoryLabels.includes(d.industry)) err(s.file, `行业「${d.industry}」不在行业词表内`);
  const tech = d.tech ?? [];
  if (!tech.length) err(s.file, '精读至少需要一个技术栈标签');
  for (const t of tech) if (!taxonomy.techTags.includes(t)) err(s.file, `技术栈标签「${t}」不在词表内`);
  if (!has(d.cover?.file) || !has(d.cover?.alt)) err(s.file, '封面与替代文字必须填写');
  if (has(d.cover?.file)) {
    const fp = abs(d.cover.file);
    if (!fs.existsSync(fp)) err(s.file, `封面不存在：${d.cover.file}`);
    else if (fs.statSync(fp).size === 0) err(s.file, `封面为空：${d.cover.file}`);
    else assetCount++;
  }
  if ((d.meta ?? []).length < 5) err(s.file, '链路拆解（meta）至少需要 5 行');
  if (String(d.one_liner ?? '').replace(/\s/g, '').length < 20) err(s.file, '一句话结论过短');
  if (!(d.body ?? []).length) err(s.file, '正文分析不能为空');
  if (!has(d.demo?.url) || !/^https?:\/\//.test(d.demo.url)) err(s.file, '原始 Demo 链接必须填写且为 http(s)');
  else linkTargets.push({ project: d.title_main, url: d.demo.url, use: '原始 Demo（X 原帖）' });
  if (!(d.sources ?? []).length) err(s.file, '来源与证据缺口不能为空');
  for (const src of d.sources ?? []) {
    for (const l of src.links ?? []) if (/^https?:\/\//.test(l)) linkTargets.push({ project: d.title_main, url: l, use: '来源链接' });
  }
  if (!has(d.source_doc?.url) || !has(d.source_doc?.name)) err(s.file, '必须登记精读文档名称与链接');
  else linkTargets.push({ project: d.title_main, url: d.source_doc.url, use: '精读文档' });

  const recs = d.media_records ?? [];
  checkRecords(s.file, recs, d.cover?.file, '精读', d.title_main);
  checkMotion(s.file, d, '精读');

  if (!has(d.license?.spdx) || !has(d.license?.source) || !has(d.license?.note)) err(s.file, '作品许可必须登记 spdx / source / note');
  else if (!/不推断|不覆盖|单独确认/.test(d.license.note)) err(s.file, '作品许可说明必须明确不推断媒体权限');
  if (has(d.license?.source)) linkTargets.push({ project: d.title_main, url: d.license.source, use: '作品许可来源' });

  for (const r of d.related ?? []) {
    if (r === d.slug) err(s.file, '相关精读不能指向自身');
    else if (!studySlugs.has(r)) err(s.file, `相关精读不存在或未发布：${r}`);
  }
}

/* ---------- 外链探测 ---------- */
/* ---------- 落地案例 ---------- */
const practiceDir = path.join(root, 'src/content/practice');
const practiceFiles = fs.existsSync(practiceDir) ? fs.readdirSync(practiceDir).filter((f) => f.endsWith('.md')).sort() : [];
const practices = practiceFiles.map((file) => ({ file, data: matter(fs.readFileSync(path.join(practiceDir, file), 'utf8')).data }));
const practicePublished = practices.filter((p) => p.data.status === 'published');
const practiceSlugs = new Set(practicePublished.map((p) => p.data.slug));

for (const p of practicePublished) {
  const d = p.data;
  for (const k of ['num', 'slug', 'title', 'org', 'one_liner', 'industry', 'summary', 'updated_at', 'verification_note']) {
    if (!has(d[k])) err(p.file, `落地案例缺少内部字段 ${k}`);
  }
  if (has(d.industry) && !categoryLabels.includes(d.industry)) err(p.file, `行业「${d.industry}」不在行业词表内`);
  const tech = d.tech ?? [];
  if (!tech.length) err(p.file, '落地案例至少需要一个技术栈标签');
  for (const t of tech) if (!taxonomy.techTags.includes(t)) err(p.file, `技术栈标签「${t}」不在词表内`);
  if (!has(d.cover?.file) || !has(d.cover?.alt)) err(p.file, '封面与替代文字必须填写');
  if (has(d.cover?.file)) {
    const fp = abs(d.cover.file);
    if (!fs.existsSync(fp)) err(p.file, `封面不存在：${d.cover.file}`);
    else if (fs.statSync(fp).size === 0) err(p.file, `封面为空：${d.cover.file}`);
    else assetCount++;
  }
  if (String(d.summary ?? '').replace(/\s/g, '').length < 40) err(p.file, '案例说明过短（少于 40 字）');
  if (!(d.highlights ?? []).length) err(p.file, '亮点不能为空');
  if ((d.meta ?? []).length < 4) err(p.file, '链路拆解（meta）至少需要 4 行');
  if (!(d.evidence_known ?? []).length) err(p.file, '已披露内容（evidence_known）不能为空');
  if (!(d.evidence_gaps ?? []).length) err(p.file, '证据缺口（evidence_gaps）不能为空');
  if ((d.take ?? []).length < 3) err(p.file, '可复用点需要三行（可以迁移 / 成立条件 / 不能外推）');

  const links = Object.entries(d.links ?? {}).filter(([, v]) => has(v));
  if (!links.length) err(p.file, '至少需要一个外部入口');
  for (const [k, v] of links) {
    if (!/^https?:\/\//.test(v)) err(p.file, `外链 ${k} 不是合法 http(s) 地址`);
    linkTargets.push({ project: d.title, url: v, use: `外部入口：${k}` });
  }

  const recs = d.media_records ?? [];
  checkRecords(p.file, recs, d.cover?.file, '落地案例', d.title);
  checkMotion(p.file, d, '落地案例');

  if (!has(d.license?.spdx) || !has(d.license?.source) || !has(d.license?.note)) err(p.file, '作品许可必须登记 spdx / source / note');
  else if (!/不推断|不覆盖|单独确认/.test(d.license.note)) err(p.file, '作品许可说明必须明确不推断媒体权限');
  if (has(d.license?.source)) linkTargets.push({ project: d.title, url: d.license.source, use: '作品许可来源' });

  for (const r of d.related ?? []) {
    if (r === d.slug) err(p.file, '相关落地案例不能指向自身');
    else if (!practiceSlugs.has(r)) err(p.file, `相关落地案例不存在或未发布：${r}`);
  }
}

const uniqueTargets = [...new Map(linkTargets.map((x) => [x.url, x])).values()];

async function probe(target) {
  try {
    const r = await execFileAsync('curl', ['-sSL', '-m', '10', '-r', '0-1023', '-o', '/dev/null', '-w', '%{http_code}', target.url], {
      timeout: 14000,
      maxBuffer: 4096,
    });
    const code = String(r.stdout || '').trim();
    const n = Number(code);
    if (!Number.isFinite(n) || n === 0) return { ...target, status: '探测未完成（超时 / 本环境不可达）', ok: false, undetermined: true };
    return { ...target, status: String(n), ok: n >= 200 && n < 400, undetermined: false };
  } catch (e) {
    const out = String(e.stdout || '').trim();
    const n = Number(out);
    if (Number.isFinite(n) && n >= 200 && n < 400) return { ...target, status: String(n), ok: true, undetermined: false };
    if (Number.isFinite(n) && n >= 400) return { ...target, status: String(n), ok: false, undetermined: false };
    return { ...target, status: '探测未完成（超时 / 本环境不可达）', ok: false, undetermined: true };
  }
}

let probeResults = [];
let reviews = [];
let undetermined = [];

if (!skipLinks) {
  const queue = [...uniqueTargets];
  const workers = Array.from({ length: Math.min(6, queue.length) }, async () => {
    while (queue.length) probeResults.push(await probe(queue.shift()));
  });
  await Promise.all(workers);
  reviews = probeResults.filter((r) => !r.ok && !r.undetermined);
  undetermined = probeResults.filter((r) => r.undetermined);
} else {
  probeResults = uniqueTargets.map((t) => ({ ...t, status: '本轮跳过探测', ok: true, skipped: true }));
  reviews = [];
  undetermined = [];
}

fs.mkdirSync(reportsDir, { recursive: true });
const report = [
  '# 外链人工复核清单',
  '',
  `生成时间：${new Date().toLocaleString('zh-CN', { hour12: false })}`,
  '',
  '规则：第三方外链异常只进入人工复核，不阻断整站构建或发布；内部字段与资产错误才会阻断。',
  '「确认异常」指明确失败（域名无法解析、HTTP 4xx/5xx）；「待人工确认」指本环境探测超时或不可达，不代表链接失效。',
  `本轮探测 ${uniqueTargets.length} 个去重地址：确认异常 ${reviews.length} 个，待人工确认 ${undetermined.length} 个。`,
  '',
  '## 确认异常',
  '',
  '| 项目 | 用途 | 链接 | 结果 | 建议动作 |',
  '|---|---|---|---|---|',
  ...(reviews.length
    ? reviews.map((r) => `| ${r.project} | ${r.use} | ${r.url} | ${r.status} | 人工打开确认；若失效则更新 frontmatter |`)
    : ['| — | — | — | 本轮未发现异常 | 无需处理 |']),
  '',
  '## 待人工确认（本环境无法判定）',
  '',
  '| 项目 | 用途 | 链接 | 结果 | 建议动作 |',
  '|---|---|---|---|---|',
  ...(undetermined.length
    ? undetermined.map((r) => `| ${r.project} | ${r.use} | ${r.url} | ${r.status} | 人工在可访问网络打开确认；常见原因是站点防爬或本环境代理限制 |`)
    : ['| — | — | — | 本轮无待确认项 | 无需处理 |']),
  '',
  '## 全部探测结果',
  '',
  '| 链接 | 结果 |',
  '|---|---|',
  ...probeResults.map((r) => `| ${r.url} | ${r.status} |`),
  '',
].join('\n');
fs.writeFileSync(path.join(reportsDir, '外链人工复核.md'), report);

const summary = [
  '# 本轮校验结果',
  '',
  `- 项目文件：${projects.length}（published ${published.length} / draft ${drafts.length}）`,
  `- 网页案例：${cases.length}（published ${casesPublished.length}）`,
  `- 创作案例：${works.length}（published ${worksPublished.length}）`,
  `- 案例精读：${studies.length}（published ${studiesPublished.length}）`,
  `- 落地案例：${practices.length}（published ${practicePublished.length}）`,
  `- 动态预览：${motionCount} 段（5 秒静音循环，逐条登记来源）`,
  `- 资产检查：${assetCount} 项通过`,
  `- 阻断级错误：${errors.length}`,
  `- 去重外链与来源地址：${uniqueTargets.length} 个，确认异常 ${reviews.length} 个、待人工确认 ${undetermined.length} 个`,
  '',
  ...(errors.length ? ['## 阻断项', '', ...errors.map((e) => `- ${e}`), ''] : ['无阻断项。', '']),
].join('\n');
fs.writeFileSync(path.join(reportsDir, '校验结果.md'), summary);

if (errors.length) {
  console.error(`[阻断] ${errors.length} 项内部字段或资产错误：`);
  for (const e of errors.slice(0, 40)) console.error('  ' + e);
  if (errors.length > 40) console.error(`  …… 其余 ${errors.length - 40} 项见 reports/校验结果.md`);
  process.exit(1);
}
if (reviews.length) console.log(`[人工复核] 确认异常 ${reviews.length} 个、待人工确认 ${undetermined.length} 个，已写入 reports/外链人工复核.md（不阻断发布）`);
else if (undetermined.length) console.log(`[人工复核] 待人工确认 ${undetermined.length} 个（本环境不可判定），已写入 reports/外链人工复核.md（不阻断发布）`);
console.log(
  `[校验] published ${published.length} 项目 + ${casesPublished.length} 案例 + ${worksPublished.length} 创作案例 + ${studiesPublished.length} 精读 + ${practicePublished.length} 落地 / 动态预览 ${motionCount} / draft ${drafts.length} / 资产 ${assetCount} / 阻断 ${errors.length} / 复核 ${reviews.length} / 待确认 ${undetermined.length}`
);
