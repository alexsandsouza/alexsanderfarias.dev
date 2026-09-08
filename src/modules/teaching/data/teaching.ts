import { TeachingCourse } from "@/shared/types";

export const teachingCourses: TeachingCourse[] = [
  {
    id: "eng-software",
    code: "ES-401",
    name: "Engenharia de Software & Arquitetura de Sistemas",
    degreePrograms: [
      "Ciência da Computação",
      "Engenharia de Software",
      "Sistemas de Informação",
    ],
    description:
      "Abordagem prática e teórica cobrindo o ciclo de vida completo de desenvolvimento: do design arquitetural, modularidade, padrões de projeto (GoF, Clean Arch, DDD) à entrega contínua com testes automatizados e segurança.",
    topics: [
      "Princípios SOLID e Padrões Arquiteturais (Modular Monolith, Event-Driven, Microservices)",
      "Spec-Driven Development (SDD) e Documentação Técnica (ADRs, C4 Model)",
      "Testes de Software: Unidade, Integração e E2E",
      "DevOps, Automação de CI/CD e Qualidade de Código",
      "Segurança de Aplicações Web (OWASP Top 10)",
    ],
    methodologies: [
      "Project-Based Learning (PBL) com simulação de cenários reais de engenharia",
      "Code Reviews em duplas simulando ambiente corporativo",
      "Hackathons pedagógicos de entrega contínua",
    ],
    tools: ["Git/GitHub", "TypeScript", "Docker", "Vitest", "Playwright", "GitHub Actions"],
  },
  {
    id: "web-dev",
    code: "WEB-302",
    name: "Desenvolvimento Web Full Stack & Sistemas Distribuídos",
    degreePrograms: [
      "Ciência da Computação",
      "Análise e Desenvolvimento de Sistemas (ADS)",
      "Sistemas de Informação",
    ],
    description:
      "Formação de base sólida no ecossistema web moderno: protocolos fundamentais da Internet, APIs RESTful/GraphQL, React/Next.js, persistência relacional e não-relacional, e deploy em nuvem.",
    topics: [
      "Protocolos HTTP/HTTPS, WebSockets e Modelo Cliente-Servidor",
      "Frontend Moderno com React, Next.js e TypeScript",
      "Backend Escalável, Serverless e Server Actions",
      "Modelagem e Otimização de Bancos de Dados Relacionais",
      "Acessibilidade Web (WCAG 2.2 AA) e Core Web Vitals",
    ],
    methodologies: [
      "Laboratórios práticos com implementação incremental",
      "Análise de casos de estudo reais da indústria",
    ],
    tools: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel"],
  },
  {
    id: "redes-infra",
    code: "RED-201",
    name: "Redes de Computadores, Infraestrutura & Segurança",
    degreePrograms: [
      "Ciência da Computação",
      "Engenharia de Computação",
      "Sistemas de Informação",
    ],
    description:
      "Estudo aprofundado dos protocolos das camadas do modelo OSI e TCP/IP, roteamento, segurança de perímetro, criptografia e infraestrutura em nuvem.",
    topics: [
      "Arquitetura TCP/IP, DNS, TLS/SSL e Segurança de Transporte",
      "Roteamento, Sub-redes e Protocolos de Roteamento",
      "Firewalls, VPNs e Mitigação de Ataques de Negação de Serviço (DoS)",
      "Infraestrutura como Código (IaC) e Conteinerização",
    ],
    methodologies: [
      "Simulação de topologias de rede em ambientes virtualizados",
      "Captura e análise de tráfego com Wireshark",
    ],
    tools: ["Wireshark", "Packet Tracer", "Linux", "Docker", "OpenSSL"],
  },
  {
    id: "ia-educacao",
    code: "IA-501",
    name: "Inteligência Artificial Aplicada & Tópicos Avançados",
    degreePrograms: [
      "Ciência da Computação",
      "Engenharia de Software",
    ],
    description:
      "Investigação dos fundamentos de aprendizado de máquina, modelos de linguagem em larga escala (LLMs), sistemas de recomendação e aplicações éticas da IA na educação e desenvolvimento.",
    topics: [
      "Fundamentos de Aprendizado de Máquina Supervisionado e Não Supervisionado",
      "Arquitetura Transformer e Modelos de Linguagem Generativos (LLMs)",
      "Técnicas de RAG (Retrieval-Augmented Generation) e Engenharia de Prompt",
      "IA Ética, Mitigação de Viés e Impactos Sociotécnicos na Educação",
    ],
    methodologies: [
      "Desenvolvimento de projetos de pesquisa aplicada e protótipos experimentais",
      "Seminários de leitura crítica de artigos científicos internacionais",
    ],
    tools: ["Python", "PyTorch/Hugging Face", "LangChain/LlamaIndex", "OpenAI/Anthropic APIs"],
  },
];
