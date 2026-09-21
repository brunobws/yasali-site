import { access, readFile, readdir, stat } from 'node:fs/promises';
import { relative } from 'node:path';

const failures = [];
const distDirectory = new URL('../dist/', import.meta.url);
const indexPath = new URL('../dist/index.html', import.meta.url);
const indexHtml = await readFile(indexPath, 'utf8');
const status = await readFile(new URL('../docs/STATUS.md', import.meta.url), 'utf8');
const implementationComplete = /-\s*\[x\]\s*Fase 3B/i.test(status);

const findHtmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = new URL(entry.name, directory);
    if (entry.isDirectory()) return findHtmlFiles(new URL(`${entry.name}/`, directory));
    return entry.name.endsWith('.html') ? [path] : [];
  }));
  return files.flat();
};

const htmlFiles = await findHtmlFiles(distDirectory);
if (!htmlFiles.length) failures.push('dist não contém páginas HTML.');

for (const htmlPath of htmlFiles) {
  const html = await readFile(htmlPath, 'utf8');
  const requirePattern = (pattern, message) => {
    if (!pattern.test(html)) failures.push(message);
  };
  const page = relative(new URL('../', import.meta.url).pathname, htmlPath.pathname).replaceAll('\\', '/');
  const publicationStatus = html.match(/name=["']factory-publication-status["'][^>]+content=["']([^"']+)["']/i)?.[1];
  const isPublished = publicationStatus === 'ready';

  requirePattern(/<html[^>]+lang=["']pt-BR["']/i, `${page} precisa declarar lang="pt-BR".`);
  requirePattern(/name=["']viewport["'][^>]+viewport-fit=cover/i, `${page}: viewport precisa incluir viewport-fit=cover.`);
  requirePattern(/<meta[^>]+name=["']description["']/i, `${page}: meta description ausente.`);
  requirePattern(/<title>[^<]+<\/title>/i, `${page}: title ausente ou vazio.`);
  requirePattern(/<link[^>]+rel=["']icon["'][^>]+favicon\.svg\?v=/i, `${page}: favicon SVG versionado ausente.`);
  requirePattern(/<link[^>]+rel=["']icon["'][^>]+favicon-48\.png\?v=/i, `${page}: favicon PNG de 48 px versionado ausente.`);
  requirePattern(/<link[^>]+rel=["']apple-touch-icon["'][^>]+apple-touch-icon\.png\?v=/i, `${page}: Apple Touch Icon versionado ausente.`);

  if (!publicationStatus) failures.push(`${page}: status de publicação ausente.`);
  if (isPublished) {
    if (/name=["']robots["'][^>]+noindex/i.test(html)) failures.push(`${page}: página pública ainda contém noindex.`);
    requirePattern(/<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\//i, `${page}: canonical HTTPS ausente.`);
    requirePattern(/property=["']og:url["'][^>]+content=["']https:\/\//i, `${page}: og:url HTTPS ausente.`);
    requirePattern(/property=["']og:image["'][^>]+content=["']https:\/\//i, `${page}: og:image HTTPS ausente.`);
    requirePattern(/name=["']twitter:card["'][^>]+summary_large_image/i, `${page}: Twitter Card ausente.`);
  } else if (!/name=["']robots["'][^>]+noindex/i.test(html)) {
    failures.push(`${page}: starter não está em noindex.`);
  }

  if (implementationComplete) {
    if (/Projeto em preparação/i.test(html)) failures.push(`${page}: site completo ainda contém a tela inicial do starter.`);
  }
}

const faviconFiles = ['favicon.svg', 'favicon-48.png', 'apple-touch-icon.png'];
for (const filename of faviconFiles) {
  try {
    await access(new URL(`../dist/${filename}`, import.meta.url));
  } catch {
    failures.push(`dist/${filename} ausente.`);
  }
}

const robots = await readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8').catch(() => '');
const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8').catch(() => '');
if (!robots) failures.push('dist/robots.txt ausente.');
if (!sitemap) failures.push('dist/sitemap.xml ausente.');

const isPublishedBuild = /factory-publication-status["'][^>]+content=["']ready/i.test(indexHtml);
if (isPublishedBuild) {
  if (!/Allow:\s*\//i.test(robots) || !/Sitemap:\s*https:\/\//i.test(robots)) failures.push('robots.txt público precisa permitir rastreamento e apontar sitemap HTTPS.');
  if (!/<url>\s*<loc>https:\/\//i.test(sitemap)) failures.push('sitemap.xml público não contém URLs HTTPS.');
} else {
  if (!/Disallow:\s*\//i.test(robots)) failures.push('robots.txt do starter precisa bloquear rastreamento.');
  if (/<url>/i.test(sitemap)) failures.push('sitemap.xml do starter não pode listar URLs.');
}

if (implementationComplete) {
  const faviconSvg = await readFile(new URL('../dist/favicon.svg', import.meta.url), 'utf8').catch(() => '');
  if (/data-factory-favicon/i.test(faviconSvg)) failures.push('Site completo ainda usa o favicon genérico da fábrica.');
}

const { size } = await stat(indexPath);
if (size > 150_000) failures.push(`index.html possui ${size} bytes; revise HTML excessivo.`);

if (failures.length) {
  console.error('QA estático reprovado:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`QA estático aprovado: dist/index.html (${size} bytes).`);
