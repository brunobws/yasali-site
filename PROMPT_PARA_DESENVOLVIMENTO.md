# Prompt para iniciar o desenvolvimento em outro chat

Copie a mensagem abaixo para a nova IA. Como o novo chat estará no mesmo projeto, ela poderá ler os arquivos citados.

---

Você vai continuar o projeto do site da **Yasali Perfumaria** neste mesmo workspace.

Antes de escrever código, leia integralmente e trate como fonte de verdade:

1. `CONTEXTO_DO_PROJETO.md`
2. `assets/README.md`
3. `assets/generated/README.md`
4. `design-system/yasali-perfumaria/MASTER.md`
5. `REFERENCIAS_DE_COMPONENTES.md`

Depois, inspecione todos os arquivos e configurações existentes. Preserve o trabalho atual e não altere nem apague assets originais sem necessidade.

## Objetivo

Planejar e desenvolver um site mobile-first, elegante, rápido e acessível para a Yasali Perfumaria, marca de Sorocaba especializada em perfumes árabes/importados e decants.

O MVP deve priorizar descoberta de produtos e conversão pelo WhatsApp. Não implemente carrinho, checkout, estoque, avaliações, descontos ou pagamentos até o usuário confirmar o modelo comercial e fornecer dados reais.

## Sua primeira resposta

Antes de implementar:

1. informe o que encontrou no projeto;
2. confirme se já existe uma stack técnica;
3. apresente uma proposta curta de arquitetura e páginas;
4. liste apenas as decisões realmente bloqueantes, principalmente stack e catálogo com WhatsApp versus e-commerce completo;
5. se não houver stack, recomende uma opção adequada com justificativa curta e aguarde a escolha do usuário.

Não faça perguntas sobre informações que já estejam documentadas.

## Quando a implementação for autorizada

- Siga o design system; não use glassmorphism, “Liquid Glass”, neon, fumaça, partículas ou excesso de dourado.
- Trate Uiverse e React Bits como referências opcionais, seguindo integralmente `REFERENCIAS_DE_COMPONENTES.md`.
- Se a stack não for React, não use React Bits nem escolha React apenas para ter acesso aos seus efeitos.
- Mesmo com React, use no máximo um ou dois aprimoramentos discretos. Prefira CSS local para fades simples.
- Antes de incorporar código externo, revise semântica, teclado, foco, movimento reduzido, desempenho e licença.
- Use a imagem `assets/generated/hero/homepage-hero-asad-bourbon.webp` no hero inicial.
- Use fotografias reais de `assets/products/` em cards e detalhes.
- Use `assets/generated/lifestyle/` somente em blocos editoriais; a imagem dos frascos pastel não representa rótulos exatos.
- Não importe nada de `assets/review/` ou `assets/source/` para produção.
- Não invente preços, notas olfativas, estoque, avaliações, benefícios, entrega ou políticas.
- Onde faltarem dados comerciais, use estrutura neutra ou comentários `TODO`, nunca conteúdo falso apresentado como real.
- O conteúdo deve ser em português do Brasil, com tom elegante, próximo e direto.

## Página inicial esperada

1. Cabeçalho com logo, categorias essenciais, Instagram/contato e menu mobile.
2. Hero com título curto, subtítulo concreto e CTAs “Explorar perfumes” e “Falar no WhatsApp”.
3. Categorias femininos, masculinos e decants.
4. Produtos “Em destaque” usando apenas itens reais disponíveis no workspace.
5. Bloco editorial sobre curadoria/perfumes árabes, sem alegações não confirmadas.
6. Bloco de decants.
7. Área de confiança ou Instagram usando somente fatos reais.
8. CTA final para atendimento.
9. Rodapé com os links e dados confirmados.

## Requisitos técnicos e de qualidade

- Layout mobile-first, testado em 375, 768, 1024 e 1440 px.
- HTML semântico, navegação por teclado, foco visível, contraste WCAG AA e alvos de toque de pelo menos 44 × 44 px.
- Imagens com dimensões reservadas, carregamento lazy fora da dobra e formatos otimizados.
- Respeitar `prefers-reduced-motion`; animações devem ser discretas e opcionais.
- Conteúdo essencial deve existir no HTML e permanecer legível sem animação ou JavaScript.
- Não adicionar WebGL, cursor personalizado, animação contínua ou biblioteca pesada apenas para “parecer moderno”.
- Nenhum scroll horizontal ou conteúdo escondido pelo cabeçalho.
- Componentes reutilizáveis e tokens de design centralizados.
- SEO básico e metadados apenas com dados confirmados.
- Execute lint, testes/build disponíveis e faça verificação visual responsiva antes de entregar.

Trabalhe de forma incremental: primeiro arquitetura e decisões bloqueantes; depois implementação; por fim validação visual, acessibilidade e desempenho. Ao concluir cada etapa, diga exatamente o que foi criado e quais dados reais ainda faltam.

---
