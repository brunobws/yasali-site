# Contratos das fases

Este documento define as condições mínimas de entrada, saída, bloqueio e aprovação da VelozeWeb Site Factory. Os prompts explicam como executar cada fase; este arquivo define quando ela pode começar e quando pode ser considerada concluída.

## Regras comuns

- Toda aprovação precisa ser explícita e registrada em `docs/STATUS.md`.
- Uma pendência não bloqueia automaticamente o projeto. Seu impacto define se ela bloqueia a fase atual, uma decisão específica ou apenas a publicação.
- Informações pendentes nunca podem ser apresentadas como fatos nem publicadas.
- Quando faltar informação, avance apenas no que não depender dela e registre o restante em `docs/PENDING.md`.
- Nenhuma fase autoriza commit, push ou publicação sem pedido explícito.
- Uma fase fica em `aguardando aprovação` depois que suas saídas e verificações estiverem completas; somente a aprovação humana muda seu estado para `aprovada`.
- `bloqueada` significa que não existe trabalho útil e seguro dentro do escopo sem uma informação, autorização ou decisão externa.
- Correções pontuais não reabrem automaticamente a fase inteira. Revalide os artefatos e testes afetados.

## Estados permitidos para a fase atual

| Estado | Significado |
|---|---|
| `não iniciada` | Ainda não houve execução da fase. |
| `em andamento` | Existem atividades autorizadas e incompletas. |
| `aguardando aprovação` | As saídas foram produzidas e verificadas, mas falta decisão humana. |
| `aprovada` | A entrega foi aceita e o portão seguinte pode ser avaliado. |
| `bloqueada` | Uma dependência externa impede progresso útil e seguro. |

Na tabela **Aprovações** de `docs/STATUS.md`, use `pendente`, `aguardando aprovação`, `aprovada` ou `revisão solicitada`. O checkbox de uma fase só pode ser marcado depois da aprovação correspondente.

## Fase 1 — Descoberta

Durante a descoberta, aplique `standards/DISCOVERY_STANDARD.md`. A lista de pendências deve conter somente lacunas factuais ou materiais que permaneçam desconhecidas, não possam ser resolvidas no escopo da fase e tenham impacto concreto em conteúdo, mídia, conformidade, integração ou release. Prioridades, arquitetura, copy e direção criativa pertencem à Fase 2A.

### Entrada mínima

- pedido explícito para iniciar a Fase 1;
- materiais, informações ou links disponíveis, mesmo que incompletos;
- repositório de cliente criado a partir do template.

A ausência de WhatsApp, domínio, endereço, horário ou outro canal específico não impede a descoberta. Esses itens devem ser registrados como pendências quando forem relevantes.

### Saídas obrigatórias

- `client/BRIEF.md`, `client/BRAND.md`, `client/CONTENT.md`, `client/REQUIREMENTS.md` e `client/SOURCE_REGISTER.md` preenchidos com o que foi confirmado e sua origem;
- `client/ASSET_MANIFEST.md` atualizado;
- materiais classificados sem exclusão definitiva entre `assets/approved/`, `assets/archive/` e, quando aplicável, `assets/generated/`;
- dúvidas e confirmações necessárias em `docs/PENDING.md`;
- resumo final de fatos, diferenciais confirmados, materiais úteis e lacunas.

### Bloqueios para aprovação

- identidade básica do negócio ou oferta principal continuam desconhecidas;
- fatos, hipóteses e pendências não estão separados;
- materiais usados como evidência não têm origem, autoridade ou uso permitido minimamente identificados no registro de fontes;
- existe contradição relevante sem registro;
- os documentos de `client/` ainda contêm suposições apresentadas como fatos.
- a revisão de pendências não foi executada ou mantém perguntas que poderiam ser resolvidas por fonte autorizada ou decisão de fase posterior.

### Aprovação

O desenvolvedor confirma que a descoberta representa corretamente o que se sabe sobre o cliente. Pendências não essenciais podem seguir abertas, desde que estejam registradas e não contaminem a estratégia.

## Fase 2A — Estratégia

### Entrada mínima

- descoberta marcada como `aprovada` em `docs/STATUS.md`;
- documentos de `client/` coerentes;
- pendências com impacto conhecido.

### Saídas obrigatórias

- `planning/SITE_PLAN.md`;
- `planning/SITEMAP.md`;
- `planning/COPY.md`;
- `planning/SEO_PLAN.md`;
- `planning/DESIGN_DIRECTION.md`, incluindo plano de mídia e comportamento mobile;
- decisões novas em `docs/DECISIONS.md`;
- dúvidas ou dependências novas em `docs/PENDING.md`;
- lista clara das decisões submetidas à aprovação.

### Bloqueios para aprovação

