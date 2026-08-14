import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Yasali catalog page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>Yasali Perfumaria \| Perfumes em Sorocaba<\/title>/i);
  assert.match(html, /Catálogo para descobrir/);
  assert.match(html, /Família olfativa/);
  assert.match(html, /Asad Bourbon/);
  assert.match(html, /Asad Elixir/);
  assert.match(html, /Attar Al Wesal/);
  assert.match(html, /Khamrah Qahwa/);
  assert.match(html, /Yara Tous/);
  assert.match(html, /Consultar este perfume/);
  assert.match(html, /https:\/\/wa\.me\/5515981744696/);
  assert.match(html, /Ir para o conteúdo/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /R\$|mais vendido|avaliaç(?:ão|ões)|em estoque/i);
});

test("keeps production assets and accessibility safeguards in place", async () => {
  const [page, css, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /homepage-hero-asad-bourbon\.webp/);
  assert.match(page, /assets|media\/products/);
  assert.match(page, /Native images avoid a vinext hydration incompatibility/);
  assert.match(page, /loading="lazy"/);
  assert.match(page, /aria-label="Abrir menu"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /min-height:\s*44px/);
  assert.match(layout, /lang="pt-BR"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/media/brand/yasali-logo-primary.png", import.meta.url));
  await access(new URL("../public/media/generated/hero/homepage-hero-asad-bourbon.webp", import.meta.url));
  await access(new URL("../public/media/products/khamrah/khamrah-official-01.jpg", import.meta.url));
  await access(new URL("../public/media/products/yara/yara-official-01.jpg", import.meta.url));
  assert.ok(templateRoot);
});
