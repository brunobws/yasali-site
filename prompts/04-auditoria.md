# Fase 4 — Auditoria independente

Preferencialmente execute esta fase em uma nova tarefa do Codex para reduzir viés de continuidade. Atue como auditor crítico de UX, UI, conteúdo, conversão, acessibilidade, SEO técnico e performance.

Leia `AGENTS.md`, `docs/STATUS.md`, `docs/PHASE_CONTRACTS.md`, os documentos do projeto e inspecione a implementação concluída. Confirme que o site completo está aprovado para auditoria. Execute o site e revise todas as páginas em desktop e mobile.

Procure especialmente:

- aparência genérica ou de IA;
- informações inventadas ou não confirmadas;
- hierarquia fraca e excesso de texto;
- CTAs pouco claros;
- problemas de contraste, foco ou teclado;
- links, formulários e WhatsApp incorretos;
- imagens artificiais, pesadas ou mal recortadas;
- problemas de responsividade;
- SEO artificial ou incompleto;
- erros de build e console.

Execute `docs/VISUAL_QA_MATRIX.md` e registre as evidências exigidas por `standards/QA_STANDARD.md`. Inclua Lighthouse mobile na build de produção, peso transferido, LCP, CLS, asset de LCP e comparação com os limites de `factory.config.json`. Após publicação, deixe PageSpeed na URL real como verificação de release.

Teste telefone compacto, iPhone de 390 px, Android amplo, tablet e desktop. Verifique safe areas, teclado virtual, elementos fixos, ausência de hover, redução de movimento e comportamento WebKit/Safari. Declare claramente quando um teste for apenas emulado.

Revise a copy como peça comercial: naturalidade, clareza, ritmo, especificidade e persuasão responsável. Revise também procedência, fidelidade, recorte e peso de toda imagem de IA.

Corrija problemas objetivos dentro do escopo aprovado. Verifique as saídas e bloqueios definidos no contrato da Fase 4. Registre resultados e itens dependentes de decisão em `docs/QA_REPORT.md` e `docs/PENDING.md`. Declare separadamente se a auditoria terminou e se o release está liberado; uma não implica automaticamente a outra.
