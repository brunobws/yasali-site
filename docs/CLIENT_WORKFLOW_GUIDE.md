# Guia humano para criar um novo site

Use este roteiro em cada cliente. Os contratos de entrada, saída e aprovação estão em `docs/PHASE_CONTRACTS.md`; este guia só mostra a sequência prática.

## 1. Criar o projeto

1. No GitHub, use o template da Factory para criar um repositório **privado**.
2. Clone o repositório e abra a pasta no Codex.
3. Coloque logo, fotos, briefing, anotações, textos, PDFs e referências em `assets/inbox/`.
4. Execute `npm install` e confirme que terminou sem erro.

## 2. Descoberta — Fase 1

Envie ao Codex:

```text
Inicie a Fase 1 deste projeto.

Empresa: [nome]
Site atual: [link ou “não possui”]
Redes sociais: [links]
Concorrentes ou referências: [links]
Informações confirmadas da reunião: [anotações]
```

Revise `client/`, `client/SOURCE_REGISTER.md`, `client/ASSET_MANIFEST.md` e `docs/PENDING.md`. Corrija fatos; responda somente pendências que alterem conteúdo, mídia, conformidade, integração ou release.

Para aprovar:

```text
A descoberta está aprovada. Registre a aprovação em docs/STATUS.md e não inicie a próxima fase.
```

## 3. Estratégia — Fase 2A

Envie ao Codex:

```text
Execute a Fase 2A usando a descoberta aprovada. Não programe o site e não faça commit.
```

Revise objetivo, público, jornada, sitemap, copy, SEO, CTA, direção criativa e plano de mídia.

Para aprovar:

```text
O planejamento está aprovado. Registre a aprovação em docs/STATUS.md e não inicie a Fase 2B.
```

## 4. Calibração visual — Fase 2B

```text
Execute a Fase 2B usando o planejamento aprovado. Apresente duas direções visuais pequenas em desktop e celular. Não programe o site completo e não faça commit.
```

Compare as duas direções por tipografia, cores, imagens, densidade, movimento, referências e anti-referências. Escolha uma antes de abrir a Fase 3A.

Antes das Fases 3A, 3B e 4, declare as capacidades disponíveis e rode o preflight. Exemplo:

```text
npm run check:integrations -- --phase 3a --available browser,ui-ux-pro-max
```

Use `docs/INTEGRATIONS_GUIDE.md` para a matriz completa. Figma e GitHub são opcionais; Browser ou Playwright é indispensável para encerrar 3A, 3B e 4.

## 5. Design lock — Fase 3A

Envie ao Codex:

```text
Execute a Fase 3A usando a calibração visual aprovada. Crie somente o design lock previsto no contrato, inspecione desktop e celular e não faça commit.
```

Revise hero, menu aberto, cards, carrossel ou galeria, formulário, mapa, elementos fixos, textos longos, celular e desktop. Componentes fora do escopo precisam ficar marcados como não aplicáveis no design lock.

Use `docs/VISUAL_QA_MATRIX.md` nesta fase e nas fases seguintes. Os cinco tamanhos, overflow, console e teclado são obrigatórios; atualize snapshots somente quando a mudança visual estiver revisada.

Para aprovar:

```text
O design lock está aprovado. Registre a aprovação em docs/STATUS.md e não inicie a Fase 3B sem essa aprovação.
```

## 6. Desenvolvimento — Fase 3B

Envie ao Codex:

```text
Execute a Fase 3B usando o design lock aprovado. Implemente o escopo aprovado, execute check, build e QA. Não faça commit nem publique.
```

Revise em dois checkpoints: após o topo e a primeira dobra; e após conteúdo, contato, localização e rodapé, antes do acabamento. Para prosseguir, envie as mensagens indicadas em `docs/IMPLEMENTATION_SLICES.md`.

## 7. Auditoria — Fase 4

Envie ao Codex em outra tarefa quando possível:

```text
Execute a Fase 4 como auditor crítico e independente. Revise UX, UI, copy, acessibilidade, mobile, links, imagens, SEO, performance e publicação. Corrija somente problemas objetivos; não faça commit.
```

## 8. Release

Sem domínio definitivo, mantenha `publicationStatus: 'starter'` em `src/config/site.ts`; não invente canonical absoluto, sitemap, imagem Open Graph ou IDs de analytics. Com domínio e imagem confirmados, preencha essa configuração uma única vez, liste os caminhos publicáveis, gere o `dist` e então envie:

```text
A implementação e a auditoria estão aprovadas. Revise o diff, confirme que não há segredos, execute o QA final e faça commit e push. Publique somente se eu autorizar.
```

## Regra permanente

Não avance porque o código “parece pronto”. A aprovação humana deve ser registrada em `docs/STATUS.md` antes do portão seguinte.
