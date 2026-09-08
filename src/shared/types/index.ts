export type Locale = "pt" | "en";

export interface NavItem {
  key: string;
  href: string;
  external?: boolean;
}

export interface MetricItem {
  id: string;
  value: string;
  labelKey: string;
  descriptionKey?: string;
  isPlaceholder?: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  headline: string;
  category: "systems" | "ai" | "education" | "infrastructure" | "oss";
  status: "production" | "research" | "in-development";
  summary: string;
  metrics?: { label: string; value: string }[];
  problem: string;
  context: string;
  constraints: string[];
  architecture: {
    pattern: string;
    diagramDescription: string;
    components: string[];
  };
  technicalDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  implementationDetails: string[];
  security: string[];
  testing: string[];
  cicd: string[];
  results: string[];
  lessonsLearned: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "academic" | "consulting";
  responsibilities: string[];
  contributions: string[];
  technologies: string[];
  current?: boolean;
}

export interface TeachingCourse {
  id: string;
  code: string;
  name: string;
  degreePrograms: string[];
  description: string;
  topics: string[];
  methodologies: string[];
  tools: string[];
}

export interface ResearchLine {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  projects: string[];
  applicationArea: "education" | "software-engineering" | "distributed-systems";
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  type: "journal" | "conference" | "workshop" | "book-chapter";
  area: "ai" | "education" | "software-engineering";
  doi?: string;
  pdfUrl?: string;
  bibtex: string;
  abstract?: string;
}

export interface TechCategory {
  id: string;
  nameKey: string;
  skills: {
    name: string;
    level: "expert" | "advanced" | "proficient";
    highlight?: boolean;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  category: string;
  content: string;
}