- objetivo comercial, público prioritário ou conversão principal não estão definidos;
- sitemap, mensagem central e direção criativa se contradizem;
- a copy depende de alegações ainda não confirmadas;
- não existe orientação suficiente para diferenciar o site das referências;
- decisões que alteram materialmente escopo, identidade ou conversão não foram submetidas ao desenvolvedor.

Domínio definitivo, endereço, redes sociais ou dados legais podem continuar pendentes quando não forem necessários ao protótipo. Eles bloqueiam apenas as entregas e o release que dependem desses dados.

### Aprovação

O desenvolvedor aprova explicitamente planejamento, copy, sitemap, SEO e as premissas da direção criativa. A aprovação deve ser registrada antes da Fase 2B.

## Fase 2B — Calibração visual

### Entrada mínima

- planejamento da Fase 2A marcado como `aprovado` em `docs/STATUS.md`;
- `planning/` coerente com os fatos confirmados em `client/`;
- mídia usada nas direções classificada como aprovada no manifesto, ou explicitamente identificada como ilustração abstrata sem alegação factual;
- `operator/TASTE_PROFILE.md` revisado, com lacunas materiais registradas para decisão humana.

### Saídas obrigatórias

- `planning/VISUAL_CALIBRATION.md` preenchido;
- duas direções visuais pequenas e claramente diferentes, cada uma com hero, seção representativa, CTA e comportamento de navegação previsto;
- evidência visual de cada direção em desktop e celular, por mockup, protótipo mínimo ou artefato equivalente acessível à revisão;
- para cada direção: paleta, tipografia, plano de mídia, intensidade de movimento, densidade, referências e anti-referências;
- comparação objetiva entre as direções e recomendação condicionada, sem escolher em nome do desenvolvedor;
- lista curta das decisões submetidas à aprovação.

### Bloqueios para aprovação

- existe somente uma direção, ou as duas diferem apenas em cores ou detalhes superficiais;
- uma direção usa conteúdo não confirmado, asset não aprovado ou referência copiada;
- desktop ou celular não tem evidência visual revisável;
- a proposta ignora recorte de imagem, toque, redução de movimento, contraste ou risco de rolagem horizontal;
- a escolha humana entre as direções não foi registrada.

### Aprovação

O desenvolvedor escolhe explicitamente uma direção ou solicita revisão. A escolha e os limites aprovados são registrados em `planning/VISUAL_CALIBRATION.md` e `docs/STATUS.md`. Só então a Fase 3A pode começar.

## Fase 3A — Design lock

### Entrada mínima

- calibração visual marcada como `aprovada`;
- direção escolhida e seus limites registrados em `planning/VISUAL_CALIBRATION.md`;
- conteúdo necessário ao recorte do protótipo confirmado;
- logo e mídia do protótipo classificados como `aprovado` no manifesto.

### Saídas obrigatórias

- cabeçalho, hero, uma seção representativa, CTA e rodapé funcionais;
- aplicação reconhecível do conceito aprovado;
- tratamento real da logo e da imagem principal;
- `planning/DESIGN_LOCK.md` preenchido, com componentes aplicáveis, estados verificados e evidências;
- `scripts/check-integrations.mjs --phase 3a` concluído com capacidade de verificação visual disponível;
- menu, cards, carrossel, galeria, formulário, mapa/localização, elementos fixos e textos longos testados quando fizerem parte do escopo; itens não aplicáveis devem ter justificativa;
- interação representativa e seus estados de toque, teclado e movimento reduzido quando previstos;
- check e build válidos;
- inspeção nas larguras de `factory.config.json`, com evidência visual de desktop e celular registrada no QA e no design lock;
- `docs/VISUAL_QA_MATRIX.md` executada para os componentes aplicáveis, com overflow, console, teclado e screenshots registrados;
- lista de decisões visuais que precisam de aprovação.

### Bloqueios para aprovação

- erro de check ou build;
- conceito, hierarquia, logo, CTA ou rodapé ainda não representam a direção aprovada;
- rolagem horizontal, contraste insuficiente ou ação dependente de hover;
- recorte mobile inválido ou elemento fixo cobrindo conteúdo;
- componente previsto não foi testado em seus estados relevantes, ou foi marcado como não aplicável sem justificativa;
- menu, card, carrossel, galeria, formulário ou mapa previsto não funciona por toque e teclado quando aplicável;
- card exclusivo abre outro card sem conteúdo, perde o estado ativo ou oculta conteúdo essencial;
- textos longos quebram, são cortados ou provocam rolagem horizontal nas larguras aprovadas;
- conteúdo não confirmado ou asset não aprovado no protótipo;
- ausência de evidência mínima no QA.
- matriz visual incompleta, snapshot com diferença não revisada ou falha de overflow, console ou teclado aplicável.
- ausência de Browser ou Playwright declarada pelo verificador de integrações.

### Aprovação

