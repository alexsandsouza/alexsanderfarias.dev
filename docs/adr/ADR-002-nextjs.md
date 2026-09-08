# ADR-002: Seleção do Framework Next.js (App Router)

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** Principal Software Engineer, Senior Full Stack Engineer

## Contexto
A plataforma exige renderização estática avançada (SSG/ISR), suporte nativo a SEO técnico (OpenGraph dinâmico, metadados canônicos, sitemap), Server Components para mínima transferência de JavaScript e excelente integração com edge networks.

## Decisão
Utilizar o **Next.js (versão estável mais recente)** com o **App Router**, priorizando **React Server Components (RSC)** por padrão e adotando Server Actions para interações seguras de mutação de dados.

## Alternativas Consideradas
1. **Single Page Application (Vite + React SPA):** Descartado porque a renderização puramente client-side degrada drasticamente o First Contentful Paint, prejudica a indexação por bots de busca e exige soluções manuais de SSR.
2. **Astro:** Excelente para sites estáticos, porém o Next.js App Router oferece ecossistema mais maduro para Server Actions tipadas, streaming dinâmico e integração nativa profunda com a Vercel.
3. **Remix / React Router v7:** Forte em mutações web, porém Next.js possui maior adoção de mercado, ecossistema corporativo consolidado e suporte nativo a otimização de fontes e imagens.

## Consequências
- **Positivas:** Redução massiva de bundle JavaScript enviado ao browser, otimização automática de imagens e fontes, suporte integrado a rotas dinâmicas e middleware de internacionalização.
- **Negativas:** Curva de aprendizado nos limites entre Server e Client Components (`'use client'`).

## Implicações de Segurança
- Server Actions rodam em ambiente protegido com validação server-side estrita.
- Headers HTTP configuráveis globalmente no `next.config.ts`.

## Implicações de Performance
- LCP reduzido significativamente devido a pre-rendering no servidor.
- Zero hydration cost para páginas de leitura estática ou visualização bibliográfica.
