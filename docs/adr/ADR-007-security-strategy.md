# ADR-007: Estratégia de Segurança (Security by Design & OWASP)

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** Security Engineer, DevSecOps Engineer

## Contexto
Aplicações web modernas são alvos contínuos de varreduras automatizadas, ataques de Cross-Site Scripting (XSS), injeção de parâmetros, manipulação de cabeçalhos e abuso de formulários públicos para spam e DoS.

## Decisão
Adotar o paradigma **Security by Design** em todas as camadas da aplicação:
1. **Cabeçalhos HTTP Defensivos:** Configuração mandatória de Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options, X-Frame-Options e Permissions-Policy.
2. **Validação e Sanitização de Entrada:** Todo payload é validado por schemas tipados com **Zod** no servidor antes de qualquer processamento.
3. **Mecanismo Anti-Abuso e Honeypot:** O formulário de contato adota um campo invisível (Honeypot) para capturar bots e limitação de requisições (Rate Limiting).
4. **Zero Client Secrets:** Nenhuma credencial privada de servidor deve ser prefixada com `NEXT_PUBLIC_` ou registrada em logs estruturados.

## Alternativas Consideradas
1. **Segurança Apenas no Perímetro (WAF/CDN):** Insuficiente isoladamente; não protege contra falhas de sanitização internas ou brechas de lógica na aplicação.
2. **CAPTCHA Tradicional de Terceiros (ex: Google reCAPTCHA v2 com desafios visuais):** Rejeitado devido ao alto atrito de UX, problemas sérios de acessibilidade (WCAG) e rastreamento intrusivo de dados de privacidade do visitante.

## Consequências
- **Positivas:** Conformidade com OWASP Top 10, proteção contínua de dados de visitantes, mitigação proativa de ataques automatizados.
- **Negativas:** Exige teste rigoroso da política de CSP para não bloquear fontes ou scripts legítimos.

## Implicações de Segurança
- Proteção robusta contra XSS, Clickjacking, MIME-sniffing e envio massivo de lixo em formulários.

## Implicações de Performance
- Sem bibliotecas externas pesadas de terceiros bloqueando o carregamento da página.
