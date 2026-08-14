# Biblioteca de mídia — Yasali Perfumaria

Esta pasta reúne os arquivos revisados para o futuro site. Os nomes seguem o padrão `produto-enquadramento-sequencia.ext`, sempre em minúsculas, sem espaços e sem acentos.

## Direção visual observada

O perfil da Yasali usa uma linguagem delicada e premium: marfim, dourado suave, tipografia serifada e foco em perfumes árabes/importados e decants. Os assets de produto combinam com essa direção, mas ainda têm aparência de fotografia de balcão; funcionam bem em catálogo e galeria, porém não sustentam sozinhos uma capa de site sofisticada.

## Prontos para usar

| Arquivo | Medida | Uso recomendado | Observação |
| --- | ---: | --- | --- |
| `brand/yasali-logo-primary.png` | 796 × 802 | Cabeçalho, rodapé e favicon provisório | PNG com transparência; criar SVG antes do lançamento |
| `products/asad-elixir/asad-elixir-front-01.jpg` | 1080 × 1440 | Card e galeria | Melhor foto frontal do conjunto |
| `products/asad-elixir/asad-elixir-front-02.jpg` | 1080 × 1440 | Galeria | Variação frontal |
| `products/asad-elixir/asad-elixir-in-hand-01.jpg` | 1080 × 1440 | Galeria e escala humana | Boa como imagem secundária |
| `products/asad/asad-front-01.jpg` | 1080 × 1440 | Card e galeria | Melhor foto frontal do conjunto |
| `products/asad/asad-in-hand-01.jpg` | 1080 × 1440 | Galeria e escala humana | Boa como imagem secundária |
| `products/asad-bourbon/asad-bourbon-front-01.jpg` | 1080 × 1440 | Card e galeria | Melhor foto frontal do conjunto |
| `products/asad-bourbon/asad-bourbon-in-hand-01.jpg` | 1080 × 1440 | Galeria e escala humana | Boa como imagem secundária |
| `products/attar-al-wesal/attar-al-wesal-front-01.jpg` | 1080 × 1440 | Card e galeria | Melhor foto frontal do conjunto |
| `products/attar-al-wesal/attar-al-wesal-in-hand-01.jpg` | 1080 × 1440 | Galeria e escala humana | Boa como imagem secundária |
| `videos/arabian-womens-perfume-trio-reel-01.mp4` | 720 × 1280, 3 s | Vídeo curto de apoio | Vertical e muito curto; contém marca do TikTok |

## Imagens produzidas com apoio de IA

| Arquivo | Medida | Uso recomendado | Observação |
| --- | ---: | --- | --- |
| `generated/hero/homepage-hero-asad-bourbon.webp` | 1672 × 941 | Capa da página inicial | Espaço livre à esquerda para título e botão |
| `generated/lifestyle/decants-pastel-lifestyle-01.webp` | 1536 × 1024 | Seção de decants/categorias | Usar como imagem editorial, não como prova exata dos rótulos |
| `generated/lifestyle/attar-al-wesal-lifestyle-01.webp` | 1086 × 1448 | Destaque de produto ou categoria | Embalagem preservada a partir da foto real |

As versões PNG sem compressão e os prompts de produção estão em `source/ai-generated/` e `generated/README.md`. Antes de associar uma imagem gerada a um SKU, conferir visualmente rótulo, volume e embalagem com o produto físico.

## Em revisão — não publicar automaticamente

| Arquivo | Motivo | Próxima ação |
| --- | --- | --- |
| `review/low-resolution/assorted-decants-front-01.jpg` | Apenas 640 × 480 e pouco nítido | Refazer em pelo menos 1600 px no lado maior |
| `review/seasonal-campaign/fathers-day-perfume-post-01.jpg` | Peça sazonal e visualmente mais publicitária que o restante | Usar apenas em campanha de Dia dos Pais |
| `review/price-overlay/gold-peacock-perfume-price-reel-01.mp4` | Preço de R$ 559,90 gravado no vídeo e marca do TikTok | Confirmar preço ou obter versão limpa antes de usar |

## Arquivos-fonte

- `source/instagram/`: ZIPs originais dos álbuns, renomeados por produto.
- `source/ai-generated/`: PNGs originais das imagens produzidas com IA.
- `source/duplicates/`: cópia idêntica do reel do trio de perfumes. Não importar no site.

Os arquivos-fonte existem apenas para recuperação e rastreabilidade. O site deve consumir `brand/`, `products/` e, quando aprovado, `videos/`.

## O que ainda precisamos produzir

1. Em uma sessão futura, fotografar uma capa horizontal real para eventualmente substituir a versão produzida com IA.
2. Fotos de todos os perfumes e decants com luz, fundo, distância e enquadramento consistentes.
3. Uma foto frontal limpa por produto e uma foto de detalhe da embalagem/rótulo.
4. Fotos lifestyle com bancada elegante, tecidos claros, dourado suave e poucos elementos.
5. Vídeos verticais em 1080 × 1920, sem preço fixo, sem marca d'água e com 6–15 segundos.
6. Logo em SVG e versões monocromáticas clara/escura.
7. Fotos de embalagem, entrega e montagem dos decants para gerar confiança.

## Regra para novos arquivos

- Produto: `nome-do-produto-front-01.jpg`, `nome-do-produto-detail-01.jpg`, `nome-do-produto-in-hand-01.jpg`.
- Lifestyle: `nome-do-produto-lifestyle-01.jpg`.
- Vídeo: `nome-do-produto-reel-01.mp4`.
- Não incluir preço, data ou texto promocional dentro da foto/vídeo permanente.
- Guardar downloads brutos em `source/`; colocar somente a seleção final em `products/` ou `videos/`.
