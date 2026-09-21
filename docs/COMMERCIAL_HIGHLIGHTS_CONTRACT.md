# Contrato de destaques comerciais

## Seções derivadas

- `giftable: true` → Ideais para presentear.
- `featured: true` → Destaques da curadoria.
- `usage: "Dia"` → Perfumes para o dia.
- `usage: "Noite"` → Perfumes para a noite.
- `gender: "Unissex"` → Seleção unissex.

As seções são derivadas em `CommercialHighlights.tsx`; não há listas duplicadas de produtos na página.

## Controle de claims

`featured` significa seleção editorial, não ranking de vendas. O site não usa “mais vendidos”, “best seller” ou equivalentes enquanto não houver uma fonte de vendas confirmada pela Yasali.

`npm run validate:commercial` verifica automaticamente o conteúdo publicado e falha se um claim comercial não confirmado for introduzido.
