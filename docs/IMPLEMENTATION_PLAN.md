# Plano de evolução da fábrica

Este documento registra o estágio atual e as próximas frentes da VelozeWeb Site Factory. O histórico detalhado de versões está em `CHANGELOG.md`, e a atualização de projetos existentes segue `docs/MIGRATION_GUIDE.md`.

## Objetivo

Permitir que cada site seja criado em um repositório próprio e conduzido no Codex com pedidos curtos, memória verificável, aprovações humanas e qualidade demonstrada por evidências.

## Evolução concluída

### Versão 0.1 — Fundação

- estrutura inicial orientada a documentos;
- roteamento de descoberta, estratégia, desenvolvimento e auditoria;
- modelos de dados do cliente, planejamento e status.

### Versão 0.2 — Estratégia e padrões

- separação entre dados do cliente, referências e padrões permanentes;
- direção criativa, conteúdo, mídia, mobile e QA;
- referência documentada dos projetos da VelozeWeb.

### Versão 0.3 — Starter e qualidade técnica

- starter neutro com Astro e TypeScript;
- build estático, componentes opcionais e QA local;
- metas de performance e matriz de viewports;
- tratamento de favicon, safe areas, imagens de IA e release.

### Versão 0.4 — Governança documental

- hierarquia canônica de precedência em `AGENTS.md`;
- contratos de entrada, saída, bloqueio e aprovação por fase;
- nomenclatura uniforme das fases;
- changelog e estratégia de migração seletiva;
- alinhamento de versão entre configuração, pacote, status e documentação.

## Versão 0.5 — Descoberta calibrada

- classificação explícita de fatos, fontes, autoridade e uso permitido;
- filtro de pendências materiais, sem transformar decisões de estratégia em lacunas factuais;
- revisão avaliadora obrigatória antes de encerrar a descoberta;
- atualização do Prompt 1 e do contrato da Fase 1 para aplicar o padrão de descoberta.

## Critérios de conclusão até a versão 0.5

- [x] uma única hierarquia oficial, sem lista concorrente;
- [x] todas as fases apontam para `docs/PHASE_CONTRACTS.md`;
- [x] pendências são classificadas por impacto, sem bloqueio indiscriminado;
- [x] auditoria concluída e autorização de release são decisões separadas;
- [x] nomenclatura “Fase” usada em todos os prompts;
- [x] versionamento e migração documentados;
- [x] versões alinhadas em todos os arquivos canônicos.
- [x] descoberta calibrada com padrão próprio e revisão avaliadora.

## Versão 0.6.0 — concluída

As Etapas 0 a 14 da refatoração foram implementadas, verificadas e publicadas. O plano detalhado permanece como histórico operacional em `docs/FACTORY_UPGRADE_EXECUTION_PLAN.md`.

## Próxima evolução após 0.6.0

### Conteúdo e integridade visual

- formalizar uma rubrica de copy humana sem limites estilísticos mecânicos;
- exigir rastreabilidade de alegações sem incentivar números inventados;
- definir regras para gráficos, barras, comparativos e elementos que possam parecer dados.

### QA e automação

- ampliar o QA estático para todas as páginas;
- verificar links internos, metadados, placeholders e políticas de indexação;
- validar assets publicados contra o manifesto;
- adicionar integração contínua com runtime compatível;
- manter inspeção visual, Lighthouse e WebKit como evidências complementares.

### Operação em escala

- validar a versão 0.6.0 em um novo projeto-piloto;
- transformar migrações recorrentes em patches reproduzíveis;
- avaliar CLI de bootstrap e migração com modo de simulação;
- considerar uma skill somente quando o fluxo estiver estável e repetido em projetos suficientes.

## Princípio de evolução

Adicionar automação somente quando ela resolver um problema observado e mantiver revisão, rastreabilidade e reversão. A fábrica deve continuar autocontida e compreensível sem depender de uma ferramenta ou modelo específico.
