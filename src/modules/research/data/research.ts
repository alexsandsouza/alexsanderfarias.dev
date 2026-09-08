import { ResearchLine } from "@/shared/types";

export const researchLines: ResearchLine[] = [
  {
    id: "ia-educacao",
    title: "Inteligência Artificial Aplicada à Educação em Computação",
    description:
      "Investigação de modelos de linguagem (LLMs), tutores inteligentes e agentes pedagógicos no apoio ao aprendizado de algoritmos, programação e engenharia de software no ensino superior.",
    keywords: [
      "Artificial Intelligence in Education (AIED)",
      "Large Language Models",
      "Pedagogical Feedback",
      "Computing Education Research",
    ],
    projects: [
      "Diagnóstico automatizado de dificuldades de programação via análise de código",
      "Assistentes socráticos para depuração assistida por IA",
    ],
    applicationArea: "education",
  },
  {
    id: "ia-eng-software",
    title: "IA e Automação no Ciclo de Vida da Engenharia de Software",
    description:
      "Estudo empírico do impacto de assistentes de codificação com IA na produtividade de desenvolvedores, qualidade arquitetural, geração de testes automatizados e segurança de código.",
    keywords: [
      "AI for Software Engineering (AI4SE)",
      "Automated Test Generation",
      "Code Synthesis",
      "Software Quality",
    ],
    projects: [
      "Avaliação de vulnerabilidades e alucinações em código sintetizado por LLMs",
      "Frameworks de Spec-Driven Development assistidos por agentes autônomos",
    ],
    applicationArea: "software-engineering",
  },
  {
    id: "sistemas-distribuidos-redes",
    title: "Arquiteturas Distribuídas, Redes e Confiabilidade de Sistemas",
    description:
      "Pesquisa sobre padrões de resiliência, latência em redes de borda (Edge Computing) e segurança em ecossistemas web descentralizados.",
    keywords: [
      "Distributed Systems",
      "Edge Computing",
      "Fault Tolerance",
      "Cloud Security",
    ],
    projects: [
      "Otimização de rotas e caching inteligente em redes distribuídas",
      "<TODO: Alexsander informar projetos de pesquisa adicionais>",
    ],
    applicationArea: "distributed-systems",
  },
];
