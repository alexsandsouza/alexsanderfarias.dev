import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { getDictionary } from "@/shared/config/i18n";
import { projectsData } from "@/modules/projects/data/projects";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";

export function SelectedWork({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 border-b border-border-subtle bg-canvas">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <Badge variant="accent">{dict.selectedWork.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-display">
              {dict.selectedWork.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              {dict.selectedWork.subtitle}
            </p>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-sky-300 transition-colors"
          >
            <span>{dict.selectedWork.viewAll}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-xl bg-surface border border-border-subtle hover:border-border-muted p-6 flex flex-col justify-between transition-all duration-200 group hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {project.status}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-100 font-display group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {project.headline}
                  </p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Métricas do Projeto */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-border-subtle/60 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-sm font-bold font-mono text-slate-200">
                          {m.value}
                        </span>
                        <p className="text-[10px] text-slate-400 leading-tight">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags Tecnológicas */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-slate-300 bg-surface-elevated border border-border-subtle px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-border-subtle/50 flex items-center justify-between">
                <Link
                  href={`/${locale}/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-accent group-hover:translate-x-1 transition-transform"
                >
                  <span>{dict.selectedWork.viewCaseStudy}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-2 text-slate-400">
                  <Layers className="h-4 w-4" aria-label="Arquitetura Documentada" />
                  <ShieldCheck className="h-4 w-4" aria-label="Security by Design" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
