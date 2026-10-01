import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const publicUrl = "https://navajowhite-pigeon-349040.hostingersite.com";
const catalog = JSON.parse(await readFile(path.join(root, "app", "data", "products.json"), "utf8"));
const home = await readFile(path.join(dist, "index.html"), "utf8");
const catalogPage = await readFile(path.join(dist, "catalogo", "index.html"), "utf8");
const decantsPage = await readFile(path.join(dist, "decants", "index.html"), "utf8");
const bodySplashPage = await readFile(path.join(dist, "body-splash", "index.html"), "utf8");
const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
const robots = await readFile(path.join(dist, "robots.txt"), "utf8");

if (home.includes("yasali.example")) throw new Error("URL fictícia encontrada no HTML estático.");
if (!home.includes("application/ld+json")) throw new Error("JSON-LD ausente na home.");
if (!home.includes(publicUrl)) throw new Error("URL pública confirmada ausente na metadata da home.");
if (!robots.includes(`Sitemap: ${publicUrl}/sitemap.xml`)) throw new Error("robots.txt sem sitemap correto.");
if ((sitemap.match(/<url>/g) ?? []).length !== catalog.length + 4) throw new Error("sitemap.xml não corresponde às páginas institucionais + produtos.");
if (!catalogPage.includes("application/ld+json") || !catalogPage.includes("canonical")) throw new Error("SEO estruturado incompleto no catálogo.");
for (const [name, html] of [["decants", decantsPage], ["body splash", bodySplashPage]]) {
  if (!html.includes("canonical") || !html.includes("<title>")) throw new Error(`SEO básico incompleto em ${name}.`);
}

for (const product of catalog) {
  const pagePath = path.join(dist, "produto", product.slug, "index.html");
  await access(pagePath);
  const html = await readFile(pagePath, "utf8");
  if (!html.includes("application/ld+json") || !html.includes(`canonical`)) {
    throw new Error(`SEO estruturado incompleto em ${product.slug}.`);
  }
}

console.log(`SEO estático válido: home, catálogo, decants, body splash, robots, sitemap com ${catalog.length + 4} URLs e ${catalog.length} páginas de produto.`);
