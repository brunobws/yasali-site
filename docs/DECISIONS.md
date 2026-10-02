# Decisões

## D-001 — Preservar Vinext/React

**Status:** aprovada para as fases iniciais. A Yasali já funciona em Vinext/React; a factory Astro é tratada como padrão futuro, não como migração automática.

## D-002 — Deploy estático na Hostinger

**Status:** atual. `dist/` é gerado por `npm run build:hostinger`; os chunks client-side devem ser preservados.

## D-003 — Conversão por WhatsApp

**Status:** hipótese operacional segura para o MVP, baseada no briefing e no canal público. Checkout não está aprovado.

## D-004 — Destaques não são ranking

**Status:** vigente. Até confirmação da cliente, usar “em destaque”/“seleção para presente”, nunca “mais vendidos”.

## D-005 — Fonte legada preservada

`CONTEXTO_DO_PROJETO.md` continua existindo; a pasta `client/` organiza cópias operacionais sem apagar o original.

## D-006 — Domínio oficial e sinais de entidade

**Status:** vigente.

`https://yasali.com.br` é o domínio canônico do site. Sitemap, robots, canonical, Open Graph, JSON-LD e documentação para agentes usam esse domínio por padrão. Informações locais ficam limitadas a Sorocaba — SP até que endereço e horário sejam confirmados.
