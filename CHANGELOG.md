# Changelog

Este arquivo registra mudanças reutilizáveis da VelozeWeb Site Factory. Migrações para clientes existentes devem seguir `docs/MIGRATION_GUIDE.md`.

## [0.6.0] — 19/09/2026

### Adicionado

- registro canônico de fonte, autoridade, uso permitido e limite para a descoberta;
- três casos documentais de regressão: briefing completo, fontes contraditórias e cliente com pouca informação.
- guia humano por cliente, com prompts curtos, revisões e aprovações por fase.
- perfil de gosto do operador, separado da direção específica de cada cliente.
- seis referências positivas do operador registradas para estudo por princípio na calibração visual.
- Fase 2B de calibração visual, com duas direções comparáveis e aprovação humana antes do design lock.
- design lock responsivo na Fase 3A, com matriz de componentes, estados e evidências visuais.
- Fase 3B dividida em topo, conteúdo, contato/localização/rodapé e acabamento, com dois checkpoints humanos.
- guia de integrações, requisitos de MCP por fase e verificador local de capacidades com fallbacks explícitos.
- matriz de QA visual, cenários Playwright e baselines para cinco larguras, overflow, console, teclado e estados interativos.
- arquitetura mínima documentada; validação central de telefone para WhatsApp e botão de retorno compatível com múltiplas instâncias.
- configuração central de publicação, robots e sitemap gerados no build, metadados Open Graph/Twitter e Schema.org condicionados a dados confirmados.
- configuração opcional de analytics, consentimento e eventos sem PII; sem IDs confirmados, nenhuma tag externa é carregada.
- baseline de segurança, política CSP starter, validação de headers e templates neutros para Netlify, Vercel e Cloudflare Pages; HSTS bloqueado até confirmação HTTPS.
- Hostinger definida como hospedagem padrão, com template `.htaccess` ativo e alternativas preservadas.
- padrão de code review, relatório humano/IA, QA de integridade de release e auditoria opcional de dependências.

### Planejado

- piloto em um novo projeto e revisão completa da própria Factory, planejados para a próxima evolução.

## [0.5.0] — 18/09/2026

### Adicionado

- padrão de descoberta calibrado com classificação de fontes, filtro de pendências e revisão avaliadora antes do fechamento;
- configuração da Fase 1 para exigir a revisão de pendências e distinguir lacunas materiais de decisões da Fase 2.
- plano de melhoria e instruções de migração para projetos criados em versões 0.4.x.

### Planejado

- refatoração 0.6.0 conforme `docs/FACTORY_UPGRADE_EXECUTION_PLAN.md`.

## [0.4.0] — 11/09/2026

### Adicionado

- contrato canônico de entrada, saída, bloqueios e aprovação para todas as fases;
- estratégia de versionamento e migração seletiva para projetos existentes;
- tabela canônica de precedência em `AGENTS.md`.

### Alterado

- nomenclatura padronizada de todas as etapas como fases;
- plano de evolução alinhado ao estado atual da fábrica;
- documentação de operação alinhada à versão 0.4.0.

## [0.3.0] — 11/09/2026

### Adicionado

- starter neutro em Astro e TypeScript;
- componentes opcionais de WhatsApp e voltar ao topo;
- QA estático e metas verificáveis de performance;
- padrão de mídia, imagens de IA, mobile e Git/release;
- favicon genérico substituível, fallbacks e verificação contra cache.

## [0.2.0] — 10/09/2026

### Adicionado

- contexto permanente da VelozeWeb;
- referências documentadas de projetos anteriores;
- separação entre protótipo visual e desenvolvimento completo;
- padrões iniciais de conteúdo, design e QA.

## [0.1.0] — 10/09/2026

### Adicionado

- estrutura inicial orientada a documentos;
- roteamento por fases;
- modelos de cliente, planejamento, status e pendências.
