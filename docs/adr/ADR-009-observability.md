# ADR-009: Observabilidade, Monitoramento e Web Vitals

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** SRE/DevOps Engineer, Software Architect

## Contexto
A plataforma em produção necessita de visibilidade contínua sobre a experiência real do usuário (Real User Monitoring - RUM), erros em tempo de execução, latências de borda e possíveis falhas no envio de formulários, sem gerar complexidade de infraestrutura desproporcional ou violar a privacidade dos visitantes.

## Decisão
Implementar observabilidade proporcional e orientada à privacidade:
1. **Core Web Vitals:** Integrar com o **Vercel Speed Insights** para rastreamento contínuo de LCP, CLS, INP e FCP diretamente no nível do usuário real.
2. **Logs Estruturados:** Formatar logs de servidor em JSON estruturado com timestamps ISO, severidade (`INFO`, `WARN`, `ERROR`) e contexto de erro anonimizado.
3. **Privacidade First:** Nenhuma ferramenta de rastreamento de terceiros invasiva (como session recorders ou cookies de publicidade) será admitida.

## Alternativas Consideradas
1. **Instalação de Datadog / New Relic:** Excessivo para o escopo e com custos recorrentes inadequados para um portfólio profissional.
2. **Google Analytics Tradicional:** Requer banners de consentimento intrusivos e coleta excessiva de metadados pessoais.

## Consequências
- **Positivas:** Conformidade integral com LGPD/GDPR, visualização clara da saúde da aplicação e impacto nulo no bundle de JavaScript.
- **Negativas:** Métricas agregadas sem identificação individualizada do visitante (o que é intencional por design).

## Implicações de Segurança
- Zero risco de vazamento de dados de visitantes para redes de anúncios externas.

## Implicações de Performance
- O script do Speed Insights é leve (< 2KB), assíncrono e carregado com prioridade baixa (idle).
