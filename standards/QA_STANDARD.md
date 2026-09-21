# Padrão de QA

Use `docs/VISUAL_QA_MATRIX.md` como matriz operacional de screenshots, estados interativos, overflow, console e teclado. Os baselines Playwright detectam regressões; não substituem a revisão visual humana.

Valide build, console, links, CTAs, teclado, conteúdo, SEO, imagens e responsividade nas larguras de `factory.config.json`. Faça inspeção visual real e registre comando, resultado, métrica ou screenshot em `docs/QA_REPORT.md`. “Aprovado” sem evidência não encerra a verificação. Falhas críticas ou altas bloqueiam a conclusão.

Antes de recomendar release, execute `npm run qa`, `npm run test:visual` e `npm run audit:dependencies` quando houver acesso ao registro npm. Registre a revisão humana/independente em `docs/CODE_REVIEW.md` conforme `standards/CODE_REVIEW_STANDARD.md`.

## Matriz mínima

- Chromium em desktop e emulação mobile.
- WebKit/Safari por automação ou dispositivo, quando disponível; declare a limitação quando não estiver.
- Telefone compacto, 390 px, Android amplo, tablet e desktop conforme configuração.
- Navegação por teclado, foco visível, toque, formulário e teclado virtual quando aplicável.
- `prefers-reduced-motion`, safe areas e ausência de dependência de hover.

## Performance

- Execute Lighthouse mobile na versão de produção local.
- Depois da publicação, execute PageSpeed na URL real.
- Registre Performance, LCP, CLS, INP/TBT quando disponível, peso transferido e principal gargalo.
- Compare as imagens publicadas com as metas de `factory.config.json`.
- Confirme que `dist/` foi criado depois da última alteração.

## Conteúdo e mídia

- Faça revisão de naturalidade, persuasão responsável, ortografia e coerência com a voz do cliente.
- Confirme cada número, promessa, CTA, endereço e canal de contato contra as fontes aprovadas.
- Revise imagens de IA segundo `MEDIA_STANDARD.md`, incluindo risco de parecer registro real.
- Confira logo, recortes, contraste, texto alternativo e qualidade visual.

## Favicon

- Confirme que SVG, PNG de 48 px e Apple Touch Icon estão referenciados e presentes em `dist/`.
- Teste a leitura do ícone em 16 px e 32 px no Chrome, abrindo uma nova aba ou fazendo recarga completa para evitar concluir a partir de um favicon em cache.
- Registre no QA a versão usada na URL e se o teste ocorreu em aba nova.

Quando houver painel de termos relacionados no rodapé, valide também se ele é um `<details>` navegável por teclado, se não está oculto de forma enganosa, se seus termos têm relação direta com a oferta confirmada e se não substitui conteúdo útil.
