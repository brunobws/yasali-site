# Plano de adoção da Factory — Yasali Perfumaria

Este arquivo define como adaptar o projeto da Yasali ao padrão operacional da VelozeWeb Site Factory, usando como referência o projeto BRSA Tabacaria e o repositório oficial da factory.

- Repositório da Yasali: <https://github.com/brunobws/yasali-site>
- Referência de catálogo: `C:\Users\bruno_silva\Documents\brsa-projeto-transferencia`
- Projeto atual: Vinext/React com exportação estática para Hostinger
- Padrão técnico da factory: Astro/TypeScript/static

## Objetivo

Organizar o desenvolvimento da Yasali para que futuras alterações sejam feitas por etapas, com fatos, conteúdo, assets, decisões, QA e aprovações registrados.

O objetivo inicial **não é reescrever o site**. Primeiro devemos incorporar o processo e melhorar a arquitetura do catálogo, preservando a identidade visual e o funcionamento atual.

## Regras para qualquer IA que trabalhar neste projeto

1. Leia este arquivo antes de executar qualquer etapa.
2. Leia também `CONTEXTO_DO_PROJETO.md`, `assets/README.md`, `assets/generated/README.md` e `design-system/yasali-perfumaria/MASTER.md`.
3. Não copie layout, textos, identidade visual ou conteúdo da BRSA. Use a BRSA apenas como referência de arquitetura, catálogo e conversão.
4. Não altere a stack de Vinext/React para Astro sem aprovação explícita.
5. Não altere preços, notas, estoque, disponibilidade, entrega, políticas ou ranking de vendas sem fonte confirmada.
6. Não mova ou exclua assets originais sem registrar a decisão e preservar possibilidade de recuperação.
7. Não faça commit, push, publicação ou alteração no GitHub sem pedido explícito.
8. Antes de modificar código, verificar o estado do working tree e preservar alterações existentes.
9. Cada fase deve terminar com resumo do realizado, verificações, pendências e próxima ação.
10. Uma fase que exige aprovação humana deve parar em `aguardando aprovação`; não avançar silenciosamente.

## Estado inicial conhecido

### Yasali atual

- Página principal em `app/page.tsx`.
- Estilos em `app/globals.css`.
- Metadados em `app/layout.tsx`.
- Produtos atualmente declarados no código da página.
- Busca e filtros interativos já adicionados ao catálogo.
- Seção estratégica de presentes já adicionada.
- Exportação Hostinger em `scripts/export-static.mjs`.
- Saída final em `dist/`.
- Teste de renderização em `tests/rendered-html.test.mjs`.

### O que deve ser preservado

- Identidade visual da Yasali.
- Logo, Instagram e WhatsApp confirmados.
- Fotografias e organização de produtos já revisadas.
- Busca, filtros e seleção de presentes existentes.
- Compatibilidade com upload estático na Hostinger.
- Histórico e alterações já feitas no projeto.

## Estratégia geral

Vamos trabalhar em três grandes blocos:

1. **Governança:** trazer documentos e critérios da factory.
2. **Catálogo:** separar produtos do layout e aproximar a arquitetura da BRSA.
3. **Evolução:** páginas individuais, WhatsApp contextual, SEO e QA completo.

A migração para Astro será uma decisão separada, posterior e opcional.

---

## Fase 0 — Diagnóstico e proteção

### Objetivo

Registrar o estado atual antes de adicionar a estrutura da factory.

### Prompt para a IA

> Execute a Fase 0 deste plano. Não altere código, conteúdo ou assets. Leia os documentos existentes, inspecione o working tree, confirme a stack, catalogue os scripts de build/teste, liste as funcionalidades atuais e registre riscos ou conflitos com a factory. Gere apenas um relatório de diagnóstico e aguarde aprovação.

### Saídas obrigatórias

- Inventário do projeto atual.
- Lista de comandos disponíveis.
- Lista de funcionalidades já implementadas.
- Lista de arquivos modificados ou não versionados.
- Lista de riscos para migração.
- Decisão registrada: manter Vinext/React nesta etapa.

### Critério de conclusão

Nenhum arquivo de código alterado. Diagnóstico revisado pelo responsável.

---

## Fase 1 — Governança e documentos da factory

### Objetivo

Criar a documentação de operação sem mudar o visual ou o comportamento do site.

### Prompt para a IA

> Execute a Fase 1 deste plano. Crie a estrutura documental da factory para a Yasali, preservando os documentos existentes e sem modificar o layout, catálogo ou stack. Separe fatos confirmados, hipóteses e pendências. Não avance para a arquitetura do catálogo.

### Documentos a criar

