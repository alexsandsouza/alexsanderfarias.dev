import React from "react";
import { Locale } from "@/shared/types";
import { getTeachingPortfolio } from "../services/teaching.service";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import {
  GraduationCap,
  BookOpen,
  Wrench,
  CheckCircle2,
  Users,
  Terminal,
} from "lucide-react";

export function TeachingView({ locale }: { locale: Locale }) {
  const courses = getTeachingPortfolio();
  const isPt = locale === "pt";

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho */}
        <div className="space-y-4 max-w-3xl mb-16">
          <Badge variant="accent">
            {isPt ? "Docência & Ensino Superior" : "Higher Education & Teaching"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-fg font-display">
            {isPt ? "Formação de Novos Engenheiros" : "Educating the Next Generation of Engineers"}
          </h1>
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed">
            {isPt
              ? "Atuação acadêmica dedicada a aproximar a teoria computacional do rigor da prática industrial. Cursos ministrados com metodologias ativas, simulação de ambientes corporativos reais e forte base matemática e arquitetural."
              : "Dedicated academic leadership bridging computer science fundamentals with industrial engineering rigor. Curriculum delivery grounded in active learning, simulated enterprise workflows, and robust architectural foundations."}
          </p>

          {/* Cursos de Graduação Atendidos */}
          <div className="pt-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fg-secondary mb-2">
              {isPt ? "Programas Acadêmicos de Graduação:" : "Undergraduate Degree Programs:"}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Ciência da Computação",
                "Engenharia de Software",
                "Engenharia de Computação",
                "Sistemas de Informação",
                "Análise e Desenvolvimento de Sistemas (ADS)",
              ].map((prog) => (
                <span
                  key={prog}
                  className="text-xs font-mono text-fg-secondary bg-surface border border-border-subtle px-3 py-1 rounded-md"
                >
                  {prog}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Disciplinas & Ementas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl bg-surface border border-border-subtle hover:border-border-muted p-6 flex flex-col justify-between transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {course.code}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-fg-secondary">
                    <GraduationCap className="h-4 w-4 text-accent" />
                    <span>Graduação</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-fg font-display">
                    {course.name}
                  </h2>
                  <p className="text-xs font-mono text-fg-secondary">
                    {course.degreePrograms.join(" · ")}
                  </p>
                </div>

                <p className="text-sm text-fg-secondary leading-relaxed">
                  {course.description}
                </p>

                {/* Tópicos Abordados */}
                <div className="space-y-2 pt-2 border-t border-border-subtle/60">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fg-secondary">
                    {isPt ? "Ementa & Tópicos Práticos" : "Syllabus & Core Topics"}
                  </p>
                  <ul className="space-y-1.5 text-xs text-fg-secondary">
                    {course.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">▹</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metodologias */}
                <div className="space-y-1.5 pt-2 border-t border-border-subtle/60">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fg-secondary">
                    {isPt ? "Metodologia Pedagógica" : "Pedagogical Methodology"}
                  </p>
                  <ul className="space-y-1 text-xs text-fg-secondary">
                    {course.methodologies.map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ferramentas e Tecnologias em Sala */}
              <div className="pt-4 border-t border-border-subtle/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-fg-secondary">
                  <Wrench className="h-3.5 w-3.5 text-accent" />
                  <span>Stack:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono text-fg-secondary bg-surface-elevated border border-border-subtle px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção Complementar: Filosofia Pedagógica e Mentoria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border-subtle">
          <div className="rounded-xl bg-surface border border-border-subtle p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-accent/20 flex items-center justify-center text-accent">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-fg font-display">
              {isPt ? "Orientação & Mentoria" : "Mentorship & Guidance"}
            </h3>
            <p className="text-xs text-fg-secondary leading-relaxed">
              Orientação personalizada em Trabalhos de Conclusão de Curso (TCC) e Iniciação Científica, direcionando estudantes a problemas de alta relevância técnica.
            </p>
          </div>

          <div className="rounded-xl bg-surface border border-border-subtle p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-accent/20 flex items-center justify-center text-accent">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-fg font-display">
              {isPt ? "Cultura de Code Review" : "Code Review Culture"}
            </h3>
            <p className="text-xs text-fg-secondary leading-relaxed">
              Prática sistemática de revisão por pares nos laboratórios, estimulando leitura crítica de código, arquitetura limpa e empatia técnica entre desenvolvedores.
            </p>
          </div>

          <div className="rounded-xl bg-surface border border-border-subtle p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-accent/20 flex items-center justify-center text-accent">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-fg font-display">
              {isPt ? "Materiais Abertos" : "Open Learning Materials"}
            </h3>
            <p className="text-xs text-fg-secondary leading-relaxed">
              Disponibilização de repositórios modelo com boas práticas de testes automatizados, Dockerfiles otimizados e workflows de GitHub Actions acessíveis a alunos.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
