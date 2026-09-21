import { access, readFile, readdir } from 'node:fs/promises';

const failures = [];
const configPath = new URL('../deployment/headers/security-headers.json', import.meta.url);
const config = JSON.parse(await readFile(configPath, 'utf8'));
const requiredHeaders = ['X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy', 'X-Frame-Options'];

if (config.host !== 'hostinger') failures.push('Host padrão da Factory deve ser Hostinger.');
if (config.httpsConfirmed !== false) failures.push('httpsConfirmed precisa permanecer falso até o domínio real ser confirmado.');
if (config.hsts?.enabled !== false) failures.push('HSTS precisa permanecer desativado sem HTTPS confirmado.');
for (const header of requiredHeaders) {
  if (!config.required?.[header]) failures.push(`Header obrigatório ausente: ${header}.`);
}
if (!/frame-ancestors\s+'none'/i.test(config.contentSecurityPolicy?.starter ?? '')) failures.push('CSP starter precisa bloquear framing.');
if (/["'](?:sk|pk|AIza|ghp_|xox[baprs]-)/i.test(JSON.stringify(config))) failures.push('Possível segredo encontrado na configuração de headers.');

const templatePaths = [
  '../deployment/headers/hostinger/.htaccess.example',
  '../deployment/headers/netlify/_headers.example',
  '../deployment/headers/vercel.json.example',
  '../deployment/headers/cloudflare-pages._headers.example',
];
for (const template of templatePaths) {
  try { await access(new URL(template, import.meta.url)); } catch { failures.push(`Template de headers ausente: ${template}.`); }
}
if (config.activeTemplate !== 'deployment/headers/hostinger/.htaccess.example') failures.push('Template ativo precisa ser o .htaccess da Hostinger.');

const distDirectory = new URL('../dist/', import.meta.url);
const scan = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = new URL(entry.name, directory);
    if (entry.isDirectory()) return scan(path);
    if (!/\.(html|js|css|json|txt)$/i.test(entry.name)) return [];
    return [{ path, content: await readFile(path, 'utf8') }];
  }));
  return files.flat();
};
for (const file of await scan(distDirectory)) {
  if (/(?:sk|pk|AIza|ghp_|xox[baprs]-)[A-Za-z0-9_-]{12,}/i.test(file.content)) failures.push(`Possível segredo no dist: ${file.path.pathname}.`);
}

if (failures.length) {
  console.error('QA de segurança reprovado:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('QA de segurança aprovado: Hostinger configurada, HSTS bloqueado e templates presentes.');
