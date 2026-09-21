# Gate da factory — Fase 4

## Escopo executado

Validação integrada de SEO, headers, copy, conversão e velocidade para a stack Vinext/React e publicação estática na Hostinger.

## Verificações

- SEO: title, description, canonical, JSON-LD, sitemap, robots e ausência de `yasali.example`.
- Headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e `Permissions-Policy` no `.htaccess`.
- Copy: CTAs principais, Instagram, WhatsApp e bloqueio de claims comerciais não confirmados.
- Conversão: número confirmado, CTA contextual e ausência de envio automático.
- Velocidade/estabilidade: imagens dimensionadas, lazy loading, CSS responsivo, reduced motion e proteção contra overflow horizontal.
- Integridade: 29 páginas individuais e assets essenciais presentes no `dist`.

## Comando

```bash
npm run validate:factory-phase4
```

Resultado atual: **aprovado**.

Observação: o gate valida estruturalmente o pacote. A medição de Core Web Vitals em produção e a inspeção de console em navegador real continuam sendo etapas manuais antes do lançamento definitivo.
