# User Journeys: alexsanderfarias.dev

Este documento mapeia as jornadas críticas dos usuários através do ecossistema da aplicação, detalhando pontos de entrada, decisões, interações e desfechos esperados.

---

## Jornada 1: Avaliação de Competência Técnica por um Líder de Engenharia (Persona 1)

1. **Entrada (0s - 5s):**
   - O usuário chega via link direto (LinkedIn, currículo ou recomendação) em `https://alexsanderfarias.dev`.
   - **Primeiro Impacto Visual:** Hero minimalista com a headline *"I build software. I teach technology. I research what comes next."*
   - O visitante compreende instantaneamente a identidade híbrida: Engenheiro de Software, Professor e Pesquisador.

2. **Scaneamento Inicial (5s - 20s):**
   - Rola a página inicial passando pelo manifesto de posicionamento e painel de métricas.
   - Observa o bloco "Selected Work" destacando projetos arquiteturais emblemáticos (ex: Avalia 2.0, GlobalTur, Sistemas Distribuídos).

3. **Imersão no Case Study (20s - 90s):**
   - Clica no CTA "Explorar Case Study" de um projeto.
   - Navega para `/[locale]/projects/[slug]`.
   - Lê a estrutura padronizada em 11 tópicos: Problema $\rightarrow$ Contexto $\rightarrow$ Restrições $\rightarrow$ Arquitetura $\rightarrow$ Decisões Técnicas $\rightarrow$ Implementação $\rightarrow$ Segurança $\rightarrow$ Testes $\rightarrow$ CI/CD $\rightarrow$ Resultados $\rightarrow$ Lições Aprendidas.
   - Visualiza diagramas de arquitetura Mermaid e inspeção de código/contratos.

4. **Conversão (90s - 120s):**
   - Clica em "Download CV" ou navega para `/[locale]/contact` para iniciar contato ou salvar o perfil no ATS da empresa.

---

## Jornada 2: Consulta Acadêmica e Extração Bibliográfica (Persona 2)

1. **Entrada:**
   - Acessa via busca orgânica ou link de citação para `/[locale]/publications` ou `/[locale]/research`.

2. **Navegação & Filtragem:**
   - Utiliza a barra de filtros interativa por Ano, Área (IA na Educação, Engenharia de Software) ou Tipo de Publicação (Periódico, Simpósio, Capítulo).
   - Localiza o artigo específico com visualização imediata do título, autores, conferência e identificador DOI.

3. **Ação:**
   - Clica no botão "Copiar BibTeX" com feedback tátil/visual imediato (toast/ícone de check).
   - Abre o link direto do DOI ou PDF disponibilizado.
   - Clica no badge do ORCID para verificar a indexação internacional.

---

## Jornada 3: Estudante Acessando Recursos Didáticos (Persona 3)

1. **Entrada:**
   - Acessa `/[locale]/teaching` a partir da indicação em sala de aula ou menu principal.

2. **Exploração de Conteúdo:**
   - Encontra as disciplinas organizadas por curso: Ciência da Computação, Engenharia de Software, ADS e Sistemas de Informação.
   - Analisa tópicos programáticos, metodologias ativas, referências e ferramentas indicadas.

3. **Expansão de Conhecimento:**
   - Clica em links recomendados para artigos específicos no `/blog` que aprofundam tópicos de arquitetura, redes ou boas práticas de código.

---

## Jornada 4: Contato Seguro e Formal (Todas as Personas)

1. **Entrada:**
   - Navega para `/[locale]/contact`.

2. **Preenchimento do Formulário:**
   - Informa Nome, E-mail corporativo/pessoal, Assunto e Mensagem.
   - O campo Honeypot invisível captura tentativas de bots automatizados sem perturbar o usuário legítimo.

3. **Envio & Confirmação:**
   - Validação server-side via Server Action com schema Zod.
   - Resposta imediata com mensagem de sucesso e prazo estimado de retorno.
   - Opção para consultar chave pública PGP e canais verificados (LinkedIn, GitHub, Lattes, ORCID).
