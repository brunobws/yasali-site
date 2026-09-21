# Analytics, eventos e consentimento

## Estado padrão

`src/config/site.ts` é a única fonte de configuração. A Factory começa com `analytics.enabled: false` e sem IDs. Nesse estado nenhum script externo, banner ou tag é emitido.

Só ative depois de confirmar a plataforma, o ID, a política de privacidade/consentimento e quais eventos representam conversão para o cliente:

```ts
analytics: {
  enabled: true,
  consentRequired: true,
  ga4MeasurementId: 'G-XXXXXXXXXX',
  metaPixelId: undefined,
  googleAdsId: undefined,
  privacyPolicyPath: '/privacidade',
}
```

O consentimento é armazenado localmente (`vw_analytics_consent`). As tags só são carregadas depois de `accepted`; `rejected` não carrega plataformas. A implementação não envia nome, telefone, e-mail, texto de formulário, query string ou URL potencialmente pessoal.

## Eventos padronizados

Use `data-analytics-event` nos elementos relevantes:

| Evento | Uso |
|---|---|
| `cta_primary` | CTA principal confirmado |
| `whatsapp_click` | link de WhatsApp; o componente padrão já o marca |
| `phone_click` | link `tel:` |
| `form_submit_success` | somente após sucesso real do formulário |
| `external_destination` | link externo relevante com `data-analytics-external` |

Para um sucesso de formulário ou evento criado por um componente, dispare no navegador:

```js
window.dispatchEvent(new CustomEvent('vw:analytics', {
  detail: { name: 'form_submit_success' }
}));
```

Não trate um evento enviado como conversão de negócio sem validar a plataforma e o objetivo do cliente.

## Checklist de ativação

1. Confirmar IDs, domínio, política de privacidade e consentimento.
2. Alterar somente `src/config/site.ts`.
3. Testar aceite, recusa, carregamento das tags e eventos em ambiente de teste.
4. Registrar IDs e limitações no QA; nunca colocar chaves secretas no código.
