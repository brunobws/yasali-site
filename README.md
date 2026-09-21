# VelozeWeb Site Factory

Template operacional `0.6.0` para criar sites autorais da VelozeWeb com Astro, TypeScript e Codex. Inclui processo por fases, checkpoints humanos, QA técnico/visual e um starter neutro; reutilize sua base de qualidade, nunca a aparência de um cliente anterior.

## Criar um site novo

1. No GitHub, abra `velozeweb-site-factory` e escolha **Use this template**.
2. Crie um repositório privado, por exemplo `new-client-site`.
3. Clone-o e abra sua pasta como projeto no Codex.
4. Coloque materiais recebidos em `assets/inbox/`.
5. Em uma nova tarefa, escreva: **“Inicie a Fase 1 deste projeto.”**

Cada cliente recebe seu próprio repositório. Nunca crie clientes como subpastas desta fábrica.

Para o roteiro completo, com mensagens prontas para cada fase, siga `docs/CLIENT_WORKFLOW_GUIDE.md`.

O starter oferece Astro estático, metadados básicos, estilos neutros e componentes acessíveis opcionais. Eles só devem ser adaptados e usados quando a estratégia aprovar. Execute `npm install` no novo projeto antes do primeiro desenvolvimento.

## Comandos

```text
npm run dev
npm run check
npm run build
npm run preview
npm run test:visual
npm run qa
```

`npm run qa` executa a verificação do Astro, o build e checagens estáticas do artefato, incluindo os arquivos de favicon. Lighthouse e inspeção visual continuam obrigatórios nas fases 3 e 4.

## Pedidos curtos

O Codex carrega `AGENTS.md`, que roteia cada pedido para o prompt e os documentos corretos. Exemplos:

```text
Inicie a Fase 1 deste projeto.
Execute a Fase 2A usando a descoberta aprovada.
Execute a Fase 2B usando o planejamento aprovado.
Crie o design lock da Fase 3A. Não faça commit.
O design lock está aprovado. Execute a Fase 3B.
Execute a auditoria final da Fase 4.
```

Prefira uma tarefa do Codex por fase. A memória do projeto fica nos arquivos, especialmente em `docs/STATUS.md`, e não no histórico de outra conversa.

Entrada, saída, bloqueios e aprovação de cada etapa estão em `docs/PHASE_CONTRACTS.md`. Uma pendência só bloqueia o que depender dela; nunca deve ser transformada em fato para acelerar o fluxo.

## Estrutura

- `AGENTS.md`: roteamento e regras permanentes.
- `00_CONTEXT.md`: contexto permanente da VelozeWeb e uso correto das referências.
- `standards/`: critérios compartilhados de conteúdo, mídia, mobile, código, QA e Git.
- `prompts/`: contrato operacional de cada fase.
- `client/`: fatos e assets do cliente.
- `planning/`: estratégia aprovada.
- `docs/STATUS.md`: fase, aprovações, decisões e pendências.
- `docs/PHASE_CONTRACTS.md`: entrada, saída, bloqueios e aprovação de cada fase.
- `docs/MIGRATION_GUIDE.md`: atualização seletiva de projetos criados por versões anteriores.
- `docs/QA_REPORT.md`: verificações finais.
- `CHANGELOG.md`: histórico de mudanças reutilizáveis da fábrica.
- `assets/`: materiais recebidos, aprovados e arquivados.
- `references/`: estudos de sites anteriores; inspiração de princípios, nunca cópia.
- `src/`: starter Astro neutro, sem identidade de cliente.
- `scripts/`: verificações automatizadas que complementam o QA visual.
