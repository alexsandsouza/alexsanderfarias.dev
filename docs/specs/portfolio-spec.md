# Especificação Geral do Sistema: alexsanderfarias.dev

## 1. Identificação do Projeto
- **Nome do Sistema:** Portfólio Profissional & Hub Acadêmico Alexsander Farias
- **Domínio Primário:** `https://alexsanderfarias.dev`
- **Ambiente de Execução:** Next.js App Router no Vercel Edge Network
- **Paradigma Arquitetural:** Modular Monolith orientado a recursos/domínios

## 2. Objetivos do Sistema
1. **Autoridade Técnica Demonstrada:** Apresentar a trajetória de Alexsander Farias sob uma perspectiva de engenharia de software rigorosa, com estudos de caso detalhados e código limpo.
2. **Integração Acadêmico-Industrial:** Conectar a produção teórica (docência, orientações e artigos indexados) à prática profissional de mercado (sistemas corporativos, arquitetura de microsserviços/monolitos e segurança).
3. **Preservação de Conteúdo e Internacionalização:** Permitir leitura completa em Português Brasileiro (idioma nativo) e Inglês Internacional com URLs canônicas limpas.
4. **Resiliência e Acessibilidade:** Cumprir conformidade com diretrizes WCAG 2.2 nível AA e atingir pontuações de topo nos parâmetros do Google Core Web Vitals.

## 3. Escopo do Sistema
O sistema abrange os seguintes subsistemas modulares:
- **Core Presentation Subsystem:** Módulos de Home, About e Stack Tecnológica.
- **Project & Case Study Engine:** Catálogo de projetos e renderizador de estudos de caso arquiteturais em 11 seções estruturadas.
- **Academic & Research Subsystem:** Módulos de Ensino (Teaching), Linhas de Pesquisa (Research) e Catálogo de Publicações com gerador BibTeX e metadados DOI.
- **Experience Timeline Subsystem:** Linha do tempo corporativa com expansão progressiva.
- **Knowledge Subsystem:** Motor de artigos técnicos em MDX com cálculo de tempo de leitura e metadados OpenGraph dinâmicos.
- **Secure Communication Subsystem:** Formulário protegido com mitigação de abusos, rate limiting, sanitização e canais oficiais de comunicação.
