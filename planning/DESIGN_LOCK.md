# Design lock responsivo

Este documento prova os estados que podem gerar retrabalho no desenvolvimento completo. Preencha apenas componentes previstos no planejamento aprovado; use `não aplicável` com justificativa quando o componente não fizer parte do escopo.

## Direção aprovada e recorte

- Direção escolhida na calibração:
- Conceito e limites aprovados:
- Página ou recorte implementado:
- Conteúdo confirmado usado:
- Assets aprovados usados:

## Matriz de componentes e estados

| Componente | Aplicável? | Estados a testar | Desktop | Celular | Teclado / movimento reduzido | Evidência e resultado |
|---|---|---|---|---|---|---|
| Menu | sim / não | fechado, aberto, foco, fechar | | | | |
| Cards ou accordions | sim / não | fechado, aberto, exclusivo ou múltiplo definido | | | | |
| Carrossel | sim / não | inicial, próximo/anterior, arraste, foco | | | | |
| Galeria | sim / não | leitura, navegação e recorte | | | | |
| Formulário | sim / não | rótulo, foco, erro e teclado virtual | | | | |
| Mapa ou localização | sim / não | carregamento, alternativa e rota externa | | | | |
| Elementos fixos | sim / não | posição, safe area, rolagem e não sobreposição | | | | |
| Textos longos | sim / não | quebra, leitura e sem overflow | | | | |

## Regras de estado

- Cards exclusivos: abrir um card fecha o anterior; nenhum card vizinho pode abrir vazio ou perder conteúdo.
- Cards múltiplos: o estado de cada card deve ser explícito e acessível por teclado.
- Carrossel: os controles precisam funcionar sem arraste e o conteúdo não pode ficar invisível ou inacessível.
- Elementos fixos: não podem cobrir CTA, formulário, consentimento ou o fim do conteúdo em celular.

## Evidências visuais

| Largura | Estado ou componente | Caminho do screenshot / URL | Resultado |
|---:|---|---|---|
| 320 px | | | |
| 390 px | | | |
| 430 px | | | |
| 768 px | | | |
| 1440 px | | | |

## Decisão para aprovação

- Pendências de design ainda abertas:
- Decisões submetidas ao desenvolvedor:
- Aprovação do design lock:
- Data:
