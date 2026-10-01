# Analytics Yasali

A camada de medição do site fica desativada quando não há IDs configurados. Nenhum script de Google ou Meta é carregado nesse estado.

## Quando os IDs forem confirmados

Configure as variáveis no ambiente de build:

- `VITE_GA4_MEASUREMENT_ID`: ID do Google Analytics 4 (`G-...`)
- `VITE_META_PIXEL_ID`: ID do Meta Pixel
- `VITE_GOOGLE_ADS_ID`: ID do Google Ads, somente se houver campanha configurada

Depois, faça um novo build da versão da Hostinger. A primeira visita verá o consentimento; as tags só carregam após aceitar métricas.

## Eventos preparados

- `whatsapp_click`: links de atendimento e botão flutuante
- `cta_primary`: chamadas principais
- `catalog_open`: entrada no catálogo
- `decants_open`: entrada em decants
- `body_splash_open`: entrada em body splash
- `product_open`: abertura de produto
- `instagram_click`: saída para o Instagram

Os eventos enviam somente o nome do evento, a rota atual e um destino genérico. Não enviam nome, telefone, e-mail, texto digitado ou URL completa.
