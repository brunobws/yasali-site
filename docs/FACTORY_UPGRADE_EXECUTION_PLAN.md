# Plano de execução da atualização da Factory

Este documento orienta um agente de IA mais poderoso a atualizar a VelozeWeb Site Factory. A tarefa é melhorar o processo da Factory, não desenvolver um site de cliente.

## Escopo e limites

- Trabalhe somente no repositório `velozeweb-site-factory`.
- Não altere nenhum projeto de cliente, inclusive Gerotto & D’Ávila.
- Preserve fatos, decisões e arquivos existentes; não use `git reset`, `git checkout --` ou exclusões amplas.
- Não instale plugins, MCPs ou dependências externas sem autorização explícita.
- Não faça commit, push ou publicação sem autorização explícita do usuário.
- Faça mudanças pequenas, verificáveis e reversíveis.

## Versão-alvo

Esta refatoração foi publicada como `0.6.0`. As Etapas 0 a 14 foram implementadas e validadas. As Etapas 15 e 16 ficam registradas como próxima fase/piloto e não fazem parte do fechamento desta versão.

## Resultado esperado

Atualizar a Factory para que o desenvolvimento siga: Fase 1 factual → Fase 2A estratégia → Fase 2B calibração visual → Fase 3A design lock responsivo → Fase 3B desenvolvimento em fatias → Fase 4 auditoria independente → release autorizado.

## Ordem obrigatória

### 0. Diagnóstico

Leia `AGENTS.md`, `00_CONTEXT.md`, `factory.config.json`, `docs/STATUS.md`, `docs/PHASE_CONTRACTS.md`, `docs/FACTORY_IMPROVEMENT_PLAN.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/FACTORY_TECHNICAL_GUIDE.md`, todos os prompts e padrões relacionados. Execute `git status` e preserve alterações do usuário. Entregue um diagnóstico curto antes de editar.

### 1. Fechar a versão 0.5.0

Alinhe `README.md`, `package.json`, `package-lock.json`, `factory.config.json`, `docs/STATUS.md`, `CHANGELOG.md`, `docs/IMPLEMENTATION_PLAN.md` e `docs/FACTORY_TECHNICAL_GUIDE.md`. Não deixe referências antigas dizendo que a Factory está na 0.4.0.

### 2. Formalizar fontes

Crie um modelo simples para fato, fonte, autoridade, uso permitido e limite. Pode ser `client/SOURCE_REGISTER.md`. Atualize o padrão, o Prompt 1 e o contrato da Fase 1. Crie três casos de regressão: briefing completo, fonte contraditória e cliente com pouca informação.

### 3. Criar o guia humano por cliente

Crie e mantenha `docs/CLIENT_WORKFLOW_GUIDE.md`. O documento deve explicar, em linguagem curta, como uma pessoa cria um repositório de cliente, quais prompts usar, quando revisar, como aprovar cada fase e como preparar o release. O guia deve apontar para os prompts e contratos, sem duplicar regras técnicas.

Critério de aceite: uma pessoa consegue iniciar um cliente novo seguindo somente o guia e os prompts indicados, sem depender da memória da conversa.

### 4. Criar o perfil de gosto

Crie `operator/TASTE_PROFILE.md` com sites aprovados, rejeitados, preferências de tipografia, densidade, bordas, imagem, movimento e prioridade entre originalidade, conversão, mobile, velocidade e manutenção. Não invente preferências; deixe campos pendentes.

### 5. Criar a Fase 2B

Adicione aos contratos, status e prompts uma calibração visual com duas direções pequenas, cada uma com hero, seção representativa, desktop, mobile, paleta, tipografia, imagens, referências e anti-referências. Não avance sem aprovação explícita.

### 6. Ampliar a Fase 3A

Transforme a 3A em design lock. Teste menu, cards, carrossel, galeria, formulário, mapa, elementos fixos, textos longos e recortes mobile/desktop. A aprovação deve ter evidência visual.

### 7. Dividir a Fase 3B

Atualize o Prompt 3B para trabalhar em quatro fatias: topo; conteúdo; contato/localização/rodapé; acabamento/performance/SEO. Defina dois checkpoints humanos.

### 8. Formalizar skills e MCPs

Crie `docs/INTEGRATIONS_GUIDE.md`, `docs/MCP_REQUIREMENTS.md` e a configuração equivalente no `factory.config.json`.

Skills: UI/UX Pro Max em 2B/3A/3B/4; Humanizer em 2/4; ImageGen em 1/3B; Computer Use em 3A/4.

MCPs: Browser/Playwright obrigatório em 3A/3B/4; Figma opcional em 2B/3A; GitHub opcional em 4/release. Não torne todos obrigatórios. Crie um `scripts/check-integrations` com fallback por fase.

### 9. Fortalecer o QA

Crie `docs/VISUAL_QA_MATRIX.md` com estados de menu, cards, carrossel, galeria, formulário e elementos fixos. Exija screenshots em 320, 390, 430, 768 e 1440 px, testes de overflow, console, teclado e estados interativos. Use Playwright Test com `expect(page).toHaveScreenshot()` para criar baselines e detectar regressões visuais; mantenha os baselines no mesmo ambiente de execução sempre que possível. Só adicione Playwright depois de definir a matriz.

### 10. Melhorar a arquitetura

Avalie a divisão de páginas e CSS monolíticos, componentes de menu/cards/carrossel/galeria/imagens, formatação e validação de links/assets. Cada refatoração deve resolver um problema real.

### 11. Formalizar SEO técnico, rastreamento e compartilhamento

