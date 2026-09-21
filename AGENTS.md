# AGENTS.md — Yasali

## Ordem de leitura

1. `00_CONTEXT.md`
2. `client/BRIEF.md`, `client/BRAND.md`, `client/CONTENT.md`, `client/REQUIREMENTS.md`
3. `client/SOURCE_REGISTER.md` e `client/ASSET_MANIFEST.md`
4. `docs/STATUS.md`, `docs/PENDING.md` e `docs/DECISIONS.md`
5. `design-system/yasali-perfumaria/MASTER.md` e `CONTEXTO_DO_PROJETO.md`

## Regras de operação

- Preserve a stack atual Vinext/React até decisão explícita de migração.
- O padrão futuro da factory é Astro/static, mas não há migração automática.
- Não invente estoque, ranking de vendas, notas, fixação, entrega, pagamento ou políticas.
- Use `npm run build:hostinger` para validar o pacote estático destinado à Hostinger.
- Use `npm test` e `npm run lint` antes de concluir mudanças de implementação.
- Use `npm run validate:static-seo` após exportar para conferir sitemap, robots, canonical e JSON-LD.
- Use `npm run validate:qa` para conferir assets, filtros, URLs, foco e regras responsivas estruturais.
- Use `npm run validate:factory-phase4` para o gate integrado de SEO, headers, copy, conversão e velocidade antes do lançamento.
- Preserve o exportador `scripts/export-static.mjs` e os chunks client-side dos filtros.
- Não publique, faça deploy ou altere serviços externos sem pedido explícito.
- Registre decisões e pendências nos documentos correspondentes.
