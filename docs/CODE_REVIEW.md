# Code review

## Como usar

Crie uma nova seção por revisão. Informe o commit/base, arquivos realmente lidos, comandos executados, achados e decisão. Não declare revisão independente quando quem revisa também fez a implementação na mesma tarefa.

## Baseline da Factory — 2026-09-19

- Escopo: starter Astro, configuração pública, analytics opcional, QA visual, integridade de release e segurança para Hostinger.
- Independência: mesma tarefa da atualização da Factory; limitação registrada. Em projetos de cliente, prefira uma nova tarefa.
- Evidências: `npm run qa`, Playwright Chromium e `npm run audit:dependencies` (0 vulnerabilidades de produção altas/críticas).
- Achados críticos/altos: nenhum no starter.
- Limitações: disponibilidade de links externos, headers, CSP com integrações externas, HSTS e eventos só podem ser validados novamente na URL HTTPS publicada e com IDs reais.
- Decisão: baseline técnico aprovado para uso como template; não é aprovação de release de cliente.

## Modelo por cliente

```md
### [data] — [projeto / commit]

- Revisor: [nome ou IA]
- Independência: [nova tarefa / mesmo contexto — limitação declarada]
- Escopo lido: [diff e dependências diretas]
- Evidências: [comandos, screenshots, URL]
- Achados: [nível, arquivo, impacto, decisão]
- Exceções aprovadas: [responsável e prazo]
- Decisão: [aprovado / bloqueado / aprovado com pendências]
```
