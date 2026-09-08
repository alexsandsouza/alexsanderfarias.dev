# ADR-004: Plataforma de Hospedagem e Edge Network Vercel

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** SRE/DevOps Engineer, Software Architect

## Contexto
O domínio de produção `https://alexsanderfarias.dev` exige disponibilidade global, baixa latência para visitantes em qualquer continente, suporte automatizado a certificados SSL/TLS, pré-visualizações isoladas de pull requests e integração transparente com o framework Next.js.

## Decisão
Hospedar a aplicação no ecossistema **Vercel**, configurando três ambientes formais: `Production`, `Preview` e `Development`.

## Alternativas Consideradas
1. **Container Docker em VM / AWS ECS / VPS:** Adicionaria manutenção manual de infraestrutura, patches de sistema operacional, configuração de Nginx/Caddy e custos contínuos desnecessários para a escala atual.
2. **Cloudflare Pages:** Excelente rede, porém Next.js App Router possui compatibilidade mais completa e suporte a Server Actions na infraestrutura Vercel.
3. **AWS Amplify:** Menos flexível na gestão de previews efêmeros e histórico de builds comparado à Vercel.

## Consequências
- **Positivas:** Deployments atômicos, CDN global com cache inteligente, Preview URLs instantâneas por branch/PR, SSL automático e gerenciamento seguro de variáveis de ambiente.
- **Negativas:** Lock-in parcial em primitivas proprietárias da Vercel (mitigado mantendo a aplicação em Next.js padrão).

## Implicações de Segurança
- Certificados TLS atualizados automaticamente, mitigação de DDoS na camada de rede (Anycast) e isolamento seguro de variáveis de ambiente de produção e preview.

## Implicações de Performance
- Atendimento via Edge Caching nas bordas mais próximas dos usuários, minimizando Time To First Byte (TTFB).
