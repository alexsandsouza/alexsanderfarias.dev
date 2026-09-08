# ADR-006: Estratégia de Conteúdo e Integridade de Dados

- **Status:** Aceito
- **Data:** 2026-09-07
- **Decisores:** Technical Writer, Principal Software Engineer

## Contexto
O portfólio alexsanderfarias.dev tem como objetivo fundamental consolidar autoridade profissional real. A invenção ou simulação de dados profissionais (empresas fictícias, números inventados, métricas fantasiosas ou artigos científicos falsos) destrói completamente a credibilidade do engenheiro e pesquisador.

## Decisão
1. **Regra de Veracidade Absoluta:** É estritamente proibido inventar títulos acadêmicos, métricas, publicações, empresas ou resultados.
2. **Padrão Transparente de Pendências:** Todo dado ou métrica ainda não informada oficialmente por Alexsander deve obrigatoriamente exibir o placeholder explícito:
   `<TODO: Alexsander informar ...>` ou no formato visual `XX+` claramente identificado com label informativo.
3. **Formatos de Conteúdo:**
   - Dados estruturados de projetos, experiência e ensino residem em arquivos TypeScript tipados (`src/modules/[module]/data/`).
   - Artigos longos e publicações técnicas residem em arquivos MDX versionados no Git.

## Alternativas Consideradas
1. **Dados Genéricos (Lorem Ipsum / Dados Falsos de Demonstração):** Rejeitado com veemência por descaracterizar a seriedade técnica do profissional.
2. **Headless CMS Externo (ex: Contentful / Sanity):** Avaliado, mas adicionaria dependência de rede externa, custos e risco de quebra de build offline, sem necessidade real para um portfólio de engenharia focado em versionamento Git.

## Consequências
- **Positivas:** 100% de confiança editorial, integridade total dos dados, histórico auditável via Git commits.
- **Negativas:** Requer atualização manual via commits para novos conteúdos (o que é condizente com a prática de engenharia).

## Implicações de Segurança
- Conteúdos versionados no repositório são estáticos e imutáveis em tempo de execução, eliminando riscos de defacement por invasão de CMS de terceiros.

## Implicações de Performance
- Conteúdo lido em tempo de compilação (build time), gerando HTML estático puro com latência zero de banco de dados.
