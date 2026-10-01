# Inventário de fotos recebidas — 30/09/2026

As fotos que estavam em `assets/inbox/` foram renomeadas e distribuídas por função. Nenhum arquivo foi apagado.

## Estrutura criada

- `products/`: fotos individuais de frascos que podem servir como galeria dos produtos já cadastrados.
- `decants/sets/`: composições de decants fotografadas juntas; devem ser usadas em uma seção de decants ou em campanhas, não como um SKU de perfume completo.
- `body-splash/`: fotos individuais e coleções de body splash recebidas da cliente.
- `archive/campaign/`: peça com preço e chamada promocional, separada do catálogo permanente.

## Decants

Foram organizados 9 conjuntos com os seguintes rótulos visíveis:

1. Sabah Al Ward, Fakhar Rose e Musamam
2. Asad, Fakhar Black e Ferrari Black
3. Musamam e Royal Amber
4. Asad, Vulcan Feu e Club de Nuit Intense
5. Musamam, Atheeri e Asad
6. Ameerati, Delilah e Yara
7. Musamam, Yara, Asad Elixir e Vulcan Feu
8. Ameerati, Afeef e Durrat Al Aroos
9. Dalal, Yara e Club de Nuit Woman

Todos esses nomes já aparecem no catálogo de perfumes em `app/data/products.json`. Portanto, os decants representam uma nova forma de venda/apresentação dos produtos existentes, não novos perfumes para cadastrar.

## Body splash

Foram organizadas fotos de Yara, Mayar, Haya, Teriaq, Fakhar Rose e Angham, além de três fotos de coleção que também mostram Eclaire. Essa linha ainda não está cadastrada como categoria própria no site.

Antes de publicar esses itens como produtos, confirmar com a cliente: nome exato da variante, volume, preço, disponibilidade, notas/descrição e quais fotos representam cada SKU. Esses dados não foram inferidos a partir das imagens.

## Critério de publicação

- Usar as fotos individuais da cliente como material principal quando o rótulo estiver legível.
- Usar as fotos de coleção em banners ou seções editoriais, pois elas não identificam um único SKU com precisão.
- Manter `archive/campaign/decants-3x10ml-r150.jpg` somente em campanha, pois contém preço promocional fixo.
- Caso seja necessária uma foto frontal mais limpa para cards de body splash, buscar uma imagem oficial/licenciada separadamente e manter a origem registrada em `source/`.