O desenvolvedor aprova explicitamente o design lock e autoriza sua expansão. A aprovação não autoriza commit nem o início silencioso da Fase 3B.

## Fase 3B — Desenvolvimento completo

### Entrada mínima

- design lock marcado como `aprovado`;
- páginas e conteúdos previstos no planejamento identificados;
- pendências avaliadas para decidir o que pode ser omitido com segurança.

### Saídas obrigatórias

- `docs/IMPLEMENTATION_SLICES.md` preenchido com escopo, evidências e status das quatro fatias;
- fatia 1 concluída: topo, navegação, hero, CTA principal e primeira dobra;
- fatia 2 concluída: conteúdo, páginas e componentes previstos;
- fatia 3 concluída: contato, localização, rodapé e integrações confirmadas;
- fatia 4 concluída: acabamento, acessibilidade, performance, SEO e QA final;
- dois checkpoints humanos registrados: após a fatia 1 e após as fatias 2 e 3, antes do acabamento;
- todas as páginas aprovadas implementadas;
- conteúdo, navegação, CTAs e integrações confirmados;
- SEO aplicável ao estágio do domínio;
- acessibilidade, responsividade e mídia conforme os padrões;
- `npm run check`, build de produção e QA executados;
- `scripts/check-integrations.mjs --phase 3b` concluído com capacidade de verificação visual disponível;
- links, console, viewports e navegadores disponíveis verificados;
- matriz visual executada nas cinco larguras e estados aplicáveis; baselines atualizados somente após revisão humana;
- `docs/STATUS.md`, `docs/QA_REPORT.md` e pendências atualizados.

### Bloqueios para aprovação

- página ou funcionalidade aprovada está ausente;
- uma fatia foi iniciada fora de ordem ou sem registrar a anterior;
- um checkpoint obrigatório não foi revisado explicitamente antes de iniciar a fatia seguinte;
- erros de check, build, console, navegação ou CTA;
- informação não confirmada, placeholder ou asset não aprovado está publicável;
- problemas críticos ou altos de acessibilidade, mobile ou performance;
- a implementação descaracteriza o design lock aprovado sem nova decisão registrada;
- `dist/` não corresponde à última alteração validada.
- matriz visual incompleta, snapshot com diferença não revisada ou falha de overflow, console ou teclado aplicável.
- ausência de Browser ou Playwright declarada pelo verificador de integrações.

Um domínio ainda não confirmado não impede concluir a implementação. Nesse caso, canonical, sitemap, Open Graph absoluto e release permanecem bloqueados ou configurados somente quando tecnicamente válidos, sem usar domínio fictício.

### Aprovação

O desenvolvedor aceita o site completo como base para a auditoria. Essa aprovação não equivale à autorização de publicação.

## Fase 4 — Auditoria

### Entrada mínima

- implementação completa registrada em `docs/STATUS.md`;
- build de produção disponível;
- documentos, código e assets da versão auditada acessíveis.

É recomendável executar esta fase em uma nova tarefa do Codex para reduzir viés de continuidade.

### Saídas obrigatórias

- auditoria de UX, UI, conteúdo, conversão, acessibilidade, SEO, mídia e performance;
- matriz de `docs/QA_REPORT.md` preenchida com evidências;
- `scripts/check-integrations.mjs --phase 4` concluído com capacidade de verificação visual disponível;
- matriz visual executada, com screenshots, estados interativos, overflow, console e teclado registrados;
- correções objetivas dentro do escopo aprovado;
- pendências externas registradas com impacto e responsável;
- classificação explícita de prontidão para publicação.

### Bloqueios para aprovação e release

- falha crítica ou alta ainda aberta;
- fatos, contatos, links ou imagens sem confirmação;
- build ou `dist/` desatualizado;
- canonical, sitemap, robots ou Open Graph incoerentes com o domínio real;
- CTA principal sem funcionamento verificado;
- ausência de evidência nas larguras e motores exigidos, sem limitação declarada;
- publicação dependente de informação legal, autorização ou acesso ainda indisponível.
- matriz visual incompleta, snapshot com diferença não revisada ou falha de overflow, console ou teclado aplicável.
- ausência de Browser ou Playwright declarada pelo verificador de integrações.

### Aprovação

A auditoria pode ser concluída com pendências externas claramente registradas, mas o release permanece bloqueado enquanto houver item classificado como bloqueador de publicação. Commit, push e publicação continuam dependendo de autorizações separadas.

## Registro do portão

Ao encerrar uma fase:

1. atualize seu checkbox e situação em `docs/STATUS.md`;
2. registre data e observação na tabela de aprovações;
3. registre decisões em `docs/DECISIONS.md`;
4. mantenha dependências abertas em `docs/PENDING.md`;
5. informe a próxima ação permitida, sem iniciá-la quando exigir nova aprovação.
