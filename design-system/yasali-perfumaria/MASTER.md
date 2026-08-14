# Design system — Yasali Perfumaria

Este arquivo é a fonte de verdade visual do site. Arquivos em `pages/` podem definir exceções específicas por página.

## Direção

- Estilo: editorial minimalista, elegante, acolhedor e material.
- Sensação: perfumaria premium acessível, não uma joalheria ostensiva nem uma interface tecnológica.
- Referências materiais: papel texturizado, vidro, pedra clara, madeira natural e metal dourado envelhecido.
- Densidade: baixa; bastante espaço em branco e poucos elementos por bloco.
- Variação: moderada; composições organizadas, com assimetria apenas quando ajuda a fotografia.
- Movimento: sutil; nunca competir com o produto.
- Tema inicial: claro. Não criar modo escuro sem necessidade real.

Não usar glassmorphism, “Liquid Glass”, brilhos digitais, neon, fundos pretos em excesso, gradientes dourados chamativos, fumaça, partículas ou clichês de perfume.

## Paleta

| Papel | Cor | Token sugerido |
| --- | --- | --- |
| Fundo principal | `#FAF8F3` | `--color-background` |
| Superfície/cartão | `#FFFFFF` | `--color-surface` |
| Texto principal | `#1C1917` | `--color-foreground` |
| Texto secundário | `#57534E` | `--color-muted-foreground` |
| Dourado/CTA | `#9A680F` | `--color-accent` |
| CTA hover | `#7C520C` | `--color-accent-hover` |
| Linha/borda | `#DED8CD` | `--color-border` |
| Fundo quente secundário | `#EFE8DC` | `--color-surface-warm` |
| Erro | `#B42318` | `--color-destructive` |
| Foco | `#1C1917` | `--color-focus` |

O dourado deve aparecer com parcimônia em botões, linhas e pequenos detalhes. Texto dourado pequeno sobre fundo claro costuma ter contraste insuficiente e deve ser evitado.

## Tipografia

- Títulos: `Cormorant Garamond`, pesos 500–600.
- Corpo, navegação e botões: `Montserrat`, pesos 400–600.
- Corpo mínimo: 16 px, altura de linha entre 1.5 e 1.7.
- Comprimento de leitura: aproximadamente 60–72 caracteres.
- Não escrever títulos inteiros em caixa alta; reservar caixa alta para pequenos rótulos.

## Layout

- Mobile-first.
- Largura máxima de conteúdo: 1200–1280 px.
- Margens laterais: 20 px no mobile, 32 px no tablet e 48–64 px no desktop.
- Espaçamento vertical de seção: 64 px no mobile e 96–128 px no desktop.
- Grid de produtos: 2 colunas no mobile quando houver espaço; 3–4 no desktop.
- Fotografias devem ser protagonistas. Evitar cartões excessivamente contornados.
- Cantos discretos: 4–12 px, nunca aparência excessivamente arredondada.
- Sombras suaves e raras; preferir borda e contraste de superfície.

## Componentes

### Botão primário

- Fundo dourado escuro, texto branco, altura mínima de 48 px.
- Padding horizontal de 22–28 px.
- Estado hover com escurecimento leve, sem saltos de layout.
- Estado de foco visível com outline de pelo menos 2 px.

### Botão secundário

- Fundo transparente ou marfim.
- Borda em `#1C1917`; texto escuro.
- Mesmos tamanhos e estados do botão primário.

### Cards de produto

- Imagem 4:5 com proporção reservada para evitar CLS.
- Nome, marca/família olfativa se confirmada e ação clara.
- Não inventar preço, desconto, estoque, avaliação ou selo de “mais vendido”.
- Hover pode revelar ação, mas toda ação precisa continuar acessível por toque e teclado.

### Navegação

- Logo, categorias essenciais e CTA de WhatsApp/contato.
- No mobile, menu simples; alvos de toque com pelo menos 44 × 44 px.
- Cabeçalho pode ficar fixo somente se não ocupar espaço excessivo.

## Fotografia

- Priorizar `assets/generated/hero/homepage-hero-asad-bourbon.webp` na capa inicial.
- Usar fotos reais de `assets/products/` para cards e detalhes.
- Usar imagens de `assets/generated/lifestyle/` apenas em blocos editoriais.
- A imagem gerada dos frascos pastel não representa fielmente cada rótulo e não deve ser usada como foto de SKU.
- Não usar arquivos de `assets/review/` sem resolver a pendência descrita em `assets/README.md`.

## Movimento

- Transições de hover/foco: 150–250 ms.
- Revelações opcionais: fade com deslocamento máximo de 8–12 px e duração de 300–400 ms.
- Respeitar `prefers-reduced-motion`.
- Conteúdo relevante deve estar visível sem JavaScript; não instalar biblioteca de animação apenas para fades simples.

Para referências externas, seguir `REFERENCIAS_DE_COMPONENTES.md`. Uiverse pode inspirar microcomponentes; React Bits é condicional a uma stack React e limitado a um ou dois efeitos discretos. UI UX Pro Max é ferramenta de decisão/QA, não dependência de runtime.

## Acessibilidade e desempenho

- Contraste mínimo WCAG AA: 4.5:1 para texto normal.
- Navegação completa por teclado e foco sempre visível.
- Alt text contextual para cada imagem; decoração deve usar alt vazio.
- Labels visíveis em formulários; erros próximos ao campo.
- Imagens com `width`/`height`, carregamento lazy fora da dobra e formatos WebP/AVIF quando possível.
- Evitar deslocamento de layout; meta de CLS abaixo de 0.1.
- Testar em 375, 768, 1024 e 1440 px.
- Ícones de um único conjunto SVG; não usar emoji como ícone de interface.

## Voz da marca

- Elegante, clara, próxima e sem exageros.
- Preferir linguagem sensorial concreta a promessas grandiosas.
- Não inventar origem, concentração, notas olfativas, fixação ou desempenho dos perfumes.
- CTAs diretos: “Explorar perfumes”, “Conhecer os decants”, “Falar no WhatsApp”.
