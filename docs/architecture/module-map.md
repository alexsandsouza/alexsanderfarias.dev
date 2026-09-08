# Mapa de Módulos: alexsanderfarias.dev

Este documento cataloga a responsabilidade, fronteiras e contratos de cada módulo do sistema.

---

| Módulo | Responsabilidade Principal | Contrato Público (`index.ts`) | Dependências Permitidas |
| :--- | :--- | :--- | :--- |
| **`home`** | Orquestração da experiência de storytelling na página inicial. | `HomeHero`, `ImpactMetrics`, `SelectedWorkSection`, `HomeManifesto` | `shared/*`, `projects` (via contrato público), `experience` (via contrato público) |
| **`about`** | Trajetória pessoal/profissional, manifesto, biografia formal e CV. | `AboutView`, `BioSummaryCard`, `CvDownloadButton` | `shared/*` |
| **`projects`** | Catálogo geral de projetos e motor de Case Studies em 11 seções. | `ProjectsCatalog`, `CaseStudyView`, `getProjectBySlug`, `getAllProjects` | `shared/*` |
| **`experience`** | Linha do tempo de cargos, empresas e conquistas corporativas. | `ExperienceTimeline`, `getExperienceHistory` | `shared/*` |
| **`teaching`** | Disciplinas universitárias, metodologias ativas e materiais didáticos. | `TeachingView`, `CourseList`, `getTeachingPortfolio` | `shared/*` |
| **`research`** | Linhas de pesquisa em IA e Ciência da Computação, afiliações e ORCID. | `ResearchView`, `ResearchLinesList`, `getResearchOverview` | `shared/*` |
| **`publications`** | Catálogo científico indexado com filtros por ano/área e gerador BibTeX. | `PublicationsCatalog`, `BibTeXCopyButton`, `getPublications` | `shared/*` |
| **`technologies`** | Matriz categorizada de competências técnicas contextualizadas. | `TechMatrixView`, `TechCategoryList`, `getTechStack` | `shared/*` |
| **`blog`** | Base de conhecimento e artigos técnicos em MDX. | `BlogIndexView`, `BlogPostView`, `getAllPosts`, `getPostBySlug` | `shared/*` |
| **`contact`** | Formulário de contato blindado, validação Zod e links de autoridade. | `ContactView`, `ContactForm`, `submitContactAction` | `shared/*`, `infrastructure/mail` |
| **`shared`** | Kernel compartilhado: UI primitives, utilitários, segurança, SEO e tipagens base. | Exportações granulares em `@/shared/*` | Nenhuma dependência com `modules/*` |
| **`infrastructure`**| Adaptadores de serviços externos (provedores de e-mail, analytics). | `sendNotificationEmail`, `trackEvent` | `shared/*` |
