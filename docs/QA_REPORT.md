# Relatório de qualidade

## Resultado geral

- Status:
- Status: Etapa 12 validada no starter
- Data: 2026-09-19
- Responsável: Factory

## Baseline da Factory — Etapa 9

- Playwright Test: instalado em `devDependencies`.
- Baseline Chromium: gerado no mesmo ambiente Windows para 320, 390, 430, 768 e 1440 px.
- Regressão visual e técnica: `npm run test:visual` — 8 testes aprovados.
- Cobertura inicial: página starter, overflow, console e `prefers-reduced-motion`. Estados específicos de menu, cards, carrossel, galeria, formulário e elementos fixos devem ser adicionados em cada projeto quando aplicáveis.
- WebKit: configurado como projeto complementar; executar `npm run test:visual:webkit` quando o browser estiver instalado.

## Verificações

| Área | Verificação | Resultado | Observação |
|---|---|---|---|
| Build | Check e build de produção | Pendente | Registrar comandos e horário |
| Release | `dist` posterior à última alteração | Pendente | |
| Mobile | 320, 390 e 430 px | Pendente | Registrar motor, orientação e evidência |
| Tablet | 768 px | Pendente | |
| Desktop | 1440 px | Pendente | |
| Compatibilidade | Chromium e WebKit/Safari | Pendente | Declarar emulação ou dispositivo real |
| Navegação | Links e CTAs | Pendente | |
| Conteúdo | Fatos, ortografia, naturalidade e conversão | Pendente | |
| Acessibilidade | Teclado, foco, contraste e toque | Pendente | |
| Movimento | Redução de movimento e ausência de dependência de hover | Pendente | |
| SEO | Metadados, sitemap e canonical | Pendente | |
| Identidade | Favicon SVG, PNG e Apple Touch Icon | Pendente | Registrar versão, `dist` e teste em aba nova do Chrome |
| Mídia | Origem, aprovação, recortes e imagens de IA | Pendente | |
| Performance | Lighthouse mobile, LCP, CLS e peso transferido | Pendente | |
| Segurança | Política, templates, HSTS e padrões de segredos | Aprovado no starter | `npm run qa:security`; headers reais aguardam publicação na Hostinger |
| Integridade | Links, assets, Schema, placeholders e arquivos sensíveis | Aprovado no starter | `npm run qa:integrity` |
| Code review | Arquitetura, manutenção, acessibilidade e release | Aprovado no baseline | `docs/CODE_REVIEW.md` |
| Dependências | Vulnerabilidades altas/críticas de produção | Aprovado no baseline | `npm run audit:dependencies` — 0 vulnerabilidades |

## Métricas de performance

## Analytics e privacidade

| Verificação | Resultado | Evidência |
|---|---|---|
| Sem IDs, nenhuma tag externa é emitida | Aprovado no starter | `tests/analytics.spec.ts` |
| Consentimento antes do carregamento | Pendente por cliente | Aceite/recusa no navegador |
| Eventos sem dados pessoais | Pendente por cliente | Inspeção de payloads |

| Ambiente | Performance | LCP | CLS | INP/TBT | Transferência | Asset de LCP | Condições |
|---|---:|---:|---:|---:|---:|---|---|
| Produção local | | | | | | | |
| URL publicada / PageSpeed | | | | | | | |

## Evidências visuais

| Largura | Navegador/motor | Orientação | Tipo de teste | Evidência | Resultado |
|---:|---|---|---|---|---|
| 320 px | | Retrato | | | Pendente |
| 390 px | | Retrato | | | Pendente |
| 430 px | | Retrato | | | Pendente |
| 768 px | | Retrato | | | Pendente |
| 1440 px | | Paisagem | | | Pendente |

## Pendências antes da publicação