Crie uma fonte única de configuração pública por cliente para domínio, status de indexação, canonical, imagem Open Graph, título e descrição padrão. Implemente geração e validação de sitemap, robots, canonical, Open Graph/Twitter Cards e Schema.org somente com dados confirmados. Sem domínio ou imagem aprovados, mantenha o release bloqueado ou `noindex`; nunca invente URL ou imagem de compartilhamento.

Critério de aceite: toda página publicável possui metadados coerentes; `sitemap`, `robots`, canonical e URLs de compartilhamento apontam somente para o domínio confirmado; a imagem de compartilhamento é visualmente revisada e declarada no QA.

### 12. Criar medição, eventos e privacidade

Crie uma configuração central de analytics por cliente, com IDs opcionais de GA4, Meta Pixel e Google Ads, desativada por padrão quando não houver ID confirmado. Prepare um template substituível para que, após a confirmação, o ID seja inserido em uma única fonte sem editar páginas ou componentes. Defina eventos de conversão mínimos: CTA principal, WhatsApp, telefone, formulário enviado com sucesso e destino externo relevante.

Implemente consentimento antes de carregar tecnologias não essenciais, registro de recusa e política de privacidade compatível com a solução confirmada. Nunca envie texto de formulário, telefone, e-mail, nome, URL com dados pessoais ou outros dados pessoais aos eventos. Faça cada plataforma ser opcional: GA4 como base de medição, Meta Pixel e Google Ads somente quando houver campanha, conta, ID e objetivo de conversão confirmados.

Critério de aceite: sem IDs, nenhuma tag externa é carregada; com IDs confirmados e consentimento, os eventos usam nomes padronizados e são verificáveis em ambiente de teste; o QA registra consentimento, eventos e limitações. Não trate eventos disparados como conversões de negócio sem validação da plataforma.

Decisão necessária antes de ativar: quais plataformas, IDs, política de privacidade/consentimento aprovada e quais eventos representam conversão para cada cliente.

### 13. Criar baseline de segurança e headers por hospedagem

Crie `standards/SECURITY_STANDARD.md` e uma configuração de entrega compatível com o host escolhido, sem fingir que um site estático resolve segurança de backend. Defina CSP específica para os recursos aprovados, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` e proteção contra framing. HSTS só entra após domínio HTTPS confirmado. Para formulários, proíba segredos no cliente e exija validação, rate limit e proteção contra spam no provedor ou backend confirmado.

Critério de aceite: headers são verificáveis no ambiente de publicação; CSP não bloqueia recursos aprovados; não há tokens, chaves ou segredos no repositório ou no `dist`; limitações do host, formulário e serviços externos estão registradas.

Decisão necessária antes de implementar: host primário da Factory (por exemplo, Vercel, Netlify, Cloudflare Pages ou outro). A Factory pode manter orientação neutra antes dessa escolha, mas o arquivo de headers ativo deve corresponder ao host real.

### 14. Criar revisão técnica e integridade de release

Amplie o QA para todas as páginas de `dist`: links internos e externos, assets, metadados, canonical, robots, sitemap, Schema.org, imagem Open Graph, placeholders e arquivos sensíveis. Adicione checagem de dependências, varredura simples de segredos e um `docs/CODE_REVIEW.md` com revisão independente de arquitetura, acessibilidade, segurança, performance e manutenção. A revisão deve ocorrer em nova tarefa ou por segundo agente quando possível.

Critério de aceite: o release só pode ser recomendado após check, build, QA visual, integridade técnica e code review sem bloqueadores críticos ou altos; exceções precisam de responsável, impacto e decisão registrada.

### 15. Auditoria e piloto

Recomende Fase 4 em tarefa separada ou com segundo agente. Registre correções pós-3B, bugs encontrados, tempo até aprovação, perguntas redundantes e regressões de screenshot. Teste a Factory em um novo projeto, não no Gerotto em auditoria.

O piloto deve validar também as Etapas 11 a 14 no host escolhido, incluindo URLs públicas reais, consentimento, eventos, headers de resposta e a revisão técnica independente.

### 16. Revisão completa da Factory e do fluxo por passos

Após o piloto, audite a própria Factory como sistema: `AGENTS.md`, contratos, prompts, padrões, guias humanos, checklists, scripts, skills, MCPs e o encadeamento de documentos. Verifique se cada prompt limita a LLM à fase e à fatia autorizadas, registra saída e estado, e termina aguardando aprovação humana quando houver decisão material. Remova instruções duplicadas, contraditórias ou que induzam implementação ampla de uma só vez.

O fluxo desejado é: autonomia dentro de uma unidade pequena e verificável; parada obrigatória somente nos portões humanos de aprovação ou quando faltar uma decisão material. Fases não podem iniciar a próxima fase silenciosamente, e a Fase 3B deve respeitar as quatro fatias e os dois checkpoints já definidos.

Critério de aceite: um teste de mesa com projeto fictício demonstra que a LLM sabe qual arquivo ler, qual fatia executar, o que atualizar, quais evidências produzir e exatamente quando parar. O operador não precisa comandar cada microtarefa, apenas aprovar decisões, checkpoints e mudanças de escopo.

## Decisões que exigem o usuário

Peça respostas curtas antes das etapas visuais: três sites de referência, dois anti-exemplos, prioridades de qualidade, navegador/Figma, Astro obrigatório ou não, próximo projeto-piloto e quantidade de checkpoints.

## Verificação final

Execute `npm install` ou `npm ci`, `npm run check`, `npm run build`, testes, validação de documentos e `git diff --check`. Confirme que nenhum cliente foi alterado, não há segredos, a versão está alinhada e não houve commit/push sem autorização.

Entregue arquivos alterados, verificações, decisões pendentes, riscos e próxima etapa. Não declare a Factory concluída sem uma execução-piloto.
