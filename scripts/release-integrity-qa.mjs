import { access, readFile, readdir, stat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { relative } from 'node:path';

const failures = [];
const root = new URL('../', import.meta.url);
const distDirectory = new URL('../dist/', import.meta.url);
const sourceDirectories = ['src/', 'public/', 'scripts/'];
const secretPattern = /(?:sk_(?:live|test)_[A-Za-z0-9]{16,}|AIza[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{30,}|xox[baprs]-[A-Za-z0-9-]{10,}|-----BEGIN(?: RSA)? PRIVATE KEY-----)/;
const placeholderPattern = /(?:TODO|REPLACE_ME|YOUR_[A-Z_]+|example\.com)/i;
let externalUrlCount = 0;

const walk = async (directory, predicate = () => true) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = new URL(entry.name, directory);
    if (entry.isDirectory()) return walk(new URL(`${entry.name}/`, directory), predicate);
    return predicate(entry.name) ? [path] : [];
  }));
  return nested.flat();
};

const htmlFiles = await walk(distDirectory, (filename) => filename.endsWith('.html'));
if (!htmlFiles.length) failures.push('dist não contém páginas HTML para revisar.');

const localTargetExists = async (rawUrl) => {
  const path = rawUrl.split(/[?#]/)[0];
  if (!path || path.startsWith('#')) return true;
  if (path.includes('..')) return false;
  const normalized = path.replace(/^\//, '');
  const candidates = path.endsWith('/') || !normalized.includes('.')
    ? [`${normalized.replace(/\/$/, '')}/index.html`, normalized === '' ? 'index.html' : '']
    : [normalized];
  for (const candidate of candidates.filter(Boolean)) {
    try { await access(new URL(`../dist/${candidate}`, import.meta.url)); return true; } catch {}
  }
  return false;
};

for (const htmlPath of htmlFiles) {
  const html = await readFile(htmlPath, 'utf8');
  const page = relative(root.pathname, htmlPath.pathname).replaceAll('\\', '/');
  if (placeholderPattern.test(html)) failures.push(`${page}: placeholder público encontrado.`);

  const referencePattern = /<(?:a|link|script|img|source)\b[^>]+?(?:href|src)=["']([^"']+)["']/gi;
  for (const match of html.matchAll(referencePattern)) {
    const url = match[1].trim();
    if (/^javascript:/i.test(url)) {
      failures.push(`${page}: URL javascript: não é permitida.`);
      continue;
    }
    if (/^https?:/i.test(url)) {
      const parsed = new URL(url);
      if (parsed.protocol !== 'https:' || placeholderPattern.test(parsed.hostname)) failures.push(`${page}: URL externa insegura ou placeholder: ${url}.`);
      externalUrlCount += 1;
      continue;
    }
    if (/^(?:mailto:|tel:|data:|#)/i.test(url)) continue;
    if (!(await localTargetExists(url))) failures.push(`${page}: referência local não encontrada: ${url}.`);
  }

  for (const tag of html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)) {
    if (!/\brel=["'][^"']*\bnoopener\b[^"']*["']/i.test(tag[0])) failures.push(`${page}: link com target=_blank precisa de rel=noopener.`);
  }

  for (const schema of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(schema[1]); } catch { failures.push(`${page}: Schema.org não contém JSON válido.`); }
  }
}

const textFile = (filename) => /\.(?:astro|ts|js|mjs|json|html|css|txt)$/i.test(filename);
for (const directory of sourceDirectories) {
  const base = new URL(`../${directory}`, import.meta.url);
  const exists = await access(base).then(() => true).catch(() => false);
  if (!exists) continue;
  for (const file of await walk(base, textFile)) {
    const content = await readFile(file, 'utf8');
    if (secretPattern.test(content)) failures.push(`${relative(root.pathname, file.pathname)}: possível segredo encontrado.`);
  }
}

let trackedFiles = [];
try { trackedFiles = execFileSync('git', ['ls-files'], { cwd: new URL('../', import.meta.url), encoding: 'utf8' }).split(/\r?\n/).filter(Boolean); } catch { failures.push('Não foi possível listar arquivos rastreados pelo Git.'); }
for (const file of trackedFiles) {
  const name = file.split('/').at(-1)?.toLowerCase() ?? '';
  if ((name.startsWith('.env') && !name.endsWith('.example')) || /(?:^id_rsa$|\.(?:pem|p12|key)$)/i.test(name)) failures.push(`Arquivo sensível rastreado: ${file}.`);
}

const distFiles = await walk(distDirectory);
for (const file of distFiles) {
  const info = await stat(file);
  if (info.size === 0) failures.push(`Arquivo vazio no dist: ${relative(root.pathname, file.pathname)}.`);
}

if (failures.length) {
  console.error('QA de integridade reprovado:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`QA de integridade aprovado: ${htmlFiles.length} página(s), ${distFiles.length} arquivo(s) e ${externalUrlCount} URL(s) externa(s) revisados.`);
