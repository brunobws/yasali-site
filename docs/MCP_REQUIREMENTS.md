# Requisitos de MCP e ferramentas

Este documento separa requisito de fase de preferência de ferramenta. Não é necessário ter todos os MCPs instalados para usar a Factory.

## Regra de aprovação

| Fase | Capacidade exigida | Alternativas aceitas | Sem alternativa |
|---|---|---|---|
| 3A — design lock | Verificação visual real | `browser` ou `playwright` | Não aprovar; registre bloqueio e a limitação. |
| 3B — desenvolvimento | Verificação visual real | `browser` ou `playwright` | Não aprovar; registre bloqueio e a limitação. |
| 4 — auditoria | Verificação visual real | `browser` ou `playwright` | Não aprovar; registre bloqueio e a limitação. |

`browser` pode representar um MCP de navegador; `playwright`, o runner local ou MCP equivalente. A ferramenta escolhida deve gerar evidência compatível com `docs/QA_REPORT.md`.

## Opcionais

| Capacidade | Quando ajuda | Fallback aceito |
|---|---|---|
| `figma` | 2B e 3A, quando existir arquivo de design colaborativo. | Mockup local, protótipo mínimo ou screenshots. |
| `github` | Fase 4 e release, para consulta ou operação remota. | Git CLI com autorização explícita. |

## Comandos

```text
# Pronto: Browser disponível
npm run check:integrations -- --phase 3a --available browser,ui-ux-pro-max

# Pronto pelo runner Playwright
npm run check:integrations -- --phase 4 --available playwright,humanizer

# Bloqueado: nenhuma capacidade visual declarada
npm run check:integrations -- --phase 3b --available ui-ux-pro-max
```

O último exemplo deve retornar código não zero. Ele não autoriza ignorar o requisito: apenas deixa o bloqueio claro antes da aprovação.
