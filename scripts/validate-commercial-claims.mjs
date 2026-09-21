import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = [
  "app/page.tsx",
  "app/components/CommercialHighlights.tsx",
  "app/components/GiftHighlights.tsx",
  "app/data/products.json",
];
const forbidden = [/mais\s+vendid/i, /best.?seller/i, /campe[ãa]o\s+de\s+vendas/i, /muito\s+procurad/i];
const violations = [];

for (const relativePath of files) {
  const content = await readFile(path.join(root, relativePath), "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(content)) violations.push(`${relativePath}: claim comercial não confirmado (${pattern})`);
  }
}

if (violations.length) {
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("Claims comerciais controlados: nenhum ranking não confirmado encontrado no conteúdo publicado.");
