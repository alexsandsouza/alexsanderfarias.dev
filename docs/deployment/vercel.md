# Configuração de Hospedagem: Vercel

Este documento define a infraestrutura e configuração do projeto na plataforma Vercel.

---

## 1. Identificação e Domínio
- **Domínio Principal:** `https://alexsanderfarias.dev`
- **Domínio Canônico:** Sempre em lowercase estrito.
- **Redirecionamento:** `www.alexsanderfarias.dev` $\rightarrow$ `https://alexsanderfarias.dev` (308 Permanent Redirect).

## 2. Configuração de Ambientes
- **Production:**
  - Branch associada: `main`
  - URL: `https://alexsanderfarias.dev`
  - Variáveis: `APP_ENV=production`, chaves de produção.
- **Preview:**
  - Acionado em: Todas as branches de pull request (`feature/*`, `fix/*`).
  - URL efêmera: `[branch]-[hash].vercel.app`
  - Variáveis: `APP_ENV=preview`.
- **Development:**
  - Execução local via `pnpm dev`.
  - Variáveis em `.env.local` (nunca commitado).

## 3. Configurações de Otimização e Segurança no Vercel
- **Edge Network & Caching:** Cache estático com revalidação sob demanda (ISR).
- **Vercel Web Analytics & Speed Insights:** Habilitados para monitoramento contínuo de Core Web Vitals sem cookies de rastreamento.
- **Automatic SSL/TLS:** Certificados Let's Encrypt / DigiCert renovados de forma transparente.