```text
AGENTS.md
00_CONTEXT.md
factory.config.json

client/BRIEF.md
client/BRAND.md
client/CONTENT.md
client/REQUIREMENTS.md
client/SOURCE_REGISTER.md
client/ASSET_MANIFEST.md

docs/STATUS.md
docs/DECISIONS.md
docs/PENDING.md
docs/PHASE_CONTRACTS.md
docs/QA_REPORT.md
docs/VISUAL_QA_MATRIX.md
docs/IMPLEMENTATION_SLICES.md
docs/MIGRATION_GUIDE.md
```

### Adaptações necessárias

- Registrar Vinext/React como stack atual.
- Registrar Astro como padrão futuro da factory, não como migração automática.
- Registrar Hostinger como destino estático atual.
- Registrar que o catálogo ainda depende de confirmação de estoque e ranking real de vendas.
- Mapear `CONTEXTO_DO_PROJETO.md` para `client/` sem apagar o original.

### Critério de conclusão

Documentos coerentes, sem fatos inventados, com pendências e decisões registradas. A fase deve terminar aguardando aprovação.

---

## Fase 2 — Modelo de dados do catálogo

### Objetivo

Retirar os dados dos produtos de `app/page.tsx` e criar uma fonte única para o catálogo.

### Prompt para a IA

> Execute a Fase 2 deste plano. Separe os produtos da Yasali em uma fonte de dados tipada, mantendo exatamente os produtos, preços, volumes, imagens e descrições confirmados. Não altere o visual. Crie validações para detectar imagem ausente, slug duplicado ou campo obrigatório vazio. Preserve o fallback de build estático.

### Estrutura sugerida

```text
conteudo/produtos.json
src/lib/catalog.ts
src/types.ts
```

Se a migração de diretórios não for conveniente para Vinext, usar:

```text
app/data/products.ts
app/lib/catalog.ts
```

### Campos mínimos

- `slug`
- `name`
- `brand`
- `gender`
- `category`
- `family`
- `notes`
- `usage`
- `giftable`
- `featured`
- `price`
- `volume`
- `image`
- `description`

### Critério de conclusão

O catálogo renderiza os mesmos produtos de antes, agora a partir da fonte de dados. Build, testes e imagens continuam válidos.

---

## Fase 3 — Componentização do catálogo

### Objetivo

Aproximar a organização da Yasali ao padrão reutilizável da BRSA, sem copiar seu design.

### Prompt para a IA

> Execute a Fase 3 deste plano. Extraia o catálogo em componentes reutilizáveis para filtros, cards, grupos, presentes e estado vazio. Preserve o design da Yasali. Não adicione novas funcionalidades além das necessárias para manter o comportamento atual.

### Componentes sugeridos

```text
app/components/CatalogFilters.tsx
app/components/ProductCard.tsx
app/components/ProductGrid.tsx
app/components/GiftHighlights.tsx
app/components/CatalogEmptyState.tsx
```

### Critério de conclusão

O visual permanece reconhecivelmente Yasali, os componentes funcionam no teclado e no mobile, e nenhuma regra de negócio continua duplicada no layout.

---

## Fase 4 — Busca e filtros inteligentes

### Objetivo

Evoluir a busca atual para uma experiência semelhante à da BRSA, adaptada a perfumes.

### Prompt para a IA

> Execute a Fase 4 deste plano. Evolua a busca da Yasali com filtros combináveis, ordenação e URL compartilhável. Use somente campos confirmados do catálogo. Preserve o funcionamento estático da Hostinger e mantenha o conteúdo essencial legível sem JavaScript.

### Funcionalidades previstas

- Busca por nome, marca, família e notas.
- Filtro por gênero.
- Filtro por momento: dia, noite, dia e noite.
- Filtro por família olfativa.
- Filtro “ideal para presente”.
- Ordenação por relevância, preço e nome.
- Contagem de resultados.
- Estado sem resultados.
- Limpeza de filtros.
- URL com parâmetros.

### Exemplos de URL

```text
/catalogo?q=baunilha&momento=noite
/catalogo?presente=true
/catalogo?familia=gourmand
```

### Critério de conclusão

Filtros combinados funcionam em desktop e mobile, podem ser compartilhados pela URL e não quebram a exportação `dist`.

---

## Fase 5 — Páginas individuais de perfumes

### Objetivo

Criar uma página indexável e compartilhável para cada perfume.

### Prompt para a IA

> Execute a Fase 5 deste plano. Crie páginas individuais de produto usando os dados existentes. Cada página deve ter imagem, descrição, família, notas, ocasião, preço, volume, produtos relacionados e WhatsApp contextual. Não invente dados ausentes.

