"use client";

import React, { useState } from "react";
import { Locale } from "@/shared/types";
import { getExperienceHistory } from "../services/experience.service";
import { Container } from "@/shared/ui/container";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

export function ExperienceTimeline({ locale }: { locale: Locale }) {
  const experiences = getExperienceHistory();
  const isPt = locale === "pt";
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho no padrão HustleTech: Marcador vertical vermelho + Título contundente */}
        <div className="space-y-4 max-w-4xl mb-16">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
              {isPt ? "EXPERIÊNCIA" : "EXPERIENCE"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-1.5 h-10 bg-brand rounded-full shrink-0" />
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 font-display">
              {isPt ? "Onde o trabalho aconteceu." : "Where the work took place."}
            </h1>
          </div>

          <p className="text-base text-slate-400 pl-6">
            {isPt
              ? "Posições consolidadas em desenvolvimento Full Stack, docência de ensino superior e consultoria de empreendedorismo digital."
              : "Track record across full-stack engineering, university leadership, and digital entrepreneurship consulting."}
          </p>
        </div>

        {/* Timeline Estruturada */}
        <div className="relative border-l border-border-subtle ml-4 sm:ml-8 space-y-10">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isAcademic = exp.type === "academic";

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                {/* Marcador na Linha do Tempo */}
                <div
                  className={`absolute -left-3 top-1.5 h-6 w-6 rounded-full border flex items-center justify-center transition-colors ${
                    exp.current
                      ? "bg-accent text-canvas border-accent shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                      : "bg-surface-elevated text-slate-400 border-border-subtle group-hover:border-accent/40"
                  }`}
                >
                  {isAcademic ? (
                    <GraduationCap className="h-3 w-3" />
                  ) : (
                    <Briefcase className="h-3 w-3" />
                  )}
                </div>

                {/* Card de Conteúdo Expansível */}
                <div className="rounded-xl bg-surface border border-border-subtle hover:border-border-muted p-6 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-subtle/60">
                    <div>
                      <h2 className="text-xl font-bold text-slate-100 font-display">
                        {exp.role}
                      </h2>
                      <p className="text-sm font-medium text-accent">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-surface-elevated px-2.5 py-1 rounded">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => toggleExpand(exp.id)}
                        className="p-1 rounded-md text-slate-400 hover:text-slate-100 hover:bg-surface-elevated transition-colors"
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? "Recolher detalhes" : "Expandir detalhes"}
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Resumo ou Detalhes Expandidos */}
                  <div className="pt-4 space-y-4">
                    {/* Responsabilidades */}
                    <div className="space-y-2">
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                        {isPt ? "Principais Responsabilidades" : "Key Responsibilities"}
                      </p>
                      <ul className="space-y-1.5 text-sm text-slate-300">
                        {(isExpanded
                          ? exp.responsibilities
                          : exp.responsibilities.slice(0, 2)
                        ).map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-brand mt-0.5 text-sm">▪</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contribuições Expandidas */}
                    {isExpanded && (
                      <div className="space-y-2 pt-2 border-t border-border-subtle/60 animate-in fade-in-50">
                        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                          {isPt ? "Principais Contribuições & Impactos" : "Key Contributions & Impact"}
                        </p>
                        <ul className="space-y-1.5 text-sm text-slate-300">
                          {exp.contributions.map((contrib, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>{contrib}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tecnologias Utilizadas */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-slate-300 bg-surface-elevated border border-border-subtle px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
