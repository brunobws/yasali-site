# Casos de regressão da descoberta

Use estes cenários ao alterar o Prompt 1, o contrato ou `standards/DISCOVERY_STANDARD.md`. A avaliação é documental: execute a descoberta em uma cópia limpa do template e confira o resultado esperado antes de aprovar a alteração.

## Caso 1 — Briefing completo

**Entrada:** briefing assinado com nome, serviço, público, cidade, WhatsApp, oferta, restrições de publicação e autorização para fotos enviadas; os arquivos existem em `assets/inbox/`.

**Resultado esperado:**

- os fatos materiais entram em `client/` com IDs no `client/SOURCE_REGISTER.md`;
- fotos autorizadas entram em `assets/approved/` e no manifesto;
- não há pendências sobre dados já presentes e autorizados;
- decisões de copy, sitemap e direção visual não são convertidas em pendências da Fase 1.

## Caso 2 — Fontes contraditórias

**Entrada:** briefing do responsável informa um WhatsApp; uma rede social pública informa outro; nenhuma instrução autoriza a rede social como fonte factual.

**Resultado esperado:**

- as duas fontes ficam registradas com sua autoridade e seus limites;
- o briefing é tratado como fonte confirmada e a rede social como evidência pública não autorizada;
- a divergência fica em `docs/PENDING.md` apenas se o canal for necessário para publicação ou integração;
- o site não publica nenhum dos dois números até que o conflito esteja resolvido quando isso for material.

## Caso 3 — Cliente com pouca informação

**Entrada:** somente nome comercial, segmento aproximado e uma foto sem autorização de uso explícita.

**Resultado esperado:**

- o que foi informado é registrado com a autoridade correta, sem inventar oferta, endereço, diferencial ou contato;
- a foto permanece em `assets/inbox/` ou segue para `assets/archive/` até haver autorização; ela não entra no manifesto como aprovada;
- `docs/PENDING.md` reúne apenas lacunas que impedem conteúdo, mídia, conformidade, integração ou release;
- arquitetura, copy e estilo visual ficam para a Fase 2, não como perguntas redundantes da descoberta.
