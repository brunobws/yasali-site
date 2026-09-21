# Versionamento e migração da fábrica

Cada repositório criado com **Use this template** é uma cópia independente. Ele não recebe automaticamente mudanças posteriores da VelozeWeb Site Factory. Este documento define como evoluir o template e como levar melhorias seguras a projetos existentes.

## Versionamento

A versão canônica da fábrica fica em `factory.config.json` e deve permanecer alinhada com `package.json`, `package-lock.json`, `docs/STATUS.md`, `CHANGELOG.md` e a documentação que descreve o estado atual.

Use versionamento semântico:

- **major** (`1.0.0`): mudança incompatível no fluxo, estrutura ou contrato dos projetos;
- **minor** (`0.4.0`): nova capacidade compatível, novo padrão ou automação relevante;
- **patch** (`0.4.1`): correção compatível sem mudança material de processo.

A versão atual da Factory é `0.6.0`. As Etapas 0 a 14 da refatoração foram implementadas, verificadas e publicadas. As Etapas 15 e 16 são uma evolução posterior e não bloqueiam a adoção do template 0.6.0.

## Classificação de mudanças

| Tipo | Exemplos | Política de migração |
|---|---|---|
| Governança | `AGENTS.md`, contratos, precedência | revisar e aplicar quando não conflitar com decisões do cliente |
| Padrão de qualidade | conteúdo, mídia, mobile, QA | aplicar seletivamente e revalidar os artefatos afetados |
| Starter neutro | layout base, componentes e scripts | portar por diff; nunca substituir código personalizado em bloco |
| Dependência | Astro, integração ou ferramenta | atualizar em branch própria e executar check, build e QA completo |
| Específica do cliente | copy, marca, planejamento e assets | nunca copiar entre projetos |

## Migração 0.4.x → 0.5.0

Esta versão adiciona `standards/DISCOVERY_STANDARD.md` e torna obrigatória a revisão de pendências na Fase 1. Em projetos existentes:

1. copie o novo padrão e as alterações correspondentes em `AGENTS.md`, `prompts/01-descoberta.md` e `docs/PHASE_CONTRACTS.md`;
2. revise `docs/PENDING.md` aplicando as três condições do padrão, sem apagar fatos ou decisões do cliente;
3. mantenha no arquivo apenas lacunas ainda materiais; decisões de estratégia devem ser encaminhadas à fase correta;
4. atualize a versão somente depois de revisar os documentos e registre exceções em `docs/STATUS.md`.

## Migração 0.5.0 → 0.6.0

Para projetos derivados de 0.5.0, aplique seletivamente os padrões, prompts, scripts e componentes descritos no `CHANGELOG.md`. Preserve `client/`, `planning/`, assets, copy e decisões do cliente; execute `npm run qa` e registre exceções antes de atualizar a versão.

## Processo de migração

1. Leia no `CHANGELOG.md` todas as versões entre a versão do cliente e a versão desejada.
2. Abra o repositório do cliente e confira sua versão em `factory.config.json` e `docs/STATUS.md`.
3. Garanta working tree conhecido e preserve alterações do cliente.
4. Crie uma branch de migração quando a mudança atingir código, dependências ou vários arquivos.
5. Compare os arquivos indicados no changelog e aplique somente mudanças generalizáveis.
6. Não sobrescreva `client/`, `planning/`, assets, copy ou identidade visual.
7. Resolva conflitos com base na tabela canônica de `AGENTS.md` e nas decisões registradas do cliente.
8. Atualize as versões somente depois de aplicar todas as mudanças previstas.
9. Execute `npm install` ou `npm ci` quando dependências mudarem.
10. Execute `npm run qa` e repita as inspeções visuais afetadas.
11. Registre em `docs/STATUS.md` a versão aplicada, a data, o commit e eventuais exceções.
12. Faça commit e push somente com autorização explícita.

## Regras de segurança

- Não adicione o repositório da fábrica como fonte de merge automático sobre projetos personalizados.
- Não use atualização em massa sem diff, branch, teste e possibilidade de reversão.
- Não altere fatos ou decisões do cliente para acomodar uma versão nova.
- Não presuma que todo componente novo deve ser instalado em todos os sites.
- Não publique como consequência automática de uma migração.

## Estratégia recomendada por escala

- **Poucos projetos ativos:** aplicar patches seletivos guiados pelo changelog.
- **Muitos projetos com a mesma correção:** preparar um patch versionado, testar em um projeto piloto e só então repetir.
- **Mudanças frequentes e repetitivas:** avaliar uma CLI de migração com modo de simulação, relatório de conflitos e nenhuma publicação automática.

A meta não é manter todo cliente idêntico à fábrica. É saber de qual versão ele partiu, quais melhorias recebeu e quais diferenças foram preservadas conscientemente.
