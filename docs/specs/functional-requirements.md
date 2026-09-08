# Requisitos Funcionais (FR): alexsanderfarias.dev

Este documento lista todos os requisitos funcionais do sistema, catalogados com identificadores únicos e priorização de acordo com o método MoSCoW.

---

### Módulo: Internacionalização e Navegação
- **[FR-001] Suporte a Idiomas:** O sistema deve suportar `pt-BR` (padrão) e `en-US` via rotas de sub-caminho prefixadas (`/pt/...` e `/en/...`).
- **[FR-002] Seletor de Idioma:** O usuário deve ser capaz de alternar entre português e inglês a qualquer momento, mantendo a página ou slug correspondente.
- **[FR-003] Menu de Navegação Responsivo:** A navegação principal deve ser acessível em resoluções móveis (drawer/dialog com foco preso) e desktop, com destaque de link ativo.

### Módulo: Home & Storytelling
- **[FR-004] Hero Editorial:** Deve exibir a headline de autoridade, resumo de credenciais, links rápidos (CTAs) e espaço reservado para fotografia oficial.
- **[FR-005] Painel de Métricas de Impacto:** Deve apresentar contadores de anos de experiência, alunos atendidos, projetos concluídos e artigos científicos (com marcadores transparentes `<TODO>` enquanto os dados reais não forem providos).
- **[FR-006] Seção Selected Work:** Deve listar projetos de destaque com imagem, resumo do problema, stack e link para o Case Study completo.

### Módulo: Projetos & Case Studies
- **[FR-007] Catálogo de Projetos:** Página `/projects` listando todos os projetos categorizados (Sistemas Web, IA, Educação, Infraestrutura, Open Source).
- **[FR-008] Case Study Detalhado:** Rota dinâmica `/projects/[slug]` renderizando as 11 seções obrigatórias de engenharia:
  1. Problema
  2. Contexto
  3. Restrições Técnicas
  4. Arquitetura
  5. Decisões Técnicas
  6. Implementação
  7. Segurança
  8. Testes
  9. CI/CD
  10. Resultados
  11. Lições Aprendidas

### Módulo: Experiência & Docência
- **[FR-009] Linha do Tempo de Experiência:** Exibir empresas, cargos, períodos, responsabilidades técnicas e resultados alcançados com opção de expansão progressiva.
- **[FR-010] Módulo de Ensino (Teaching):** Apresentar cursos universitários (Ciência da Computação, Engenharia de Software, ADS, SI), disciplinas lecionadas, metodologias ativas e materiais didáticos.

### Módulo: Pesquisa & Publicações
- **[FR-011] Linhas de Pesquisa:** Apresentar áreas de investigação em IA aplicada à Educação e Engenharia de Software, identificadores ORCID e Currículo Lattes.
- **[FR-012] Catálogo de Publicações:** Rota `/publications` com listagem cronológica de artigos, periódicos e anais de congresso.
- **[FR-013] Filtros de Publicação:** Filtros reativos por ano, temática e categoria.
- **[FR-014] Exportação BibTeX & DOI:** Botão de cópia rápida para citação em formato BibTeX e link direto para o registro DOI/PDF.

### Módulo: Matriz de Tecnologias
- **[FR-015] Matriz Tecnológica:** Exibição estruturada por categorias (Linguagens, Frontend, Backend, Bancos de Dados, Cloud, DevOps, Redes, Segurança, IA, Arquitetura) com contexto de aplicação profissional.

### Módulo: Blog / Base de Conhecimento
- **[FR-016] Motor de Artigos MDX:** Renderização de artigos técnicos com suporte a syntax highlighting, componentes interativos e diagramas Mermaid.
- **[FR-017] Metadados de Leitura:** Exibição de data de publicação, tags, estimativa de tempo de leitura e artigos relacionados.

### Módulo: Contato & Segurança
- **[FR-018] Formulário de Contato:** Formulário com campos de nome, email, assunto e mensagem.
- **[FR-019] Proteção Anti-Abuso:** Validação server-side, proteção Honeypot invisível contra bots e limitação de taxa (Rate Limiting).
- **[FR-020] Canais Verificados:** Links canônicos para GitHub, LinkedIn, Lattes, ORCID e chave pública de segurança.
