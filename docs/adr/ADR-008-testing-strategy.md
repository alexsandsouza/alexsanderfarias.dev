# ADR-008: Estratégia de Testes em Pirâmide

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** QA Engineer, Principal Software Engineer

## Contexto
Garantir a integridade contínua do portfólio exige uma estratégia de testes automatizados eficiente, rápida e com alto retorno sobre o investimento de manutenção, cobrindo validações de regras de negócio, renderização de componentes e fluxos ponta a ponta críticos.

## Decisão
Implementar a clássica **Pirâmide de Testes**:
1. **Base (Unit Tests):** Utilizar **Vitest** para testes unitários de lógica pura, utilitários, sanitizadores, schemas Zod e cálculos (ex: tempo de leitura, filtros de publicação e gerador BibTeX).
2. **Meio (Component / Integration Tests):** Utilizar **React Testing Library** para verificar a correta renderização de componentes isolados, acessibilidade ARIA básica e disparo de eventos.
3. **Topo (End-to-End Tests):** Utilizar **Playwright** para validar fluxos críticos em navegadores reais: alternância de idioma, navegação para case studies, download de currículo e submissão do formulário de contato.

## Alternativas Consideradas
1. **Jest:** Descartado em favor do Vitest devido à velocidade muito superior, suporte nativo a ESM/TypeScript e configuração zero integrada ao ecossistema moderno.
2. **Cypress:** Descartado em favor do Playwright pela melhor velocidade de execução headless, suporte multi-navegador e facilidade de configuração em pipelines de CI.
3. **Apenas Testes E2E:** Lentos e frágeis para verificar casos extremos de validação de schemas e regras puras.

## Consequências
- **Positivas:** Feedback instantâneo no desenvolvimento local (`vitest --watch`), testes E2E rápidos e determinísticos no CI, alta confiabilidade em refatorações.
- **Negativas:** Exige manter mocks apropriados para Server Actions em testes de integração de componentes.

## Implicações de Segurança
- Testes unitários validam especificamente tentativas de bypass em sanitizadores e rejeição de payloads maliciosos.

## Implicações de Performance
- Testes de unidade e componentes executam em menos de 5 segundos no pipeline local.
