import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { getAllProjects } from "../services/projects.service";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { ArrowRight, Layers, ExternalLink, Github } from "lucide-react";

export function ProjectsCatalog({ locale }: { locale: Locale }) {
  const projects = getAllProjects();
  const isPt = locale === "pt";

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho */}
        <div className="space-y-4 max-w-3xl mb-16">
          <Badge variant="accent">
            {isPt ? "Portfólio de Engenharia" : "Engineering Portfolio"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-fg font-display">
            {isPt ? "Projetos & Case Studies" : "Projects & Case Studies"}
          </h1>
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed">
            {isPt
              ? "Cada estudo de caso disseca um sistema sob a ótica da Engenharia de Software: problemas reais, restrições operacionais, diagramas de arquitetura, decisões técnicas fundamentadas, segurança, testes e lições aprendidas."
              : "Each case study dissects a real system through the lens of Software Engineering: concrete problems, operational constraints, architectural diagrams, justified technical trade-offs, security, testing, and retrospectives."}
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-xl bg-surface border border-border-subtle hover:border-border-muted p-6 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {project.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-fg font-display group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono text-fg-secondary">
                    {project.headline}
                  </p>
                </div>

                <p className="text-sm text-fg-secondary leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Métricas Resumidas */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-border-subtle/60 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-sm font-bold font-mono text-fg">
                          {m.value}
                        </span>
                        <p className="text-[10px] text-fg-secondary leading-tight">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags Tecnológicas */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-fg-secondary bg-surface-elevated border border-border-subtle px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border-subtle/50 flex items-center justify-between">
                <Link
                  href={`/${locale}/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-accent hover:text-sky-300 transition-colors"
                >
                  <Layers className="h-4 w-4" />
                  <span>{isPt ? "Ver Case Study (11 Seções)" : "Read Case Study (11 Sections)"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-3 text-fg-secondary">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-fg transition-colors"
                      title="Repositório GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-fg transition-colors"
                      title="Demonstração Online"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
