# Fase 3B — Desenvolvimento completo

Leia `AGENTS.md`, `docs/STATUS.md`, `docs/PHASE_CONTRACTS.md`, `docs/IMPLEMENTATION_SLICES.md`, `client/`, `planning/`, `standards/`, `planning/DESIGN_LOCK.md` e os assets aprovados. Confirme que o design lock está aprovado. O padrão é Astro com TypeScript e saída estática.

Apresente um plano curto e execute somente o conjunto autorizado pelo último checkpoint. Sem Checkpoint 1, execute apenas a Fatia 1; com Checkpoint 1 registrado, execute as Fatias 2 e 3 na mesma continuação; com Checkpoint 2 registrado, execute apenas a Fatia 4. Atualize `docs/IMPLEMENTATION_SLICES.md` e `docs/STATUS.md` ao encerrar cada fatia. Não desenvolva uma fatia fora de ordem, não faça commit e não publique.

1. **Fatia 1 — topo e primeira dobra:** implemente shell, cabeçalho, navegação, hero, CTA principal e primeira dobra. Verifique menu, logo, CTA, LCP, responsive e overflow nas larguras da Factory. Registre evidências e pare no Checkpoint 1 aguardando revisão humana.
2. **Fatia 2 — conteúdo:** depois do Checkpoint 1, implemente seções, páginas internas e componentes previstos. Preserve os estados aprovados no design lock e teste textos longos, mídia, toque e teclado.
3. **Fatia 3 — contato, localização e rodapé:** implemente formulário, canais, localização ou mapa, rodapé e integrações confirmadas. Teste links, CTA, erros de formulário, elementos fixos e safe areas. Ao terminar as fatias 2 e 3, registre evidências e pare no Checkpoint 2 antes do acabamento.
4. **Fatia 4 — acabamento, performance e SEO:** somente depois do Checkpoint 2, refine o visual, prepare mídia responsiva, aplique SEO e acessibilidade, execute check, build e QA final. Verifique console, links, CTAs, metadados, todas as larguras e Chromium/WebKit/Safari quando disponível; documente limitações.

Prepare fotografias em AVIF/WebP com variantes adequadas ao recorte mobile e desktop. Priorize o asset de LCP, carregue mídia abaixo da dobra tardiamente e reserve dimensões. Implemente safe areas, fallback para ausência de hover, `prefers-reduced-motion` e comportamento correto com teclado virtual. Use cards interativos, WhatsApp flutuante e botão de voltar ao topo somente quando aprovados e adequados à extensão da página.

Depois da Fatia 4, execute `docs/VISUAL_QA_MATRIX.md`, incluindo o baseline Playwright disponível e os estados aplicáveis ao site. Verifique as saídas e bloqueios do contrato da Fase 3B. Corrija problemas e atualize o status para `aguardando aprovação`, além do QA. Não aprove a implementação em nome do desenvolvedor, não faça commit e não publique sem pedido explícito.
