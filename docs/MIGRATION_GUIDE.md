# Guia de migração e convivência com a factory

## Estado atual

O projeto é Vinext/React e publica uma saída estática para Hostinger. A factory tem Astro/static como padrão, mas `factory.config.json` registra uma exceção explícita.

## Ordem segura

1. Adotar documentos e gates de aprovação.
2. Normalizar conteúdo/assets sem mudar a apresentação.
3. Fortalecer testes de interação e QA visual.
4. Só então comparar uma eventual migração Astro.

## O que não fazer automaticamente

- Não reescrever `app/` para Astro.
- Não remover `scripts/export-static.mjs`.
- Não trocar o destino Hostinger por Sites.
- Não transformar hipóteses comerciais em dados publicados.

## Critério para uma futura migração

Deve existir decisão aprovada, inventário de rotas/componentes, plano de equivalência de filtros/SEO, estratégia de rollback e comparação de build/testes.
