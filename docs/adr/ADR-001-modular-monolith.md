# ADR-001: Adoção do Padrão Modular Monolith

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** Principal Software Engineer, Software Architect

## Contexto
O projeto `alexsanderfarias.dev` precisa apresentar alta complexidade conceitual e múltiplos domínios de negócio (Projetos, Ensino, Pesquisa, Publicações, Blog, Contato) sem incorrer nos custos operacionais, latência de rede e despesas de infraestrutura associadas a arquiteturas de microsserviços distribuídos.

## Decisão
Adotar uma arquitetura de **Monólito Modular (Modular Monolith)** em um único repositório (`single repository`, `single deployment`). Cada domínio de negócio reside em `src/modules/[name]` com limites claros, regras de dependência estritas e exposição de contratos apenas via `index.ts`.

## Alternativas Consideradas
1. **Microsserviços Independentes:** Descartado devido ao excesso de overhead de orquestração, custo de deploy, complexidade de rede e desnecessária segregação de banco de dados para um portfólio profissional.
2. **Monólito Clássico em Camadas (Layered Monolith):** Descartado por agrupar arquivos por tipo técnico (`components/`, `services/`, `utils/`), o que causa acoplamento invisível e dificulta o raciocínio focado por domínio.
3. **Monorepo com Turborepo/Nx:** Avaliado, porém adiciona fricção de pacotes locais sem benefício direto imediato, uma vez que o deploy é unificado em uma única aplicação web.

## Consequências
- **Positivas:** Manutenibilidade elevada, desenvolvimento local unificado, type-safety end-to-end garantido pelo TypeScript, refatorações seguras e facilidade de teste.
- **Negativas:** Requer disciplina arquitetural para não violar os contratos públicos entre módulos.

## Implicações de Segurança
- Menor superfície de ataque externa: não há tráfego de rede inter-serviços desprotegido ou tokens de autenticação transitando entre múltiplos microservices.

## Implicações de Performance
- Chamadas entre módulos ocorrem in-memory sem serialização JSON ou latência HTTP de rede.
