# Referência: Clínica Moreno / Vencer Sempre Sem Drogas

## Identificação

- **Site público:** https://www.clinicasmoreno.com.br/
- **Projeto local observado:** `C:/Users/bruni/Documents/clinicasmoreno`
- **Arquivos principais:** `index.html`, `styles.css`, `script.js`, `CONTEXTO_NEGOCIO.md`
- **Tipo de referência:** site institucional de acolhimento e encaminhamento.

## Princípios reutilizáveis

### Narrativa e conversão

- O hero começa pela situação emocional do visitante e leva para uma conversa, em vez de abrir com uma lista fria de serviços.
- O percurso explica o primeiro contato em passos simples antes de aprofundar a oferta.
- O CTA de WhatsApp aparece no hero, em pontos de decisão e como botão flutuante, sempre com rótulo claro.
- FAQ e avisos de segurança reduzem dúvidas sem prometer resultado.

### Direção visual e movimento

- Tipografia editorial com contraste entre serif display, sans para leitura e mono para microcopy.
- Alternância de superfícies claras, verdes profundas e blocos de conteúdo cria ritmo vertical.
- A frase do hero usa escrita progressiva; a animação tem fallback textual e respeita `prefers-reduced-motion`.
- As entradas de seção são sutis, com `IntersectionObserver`, sem transformar o site em uma sequência de efeitos.
- Imagens têm função narrativa e são acompanhadas de contexto/disclaimer quando representam parceiros.

### Estrutura e acabamento

- HTML semântico, skip link, navegação móvel controlável e links com nomes explícitos.
- Rodapé concentra navegação, contato, aviso de emergência e um painel de termos relacionados recolhível.
- Vídeos são opcionais, com `preload="none"`, controles nativos e proporção preservada no celular.
- O layout usa grids que colapsam para uma coluna ou duas colunas compactas em telas pequenas.

## Limites: não copiar

- Não copiar o nome, logo, paleta, frases, fotos, vídeos, ícones, HTML/CSS/JS ou a composição inteira.
- Não reutilizar afirmações comerciais do projeto de referência em outro cliente.
- Não transformar a estética de acolhimento clínico em padrão obrigatório para setores diferentes.
- Não usar imagens da pasta local em outro projeto sem licença, autorização e aprovação específica.

## Evidências e fonte de verdade

O contexto comercial e os limites de publicação estão em `C:/Users/bruni/Documents/clinicasmoreno/CONTEXTO_NEGOCIO.md`. O comportamento visual pode ser estudado em `index.html`, `styles.css` e `script.js`. Para um novo cliente, fatos e assets aprovados do próprio cliente sempre substituem qualquer conteúdo desta referência.

