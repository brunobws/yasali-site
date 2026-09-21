# Padrão técnico

- Astro, TypeScript, build estático em `dist` e dependências mínimas.
- HTML semântico, teclado, foco visível, contraste e alvos de toque de pelo menos 44 px.
- Siga `MEDIA_STANDARD.md` para origem, aprovação, formato, recorte e carregamento de imagens.
- Imagens e fontes otimizadas, com espaço reservado para evitar layout shift.
- Para fotografia, use AVIF/WebP e variantes responsivas; PNG exige transparência ou justificativa.
- A mídia de LCP deve ser priorizada; conteúdo abaixo da dobra não deve competir com o carregamento inicial.
- Carregue somente pesos, subconjuntos e famílias tipográficas utilizados.
- JavaScript deve ser progressivo, pequeno e funcional sem depender de efeitos visuais.
- Mobile-first, sem rolagem horizontal; siga as larguras de `factory.config.json` e `MOBILE_UX_STANDARD.md`.
- Configurar title, description, canonical, Open Graph, sitemap, robots e headers.
- Aplicar `standards/SECURITY_STANDARD.md`; na Hostinger, copie o `.htaccess.example` para a raiz do `dist` e verifique os headers na URL publicada.
- Antes de release, aplique `standards/CODE_REVIEW_STANDARD.md`; prefira código simples, tipado e localmente compreensível a abstrações genéricas.

## Indexação e compartilhamento

- Use somente `src/config/site.ts` como fonte técnica de domínio, caminhos publicáveis e metadados padrão. Ela recebe apenas valores já confirmados nos documentos de cliente e planejamento.
- O starter fica em `publicationStatus: 'starter'`: `noindex`, `robots.txt` com bloqueio e sitemap sem URLs. Não mude esse estado para contornar ausência de domínio ou imagem.
- Para publicação, use `publicationStatus: 'ready'`, URL HTTPS confirmada, imagem Open Graph aprovada, caminhos completos em `publicPaths` e Schema.org somente quando seus campos forem confirmados.
- Canonical, Open Graph, Twitter Cards, robots e sitemap são derivados da configuração; não declare URLs diferentes em páginas individuais.

## Arquitetura mínima

- `src/pages/` compõe páginas; `src/layouts/` concentra estrutura de documento; `src/components/` contém unidades visuais reutilizáveis ou com estado próprio; `src/lib/` guarda validações e transformações sem interface.
- Extraia um componente somente quando ele for reutilizado, tiver comportamento próprio de acessibilidade/interação ou reduzir uma página comprovadamente difícil de manter. Não crie componentes genéricos apenas para dividir arquivos.
- Mantenha CSS local quando pertencer a um componente; use `src/styles/` apenas para reset, tokens e regras realmente globais. Não mova um CSS pequeno só por estética de pastas.
- Dados públicos, URLs, analytics e SEO devem ter uma fonte central por cliente; a configuração específica será formalizada na Etapa 11. Não espalhe valores confirmados por páginas e componentes.
- Valide valores que geram URL, integração ou ação externa antes de renderizar. Não aceite protocolos inseguros, dados vazios ou segredos no cliente.

## Favicon e ícones de dispositivo

- Use uma marca reduzida, monograma ou símbolo aprovado; nunca reduza o logotipo horizontal inteiro para o favicon.
- Entregue `favicon.svg`, `favicon-48.png` e `apple-touch-icon.png` de 180 px.
- Declare SVG, PNG, `shortcut icon` e Apple Touch Icon no `<head>`.
- Inclua uma versão (`?v=1`) nas URLs do favicon e incremente-a quando mudar o arquivo, evitando o cache persistente de abas abertas.
- Esses arquivos precisam estar no `dist/` e não podem manter o ícone genérico da fábrica em um site concluído.

## Metas de performance

- LCP até 2,5 s.
- CLS abaixo de 0,1.
- INP até 200 ms quando mensurável.
- Objetivo Lighthouse Performance mobile igual ou superior a 90 na versão publicada.
- Limites preferenciais de mídia estão em `factory.config.json`; exceções exigem justificativa no QA.

A pontuação Lighthouse é uma evidência, não o único critério. Registre também métricas, peso transferido, asset de LCP e condições do teste.
