import rawProducts from "../data/products.json";
import type { Product } from "../types";

const requiredFields = ["slug", "name", "brand", "gender", "category", "family", "usage", "price", "volume", "image", "description"] as const;

function validateProducts(input: unknown): Product[] {
  if (!Array.isArray(input)) throw new Error("Catálogo inválido: esperado um array de produtos.");
  const slugs = new Set<string>();

  return input.map((candidate, index) => {
    const product = candidate as Partial<Product>;
    for (const field of requiredFields) {
      if (typeof product[field] !== "string" || !product[field]?.trim()) {
        throw new Error(`Catálogo inválido: campo obrigatório vazio em ${field} (item ${index + 1}).`);
      }
    }
    if (slugs.has(product.slug as string)) throw new Error(`Catálogo inválido: slug duplicado ${product.slug}.`);
    slugs.add(product.slug as string);
    if (!Array.isArray(product.notes) || product.notes.length === 0) throw new Error(`Catálogo inválido: notes vazio em ${product.slug}.`);
    if (typeof product.giftable !== "boolean" || typeof product.featured !== "boolean") throw new Error(`Catálogo inválido: flags ausentes em ${product.slug}.`);
    if (!product.image?.startsWith("/")) throw new Error(`Catálogo inválido: imagem deve ser um caminho público em ${product.slug}.`);
    return product as Product;
  });
}

export const products = validateProducts(rawProducts);
