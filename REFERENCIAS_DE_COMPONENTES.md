# Referências externas de componentes

Estas fontes podem melhorar o acabamento do site, mas não substituem o design system. O objetivo é escolher poucos componentes coerentes, adaptar seu código e manter o site leve e acessível.

## Decisão resumida

| Fonte | Decisão | Papel no projeto |
| --- | --- | --- |
| [Uiverse](https://uiverse.io/elements) | Usar seletivamente | Inspiração/código-base para microcomponentes em CSS ou Tailwind |
| [React Bits](https://github.com/DavidHDev/react-bits) | Usar somente se a stack for React | Uma ou duas animações discretas, após auditoria |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Usar no processo de design e QA | Direção visual, acessibilidade, responsividade e revisão; não é biblioteca visual do site |

## Uiverse

O Uiverse reúne elementos comunitários em CSS/Tailwind e declara os elementos sob licença MIT. A qualidade visual e semântica varia entre autores, portanto nenhum código deve ser copiado sem revisão.

### Bons candidatos

- Botão primário/WhatsApp com hover discreto.
- Loader simples para ações assíncronas.
- Tooltip acessível para ícones pouco óbvios.
- Checkbox, radio ou controle de filtro caso o catálogo tenha filtros.
- Input com estados de foco e erro, desde que mantenha label visível.

### Evitar

- Neumorphism, botões 3D, brilho neon, gradientes animados e bordas elétricas.
- Componentes cujo significado dependa apenas de hover.
- Inputs sem label, foco invisível ou alvos menores que 44 × 44 px.
- Copiar valores de cor, tipografia e raio sem convertê-los para os tokens da Yasali.

### Regra de integração

Tratar o código como ponto de partida. Reescrever classes, cores, estados e marcação semântica para o design system. Conferir a licença específica do item e preservar os avisos exigidos.

## React Bits

React Bits oferece componentes React animados e customizáveis, com versões JavaScript/TypeScript e CSS/Tailwind. Só deve ser considerado depois de a stack React ser confirmada.

### Candidatos para avaliar

- `FadeContent`: entrada suave de um bloco editorial.
- `AnimatedContent`: revelação discreta de seção ou grupo de cards.
- `BlurText` ou `SplitText`: no máximo uma vez no título do hero, apenas se o HTML continuar semântico, legível antes da hidratação e acessível.

Esses nomes são candidatos, não requisitos. Se um fade simples puder ser feito com CSS e `IntersectionObserver`, preferir a solução local sem nova dependência.

### Evitar neste projeto

- Aurora, Galaxy, Ballpit, Hyperspeed, Particles e fundos WebGL.
- Splash Cursor, Blob Cursor, Crosshair e interações que perseguem o ponteiro.
- Glitch Text, Scrambled Text, Shiny Text e efeitos que prejudiquem leitura.
- Liquid Chrome, Fluid Glass, Electric Border, Spotlight Card e excesso de reflexos.
- Carrosséis 3D, cards inclinados ou movimentos contínuos.

### Critérios obrigatórios

- Respeitar `prefers-reduced-motion` e renderizar imediatamente o estado final quando necessário.
- Conteúdo textual importante deve existir no HTML e permanecer visível sem JavaScript.
- Não causar CLS, bloquear a thread principal ou aumentar o bundle sem benefício claro.
- Não fragmentar títulos de maneira ruim para leitores de tela.
- Não usar animação automática contínua.
- Importar/copiar apenas o componente usado, nunca a coleção inteira.
- Revisar a licença vigente do código escolhido antes de publicar.

## UI UX Pro Max

Esta ferramenta não fornece componentes de runtime. Ela já foi usada para orientar `design-system/yasali-perfumaria/MASTER.md` e deve continuar servindo como checklist de design, acessibilidade, interação e responsividade.

A saída automática da ferramenta não deve ser seguida cegamente. Para a Yasali, a direção “Liquid Glass” foi rejeitada e substituída por minimalismo editorial porque é mais coerente com fotografia, perfumaria e conversão.

## Orçamento de efeitos

- No máximo dois aprimoramentos animados perceptíveis em toda a página inicial.
- Um deles pode ser a entrada do título/hero.
- O outro pode ser uma revelação suave de seção.
- Hover e foco de botões/cards não contam como efeito decorativo, mas devem permanecer discretos.
- Se a página parecer moderna sem o componente externo, não adicioná-lo.

## Checklist de aceitação

- O efeito reforça hierarquia ou feedback, em vez de apenas chamar atenção?
- Combina com marfim, pedra, fotografia real e dourado discreto?
- Funciona por teclado, toque e mouse?
- Respeita movimento reduzido?
- O conteúdo continua legível sem JavaScript?
- O custo de bundle e renderização é proporcional ao benefício?
- A licença e a origem foram registradas?

