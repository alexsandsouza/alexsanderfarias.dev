# Requisitos de Segurança: alexsanderfarias.dev

Este documento formaliza as regras técnicas de segurança obrigatórias para o código e para a infraestrutura.

---

## 1. Cabeçalhos HTTP de Segurança (Security Headers)
Configurados via `next.config.ts`:
- **Content-Security-Policy (CSP):**
  - `default-src 'self'`
  - `script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com`
  - `style-src 'self' 'unsafe-inline'`
  - `img-src 'self' data: https: blob:`
  - `font-src 'self' data:`
  - `connect-src 'self' https://vitals.vercel-insights.com`
  - `frame-ancestors 'none'`
- **Strict-Transport-Security (HSTS):** `max-age=63072000; includeSubDomains; preload`
- **X-Content-Type-Options:** `nosniff`
- **X-Frame-Options:** `DENY`
- **Referrer-Policy:** `strict-origin-when-cross-origin`
- **Permissions-Policy:** `camera=(), microphone=(), geolocation=(), browsing-topics=()`

## 2. Validação e Higienização de Dados (Input Sanitation)
- Todo dado vindo do cliente deve passar por schema `zod` com regras estritas:
  - Tamanho mínimo e máximo de strings.
  - Formato de e-mail verificado sintaticamente via regex RFC 5322.
  - Caracteres perigosos como `<script>`, `javascript:`, `data:` e tags HTML devem ser sanitizados ou rejeitados.
- Nenhum dado de entrada é interpolado diretamente em consultas, comandos ou marcação HTML crua.

## 3. Prevenção de Abuso de Formulários
- **Campo Honeypot (`_gotcha`):** Oculto via CSS/atributos acessíveis (`aria-hidden="true"`, `tabIndex={-1}`) para não impactar leitores de tela ou usuários reais. Se preenchido, a submissão é imediatamente neutralizada.
- **Rate Limiting:** Limite de 5 envios de mensagem por IP a cada janela de 10 minutos.

## 4. Gestão de Segredos e Credenciais
- Variáveis que contêm tokens de serviços de e-mail (ex: `RESEND_API_KEY`) nunca devem possuir o prefixo `NEXT_PUBLIC_`.
- O repositório deve ser verificado com ferramentas de Secret Scanning antes de cada push.
