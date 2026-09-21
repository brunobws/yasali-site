# Registro de fontes

Este arquivo registra a origem e o limite de uso das informações relevantes da descoberta. Ele não transforma uma fonte em autorização automática nem substitui `docs/DECISIONS.md`, `docs/PENDING.md` ou o manifesto de assets.

## Como usar

- Crie um ID curto e estável para cada informação factual relevante, como `SRC-01`.
- Registre a fonte exata: arquivo, página, link, conversa ou instrução, com data quando ela for relevante.
- Classifique a autoridade e o uso permitido antes de usar a informação em conteúdo público.
- Relacione o ID nos documentos de `client/` quando a afirmação for material, contraditória ou sensível.
- Não registre hipótese, copy, prioridade ou decisão de layout como fato. Encaminhe-os à Fase 2A ou a `docs/DECISIONS.md`.

| ID | Informação ou alegação | Fonte exata | Classe da fonte | Autoridade | Uso permitido | Limite ou condição | Documentos afetados | Revisado em |
|---|---|---|---|---|---|---|---|---|
| SRC-01 | | | instrução explícita / fonte autorizada / evidência pública | confirmado / requer confirmação / não publicável | descoberta / planejamento / publicação | | | |

## Regras rápidas

- `confirmado`: pode orientar os documentos e ser publicado somente dentro do uso permitido.
- `requer confirmação`: pode servir como pista, mas não como afirmação pública.
- `não publicável`: contextualiza a descoberta, mas não pode aparecer no site.
- Em caso de conflito, mantenha os registros envolvidos, descreva a divergência em `docs/PENDING.md` e não escolha silenciosamente.
