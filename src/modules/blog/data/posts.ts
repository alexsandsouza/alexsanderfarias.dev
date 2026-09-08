import { BlogPost } from "@/shared/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "modular-monolith-em-producao",
    title: "Modular Monolith na Prática: Desacoplando Domínios sem a Complexidade de Microsserviços",
    description:
      "Uma análise pragmática de engenharia de software sobre como estruturar aplicações modernas com separação rígida de contexto, contratos explícitos e zero latência de rede.",
    publishedAt: "2025-08-15",
    readTimeMinutes: 8,
    tags: ["Arquitetura", "Modular Monolith", "TypeScript", "Next.js"],
    category: "Architecture",
    content: `## A Falácia dos Microsserviços Prematuros

Nos últimos anos, a indústria de tecnologia testemunhou incontáveis equipes de engenharia adotarem microsserviços precocemente. O resultado frequente foi um monólito distribuído: todo o acoplamento de um código mal desenhado somado às latências de rede, falhas de sincronização, despesas elevadas de nuvem e pesadelo operacional de observabilidade.

### O Que é um Modular Monolith?
O Modular Monolith não é um monólito tradicional amorfo ("Big Ball of Mud"). Trata-se de uma arquitetura em que:
1. **Domínios de negócio são isolados em módulos autônomos:** Cada módulo detém suas entidades, schemas, lógica e componentes.
2. **Fronteiras e contratos públicos são explícitos:** O acesso a um módulo ocorre unicamente por interfaces exportadas em um contrato raiz (\`index.ts\`).
3. **Comunicação in-memory sem serialização de rede:** Chamadas entre módulos ocorrem na velocidade do processador, com garantias de tipagem verificadas pelo compilador TypeScript em tempo de build.

\`\`\`
src/modules/
  ├── projects/
  │    ├── components/
  │    ├── domain/
  │    ├── services/
  │    └── index.ts  <-- Contrato público único
  └── shared/
\`\`\`

### Benefícios Práticos Observados
- **Type-Safety End-to-End:** Refatorar uma interface ou DTO dispara avisos imediatos em todos os módulos consumidores no momento da edição.
- **Pipeline de CI/CD Simplificado:** Um único repositório, um pipeline atômico e deploy único sem problemas de versionamento descoordenado de APIs.
- **Transição Suave se Necessário:** Se no futuro um módulo específico demandar escala independente, ele já possui limites delimitados para ser extraído com risco mínimo.`,
  },
  {
    slug: "seguranca-por-design-owasp-nextjs",
    title: "Segurança por Design em Aplicações Next.js: Além do Perímetro com OWASP Top 10",
    description:
      "Diretrizes técnicas para implementar cabeçalhos restritivos de segurança, proteção contra XSS, validação estrita com Zod e blindagem contra bots em Server Actions.",
    publishedAt: "2025-07-20",
    readTimeMinutes: 10,
    tags: ["Segurança", "OWASP", "DevSecOps", "Next.js"],
    category: "Security",
    content: `## O Princípio da Defesa em Profundidade

Segurança nunca deve ser tratada como um complemento adicionado no final do projeto ("Security as an afterthought"). O paradigma **Security by Design** preconiza que cada camada do sistema deve presumir que as camadas externas foram comprometidas.

### 1. Cabeçalhos HTTP Mandatórios
Configurar cabeçalhos defensivos no servidor é a primeira linha de contenção contra ataques de injeção e clickjacking:

\`\`\`typescript
// next.config.ts
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
];
\`\`\`

### 2. Validação Estrita na Camada de Servidor
Nunca confie na validação de formulários feita no browser. Toda Server Action ou manipulador de rota deve validar os dados com schemas Zod rígidos:

\`\`\`typescript
export const contactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(120).trim(),
  _gotcha: z.string().max(0).optional(), // Honeypot invisível
});
\`\`\`

Se um bot preencher o campo \`_gotcha\`, a requisição é descartada de forma transparente, poupando recursos e cotas de e-mail.`,
  },
  {
    slug: "ia-aplicada-educacao-programacao",
    title: "Inteligência Artificial no Ensino Superior: Do Plágio ao Pensamento Crítico em Computação",
    description:
      "Como transformar assistentes de IA de atalhos superficiais em tutores socráticos reflexivos para acelerar a formação de novos cientistas da computação.",
    publishedAt: "2025-06-10",
    readTimeMinutes: 7,
    tags: ["Educação", "Inteligência Artificial", "Ensino Superior", "Pedagogia"],
    category: "Artificial Intelligence",
    content: `## O Dilema Pedagógico da IA Generativa

Com a ampla disponibilidade de modelos de linguagem (LLMs), os estudantes de computação se deparam com um facilitador tentador: gerar soluções inteiras para exercícios de algoritmos com um único comando. No entanto, copiar uma resposta pronta elimina justamente o processo cognitivo de abstração e depuração que forma a mente de um engenheiro de software.

### A Abordagem Socrática Assistida por IA
Em vez de proibir o uso da tecnologia — o que historicamente nunca funcionou na educação —, nossa pesquisa foca no desenvolvimento de **Guardrails Pedagógicos**:

1. **Interdição de Gabarito:** O sistema de IA é instruído a nunca retornar o código corrigido na íntegra.
2. **Diagnóstico Conceitual:** O modelo analisa o código do aluno através de sua Árvore Sintática Abstrata (AST) e aponta a linha de raciocínio falha (ex: "Observe o que acontece com a variável de controle do laço quando o vetor está vazio").
3. **Estímulo ao Pensamento Reflexivo:** A máquina formula questionamentos que guiam o estudante a descobrir o erro por si mesmo.

Essa transição metodológica preserva o rigor acadêmico enquanto capacita os alunos a utilizarem IA com responsabilidade e profundidade analítica.`,
  },
];
