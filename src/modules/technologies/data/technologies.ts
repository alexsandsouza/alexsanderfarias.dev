import { TechCategory } from "@/shared/types";

export const techCategories: TechCategory[] = [
  {
    id: "architecture",
    nameKey: "Arquitetura & Engenharia de Sistemas",
    skills: [
      { name: "Modular Monolith", level: "expert", highlight: true },
      { name: "Domain-Driven Design (DDD)", level: "expert", highlight: true },
      { name: "Spec-Driven Development (SDD)", level: "expert", highlight: true },
      { name: "Event-Driven Architecture", level: "advanced" },
      { name: "Padrões de Resiliência (Circuit Breaker, Retry)", level: "advanced" },
      { name: "Clean Architecture & SOLID", level: "expert" },
    ],
  },
  {
    id: "languages",
    nameKey: "Linguagens de Programação",
    skills: [
      { name: "TypeScript", level: "expert", highlight: true },
      { name: "JavaScript (ESNext)", level: "expert" },
      { name: "Python", level: "advanced", highlight: true },
      { name: "SQL", level: "advanced" },
      { name: "C / C++ (Fundamentos & Ensino)", level: "proficient" },
    ],
  },
  {
    id: "frontend",
    nameKey: "Frontend & Web Performance",
    skills: [
      { name: "Next.js (App Router / RSC)", level: "expert", highlight: true },
      { name: "React", level: "expert", highlight: true },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Acessibilidade (WCAG 2.2 AA)", level: "expert", highlight: true },
      { name: "Core Web Vitals Optimization", level: "advanced" },
      { name: "HTML5 Semântico & CSS Avançado", level: "expert" },
    ],
  },
  {
    id: "backend",
    nameKey: "Backend, APIs & Serverless",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Server Actions & Server Components", level: "expert", highlight: true },
      { name: "APIs RESTful & GraphQL", level: "advanced" },
      { name: "Zod Schema Validation", level: "expert" },
      { name: "FastAPI / Python Backends", level: "advanced" },
    ],
  },
  {
    id: "databases",
    nameKey: "Bancos de Dados & Armazenamento",
    skills: [
      { name: "PostgreSQL", level: "advanced", highlight: true },
      { name: "Modelagem Relacional Normalizada", level: "expert" },
      { name: "Redis (Cache & Rate Limiting)", level: "advanced" },
      { name: "Prisma / Drizzle ORM", level: "advanced" },
    ],
  },
  {
    id: "cloud-devops",
    nameKey: "DevOps, Cloud & Infraestrutura",
    skills: [
      { name: "GitHub Actions (CI/CD Pipelines)", level: "expert", highlight: true },
      { name: "Docker & Conteinerização", level: "advanced", highlight: true },
      { name: "Vercel Edge Network", level: "expert" },
      { name: "Linux Server Administration", level: "advanced" },
      { name: "Infraestrutura como Código (IaC)", level: "proficient" },
    ],
  },
  {
    id: "security",
    nameKey: "Segurança & DevSecOps",
    skills: [
      { name: "Security by Design (OWASP Top 10)", level: "expert", highlight: true },
      { name: "Content-Security-Policy & HSTS", level: "expert" },
      { name: "Modelagem de Ameaças (STRIDE)", level: "advanced" },
      { name: "Secret Scanning & Dependency Audits", level: "advanced" },
      { name: "Criptografia de Transporte (TLS/SSL)", level: "advanced" },
    ],
  },
  {
    id: "ai",
    nameKey: "Inteligência Artificial & Dados",
    skills: [
      { name: "Engenharia de Prompt & Guardrails Pedagógicos", level: "expert", highlight: true },
      { name: "RAG (Retrieval-Augmented Generation)", level: "advanced" },
      { name: "Integração de LLMs em Produtos de Software", level: "advanced" },
      { name: "Avaliação de Modelos de Linguagem", level: "advanced" },
    ],
  },
  {
    id: "testing",
    nameKey: "Qualidade de Software & Testes",
    skills: [
      { name: "Vitest / Jest", level: "expert", highlight: true },
      { name: "Testing Library", level: "expert" },
      { name: "Playwright (E2E Testing)", level: "advanced", highlight: true },
      { name: "Test-Driven Development (TDD)", level: "advanced" },
    ],
  },
  {
    id: "networking",
    nameKey: "Redes & Protocolos",
    skills: [
      { name: "Arquitetura TCP/IP & Protocolos Web", level: "expert" },
      { name: "Análise de Tráfego & Wireshark", level: "advanced" },
      { name: "Roteamento e Resolução DNS", level: "advanced" },
    ],
  },
];
