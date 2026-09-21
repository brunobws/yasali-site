# Padrão de segurança e headers

Este padrão cobre o que a Factory consegue verificar em um site estático. O host padrão é a Hostinger, usando o template `deployment/headers/hostinger/.htaccess.example`. Ele não substitui a segurança do provedor de hospedagem, do backend, do formulário, do DNS ou das contas externas.

## Política mínima

A Hostinger deve aplicar:

- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`;
- `Content-Security-Policy` específica para os scripts, imagens, fontes, frames e endpoints realmente aprovados;
- `Content-Security-Policy: frame-ancestors 'none'` (ou exceção documentada e aprovada);
- `X-Frame-Options: DENY` quando compatível com a política de framing;
- `Strict-Transport-Security` somente depois de domínio HTTPS confirmado e com a política de subdomínios aprovada.

O starter usa a política estrita sem serviços externos. Analytics, mapas, vídeos, formulários e outros recursos exigem uma variante de CSP revisada; não acrescente `https:` amplo nem `*` para resolver erros rapidamente.

## Limites do site estático

- Não coloque tokens, chaves secretas ou credenciais em HTML, JavaScript, `public/` ou `dist/`.
- Formulários precisam de validação no servidor/provedor, rate limit e proteção contra spam; nenhum desses controles é fornecido pelo Astro estático.
- HSTS fica desativado até o domínio HTTPS real estar confirmado.
- Headers só podem ser considerados entregues depois de verificados na URL publicada; o `.htaccess.example` só vira ativo quando for copiado para a raiz do `dist` publicado.
- Revise a CSP sempre que uma nova skill, integração ou script externo entrar no projeto.

## Evidência

Registre no QA o host, a URL testada, os headers recebidos, a CSP efetiva e as limitações do provedor. A Etapa 14 deve procurar segredos no código e em `dist/`; a Fase 4 deve testar a URL publicada.
