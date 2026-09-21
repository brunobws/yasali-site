# Fase 3A — Design lock responsivo

Leia `AGENTS.md`, `docs/STATUS.md`, `docs/PHASE_CONTRACTS.md`, `client/`, `planning/`, `standards/` e os assets aprovados. Confirme que a calibração visual está aprovada e siga somente a direção escolhida em `planning/VISUAL_CALIBRATION.md`. Leia também `planning/DESIGN_LOCK.md`, `docs/QA_REPORT.md`, `standards/QA_STANDARD.md`, `standards/MOBILE_UX_STANDARD.md`, `standards/MEDIA_STANDARD.md` e `standards/TECHNICAL_STANDARD.md`.

Apresente um plano curto. Implemente somente o recorte necessário para travar a experiência: cabeçalho, hero, seção representativa, CTA, rodapé e cada componente previsto que ainda possa mudar a decisão visual ou de interação. Não desenvolva todas as páginas nem faça commit. Use apenas conteúdo confirmado. O design lock deve demonstrar conceito autoral, logo real, imagem principal preparada para web e estados funcionais representativos.

Preencha `planning/DESIGN_LOCK.md`. Teste cada item aplicável: menu aberto e fechado; cards ou accordions em estado fechado, aberto e exclusivo quando houver apenas um ativo; carrossel por botão, arraste e teclado; galeria; formulário com rótulos, foco e erro; mapa/localização; elementos fixos; e textos longos. Um item pode ser `não aplicável` somente com justificativa ligada ao escopo aprovado.

Execute `docs/VISUAL_QA_MATRIX.md` e inspecione todas as larguras de `factory.config.json`. Registre evidência visual em 390 e 1440 px, além das demais larguras exigidas. Avalie conceito, hero, ritmo, logo, navegação, CTA, rodapé, movimento, contraste, recorte de imagem, toque, foco, safe areas e densidade mobile. Confirme ausência de rolagem horizontal, dependência de hover, conteúdo cortado e sobreposição de elementos fixos. Verifique `prefers-reduced-motion`, o peso do hero e do conteúdo inicial para não levar um gargalo estrutural à implementação completa.

Verifique as saídas e bloqueios definidos no contrato da Fase 3A. Atualize o status para `aguardando aprovação`, registre o QA e relacione as evidências no design lock. Encerre aguardando aprovação explícita; não aprove a fase, não avance nem faça commit.
