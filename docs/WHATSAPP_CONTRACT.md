# Contrato de conversão via WhatsApp

## Número confirmado

O número público usado pelo site permanece `5515981744696`. Nenhuma mensagem é enviada automaticamente: o usuário revisa e envia no WhatsApp.

## Contexto enviado

Os CTAs de produto podem incluir nome, perfil, momento e família olfativa. A seleção de presentes inclui a intenção de presentear. As páginas individuais incluem o perfume consultado.

## Regras

- Mensagens são montadas por `app/lib/whatsapp.ts`.
- O link usa `encodeURIComponent` e preserva acentos/quebras de linha.
- Dados não selecionados não são inventados nem adicionados à mensagem.
- CTAs genéricos continuam disponíveis para quem ainda não escolheu um perfume.
