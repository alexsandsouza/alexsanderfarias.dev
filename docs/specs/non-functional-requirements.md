# Requisitos Não-Funcionais (NFR): alexsanderfarias.dev

Este documento define os parâmetros de qualidade, desempenho, segurança, acessibilidade e operabilidade exigidos pelo sistema.

---

### 1. Performance & Eficiência de Recursos
- **[NFR-001] Core Web Vitals:**
  - Largest Contentful Paint (LCP) $\le 1.8\text{s}$ no 75º percentil.
  - Cumulative Layout Shift (CLS) $\le 0.05$.
  - Interaction to Next Paint (INP) $\le 150\text{ms}$.
- **[NFR-002] Lighthouse Score:**
  - Performance $\ge 95$ (meta 100 em desktop).
  - Accessibility $\ge 95$ (meta 100).
  - Best Practices $\ge 95$ (meta 100).
  - SEO $\ge 95$ (meta 100).
- **[NFR-003] Server-First Architecture:** Mais de 85% dos componentes devem ser React Server Components (RSC) estritamente executados no servidor, minimizando o JavaScript bundle transferido para o cliente.

### 2. Acessibilidade (a11y)
- **[NFR-004] Conformidade WCAG 2.2 AA:**
  - Taxa de contraste mínimo de cores de $4.5:1$ para texto normal e $3:1$ para texto grande/elementos gráficos de interface.
  - Navegação completa por teclado com indicador visual de foco visível (`:focus-visible`).
  - Suporte total a `prefers-reduced-motion` para anulação de animações não essenciais.
  - Estrutura semântica estrita (apenas um `<h1>` por página, `<main>`, `<nav>`, `<article>`, `<section>`).

### 3. Segurança & Resiliência
- **[NFR-005] Defesa em Profundidade de Cabeçalhos:**
  - Content-Security-Policy (CSP) sem `unsafe-inline` para scripts executáveis de terceiros não autorizados.
  - HTTP Strict Transport Security (HSTS) com `max-age=63072000; includeSubDomains; preload`.
  - `X-Content-Type-Options: nosniff`.
  - `X-Frame-Options: DENY` (e CSP `frame-ancestors 'none'`).
  - `Referrer-Policy: strict-origin-when-cross-origin`.
- **[NFR-006] Validação Estrita de Dados de Entrada:** Todo payload recebido em Server Actions ou rotas de API deve ser validado via schemas estritos `Zod` e devidamente sanitizado contra XSS e injeções.
- **[NFR-007] Zero Secrets Leak:** Nenhuma credencial privada de servidor deve ser prefixada com `NEXT_PUBLIC_` ou registrada em logs estruturados.

### 4. SEO & Indexação
- **[NFR-008] Rich Snippets & Metadados Estruturados:** Implementação de JSON-LD nos esquemas Schema.org:
  - `Person` (com nome canônico, afiliações, URLs do Lattes/ORCID/GitHub).
  - `ProfilePage` e `WebSite`.
  - `Article` para posts do blog e `ScholarlyArticle` para publicações científicas.
- **[NFR-009] Canonical URLs e Sitemap Dinâmico:** Domínio em minúsculas consistente `alexsanderfarias.dev`, tags `rel="canonical"` e `hreflang` por localidade.

### 5. Compatibilidade & Responsividade
- **[NFR-010] Breakpoints de Layout:** Suporte nativo e testado para 320px, 375px, 768px, 1024px, 1440px e 1920px sem quebras de layout ou overflow horizontal.
