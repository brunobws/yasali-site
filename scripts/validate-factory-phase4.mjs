import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const html = await readFile(path.join(dist, "index.html"), "utf8");
const catalogHtml = await readFile(path.join(dist, "catalogo", "index.html"), "utf8");
const htaccess = await readFile(path.join(dist, ".htaccess"), "utf8");
const css = await readFile(path.join(dist, "_next", "static", "css", (await readdir(path.join(dist, "_next", "static", "css")))[0]), "utf8");
const catalog = JSON.parse(await readFile(path.join(root, "app", "data", "products.json"), "utf8"));
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

// Validação e SEO.
check(html.includes("Yasali Perfumaria"), "copy/HTML da marca ausente");
check(/<title>[^<]+<\/title>/.test(html), "title ausente");
check(/<meta name="description"/.test(html), "description ausente");
check(/rel="canonical"/.test(html), "canonical ausente");
check(html.includes("application/ld+json"), "JSON-LD ausente");
check((await stat(path.join(dist, "sitemap.xml"))).size > 100, "sitemap ausente ou vazio");
check((await stat(path.join(dist, "robots.txt"))).size > 20, "robots.txt ausente ou vazio");

// Headers de segurança do pacote Hostinger.
for (const header of ["X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", "Permissions-Policy", "Strict-Transport-Security", "Content-Security-Policy", "Cross-Origin-Resource-Policy"]) {
  check(htaccess.includes(`Header always set ${header}`), `header ausente: ${header}`);
}

// Copy e conversão.
for (const phrase of ["Quero uma indicação", "Abrir catálogo", "Instagram", "WhatsApp"]) check(html.includes(phrase), `copy/CTA ausente: ${phrase}`);
check(catalogHtml.includes("Consultar este perfume"), "CTA de produto ausente no catálogo");
check(html.includes("wa.me/5515981744696"), "número confirmado do WhatsApp ausente");
check(html.includes("instagram.com/yasali.perfumaria"), "Instagram ausente");
for (const forbidden of [/mais\s+vendid/i, /muito\s+procurad/i, /envio\s+autom[aá]tico/i, /InStock/i, /Disponível\s+sob\s+consulta/i]) check(!forbidden.test(html), `copy não permitido: ${forbidden}`);

// Velocidade e estabilidade visual: imagens dimensionadas, lazy loading e CSS enxuto.
const imageTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
check(imageTags.length > 5, "poucas imagens no HTML");
check(imageTags.every((tag) => /\bwidth="\d+"/.test(tag) && /\bheight="\d+"/.test(tag)), "imagem sem width/height, risco de layout shift");
check(imageTags.some((tag) => /loading="lazy"/.test(tag)), "nenhuma imagem lazy encontrada");
check(css.includes("prefers-reduced-motion"), "fallback de movimento reduzido ausente");
check(/overflow-x:\s*hidden/.test(css), "proteção contra overflow horizontal ausente");

for (const product of catalog) await access(path.join(dist, "produto", product.slug, "index.html"));
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Factory Phase 4 válida: SEO, headers, copy, conversão, velocidade e ${catalog.length} produtos verificados.`);
