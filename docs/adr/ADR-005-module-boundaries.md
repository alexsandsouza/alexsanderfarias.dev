# ADR-005: Limites e Regras de Isolamento de Módulos (Module Boundaries)

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** Software Architect, Principal Software Engineer

## Contexto
Em monólitos em crescimento, o acoplamento descontrolado ("big ball of mud") é a principal causa de degradação da manutenibilidade. Módulos passam a importar implementações internas e detalhes privados de outros módulos, inviabilizando refatorações isoladas.

## Decisão
Estabelecer fronteiras modulares estritas em `src/modules/*`:
1. Cada módulo só expõe artefatos públicos através de seu arquivo raiz `index.ts`.
2. Proibir categoricamente importações profundas (ex: `from '@/modules/A/components/PrivateComponent'`).
3. O Shared Kernel (`src/shared/*`) nunca pode importar de `src/modules/*`.
4. Comunicação entre domínios deve ser baseada em contratos e DTOs explícitos.

## Alternativas Consideradas
1. **Importação Livre sem Barreiras:** Cria alto acoplamento e impossibilita testabilidade isolada.
2. **Separação em Múltiplos Pacotes NPM Privados:** Aumenta exponencialmente a fricção de desenvolvimento, versionamento semântico e tempo de compilação sem ganhos reais no contexto atual.

## Consequências
- **Positivas:** Domínios desacoplados, facilidade de substituição ou refatoração interna de componentes sem quebrar consumidores, arquitetura testável e organizada.
- **Negativas:** Necessidade de manter contratos e reexportações intencionais no `index.ts` de cada módulo.

## Implicações de Segurança
- Módulos com regras de segurança específicas (como `contact` e sanitização) mantêm seus segredos e rotinas críticas isolados de vazamento incidental.

## Implicações de Performance
- O empacotador (bundler/Turbopack) consegue aplicar tree-shaking muito mais eficiente quando as fronteiras de módulos são explícitas.
