import React from "react";
import Link from "next/link";
import { Locale, ProjectCaseStudy } from "@/shared/types";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import {
  ArrowLeft,
  Layers,
  Shield,
  CheckCircle2,
  GitBranch,
  Terminal,
  ExternalLink,
  Github,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

export function CaseStudyView({
  project,
  locale,
}: {
  project: ProjectCaseStudy;
  locale: Locale;
}) {
  const isPt = locale === "pt";

  return (
    <article className="py-16 sm:py-24">
      <Container size="wide">
        {/* Navegação de Retorno */}
        <div className="mb-8">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{isPt ? "Voltar ao Catálogo de Projetos" : "Back to Projects Catalog"}</span>
          </Link>
        </div>

        {/* Cabeçalho do Case Study */}
        <header className="space-y-6 pb-12 border-b border-border-subtle max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">{project.category.toUpperCase()}</Badge>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              STATUS: {project.status.toUpperCase()}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 font-display">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-display">
              {project.headline}
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {project.summary}
          </p>

          {/* Links e Ações Rápidas */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 text-xs font-mono transition-colors"
              >
                <Github className="h-4 w-4 text-accent" />
                <span>Source Code / GitHub</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-canvas font-semibold text-xs font-mono shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:bg-accent-hover transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Painel de Métricas do Projeto */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border-subtle/80">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-surface border border-border-subtle p-4"
                >
                  <p className="text-xs font-mono text-slate-400">{m.label}</p>
                  <p className="text-2xl font-bold font-mono text-accent mt-1">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* As 11 Seções Obrigatórias de Engenharia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Menu Lateral de Navegação Rápida (Sticky Table of Contents) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-4">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                {isPt ? "Seções do Case Study" : "Case Study Sections"}
              </h4>
              <nav className="space-y-1 text-xs font-mono text-slate-400">
                {[
                  "01 Problem",
                  "02 Context",
                  "03 Constraints",
                  "04 Architecture",
                  "05 Technical Decisions",
                  "06 Implementation",
                  "07 Security",
                  "08 Testing",
                  "09 CI/CD",
                  "10 Results",
                  "11 Lessons Learned",
                ].map((item) => {
                  const id = item.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  return (
                    <a
                      key={item}
                      href={`#${id}`}
                      className="block py-1 hover:text-accent transition-colors"
                    >
                      {item}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-6 border-t border-border-subtle/80 space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-slate-300 bg-surface-elevated border border-border-subtle px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Conteúdo Principal das 11 Seções */}
          <main className="lg:col-span-9 space-y-16 text-slate-300 leading-relaxed">
            {/* 01 Problem */}
            <section id="01-problem" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>01</span>
                <span>/</span>
                <span>{isPt ? "O PROBLEMA" : "THE PROBLEM"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Qual desafio precisava ser resolvido?" : "What challenge needed solving?"}
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                {project.problem}
              </p>
            </section>

            {/* 02 Context */}
            <section id="02-context" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>02</span>
                <span>/</span>
                <span>{isPt ? "CONTEXTO OPERACIONAL" : "OPERATIONAL CONTEXT"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Ambiente, Usuários & Stakeholders" : "Environment, Users & Stakeholders"}
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                {project.context}
              </p>
            </section>

            {/* 03 Constraints */}
            <section id="03-constraints" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>03</span>
                <span>/</span>
                <span>{isPt ? "RESTRIÇÕES TÉCNICAS" : "TECHNICAL CONSTRAINTS"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Fronteiras e Limitações de Projeto" : "Boundaries & Project Limits"}
              </h2>
              <ul className="space-y-2.5">
                {project.constraints.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <AlertCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 04 Architecture */}
            <section id="04-architecture" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>04</span>
                <span>/</span>
                <span>{isPt ? "ARQUITETURA DE SISTEMA" : "SYSTEM ARCHITECTURE"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {project.architecture.pattern}
              </h2>

              <div className="rounded-xl bg-surface border border-border-subtle p-6 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                  <span className="text-slate-400">Diagrama de Fluxo / Componentes</span>
                  <Layers className="h-4 w-4 text-accent" />
                </div>
                <div className="p-4 bg-canvas rounded border border-border-muted text-slate-300 overflow-x-auto">
                  <code>{project.architecture.diagramDescription}</code>
                </div>
                <div className="space-y-2 pt-2">
                  <p className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                    Componentes Principais:
                  </p>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                    {project.architecture.components.map((comp, i) => (
                      <li key={i}>{comp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 05 Technical Decisions */}
            <section id="05-technical-decisions" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>05</span>
                <span>/</span>
                <span>{isPt ? "DECISÕES TÉCNICAS (ADRs)" : "TECHNICAL DECISIONS (ADRs)"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Decisões, Racional & Trade-offs" : "Decisions, Rationales & Trade-offs"}
              </h2>

              <div className="space-y-4">
                {project.technicalDecisions.map((td, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-surface border border-border-subtle p-6 space-y-3"
                  >
                    <h3 className="text-lg font-bold text-slate-100 font-display flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-accent" />
                      <span>{td.decision}</span>
                    </h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-slate-300">
                        <strong className="text-slate-100">Por quê:</strong> {td.rationale}
                      </p>
                      <p className="text-slate-400">
                        <strong className="text-slate-200">Trade-off aceito:</strong> {td.tradeoff}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 06 Implementation */}
            <section id="06-implementation" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>06</span>
                <span>/</span>
                <span>{isPt ? "DETALHES DE IMPLEMENTAÇÃO" : "IMPLEMENTATION DETAILS"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Padrões de Código & Estrutura" : "Code Patterns & Structure"}
              </h2>
              <ul className="space-y-2.5">
                {project.implementationDetails.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 07 Security */}
            <section id="07-security" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>07</span>
                <span>/</span>
                <span>{isPt ? "SEGURANÇA & DEFAULTS DEFENSIVOS" : "SECURITY & DEFENSIVE DEFAULTS"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Proteções Ativas (Security by Design)" : "Active Protections (Security by Design)"}
              </h2>
              <ul className="space-y-2.5">
                {project.security.map((sec, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Shield className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 08 Testing */}
            <section id="08-testing" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>08</span>
                <span>/</span>
                <span>{isPt ? "ESTRATÉGIA DE TESTES" : "TESTING STRATEGY"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Pirâmide de Testes & Cobertura" : "Test Pyramid & Coverage"}
              </h2>
              <ul className="space-y-2.5">
                {project.testing.map((test, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 09 CI/CD */}
            <section id="09-ci-cd" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>09</span>
                <span>/</span>
                <span>{isPt ? "AUTOMAÇÃO & CI/CD" : "AUTOMATION & CI/CD"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Pipeline de Integração e Deploy Contínuo" : "Continuous Integration & Deployment Pipeline"}
              </h2>
              <ul className="space-y-2.5">
                {project.cicd.map((ci, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <GitBranch className="h-4 w-4 text-sky-400 mt-1 flex-shrink-0" />
                    <span>{ci}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 10 Results */}
            <section id="10-results" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>10</span>
                <span>/</span>
                <span>{isPt ? "RESULTADOS & IMPACTO" : "RESULTS & IMPACT"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "Métricas e Entregas Consolidadas" : "Consolidated Metrics & Deliverables"}
              </h2>
              <ul className="space-y-2.5">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 11 Lessons Learned */}
            <section id="11-lessons-learned" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold">
                <span>11</span>
                <span>/</span>
                <span>{isPt ? "LIÇÕES APRENDIDAS & RETROSPECTIVA" : "LESSONS LEARNED & RETROSPECTIVE"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
                {isPt ? "O que faríamos diferente?" : "What would we do differently?"}
              </h2>
              <div className="space-y-3">
                {project.lessonsLearned.map((lesson, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-surface border border-border-subtle flex items-start gap-3"
                  >
                    <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">{lesson}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </Container>
    </article>
  );
}
