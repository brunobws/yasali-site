# Contrato de SEO técnico

## Domínio

O pacote atual usa o domínio temporário confirmado `https://navajowhite-pigeon-349040.hostingersite.com`. Antes do lançamento, substituir por `PUBLIC_SITE_URL` ou atualizar a configuração quando o domínio definitivo estiver confirmado.

## Artefatos

- Home com title, description, canonical relativo e Open Graph.
- Páginas de produto com metadata própria, canonical relativo e JSON-LD `Product`.
- Home com JSON-LD `ItemList` do catálogo.
- `dist/sitemap.xml` com home + 29 produtos.
- `dist/robots.txt` apontando para o sitemap do domínio temporário.

O exportador rejeita respostas de produto inválidas e a validação estática rejeita `yasali.example`, sitemap incompleto e JSON-LD ausente.
