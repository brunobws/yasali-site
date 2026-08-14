# Contexto do projeto — Yasali Perfumaria

Este documento deve ser lido por qualquer nova IA antes de planejar, escrever ou implementar o site.

## O negócio

**Marca:** Yasali Perfumaria  
**Instagram:** https://www.instagram.com/yasali.perfumaria/  
**Localização informada no perfil:** Sorocaba — SP  
**Contato público observado:** https://wa.me/5515981744696  
**Segmento:** perfumes árabes e importados, perfumes femininos e masculinos e frascos menores/decants.

O perfil mistura fotos de produto, conteúdo leve e pessoal, memes e campanhas. O site deve organizar essa presença em uma experiência mais confiável e premium, sem apagar o tom próximo da marca.

## Objetivo do site

Criar uma presença digital própria que:

1. apresente a Yasali com mais credibilidade que um feed social isolado;
2. organize perfumes e decants de forma fácil de explorar no celular;
3. destaque produtos com boas fotografias;
4. transforme visitas, principalmente vindas do Instagram, em conversas e pedidos;
5. permita evoluir futuramente para catálogo completo ou e-commerce.

## Modelo comercial ainda não confirmado

A hipótese mais segura para o MVP é **catálogo com conversão pelo WhatsApp**, porque o perfil já direciona para esse canal. Não implementar carrinho, checkout, estoque ou pagamentos sem confirmação do usuário.

Perguntas que precisam ser confirmadas antes de fechar o escopo comercial:

- A compra será concluída pelo WhatsApp ou diretamente no site?
- Quais produtos, preços, volumes e estoques estarão disponíveis?
- A Yasali entrega apenas em Sorocaba/região ou envia para todo o Brasil?
- Quais formas de pagamento, frete e prazos são oferecidos?
- Existem políticas de troca, privacidade e termos já aprovados?
- Há CNPJ, endereço comercial e domínio oficial que devam aparecer?

Enquanto não houver resposta, marcar esses pontos como `TODO` e nunca inventar informações.

## Público e contexto de uso

Hipótese inicial: pessoas que descobrem perfumes pelo Instagram, procuram perfumes árabes/importados para uso próprio ou presente e valorizam orientação pessoal antes da compra. O acesso tende a ser majoritariamente mobile.

Essa descrição é uma hipótese de produto, não uma pesquisa de público validada.

## Arquitetura sugerida para o MVP

### Página inicial

1. Cabeçalho com logo, categorias, contato e menu mobile.
2. Hero com proposta de valor, imagem Asad Bourbon e CTAs para catálogo e WhatsApp.
3. Categorias: femininos, masculinos e decants.
4. “Em destaque” com produtos reais disponíveis no projeto — não chamar de “mais vendidos” sem comprovação.
5. Bloco editorial sobre perfumes árabes/curadoria.
6. Bloco de decants explicando a proposta, após confirmação do texto comercial.
7. Prova social ou conteúdo do Instagram, apenas com dados reais.
8. CTA final para atendimento.
9. Rodapé com Instagram, WhatsApp e páginas institucionais confirmadas.

### Evolução futura

- Página de categoria/listagem.
- Página individual de produto.
- Busca e filtros.
- Sobre a Yasali.
- FAQ, entrega, trocas, privacidade e termos.
- Carrinho/checkout somente se o modelo comercial for confirmado.

## Conteúdo e SEO

- Idioma principal: português do Brasil.
- Tom: elegante, simples, próximo e útil.
- Evitar frases vazias como “a essência que transforma sua alma”.
- Não inventar notas olfativas, fixação, projeção, concentração, procedência ou benefícios.
- Usar metadados e dados estruturados apenas com informações verificadas.
- Priorizar termos naturais como “perfumes árabes em Sorocaba”, sem repetição artificial.

## Assets

Ler obrigatoriamente:

- `assets/README.md`: inventário, qualidade e restrições.
- `assets/generated/README.md`: imagens produzidas com IA e prompts.
- `design-system/yasali-perfumaria/MASTER.md`: regras visuais e de UX.
- `REFERENCIAS_DE_COMPONENTES.md`: curadoria de Uiverse, React Bits e limites de animação.

### Prontos para o site

- `assets/brand/yasali-logo-primary.png`
- `assets/products/`: fotografias reais de Asad, Asad Bourbon, Asad Elixir e Attar Al Wesal.
- `assets/generated/hero/homepage-hero-asad-bourbon.webp`
- `assets/generated/lifestyle/attar-al-wesal-lifestyle-01.webp`
- `assets/generated/lifestyle/decants-pastel-lifestyle-01.webp`, apenas como imagem editorial.

### Não consumir diretamente

- `assets/review/`: arquivos com baixa resolução, campanha sazonal ou preço gravado.
- `assets/source/`: originais, ZIPs e duplicatas para recuperação.

## Estado técnico do projeto

Na data deste briefing, o diretório contém a biblioteca de mídia e documentação, mas nenhuma stack de site foi identificada. A próxima IA deve inspecionar o workspace novamente.

Se ainda não houver stack, deve apresentar uma recomendação curta e pedir a decisão do usuário antes de criar a estrutura. Não presumir framework, CMS, checkout ou banco de dados.

## Critérios de qualidade

- Mobile-first e responsivo entre 375 e 1440 px.
- Aparência editorial realista, sem excesso de efeitos “luxo”.
- Acessibilidade WCAG AA, teclado, foco visível e alvos de toque adequados.
- Imagens otimizadas e sem layout shift.
- CTAs claros e não agressivos.
- Nenhum dado comercial inventado.
