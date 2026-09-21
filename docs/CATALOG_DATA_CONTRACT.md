# Contrato de dados do catálogo

## Fonte única

O catálogo vive em `app/data/products.json`. A aplicação importa essa fonte por `app/lib/catalog.ts`, que valida a estrutura e exporta `products` e `giftProductNames` para a página.

## Campos obrigatórios

`slug`, `name`, `brand`, `gender`, `category`, `family`, `notes`, `usage`, `giftable`, `featured`, `price`, `volume`, `image` e `description`.

`alt` e `imageFit` completam a apresentação visual atual. O `slug` deve ser único e `image` deve apontar para um arquivo existente em `public/`.

## Regras

- `usage` aceita `Dia`, `Noite` ou `Dia e noite`.
- `gender` aceita `Masculino`, `Feminino` ou `Unissex`.
- `giftable` controla a seleção “Ideais para presentear”.
- `featured` permite futuras seleções editoriais; não significa ranking de vendas.
- Preços e disponibilidade continuam sujeitos à confirmação comercial.
- Não remover ou renomear slug sem atualizar links, testes e imagens correspondentes.

## Validação

`npm run validate:catalog` verifica campos vazios, slugs duplicados e imagens ausentes. `app/lib/catalog.ts` repete as invariantes essenciais durante o build/runtime.
