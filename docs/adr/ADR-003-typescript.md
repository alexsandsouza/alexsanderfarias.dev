# ADR-003: Adoção Estrita de TypeScript

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** Principal Software Engineer, QA Engineer

## Contexto
Projetos de software com ambição profissional demandam verificação estática de tipos para prevenir erros em tempo de execução, documentar contratos de dados e garantir refatorações confiáveis em toda a base de código.

## Decisão
Adotar **TypeScript** em modo estrito (`strict: true`, `noImplicitAny: true`, `strictNullChecks: true`, `noUncheckedIndexedAccess: true`) em 100% dos arquivos do projeto. O uso de `any` é explicitamente proibido; tipos dinâmicos não verificados devem usar `unknown` e ser refinados através de guardas de tipo ou validação com schemas Zod.

## Alternativas Consideradas
1. **JavaScript com JSDoc:** Menor overhead inicial de compilação, mas oferece garantias de tipagem significativamente inferiores e maior propensão a erros de tipagem em refatorações.
2. **TypeScript em Modo Permissivo (`strict: false`):** Permite brechas sutis de nulabilidade e encobrimento de bugs com anotações implícitas.

## Consequências
- **Positivas:** Confiança arquitetural total, auto-completar preciso no IDE, eliminação de bugs comuns de nulidade e integração nativa com Zod para inferência de tipos.
- **Negativas:** Tempo extra despendido na definição formal de interfaces e tipos de domínio.

## Implicações de Segurança
- Tipagem estrita mitiga falhas de injeção de tipos e dados inesperados em funções críticas de segurança.

## Implicações de Performance
- Não gera overhead de runtime (todo tipo é apagado durante a transpilação).
