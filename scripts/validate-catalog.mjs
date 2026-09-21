import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "app", "data", "products.json");
const products = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const required = ["slug", "name", "brand", "gender", "category", "family", "notes", "usage", "giftable", "featured", "price", "volume", "image", "description"];
const slugs = new Set();
const errors = [];

for (const [index, product] of products.entries()) {
  for (const field of required) {
    if (product[field] === undefined || product[field] === null || product[field] === "" || (Array.isArray(product[field]) && product[field].length === 0)) {
      errors.push(`item ${index + 1}: campo obrigatório vazio (${field})`);
    }
  }
  if (slugs.has(product.slug)) errors.push(`slug duplicado: ${product.slug}`);
  slugs.add(product.slug);
  if (!product.image?.startsWith("/")) errors.push(`${product.slug}: caminho de imagem inválido`);
  const imagePath = path.join(root, "public", product.image.replace(/^\//, ""));
  if (!fs.existsSync(imagePath)) errors.push(`${product.slug}: imagem ausente (${product.image})`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Catálogo válido: ${products.length} produtos, ${slugs.size} slugs únicos, imagens encontradas.`);
