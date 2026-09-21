import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePage = await readFile(path.join(root, "app", "page.tsx"), "utf8");
const componentSources = await Promise.all(["app/components/CatalogExperience.tsx", "app/components/CatalogFilters.tsx", "app/components/ProductGrid.tsx", "app/components/ProductCard.tsx", "app/lib/whatsapp.ts"].map((file) => readFile(path.join(root, file), "utf8")));
const source = `${sourcePage}\n${componentSources.join("\n")}`;
const css = await readFile(path.join(root, "app", "globals.css"), "utf8");
const catalog = JSON.parse(await readFile(path.join(root, "app", "data", "products.json"), "utf8"));
const requiredSourceMarkers = ["URLSearchParams", "CatalogFilters", "ProductGrid", "createWhatsAppUrl", "produto/${product.slug}"];
for (const marker of requiredSourceMarkers) {
  if (!source.includes(marker) && !source.includes(marker.replace("${product.slug}", ""))) throw new Error(`QA: marcador ausente (${marker}).`);
}
for (const marker of ["overflow-x: hidden", "focus-visible", "min-height: 44px", "prefers-reduced-motion"]) {
  if (!css.includes(marker)) throw new Error(`QA: regra de acessibilidade/layout ausente (${marker}).`);
}
for (const asset of ["dist/index.html", "dist/catalogo/index.html", "dist/favicon.png", "dist/favicon-32x32.png", "dist/robots.txt", "dist/sitemap.xml"]) await access(path.join(root, asset));
for (const product of catalog) await access(path.join(root, "dist", "produto", product.slug, "index.html"));
console.log(`QA estrutural válido: assets, acessibilidade, filtros, URLs e ${catalog.length} páginas individuais.`);
