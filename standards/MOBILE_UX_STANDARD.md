# Padrão de experiência mobile

## Estratégia

- Projete a prioridade, a ordem e a densidade do conteúdo para celular; não apenas empilhe o desktop.
- Preserve impacto visual sem obrigar o visitante a atravessar blocos repetitivos ou texto secundário excessivo.
- Use as larguras mínimas de `factory.config.json`, incluindo telefone compacto, iPhone atual, Android amplo, tablet e desktop.
- Valide retrato e, quando houver elementos fixos ou mídia imersiva, paisagem.

## Layout e navegador móvel

- Não permita rolagem horizontal.
- Use `viewport-fit=cover` quando houver elementos próximos às bordas.
- Respeite `env(safe-area-inset-*)` em header, barras e botões fixos.
- Prefira `svh`/`dvh` quando a interface do navegador afetar a altura; forneça fallback apropriado.
- Garanta títulos legíveis, sem cortes, sobreposição ou quebras tipográficas ruins.
- Teste logo, menu, CTA e rodapé no menor viewport aprovado.

## Toque e interação

- Controles devem ter pelo menos 44 × 44 px e espaço suficiente entre alvos.
- Nenhuma informação ou ação pode depender de hover.
- Efeitos de ponteiro devem ser aplicados somente com capacidade de hover e ponteiro preciso.
- Formulários precisam funcionar com teclado virtual, tipos de campo adequados e mensagens próximas ao erro.
- Elementos fixos não podem cobrir conteúdo, consentimento, campos ou outros CTAs.

## Movimento

- Movimento deve explicar, orientar ou reforçar a narrativa.
- Respeite `prefers-reduced-motion` e ofereça estado completo sem animação.
- Evite movimento contínuo, parallax pesado e animações que atrasem a leitura.

## Componentes condicionais

- WhatsApp flutuante é opcional e depende da estratégia aprovada.
- Botão de voltar ao topo é recomendado somente em páginas longas. Deve surgir após rolagem, ter rótulo acessível, funcionar por teclado e não competir com o WhatsApp.
- Cards interativos devem manter conteúdo completo no estado estático. Inclinação, luz e deslocamento devem ser sutis e desativados para toque ou movimento reduzido.

## Evidência

Registre no QA as larguras inspecionadas, navegador/motor, orientação, problemas encontrados e correções. Quando não houver dispositivo físico, declare que o teste foi em emulação e mantenha teste real como recomendação antes da publicação.
