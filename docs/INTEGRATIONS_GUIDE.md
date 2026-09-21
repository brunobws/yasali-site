# Guia de skills e integrações

Skills orientam o processo reutilizável; MCPs e ferramentas conectadas oferecem ações ou dados. A Factory usa poucos recursos e exige somente a capacidade necessária para cada portão.

## Antes de iniciar uma fase

Declare o que está disponível na execução atual e rode:

```text
npm run check:integrations -- --phase 3a --available browser,ui-ux-pro-max
```

Também é possível usar `VELOZEWEB_AVAILABLE_INTEGRATIONS`. A declaração não instala, autentica nem testa credenciais; ela só torna a limitação explícita. Consulte `docs/MCP_REQUIREMENTS.md` para a regra de bloqueio.

## Skills

| Skill | Fases | Uso | Fallback |
|---|---|---|---|
| UI/UX Pro Max | 2B, 3A, 3B, 4 | Referência de UI, responsividade, interação e acessibilidade. | Aplicar os padrões e artefatos da Factory; registrar limitação no QA. |
| Humanizer | 2A, 4 | Revisar naturalidade da copy sem mudar fatos aprovados. | Revisão humana de clareza e fidelidade. |
| ImageGen | 1, 3B, quando necessário | Criar ou editar mídia abstrata autorizada. | Usar asset aprovado ou manter a necessidade pendente. |
| Computer Use | 3A, 4 | Inspecionar a experiência real no navegador. | Navegador disponível com evidência equivalente; a verificação visual continua obrigatória. |

Uma skill é esperada quando indicada, mas não substitui os documentos de cliente, a aprovação humana ou os padrões da Factory.

## MCPs e ferramentas conectadas

| Capacidade | Fases | Regra | Fallback |
|---|---|---|---|
| Browser ou Playwright | 3A, 3B, 4 | Obrigatória para encerrar a fase, com evidência visual. | Não existe fallback de aprovação: sem uma das duas capacidades, registre bloqueio. |
| Figma | 2B, 3A | Opcional para colaborar ou ler um arquivo de design. | Mockup local, protótipo mínimo ou screenshots revisáveis. |
| GitHub | 4, release | Opcional para operações remotas. | Git CLI após autorização explícita para commit e push. |

Não instale integrações por conta própria. Registre a ferramenta usada, a evidência e a limitação em `docs/STATUS.md` e no QA da fase.

## Resultado do verificador

- `READY`: requisito obrigatório atendido.
- `FALLBACK`: capacidade opcional ausente; aplique o fallback indicado.
- `BLOCKED`: falta uma capacidade obrigatória; a fase não pode ser aprovada.

O script valida a declaração, não substitui os testes nem a inspeção humana.