### Estrutura sugerida

```text
/produto/asad/
/produto/yara/
/produto/khamrah/
```

### Critério de conclusão

Cada página gera título, descrição, canonical e dados estruturados coerentes. O link do WhatsApp identifica o perfume consultado.

---

## Fase 6 — Conversão e WhatsApp contextual

### Objetivo

Transformar a escolha feita no catálogo em uma mensagem útil para a Yasali.

### Prompt para a IA

> Execute a Fase 6 deste plano. Melhore os links do WhatsApp para incluir o perfume, ocasião, intenção de presente e demais escolhas feitas pelo usuário. Não altere o número confirmado e não envie mensagens automaticamente.

### Exemplos de contexto

- Perfume selecionado.
- Dia ou noite.
- Perfil feminino, masculino ou unissex.
- Busca por presente.
- Família olfativa.
- Quantidade, se aplicável.

### Critério de conclusão

O WhatsApp abre com uma mensagem preparada, mas o usuário continua responsável por revisar e enviar.

---

## Fase 7 — Destaques comerciais controlados

### Objetivo

Criar seções automáticas sem afirmar ranking de vendas antes da confirmação da Yasali.

### Prompt para a IA

> Execute a Fase 7 deste plano. Crie seções derivadas dos campos do catálogo: ideais para presente, destaques da curadoria, para o dia, para a noite e unissex. Não use “mais vendidos” até existir uma fonte real de vendas aprovada.

### Critério de conclusão

As seções podem ser alteradas no arquivo de dados, sem duplicar produtos no código da página.

---

## Fase 8 — SEO, sitemap e dados estruturados

### Objetivo

Aplicar o padrão de SEO da BRSA sem inventar domínio, avaliações ou disponibilidade.

### Prompt para a IA

> Execute a Fase 8 deste plano. Adicione sitemap, robots, canonical e dados estruturados para catálogo e páginas de produto usando somente informações confirmadas. Verifique o domínio real antes de publicar URLs absolutas.

### Critério de conclusão

Cada rota possui metadados coerentes e não existem URLs fictícias no artefato final.

---

## Fase 9 — QA e visualização

### Objetivo

Adaptar os portões de qualidade da factory à stack Vinext/React.

### Prompt para a IA

> Execute a Fase 9 deste plano. Rode build, testes, lint, verificação de assets, inspeção visual e testes de teclado nas larguras 320, 390, 430, 768 e 1440 px. Registre evidências em `docs/QA_REPORT.md` e `docs/VISUAL_QA_MATRIX.md`. Não publique.

### Verificações mínimas

- Build Vinext.
- Exportação Hostinger.
- Imagens presentes.
- Favicon presente.
- Busca e filtros.
- URLs compartilháveis.
- Páginas individuais.
- WhatsApp.
- Sem rolagem horizontal.
- Foco visível.
- Alvos de toque adequados.
- `prefers-reduced-motion`.
- Console sem erros.

### Critério de conclusão

QA documentado, pendências classificadas e `dist` correspondente ao último código validado.

---

## Fase 10 — Decisão sobre Astro

### Objetivo

Decidir conscientemente se vale migrar o projeto para Astro.

### Prompt para a IA

> Execute a Fase 10 deste plano somente depois das fases anteriores. Compare manter Vinext/React com migrar para Astro usando dados reais do projeto: tamanho do JavaScript, complexidade dos filtros, manutenção, exportação Hostinger, QA e esforço de migração. Não migre automaticamente. Apresente recomendação e aguarde aprovação.

### Possíveis decisões

1. Manter Vinext/React.
2. Usar Vinext/React com processo da factory.
3. Migrar somente o catálogo interativo para uma arquitetura híbrida.
4. Migrar todo o site para Astro.

---

## Checklist de encerramento de cada fase

- [ ] Entrada da fase confirmada.
- [ ] Documentos exigidos lidos.
- [ ] Working tree preservado.
- [ ] Escopo da fase respeitado.
- [ ] Fatos não confirmados registrados em `docs/PENDING.md`.
- [ ] Decisões registradas em `docs/DECISIONS.md`.
- [ ] Testes e build executados quando aplicável.
- [ ] Evidências registradas no QA.
- [ ] Próxima ação informada.
- [ ] Aprovação humana solicitada quando necessária.
- [ ] Nenhum commit, push ou publicação feito sem autorização.

## Próximo passo recomendado

Começar pela **Fase 0 — Diagnóstico e proteção** em uma nova tarefa da IA. Depois de revisar o diagnóstico, aprovar explicitamente a Fase 1 antes de criar os documentos da factory.
