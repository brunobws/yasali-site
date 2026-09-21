# Relatório de QA — baseline

**Data:** 21/09/2026

## Evidências disponíveis

- `npm run build:hostinger`: aprovado anteriormente.
- `npm test`: aprovado anteriormente, 2 testes.
- `npm run lint`: aprovado anteriormente.
- Exportador mantém scripts/chunks necessários para filtros client-side.
- `npm run validate:catalog`: aprovado — 29 produtos, 29 slugs únicos e todas as imagens encontradas.
- `npm run build`: aprovado após a extração dos dados.
- `node --test tests/rendered-html.test.mjs`: aprovado — 2 testes.
- `node scripts/export-static.mjs`: aprovado — `dist/` regenerado.
- Fase 3: componentes de filtros, cards, grupos, presentes e estado vazio compilados e renderizados sem alteração dos testes existentes.
- Fase 4: busca combinável, filtro `giftable`, ordenações e serialização de URL compilados; renderização estática e exportação aprovadas.
- Fase 5: build aprovado; 3 testes de renderização aprovados; exportação gerou 29 páginas em `dist/produto/`.
- Fase 6: lint sem erros, build e 3 testes aprovados; página Asad confirmou perfume, perfil, momento e família na mensagem contextual.
- Fase 7: `validate:commercial`, build, 3 testes e exportação aprovados; home confirmou as cinco seções controladas e nenhum claim de ranking.
- Fase 8: `validate:static-seo` aprovado; sitemap com 30 URLs, robots, canonical e JSON-LD verificados sem URL fictícia.
- Fase 9: lint sem erros (5 avisos existentes sobre `<img>` nativo), build aprovado, 3 testes aprovados, exportação Hostinger e `validate:qa` aprovados.
- Gate adicional da factory (Fase 4): `validate:factory-phase4` aprovado para SEO, headers, copy, conversão, velocidade e integridade do pacote.

## Portões reutilizados da factory principal

Os padrões de `standards/QA_STANDARD.md`, `TECHNICAL_STANDARD.md`, `SECURITY_STANDARD.md`, `MOBILE_UX_STANDARD.md`, `CONTENT_STANDARD.md` e `GIT_RELEASE_STANDARD.md` foram revisados contra a versão atual de `yasali-site`.

Os scripts Astro da factory (`static-qa`, `security-qa` e `release-integrity-qa`) não foram copiados literalmente porque esperam `src/`, favicon SVG/48 px e metadata do starter Astro. Para a exceção Vinext/React, os portões equivalentes foram adaptados e executados:

- `npm run lint`: aprovado, com 5 avisos existentes sobre `<img>` nativo.
- `npm run validate:catalog`: aprovado — 29 produtos e imagens encontradas.
- `npm run validate:commercial`: aprovado — nenhum ranking não confirmado.
- `npm run validate:static-seo`: aprovado — home, catálogo, robots, sitemap com 31 URLs e 29 produtos.
- `npm run validate:qa`: aprovado — assets, acessibilidade estrutural, filtros, URLs e páginas individuais.
- `npm run validate:factory-phase4`: aprovado — SEO, headers, copy, conversão, velocidade e integridade.
- `npm run qa`: adicionado como portão único adaptado para Vinext/React + Hostinger.

Limitações mantidas: `npm run test:visual` e Lighthouse continuam dependentes de runner visual externo; a revisão móvel foi feita em emulação do navegador e deve ser repetida em dispositivo real antes da publicação definitiva.

## Auditoria independente — `prompts/04-auditoria.md`

### Evidências executadas

- Servidor Vinext iniciado em `http://localhost:4321/`.
- Home, URL com filtros (`?q=baunilha&momento=Noite&presente=true`) e produto Asad responderam HTTP 200.
- Busca real no navegador atualizou a URL para `?q=baunilha` e exibiu 13 resultados.
- Navegação por teclado saiu do campo de busca e chegou ao select seguinte com foco nativo.
- Página de produto abriu com CTA contextual e, em aba limpa após a correção, não registrou erros/avisos de console.
- Auditoria encontrou e corrigiu `next/link` causando Invalid hook call no Vinext dev.
- Auditoria encontrou e corrigiu claim de disponibilidade e `InStock` sem estoque confirmado.

### Resultado por área

| Área | Resultado |
| --- | --- |
| UX/UI | hierarquia, cards, filtros e CTAs presentes; visual editorial preservado |
| Conteúdo/copy | claims comerciais não confirmados removidos; disponibilidade fica sob confirmação |
| Conversão | WhatsApp contextual e Instagram verificados |
| Acessibilidade | foco, labels, teclado, alvos mínimos e reduced motion verificados |
| SEO | title, canonical, JSON-LD, sitemap e robots aprovados |
| Performance | imagens com dimensões, lazy loading e CSS responsivo verificados |
| Console/build | build, 3 testes e console da aba limpa aprovados |

### Pendências classificadas

- **P2 — antes do lançamento:** medir Core Web Vitals no domínio publicado.
- **P2 — antes do lançamento:** repetir captura visual manual nos viewports 320, 390, 430, 768 e 1440 px.
- **P1 comercial:** confirmar domínio definitivo, estoque, preços e políticas com a Yasali.

## Portões de QA da Fase 9

| Portão | Evidência | Resultado |
| --- | --- | --- |
| Build Vinext | `npm run build` | aprovado |
| Exportação Hostinger | `node scripts/export-static.mjs` | aprovado |
| Imagens/favicon | `validate:catalog`, `validate:qa` | aprovado |
| Busca/filtros/URLs | testes + inspeção de fonte | aprovado |
| Páginas individuais | 3 testes + 29 arquivos | aprovado |
| WhatsApp | teste de página Asad + contrato | aprovado |
| Foco/touch/reduced motion | CSS estrutural | aprovado |
| Rolagem horizontal | `overflow-x: hidden` + CSS responsivo | aprovado estruturalmente |
| Console visual | aba limpa local, home/produto sem erros ou avisos | aprovado |

## Limitações

Não há ainda runner automatizado para screenshots por viewport nem verificação de Core Web Vitals em ambiente de produção. O relatório é baseline avançado, não certificação de lançamento.

## Regra para próximas mudanças

Reexecutar build, testes e lint após qualquer alteração de implementação. Para mudanças visuais, registrar screenshots/viewport na matriz visual.
