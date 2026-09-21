# Matriz de QA visual

Use esta matriz na Fase 3A, nas fatias da 3B e na Fase 4. O teste automatizado detecta regressões; a inspeção humana decide qualidade, fidelidade à direção aprovada e adequação ao cliente.

## Regra de evidência

- Registre largura, motor, orientação, estado, resultado e link/caminho do screenshot em `docs/QA_REPORT.md`.
- Execute `npm run test:visual` no ambiente que gerou os baselines. Não atualize snapshots apenas para eliminar uma falha: revise a diferença e aprove a alteração visual antes de usar `npm run test:visual:update`.
- Chromium é o baseline canônico. WebKit/Safari é complementar quando disponível; declare a limitação quando não for testado.
- Teste toda página e estado que o escopo do cliente realmente possuir. Um item não aplicável precisa de justificativa no QA.

## Larguras obrigatórias

| Largura | Contexto | Evidência mínima |
|---:|---|---|
| 320 px | telefone compacto | screenshot, overflow, toque e foco |
| 390 px | iPhone atual | screenshot, overflow, toque e foco |
| 430 px | Android amplo | screenshot, overflow, toque e foco |
| 768 px | tablet | screenshot e mudança de layout |
| 1440 px | desktop | screenshot e navegação por teclado |

Em telas com elementos fixos ou mídia imersiva, teste também paisagem e safe areas.

## Estados por componente

| Componente | Estados a verificar | Automação / inspeção |
|---|---|---|
| Menu | fechado, aberto, link ativo, fechar por teclado, foco retornando ao gatilho | screenshot de aberto; Tab, Enter/Espaço e Escape |
| Cards / accordion | fechado, aberto, conteúdo longo, somente um ativo quando exclusivo | screenshot fechado/aberto; clicar, toque e teclado; confirmar que nenhum card adjacente abre vazio |
| Carrossel | primeiro, intermediário, último, botão, arraste e teclado | screenshot de cada limite; confirmar indicador, foco e ausência de corte/overflow |
| Galeria | miniatura, imagem aberta, avançar/voltar, fechar | screenshot de lista e aberto; teclado, foco e recorte por largura |
| Formulário | vazio, foco, erro por campo, envio/sucesso ou falha prevista | labels, teclado virtual, mensagens próximas e CTA utilizável |
| Mapa / localização | carregado, link externo, fallback de falha | link aponta ao perfil/local confirmado, sem travar a página |
| Elementos fixos | topo, após rolagem, coexistência entre botões | safe areas, conteúdo não coberto, toque e teclado |

## Verificações transversais

- Sem rolagem horizontal: `documentElement.scrollWidth <= innerWidth` em cada largura.
- Sem erros de console não esperados; links e CTAs devem funcionar.
- Foco visível, ordem de Tab coerente e nenhuma ação dependente apenas de hover.
- `prefers-reduced-motion` mostra o estado final sem movimento obrigatório.
- Texto longo, logo e mídia não podem cortar, sobrepor ou perder legibilidade.
- Inspecione LCP, CLS, peso de mídia e recorte conforme `factory.config.json` e `standards/QA_STANDARD.md`.

## Playwright e baselines

O starter inclui screenshots da página inicial nas cinco larguras. Para cada componente real, adicione seletores estáveis e cenários da tabela acima em `tests/visual.spec.ts` ou em arquivo específico. Os snapshots ficam junto aos testes e devem entrar no Git.

```text
# rodar a regressão visual canônica
npm run test:visual

# gerar ou atualizar baseline somente após revisão humana
npm run test:visual:update

# WebKit, quando seu browser estiver instalado
npm run test:visual:webkit
```

## Encerramento da fase

Preencha a matriz de `docs/QA_REPORT.md`, anexe as evidências relevantes e registre limitações de ambiente. Falha de overflow, console, foco, ação principal ou snapshot revisado bloqueia a aprovação até correção ou decisão registrada.
