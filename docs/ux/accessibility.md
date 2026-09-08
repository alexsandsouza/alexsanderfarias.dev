# Diretrizes de Acessibilidade (WCAG 2.2 AA): alexsanderfarias.dev

Este documento estabelece as regras e técnicas para assegurar conformidade total com as diretrizes **WCAG 2.2 Nível AA**.

---

## 1. Contraste de Cores e Visibilidade
- Todos os textos normais mantêm uma relação de contraste de no mínimo **4.5:1** em relação ao fundo.
- Textos grandes (headings) e elementos gráficos funcionais (ícones de ação, bordas de inputs) mantêm contraste mínimo de **3:1**.
- A cor de destaque (`#00E5FF`) sobre o fundo escuro (`#06080D`) atinge contraste superior a **11:1**, garantindo legibilidade para usuários com baixa visão ou daltonismo.

## 2. Navegação por Teclado e Foco
- **Skip Links:** O primeiro elemento focável na árvore DOM é o link *"Pular para o conteúdo principal"*, permitindo que usuários de leitores de tela e navegação por teclado saltem o cabeçalho imediatamente.
- **Focus Ring Visível:** Todos os elementos interativos (`<a>`, `<button>`, `<input>`, `<textarea>`) possuem estilo `:focus-visible` claramente delineado com anel de foco ciano e espaçamento externo (`ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950`).
- **Ordem Lógica de Tabulação:** O índice de tabulação segue rigorosamente a ordem visual e estrutural do documento.

## 3. Semântica HTML & ARIA
- Uso prioritário de elementos nativos: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.
- Não utilizar `div` clicáveis quando um elemento `<button>` ou `<a>` for semanticamente correto.
- Atributos ARIA aplicados apenas quando o HTML nativo não for suficiente (`aria-expanded`, `aria-label`, `aria-current="page"`).
- Imagens possuem `alt` descritivo detalhado ou `alt=""` explícito quando puramente decorativas.

## 4. Animações e Sensibilidade a Movimento
- Implementação da media query `@media (prefers-reduced-motion: reduce)` em todo o CSS global, anulando animações contínuas, transições de escala ou deslocamentos no scroll.
