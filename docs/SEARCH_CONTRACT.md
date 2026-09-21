# Contrato de busca e filtros

## Parâmetros compartilháveis

| Parâmetro | Valores | Efeito |
| --- | --- | --- |
| `q` | texto livre | busca em nome, marca, família, descrição, notas e momento |
| `perfil` | `Masculino`, `Feminino`, `Unissex` | filtra gênero |
| `momento` | `Dia`, `Noite`, `Dia e noite` | filtra ocasião de uso |
| `familia` | família existente no catálogo | filtra família olfativa |
| `presente` | `true` | mostra produtos marcados como `giftable` |
| `ordenar` | `relevance`, `price-asc`, `price-desc`, `name` | ordena resultados |

Exemplo: `/?q=baunilha&momento=Noite&presente=true&ordenar=relevance`.

## Regras

- Os filtros são combináveis.
- Relevância prioriza correspondência no nome, depois marca, família e notas.
- “Sob consulta” fica depois dos preços numéricos na ordenação crescente e antes na ordenação decrescente, preservando sua natureza não numérica.
- A URL é atualizada sem recarregar a página e responde a voltar/avançar do navegador.
- O HTML inicial continua contendo o catálogo completo para a publicação estática; os filtros aprimoram a experiência quando JavaScript está disponível.
