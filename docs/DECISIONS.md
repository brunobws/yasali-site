# Registro de decisões

| Data | Decisão | Motivo | Responsável |
|---|---|---|---|
| 2026-09-19 | Analytics fica desativado por padrão e só carrega após ID confirmado e consentimento | Evitar rastreamento acidental, PII e dependência de plataformas ainda não aprovadas | Factory |
| 2026-09-19 | Headers permanecem em política neutra e templates até o host de hospedagem ser escolhido | CSP e HSTS só podem ser validados na entrega real; não inventar host nem HTTPS | Factory |
| 2026-09-19 | Host padrão da Factory definido como Hostinger | Os sites da operação serão publicados na Hostinger; `.htaccess` vira o template ativo e os demais hosts ficam como alternativas | Operador |
| 2026-09-19 | Code review revisa diff e dependências diretas | Mantém padrão sênior e rastreável sem carregar arquivos desnecessários no contexto | Factory |
