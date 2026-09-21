# Status da factory — Yasali

**Fase atual:** 9 — QA e visualização  
**Status:** concluída, aguardando aprovação da Fase 10  
**Data:** 21/09/2026

## Estado

- Documentação inicial da factory criada.
- Stack atual registrada como Vinext/React.
- Astro registrado como padrão futuro, sem migração automática.
- Hostinger registrado como destino estático atual.
- Catálogo, assets, riscos e pendências catalogados.
- Site e comportamento visual não foram alterados nesta fase.
- Catálogo extraído para `app/data/products.json` com contrato tipado em `app/types.ts`.
- Validação de campos, slugs e imagens adicionada em `scripts/validate-catalog.mjs`.
- Filtros, cards, grupos, presentes e estado vazio extraídos para componentes reutilizáveis.
- A regra de seleção de presentes agora usa diretamente `product.giftable`.
- Busca combinável, filtro de presentes, ordenação e URL compartilhável adicionados.
- Catálogo geral movido para `/catalogo`; a landing page ficou mais curta e direciona a busca para essa rota.
- HTML inicial continua completo para o fallback estático.
- 29 páginas individuais foram criadas com metadata, canonical, JSON-LD, relacionados e WhatsApp contextual.
- CTAs de produto e presentes agora montam mensagens com contexto de escolha, sem envio automático.
- Filtro de presentes e agrupamento por perfil continuam derivados da fonte única do catálogo.
- Validação anti-claims comerciais adicionada.
- SEO técnico, sitemap, robots e JSON-LD validados no domínio temporário confirmado.
- QA estrutural adaptado ao Vinext/React e `dist` regenerado após o último código.
- Gate adicional da factory executado: SEO, headers, copy, conversão e velocidade aprovados.
- Portões da factory principal revisados e adaptados: QA estrutural, SEO estático, integridade comercial e release Hostinger.

## Validações existentes

As validações anteriores registradas no diagnóstico foram: `npm run build:hostinger`, `npm test` (2 testes) e `npm run lint` com sucesso.

## Próximo gate

Aguardar aprovação explícita antes da Fase 10.
