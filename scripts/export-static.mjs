import { cp, mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(fileURLToPath(new URL("../", import.meta.url)));
const publicSiteUrl = (process.env.PUBLIC_SITE_URL ?? "https://navajowhite-pigeon-349040.hostingersite.com").replace(/\/$/, "");
const publicSite = new URL(publicSiteUrl);
const buildRoot = path.join(projectRoot, "dist");
const clientRoot = path.join(buildRoot, "client");
const workerEntry = path.join(buildRoot, "server", "index.js");
const stageRoot = path.join(projectRoot, ".dist-hostinger-stage");

await rm(stageRoot, { recursive: true, force: true });
await mkdir(stageRoot, { recursive: true });

const workerUrl = pathToFileURL(workerEntry);
workerUrl.searchParams.set("static-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request(`${publicSiteUrl}/`, {
    headers: { accept: "text/html", host: publicSite.host, "x-forwarded-host": publicSite.host, "x-forwarded-proto": publicSite.protocol.replace(":", "") },
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

if (!response.ok) {
  throw new Error(`Não foi possível renderizar a página: HTTP ${response.status}`);
}

let html = await response.text();

// Mantemos o runtime do cliente porque o catálogo possui busca e filtros
// interativos. A página continua sendo servida como HTML estático pela Hostinger.
html = html
  .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
  .replace(
    /<link\b(?=[^>]*\brel=["'](?:shortcut icon|icon|apple-touch-icon|manifest)["'])[^>]*>/gi,
    "",
  )
  .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
  .replace(/\sdata-precedence=["'][^"']*["']/gi, "");

const staticIconHead = [
  '<meta name="theme-color" content="#35221d">',
  '<link rel="shortcut icon" href="/favicon.png?v=2" type="image/png">',
  '<link rel="icon" href="/favicon-16x16.png?v=2" type="image/png" sizes="16x16">',
  '<link rel="icon" href="/favicon-32x32.png?v=2" type="image/png" sizes="32x32">',
  '<link rel="icon" href="/favicon.png?v=2" type="image/png" sizes="512x512">',
  '<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" type="image/png" sizes="180x180">',
  '<link rel="manifest" href="/site.webmanifest?v=2">',
].join("");

html = html.replace("</head>", `${staticIconHead}</head>`);

await cp(clientRoot, stageRoot, { recursive: true, force: true });
for (const unusedPath of [
  ".vite",
  ".assetsignore",
  "_headers",
  "vinext-client-entry-manifest.json",
  "file.svg",
  "globe.svg",
  "window.svg",
]) {
  await rm(path.join(stageRoot, unusedPath), { recursive: true, force: true });
}
const nextStaticRoot = path.join(stageRoot, "_next", "static");
for (const entry of await readdir(nextStaticRoot, { withFileTypes: true })) {
  if (entry.name !== "css" && entry.name !== "chunks") {
    await rm(path.join(nextStaticRoot, entry.name), { recursive: true, force: true });
  }
}
await writeFile(path.join(stageRoot, "index.html"), html, "utf8");

async function writeStaticPage(pathname, directoryName) {
  const pageResponse = await worker.fetch(
    new Request(`${publicSiteUrl}${pathname}`, {
      headers: { accept: "text/html", host: publicSite.host, "x-forwarded-host": publicSite.host, "x-forwarded-proto": publicSite.protocol.replace(":", "") },
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

  if (!pageResponse.ok) {
    throw new Error(`Não foi possível renderizar ${pathname}: HTTP ${pageResponse.status}`);
  }

  let pageHtml = await pageResponse.text();
  pageHtml = pageHtml
    .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["'](?:shortcut icon|icon|apple-touch-icon|manifest)["'])[^>]*>/gi, "")
    .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
    .replace(/\sdata-precedence=["'][^"']*["']/gi, "");
  pageHtml = pageHtml.replace("</head>", `${staticIconHead}</head>`);
  const pageDirectory = path.join(stageRoot, directoryName);
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(path.join(pageDirectory, "index.html"), pageHtml, "utf8");
}

await writeStaticPage("/decants", "decants");
await writeStaticPage("/body-splash", "body-splash");

const catalogResponse = await worker.fetch(
  new Request(`${publicSiteUrl}/catalogo`, {
    headers: { accept: "text/html", host: publicSite.host, "x-forwarded-host": publicSite.host, "x-forwarded-proto": publicSite.protocol.replace(":", "") },
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

if (!catalogResponse.ok) {
  throw new Error(`Não foi possível renderizar o catálogo: HTTP ${catalogResponse.status}`);
}

let catalogHtml = await catalogResponse.text();
catalogHtml = catalogHtml
  .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
  .replace(/<link\b(?=[^>]*\brel=["'](?:shortcut icon|icon|apple-touch-icon|manifest)["'])[^>]*>/gi, "")
  .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
  .replace(/\sdata-precedence=["'][^"']*["']/gi, "");
catalogHtml = catalogHtml.replace("</head>", `${staticIconHead}</head>`);
const catalogDirectory = path.join(stageRoot, "catalogo");
await mkdir(catalogDirectory, { recursive: true });
await writeFile(path.join(catalogDirectory, "index.html"), catalogHtml, "utf8");

const catalog = JSON.parse(await readFile(path.join(projectRoot, "app", "data", "products.json"), "utf8"));
for (const product of catalog) {
  const productResponse = await worker.fetch(
    new Request(`${publicSiteUrl}/produto/${product.slug}`, {
      headers: { accept: "text/html", host: publicSite.host, "x-forwarded-host": publicSite.host, "x-forwarded-proto": publicSite.protocol.replace(":", "") },
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

  if (!productResponse.ok) {
    throw new Error(`Não foi possível renderizar o produto ${product.slug}: HTTP ${productResponse.status}`);
  }

  let productHtml = await productResponse.text();
  productHtml = productHtml
    .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["'](?:shortcut icon|icon|apple-touch-icon|manifest)["'])[^>]*>/gi, "")
    .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
    .replace(/\sdata-precedence=["'][^"']*["']/gi, "");
  productHtml = productHtml.replace("</head>", `${staticIconHead}</head>`);

  const productDirectory = path.join(stageRoot, "produto", product.slug);
  await mkdir(productDirectory, { recursive: true });
  await writeFile(path.join(productDirectory, "index.html"), productHtml, "utf8");
}

await writeFile(
  path.join(stageRoot, ".htaccess"),
  [
    "DirectoryIndex index.html",
    "Options -Indexes",
    "",
    "<IfModule mod_headers.c>",
    "  Header always set X-Content-Type-Options \"nosniff\"",
    "  Header always set X-Frame-Options \"SAMEORIGIN\"",
    "  Header always set Referrer-Policy \"strict-origin-when-cross-origin\"",
    "  Header always set Permissions-Policy \"camera=(), microphone=(), geolocation=()\"",
    "</IfModule>",
    "",
    "<IfModule mod_expires.c>",
    "  ExpiresActive On",
    "  ExpiresByType image/jpeg \"access plus 1 year\"",
    "  ExpiresByType image/png \"access plus 1 year\"",
    "  ExpiresByType image/webp \"access plus 1 year\"",
    "  ExpiresByType text/css \"access plus 1 month\"",
    "</IfModule>",
    "",
  ].join("\n"),
  "utf8",
);

const exportedHtml = await readFile(path.join(stageRoot, "index.html"), "utf8");
for (const expected of [
  "Yasali Perfumaria",
  "Veja todos os perfumes da Yasali",
  "Royal Amber",
  "@yasali.perfumaria",
]) {
  if (!exportedHtml.includes(expected)) {
    throw new Error(`Conteúdo obrigatório ausente no HTML estático: ${expected}`);
  }
}

const productPageHtml = await readFile(path.join(stageRoot, "produto", "asad", "index.html"), "utf8");
for (const expected of ["Asad", "Notas em destaque", "application/ld+json", "Consultar disponibilidade"]) {
  if (!productPageHtml.includes(expected)) {
    throw new Error(`Conteúdo obrigatório ausente na página de produto: ${expected}`);
  }
}

const sitemapUrls = [
  `${publicSiteUrl}/`,
  `${publicSiteUrl}/catalogo/`,
  `${publicSiteUrl}/decants/`,
  `${publicSiteUrl}/body-splash/`,
  ...catalog.map((product) => `${publicSiteUrl}/produto/${product.slug}/`),
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(path.join(stageRoot, "sitemap.xml"), sitemapXml, "utf8");
await writeFile(path.join(stageRoot, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${publicSiteUrl}/sitemap.xml\n`, "utf8");

await rm(buildRoot, { recursive: true, force: true });
await rename(stageRoot, buildRoot);

console.log(`Pasta estática pronta: ${buildRoot}`);
