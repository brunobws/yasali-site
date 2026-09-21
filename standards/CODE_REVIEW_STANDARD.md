# Padrão de code review

## Escopo eficiente

Antes de revisar, identifique o diff. Leia somente os arquivos alterados, as dependências diretas deles e o padrão correspondente. Não releia o projeto inteiro em correções pequenas.

Revise em uma tarefa nova sempre que possível. Quando isso não for possível, declare no relatório que a revisão não foi independente.

## Critérios

- **Arquitetura:** páginas compõem; componentes têm responsabilidade real; `lib/` concentra validações e transformações; dados técnicos não ficam espalhados.
- **Manutenção:** nomes claros, tipos úteis, fluxo simples e nenhuma abstração criada só para “parecer organizada”.
- **Interface:** sem regressão de teclado, toque, contraste, overflow, estados ou movimento reduzido.
- **Performance:** JavaScript e dependências são justificáveis; mídia e fontes respeitam os padrões; não há trabalho bloqueante evitável.
- **Segurança e privacidade:** sem segredo no cliente, links seguros, CSP/headers compatíveis com a Hostinger, analytics somente após consentimento.
- **Release:** `dist` corresponde ao código, links e assets resolvem, metadados são coerentes e nenhuma pendência é publicada como fato.

## Severidade e decisão

| Nível | Significado | Release |
|---|---|---|
| Crítico | segurança, perda de dados, site indisponível ou exposição de segredo | bloqueia |
| Alto | conversão, acessibilidade, conteúdo público ou SEO essencial quebrado | bloqueia |
| Médio | manutenção ou experiência relevante sem risco imediato | registrar e decidir |
| Baixo | melhoria localizada | não bloqueia |

O relatório precisa listar escopo, evidências, achados, limitações e decisão. Sem achados críticos ou altos, o release ainda depende das aprovações de fase, domínio, dados legais e validação da URL publicada.
