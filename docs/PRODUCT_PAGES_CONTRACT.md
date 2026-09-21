# Contrato de páginas individuais

## Rota

Cada produto aprovado gera `/produto/<slug>/index.html` no pacote estático. Os slugs são derivados da fonte única `app/data/products.json`.

## Conteúdo

Cada página exibe nome, marca, gênero, imagem, descrição, família, notas, momento, volume, preço, CTA contextual para WhatsApp e até três produtos relacionados.

## SEO e dados estruturados

- `title` e `description` são derivados do produto.
- `canonical` é relativo à própria rota, sem inventar domínio definitivo.
- Open Graph usa a imagem do produto.
- JSON-LD usa `Product`, `Brand`, família, momento e volume.
- `Offer` só é incluído quando há preço numérico; “Sob consulta” não é convertido em preço falso.

## Deploy

`scripts/export-static.mjs` renderiza a home e as 29 páginas individuais, gravando cada uma em seu diretório. O `.htaccess` usa `DirectoryIndex index.html`.
