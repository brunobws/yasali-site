# Fase 0 — Diagnóstico da Yasali

**Data:** 21/09/2026  
**Status:** concluída e aprovada; Fase 1 executada em 21/09/2026  
**Projeto:** Yasali Perfumaria  
**Repositório:** [github.com/brunobws/yasali-site](https://github.com/brunobws/yasali-site)  
**Diretório local:** `C:\Users\bruno_silva\Documents\yasali-projeto-completo`

## Objetivo da fase

Registrar o estado atual do site antes de adaptar a estrutura da factory. Esta fase não implementa a factory, não troca a stack e não altera código, conteúdo ou assets.

## Inventário atual

| Área | Estado observado |
| --- | --- |
| `app/` | Aplicação principal em React/Vinext; `page.tsx` concentra a landing page, catálogo, busca e filtros; `layout.tsx` concentra metadata e estrutura global. |
| `public/` | Assets públicos, imagens de marca e produtos, favicon/ícones, manifesto e imagens OG. |
| `assets/` | Fontes de entrada, referências e assets gerados, com README de organização. |
| `scripts/` | Exportador estático para Hostinger em `export-static.mjs`. |
| `tests/` | Teste de HTML renderizado, assets, acessibilidade básica e regressões do catálogo. |
| `worker/` e `vite.config.ts` | Integração Vinext/Vite e configuração de build/local bindings. |
| `.openai/` | Configuração de hosting do projeto Sites; hoje o destino operacional informado é Hostinger. |
| `dist/` | Saída gerada para publicação; não é fonte de desenvolvimento. |
| `public/media/products/` | Catálogo de imagens renomeadas por produto e variação. |

Arquivos de referência lidos: `CONTEXTO_DO_PROJETO.md`, `assets/README.md`, `assets/generated/README.md`, `design-system/yasali-perfumaria/MASTER.md`, `package.json`, `vite.config.ts`, `tsconfig.json`, `app/page.tsx`, `app/layout.tsx`, `scripts/export-static.mjs` e `tests/rendered-html.test.mjs`.

## Stack e comandos

O site atual usa **Vinext + React 19 + Vite**, com TypeScript e CSS próprio baseado no design system Yasali. A publicação atual é estática para Hostinger, mantendo os chunks do cliente para que busca e filtros continuem funcionando no navegador. A factory de referência tem orientação padrão Astro/static; isso é uma diferença a ser tratada em fase própria.

| Comando | Finalidade | Situação observada |
| --- | --- | --- |
| `npm run dev` | Desenvolvimento local | Comando configurado (`vinext dev`). |
| `npm run build` | Build Vinext | Configurado (`vinext build`). |
| `npm run build:hostinger` | Build + exportação estática para `dist/` | Validado anteriormente com sucesso. |
| `npm test` | Build e teste de HTML renderizado | Validado anteriormente: 2 testes aprovados. |
| `npm run lint` | ESLint | Validado anteriormente com sucesso. |
| `npm run start` | Servir o build Vinext | Configurado (`vinext start`). |
| `npm run db:generate` | Gerar artefatos Drizzle | Existe, mas não é necessário para o catálogo estático atual. |

## Funcionalidades presentes

- Landing page de uma página com proposta de valor, catálogo e chamadas de conversão.
- Catálogo com 29 produtos, preço, volume, família/notas e indicação de uso (`Dia`, `Noite`, `Dia e noite`).
- Busca textual e filtros client-side por gênero, momento de uso e família olfativa.
- Contagem de resultados e estado vazio quando nenhum perfume corresponde aos filtros.
- Seção estratégica de sugestões para presente.
- CTAs de Instagram e WhatsApp, incluindo CTA móvel.
- Layout responsivo e regras de movimento reduzido.
- Metadata, favicon, ícones e manifesto para publicação.
- Exportação estática compatível com Hostinger, preservando scripts/chunks necessários à interatividade.
- Smoke tests de HTML, acessibilidade básica, assets e regressões de produtos removidos.

## Estado do working tree

O working tree já estava sujo antes da Fase 0. As alterações existentes incluem `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `package.json`, testes, imagens de produtos, ícones, manifesto, scripts, `assets/inbox/` e o próprio plano. Também existem remoções de favicon e de produtos antigos registradas pelo Git.

Esse estado foi preservado. **Nenhum arquivo de código, conteúdo ou asset foi alterado durante a Fase 0.** Este relatório é o único artefato novo desta fase.

## Riscos, conflitos e pontos de atenção

1. **Dados acoplados à página:** o catálogo está hardcoded em `app/page.tsx`; a manutenção futura seria mais segura com dados separados e validados.
2. **Página inteira client-side:** o `"use client"` é necessário para os filtros atuais, mas envia mais JavaScript do que uma arquitetura Astro com ilhas.
3. **Exportador crítico:** o fluxo estático precisa continuar copiando os chunks client-side; uma mudança na factory não pode simplificar o export a ponto de quebrar a busca.
4. **Cobertura de QA limitada:** os testes atuais são smoke tests de HTML/assets; ainda não há matriz visual automatizada ou teste de interação em navegador.
5. **SEO dependente de domínio:** metadata/canonical/OG usam host e fallback de execução; o domínio definitivo ainda precisa ser decidido para validar URLs absolutas.
6. **SEO estrutural incompleto:** não foram identificados, neste diagnóstico, rotas individuais de produto, JSON-LD de produto/catálogo ou um fluxo formal de sitemap/robots.
7. **Dados comerciais pendentes:** estoque, ranking real de vendas, entrega, pagamento, políticas e dados legais ainda dependem da cliente. O site não deve afirmar “mais vendidos” sem confirmação.
8. **Governança de assets:** há fontes, referências e gerados, mas ainda não existe um manifesto canônico de `approved/archive` ligado à factory.
9. **Conflito de stack:** a factory trabalha por padrão com Astro/static, enquanto a Yasali está em Vinext/React. Uma migração completa seria uma decisão separada, com custo e risco próprios.
10. **Destino de deploy divergente:** `.openai/hosting.json` referencia um projeto Sites, enquanto o fluxo real informado é Hostinger. Isso deve ser documentado antes de automatizar deploy.
11. **Working tree sem baseline limpo:** a integração deve definir estratégia de branch/commit para não misturar o trabalho existente com a adaptação da factory.

## Decisão técnica para as próximas fases

Manter **Vinext/React + exportador estático Hostinger** neste momento. A primeira adaptação deve ser de processo e documentação da factory, com uma exceção explícita de stack (`Vinext/React`) em vez de forçar uma migração prematura para Astro.

A Fase 1 poderá criar os documentos e a configuração da factory adaptados ao projeto, somente após aprovação deste diagnóstico. Nenhuma decisão de migração para Astro está incluída nesta fase.

## Critério de saída

- Diagnóstico registrado.
- Comandos, funcionalidades, riscos e stack atual catalogados.
- Nenhuma alteração de código, conteúdo ou asset feita na Fase 0.
- Próximo passo bloqueado até a revisão/aprovação do usuário.

**Próxima ação:** revisar os documentos da Fase 1 e aprovar ou solicitar ajustes antes da Fase 2.
