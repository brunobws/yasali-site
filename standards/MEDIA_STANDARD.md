# Padrão de mídia e imagens de IA

## Princípios

- Materiais reais e autorizados do cliente têm prioridade.
- Toda mídia precisa de origem, autorização, uso e status registrados em `client/ASSET_MANIFEST.md`.
- Um arquivo em `assets/inbox/` ou gerado durante o projeto não está aprovado automaticamente.
- Imagens contextuais não podem induzir o visitante a acreditar que mostram equipe, fábrica, instalação, cliente, case ou resultado real.
- Produtos, instalações técnicas e identidade visual específica exigem material oficial ou aprovação explícita de uma representação ilustrativa.

## Imagens geradas por IA

- Defina antes da geração a função da imagem, composição, assunto, restrições, área negativa e recortes desktop/mobile.
- Registre ferramenta/modelo, data, prompt ou resumo do briefing, responsável pela aprovação e risco de interpretação.
- Classifique inicialmente como `possível`; mova para `aprovado` somente após inspeção e aprovação.
- Revise anatomia, mãos, cabos, componentes, reflexos, textos, marcas, segurança e coerência física.
- Não gere depoimentos, pessoas identificáveis, documentos, certificações, resultados ou ambientes apresentados como evidência.
- Se a imagem for apenas contextual, texto alternativo, legenda ou contexto de uso não deve apresentá-la como registro real.

## Marca e produto

- Prefira logo oficial em SVG. PNG transparente oficial é a segunda opção.
- Não redesenhe nem vetorize marca por IA sem autorização; uma remoção de fundo é um derivado e precisa ser registrada.
- Não invente formatos de equipamentos ou embalagens específicos. Use assets oficiais para produtos reconhecíveis.

## Entrega web

- Preserve o original fora da pasta pública quando ele servir apenas como fonte.
- Publique AVIF e/ou WebP para fotografia; PNG apenas quando transparência ou fidelidade exigir.
- Gere variantes adequadas ao recorte e à largura real de exibição, incluindo mobile.
- Reserve dimensões para evitar layout shift.
- Carregue a mídia que determina o LCP com prioridade e imagens abaixo da dobra de forma tardia.
- Registre no manifesto os derivados web, dimensões e peso final.

## Critérios de aprovação

- A imagem cumpre uma função narrativa clara.
- Não cria uma alegação comercial ou factual inexistente.
- Mantém boa leitura com o conteúdo sobreposto em todas as larguras testadas.
- O recorte mobile preserva o assunto relevante.
- O peso atende às metas de `factory.config.json` ou possui justificativa documentada.
