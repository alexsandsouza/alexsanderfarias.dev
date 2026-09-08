import { ProjectCaseStudy } from "@/shared/types";

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "avalia-2",
    title: "Avalia 2.0",
    headline: "Plataforma de Avaliação Educacional e Analytics de Aprendizagem",
    category: "education",
    status: "production",
    summary:
      "Sistema de alta confiabilidade para gestão, aplicação e análise psicométrica de avaliações acadêmicas, processando resultados com feedback instantâneo para professores e alunos.",
    metrics: [
      { label: "Alunos Avaliados", value: "XX+" },
      { label: "Disponibilidade", value: "99.9%" },
      { label: "Tempo de Resposta Médio", value: "< 120ms" },
    ],
    problem:
      "Processos avaliativos tradicionais sofriam com sobrecarga manual de correção, falta de rastreabilidade de habilidades pedagógicas e incapacidade de fornecer diagnósticos de aprendizagem em tempo hábil.",
    context:
      "Desenvolvido para atender instituições de ensino superior com centenas de alunos simultâneos durante janelas de provas críticas de alta concorrência de I/O.",
    constraints: [
      "Operação com latência mínima em picos de concorrência com centenas de conexões simultâneas.",
      "Auditoria estrita de submissões para prevenir fraudes e garantir integridade de notas.",
      "Conformidade com padrões de acessibilidade para estudantes com necessidades especiais.",
      "<TODO: Alexsander informar restrições adicionais de infraestrutura>",
    ],
    architecture: {
      pattern: "Modular Monolith com processamento assíncrono de eventos",
      diagramDescription:
        "Browser -> Edge CDN -> API Layer (Next.js/Node) -> Event Queue -> Background Worker (Analytics Engine) -> Postgres DB",
      components: [
        "Core Exam Engine (gerenciamento de estados de avaliação em tempo real)",
        "Psychometrics Analytics Worker (cálculo de índices de discriminação e dificuldade)",
        "Audit Trail Logger (gravação imutável de eventos de submissão)",
      ],
    },
    technicalDecisions: [
      {
        decision: "Persistência transacional com PostgreSQL e isolamento de transações",
        rationale: "Garantir consistência ACID durante a entrega simultânea de provas de alunos.",
        tradeoff: "Exige gerenciamento rigoroso de pool de conexões (PgBouncer/Prisma Accelerate).",
      },
      {
        decision: "Processamento de notas em background com filas assíncronas",
        rationale: "Desacoplar a resposta imediata da submissão do cálculo pesado de estatísticas pedagógicas.",
        tradeoff: "Complexidade adicional de orquestração de workers e eventual consistency.",
      },
    ],
    implementationDetails: [
      "Modelagem orientada a domínio (DDD) com entidades claras para Avaliação, Questão, Tentativa e Feedback.",
      "Contratos de API tipados de ponta a ponta com TypeScript e Zod.",
      "Implementação de cache com invalidação precisa em rotas estáticas de consulta.",
      "<TODO: Alexsander informar bibliotecas e frameworks específicos utilizados no Avalia 2.0>",
    ],
    security: [
      "Autenticação robusta baseada em sessões criptografadas com tokens revogáveis.",
      "Assinatura digital e timestamping criptográfico em cada tentativa de prova.",
      "Proteção rigorosa contra SQL Injection, XSS e validação de permissões por perfil (RBAC).",
    ],
    testing: [
      "Bateria de testes unitários cobrindo 100% dos algoritmos de cálculo de pontuação.",
      "Testes de carga simulando 500 submissões simultâneas sem degradação do banco.",
      "Testes E2E cobrindo a jornada completa do estudante e do docente.",
    ],
    cicd: [
      "Pipeline automatizado no GitHub Actions com lint, testes, auditoria de segurança e verificação de build.",
      "Deploy contínuo com zero downtime e rollback automatizado em caso de anomalia de métricas.",
    ],
    results: [
      "Redução drástica do tempo de consolidação de resultados avaliativos de semanas para minutos.",
      "Adoção institucional com feedback unânime de confiabilidade e clareza.",
      "<TODO: Alexsander informar métricas oficiais de impacto>",
    ],
    lessonsLearned: [
      "A clareza dos contratos de domínio e a simplicidade arquitetural superam a tentação de fragmentação prematura em microsserviços.",
      "Testes de carga precoces revelam gargalos sutis de concorrência que testes de unidade não expõem.",
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    githubUrl: "https://github.com/alexsandsouza/TODO-avalia2",
    demoUrl: "https://alexsanderfarias.dev/projects/avalia-2",
    featured: true,
  },
  {
    slug: "globaltur",
    title: "GlobalTur",
    headline: "Ecossistema Digital de Gestão e Informação Turística",
    category: "systems",
    status: "production",
    summary:
      "Plataforma inteligente para catalogação de pontos turísticos, rotas regionais e suporte a tomada de decisão para o setor de turismo, com alto foco em performance mobile e SEO.",
    metrics: [
      { label: "Destinos Catalogados", value: "XX+" },
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Tempo de Carregamento 4G", value: "< 1.5s" },
    ],
    problem:
      "Falta de centralização de informações turísticas atualizadas e portais governamentais lentos, não otimizados para dispositivos móveis ou conexões instáveis.",
    context:
      "Projetado para turistas em mobilidade e gestores públicos que demandam métricas confiáveis de atratividade e rotas integradas.",
    constraints: [
      "Funcionamento fluido em redes móveis de baixa largura de banda (3G/4G).",
      "Indexação impecável por motores de busca através de SEO técnico e JSON-LD.",
      "<TODO: Alexsander informar restrições operacionais e parcerias do GlobalTur>",
    ],
    architecture: {
      pattern: "JAMstack / Server-Side Rendering híbrido com Edge Caching",
      diagramDescription:
        "Visitante -> Vercel Edge Network -> Static Site Generation (SSG) / ISR com fallback sob demanda -> Cache de Mídia Otimizado",
      components: [
        "Dynamic Route Mapping & Geolocation Viewer",
        "SEO Engine com microdados de turismo Schema.org/TouristAttraction",
        "Media Pipeline com conversão para WebP/AVIF",
      ],
    },
    technicalDecisions: [
      {
        decision: "Geração Estática Incremental (ISR) para páginas de atrações",
        rationale: "Servir páginas pré-renderizadas na CDN para velocidade instantânea sem re-compilar o site todo.",
        tradeoff: "Visitante pode receber dado com alguns minutos de latência antes da revalidação.",
      },
    ],
    implementationDetails: [
      "Design responsivo otimizado para telas pequenas com priorização de contraste e legibilidade sob luz solar.",
      "Imagens responsivas utilizando `srcset` e tamanhos otimizados para evitar desperdício de dados móveis.",
      "<TODO: Alexsander informar detalhes de implementação específicos>",
    ],
    security: [
      "Sanitização completa de rotas e consultas de pesquisa.",
      "Headers CSP restritivos bloqueando scripts não autorizados.",
    ],
    testing: [
      "Testes automatizados de regressão visual para múltiplos breakpoints de tela.",
      "Verificação contínua de Core Web Vitals e Lighthouse em pipelines de CI.",
    ],
    cicd: [
      "Preview builds por branch permitindo homologação visual por stakeholders antes de deploy.",
    ],
    results: [
      "Excelente tempo de resposta e retenção de usuários mobile superior à média do setor.",
      "<TODO: Alexsander informar estatísticas e premiações>",
    ],
    lessonsLearned: [
      "Otimização extrema de imagens e fontes é o fator determinante número um para o sucesso em plataformas de turismo.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Leaflet/MapLibre", "Vercel"],
    githubUrl: "https://github.com/alexsandsouza/TODO-globaltur",
    demoUrl: "https://alexsanderfarias.dev/projects/globaltur",
    featured: true,
  },
  {
    slug: "ai-educational-assistant",
    title: "AI Educational Assistant",
    headline: "Assistente de Aprendizagem de Programação Baseado em Modelos de Linguagem",
    category: "ai",
    status: "research",
    summary:
      "Pesquisa e prototipação de um assistente pedagógico de IA que fornece feedback formativo sobre código de estudantes sem entregar soluções prontas, estimulando o pensamento computacional.",
    metrics: [
      { label: "Acurácia de Diagnóstico", value: "XX%" },
      { label: "Submissões Analisadas", value: "XX+" },
      { label: "Satisfação Discente", value: "XX%" },
    ],
    problem:
      "O surgimento de LLMs comerciais levou estudantes a copiar respostas prontas sem compreender os fundamentos da ciência da computação e algoritmos.",
    context:
      "Desenvolvido no contexto de pesquisa acadêmica em educação em computação e inteligência artificial aplicada.",
    constraints: [
      "Não expor a resposta final ao aluno; guiar via método socrático e questionamentos reflexivos.",
      "Latência de resposta em streaming tolerável sem interrupções de conexão.",
      "<TODO: Alexsander informar escopo da pesquisa e laboratório>",
    ],
    architecture: {
      pattern: "RAG (Retrieval-Augmented Generation) com Guardrails Pedagógicos",
      diagramDescription:
        "Editor de Código -> Backend Gateway -> AST & Linter Analyzer -> Guardrail Validator -> LLM API -> Streaming de Feedback",
      components: [
        "Code Abstract Syntax Tree (AST) Parser",
        "Pedagogical Guardrail Filter (bloqueia vazamento de soluções completas)",
        "Streaming Response Interface",
      ],
    },
    technicalDecisions: [
      {
        decision: "Camada intermediária de análise estática (AST) antes do prompt da LLM",
        rationale: "Reduz o consumo de tokens e fornece contexto sintático preciso ao modelo.",
        tradeoff: "Requer implementação de parsers para cada linguagem suportada.",
      },
    ],
    implementationDetails: [
      "Implementação de streaming de respostas via Server-Sent Events (SSE).",
      "Prompts estruturados com poucas amostras (few-shot) validados academicamente.",
      "<TODO: Alexsander informar detalhes de modelos e datasets>",
    ],
    security: [
      "Mitigação de Prompt Injection através de isolamento estrito de contexto e validação de tokens.",
      "Não persistência de dados de identificação pessoal dos alunos nos prompts.",
    ],
    testing: [
      "Testes de benchmark avaliando se o assistente resiste a tentativas de extração de gabarito.",
    ],
    cicd: [
      "Validação automatizada de prompts e testes de regressão de qualidade de respostas.",
    ],
    results: [
      "Maior engajamento dos estudantes na depuração de seus próprios códigos e melhora na retenção de conceitos.",
      "<TODO: Alexsander informar resultados formais>",
    ],
    lessonsLearned: [
      "Guardrails pedagógicos são mais críticos do que o tamanho do modelo subjacente.",
    ],
    technologies: ["Python", "TypeScript", "LLM APIs", "Next.js", "Docker"],
    githubUrl: "https://github.com/alexsandsouza/TODO-ai-assistant",
    featured: true,
  },
];
