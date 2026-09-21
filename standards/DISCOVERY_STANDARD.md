# Padrão de descoberta e calibração

Este padrão evita dois erros opostos na Fase 1: publicar uma suposição como fato e transformar toda incerteza em uma pergunta para o cliente.

## 1. Classifique antes de perguntar

Para cada informação factual relevante, mantenha explícitas quatro dimensões em `client/SOURCE_REGISTER.md`: informação, fonte, autoridade e uso permitido. Relacione o ID da fonte nos documentos de `client/` quando a afirmação for material, contraditória ou sensível. `docs/DECISIONS.md` continua sendo o lugar para autorizações e decisões que alterem o uso de uma fonte.

| Classe | Exemplo | Tratamento |
|---|---|---|
| Confirmado explicitamente | instrução recente do cliente ou responsável | pode entrar nos documentos e orientar a fase |
| Confirmado por fonte autorizada | dossiê, asset ou canal oficial que o cliente autorizou como factual | pode entrar; registre a fonte e eventuais limites |
| Evidência pública não autorizada | diretório, busca ou perfil de terceiro | use como pista; peça confirmação se o dado for publicável e material |
| Hipótese ou sugestão | interpretação, copy, prioridade, layout ou estratégia | não trate como fato; encaminhe para a fase apropriada |

A autoridade da fonte depende do contexto do projeto. Uma instrução explícita mais recente pode autorizar o uso de um dossiê, assets e canais oficiais como fontes factuais; registre a autorização em `docs/DECISIONS.md` e reflita seu limite no registro de fontes, sem repetir a mesma pergunta em cada documento.

## 2. Filtro de pendência

Uma linha só entra em `docs/PENDING.md` quando as três condições forem verdadeiras:

1. a informação continua realmente desconhecida ou contraditória;
2. não é possível resolvê-la com uma fonte já autorizada, uma transformação técnica segura ou uma decisão normal da próxima fase;
3. sua ausência afeta conteúdo publicável, autorização de mídia, conformidade, integração ou release.

Se faltar qualquer condição, não crie uma pendência. Classifique como:

- decisão da Fase 2A, quando for prioridade, arquitetura, copy ou direção criativa;
- tarefa técnica, quando puder ser resolvida pela equipe;
- contexto opcional, quando não alterar o site nem o release.

Agrupe lacunas do mesmo responsável e impacto em uma linha acionável. Não use uma meta numérica artificial de pendências: o objetivo é a menor lista que preserve segurança e utilidade.

## 3. Revisão obrigatória antes de fechar

Antes de marcar a descoberta como `aguardando aprovação`, faça uma passagem avaliadora:

- Cada fato publicado nos documentos tem fonte, autoridade e uso permitido coerentes no registro?
- Cada pendência ainda mudaria alguma decisão concreta?
- Há alguma decisão de estratégia disfarçada de lacuna factual?
- O cliente conseguiria responder a cada linha sem investigar o processo inteiro?
- Alguma confirmação recebida foi aplicada em todos os documentos afetados?
- Os assets aprovados existem no caminho indicado e os arquivados não estão sendo usados?

Se uma resposta for “não”, corrija os documentos antes de apresentar a fase. O resumo ao usuário deve separar fatos consolidados, materiais úteis e somente as lacunas remanescentes.

## 4. Critério de qualidade

Uma boa descoberta reduz incerteza sem transferir trabalho desnecessário ao cliente. O agente deve resolver o que é seguro resolver, perguntar apenas o que altera o resultado e deixar explícita a fronteira entre descoberta e estratégia.
