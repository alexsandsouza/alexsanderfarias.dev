# Design System: Dark Premium Academic Engineering

## 1. Filosofia Visual
A identidade visual do **alexsanderfarias-dev.vercel.app** traduz a convergência entre **alta engenharia de software**, **pesquisa acadêmica rigorosa** e **inovação em inteligência artificial**.
Rejeita deliberadamente templates corporativos genéricos e designs estridentes, adotando um visual sóbrio, cirúrgico, minimalista e altamente contrastado.

## 2. Paleta Cromática (Color Tokens)

### 2.1 Superfícies e Fundos
- **`bg-canvas` (Deep Obsidian):** `#06080D` — O fundo base quase preto, proporcionando imersão total e economia de energia em telas OLED.
- **`bg-surface` (Charcoal Slate):** `#0E131F` — Superfície primária para cards e contêineres elevados.
- **`bg-elevated` (Muted Steel):** `#161D2E` — Superfície para estados de hover, modais e menus dropdown.

### 2.2 Bordas e Divisores
- **`border-subtle`:** `#1E2638` — Delimitação discreta de cards estruturais.
- **`border-muted`:** `#2A364F` — Delimitação ativa para elementos em foco ou hover.

### 2.3 Tipografia e Texto
- **`text-primary` (Pure White):** `#F8FAFC` — Contraste máximo para títulos e leitura de alta prioridade (taxa > 14:1).
- **`text-secondary` (Muted Slate):** `#94A3B8` — Texto de apoio, resumos de artigos e descrições.
- **`text-tertiary` (Subtle):** `#64748B` — Metadados secundários, timestamps e notas de rodapé.

### 2.4 Cor de Destaque (Accent Token)
- **`accent-primary` (Precision Cyan):** `#00E5FF` — O pulso tecnológico de destaque elétrico para CTAs, badges de IA, indicadores ativos e bordas especiais.
- **`accent-hover`:** `#38BDF8` — Variação luminosa para feedback de interação.
- **`accent-subtle`:** `rgba(0, 229, 255, 0.08)` — Fundo sutil de badges e marcadores de código.

## 3. Tipografia
- **Display & Headings (H1, H2, H3):** `Outfit` / `Space Grotesk` — Letras estruturadas, kerning firme e estética de vanguarda tecnológica.
- **Body & Interface:** `Inter` — Projetada para clareza óptica absoluta em interfaces densas e telas de alta resolução.
- **Mono / Código / Métricas:** `JetBrains Mono` — Para trechos de código, badges de arquitetura, referências BibTeX e métricas numéricas.

## 4. Sistema Espacial e Grid
- Escala de espaçamento baseada em múltiplos de 4px: `4px (1)`, `8px (2)`, `16px (4)`, `24px (6)`, `32px (8)`, `48px (12)`, `64px (16)`.
- Largura máxima de conteúdo central: `max-w-6xl` (1152px) e `max-w-7xl` (1280px) com padding horizontal seguro de `px-4 sm:px-6 lg:px-8`.

## 5. Microinterações e Feedback
- **Transições:** Duração padrão de `150ms` a `200ms` com `ease-out`.
- **Hover:** Elevação sutil de borda (`hover:border-cyan-500/40`) e brilho suave.
- **Motion Reduction:** Desativação automática de transições de deslocamento sob `@media (prefers-reduced-motion: reduce)`.
