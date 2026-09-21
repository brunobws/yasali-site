# Padrão de Git e release

## Autorização

- Não faça commit, push, tag, publicação ou alteração remota sem pedido explícito.
- Uma autorização de commit não implica push; uma autorização de push não implica publicação.

## Antes do commit

1. Revise `git status` e o diff completo.
2. Preserve alterações do usuário e não inclua arquivos sem relação com a fase.
3. Execute `npm run qa`, `npm run test:visual` e, quando a rede estiver disponível, `npm run audit:dependencies`.
4. Revise e atualize `docs/CODE_REVIEW.md` conforme `standards/CODE_REVIEW_STANDARD.md`.
5. Atualize `docs/STATUS.md`, `docs/QA_REPORT.md` e pendências aplicáveis.
6. Confirme que não há segredos, `.env`, materiais não autorizados ou arquivos-fonte desnecessários na pasta pública.

## Organização

- Prefira commits por entrega aprovada: descoberta, estratégia, protótipo, desenvolvimento e correções de QA.
- Separe mudanças metodológicas, implementação e release quando isso facilitar revisão e reversão.
- Use mensagens claras, por exemplo `docs: approve client strategy`, `feat: implement approved prototype` e `fix: resolve final QA findings`.
- Registre em `docs/STATUS.md` o commit aprovado quando fizer sentido para o projeto.

## `dist` e Hostinger

- `dist/` permanece fora do Git por padrão.
- Gere `dist/` somente depois da última alteração validada.
- Para publicação manual, entregue a pasta ou um pacote ZIP identificado por data; não confunda artefato de hospedagem com fonte versionada.
- Após publicar, execute PageSpeed na URL real e registre diferenças causadas por cache, servidor, CDN ou domínio.
