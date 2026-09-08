import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { siteConfig } from "@/shared/config/site";
import { getResearchOverview } from "../services/research.service";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import {
  Sparkles,
  Cpu,
  Binary,
  Layers,
  ShieldCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export function ResearchView({ locale }: { locale: Locale }) {
  const lines = getResearchOverview();
  const isPt = locale === "pt";

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho */}
        <div className="space-y-4 max-w-3xl mb-16">
          <Badge variant="accent">
            {isPt ? "Pesquisa Científica & Inovação" : "Scientific Research & Innovation"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-fg font-display">
            {isPt
              ? "Inteligência Artificial & Engenharia de Software"
              : "Artificial Intelligence & Software Engineering"}
          </h1>
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed">
            {isPt
              ? "Investigações empíricas dedicadas a compreender o impacto de modelos generativos na formação de programadores, na síntese assistida de código e na confiabilidade de sistemas distribuídos."
              : "Empirical investigations examining the impact of generative models on computer science education, automated code synthesis, and the resilience of distributed software."}
          </p>

          {/* Badges de Identificadores Acadêmicos */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={siteConfig.links.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle hover:border-accent/40 text-xs font-mono text-fg-secondary transition-colors"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
              <span>ORCID: 0000-000X-XXXX-XXXX &lt;TODO&gt;</span>
            </a>

            <a
              href={siteConfig.links.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle hover:border-accent/40 text-xs font-mono text-fg-secondary transition-colors"
            >
              <BookOpen className="h-4 w-4 text-accent" />
              <span>Currículo Lattes CNPq</span>
            </a>
          </div>
        </div>

        {/* Linhas de Pesquisa */}
        <div className="space-y-8 mb-16">
          {lines.map((line, idx) => (
            <div
              key={line.id}
              className="rounded-xl bg-surface border border-border-subtle hover:border-border-muted p-8 transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-accent/20 flex items-center justify-center text-accent">
                    {idx === 0 ? (
                      <Sparkles className="h-5 w-5" />
                    ) : idx === 1 ? (
                      <Cpu className="h-5 w-5" />
                    ) : (
                      <Binary className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider">
                      {isPt ? "Linha de Pesquisa 0" + (idx + 1) : "Research Line 0" + (idx + 1)}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-fg font-display">
                      {line.title}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {line.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[11px] font-mono text-fg-secondary bg-surface-elevated border border-border-subtle px-2 py-0.5 rounded"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base text-fg-secondary leading-relaxed">
                {line.description}
              </p>

              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-fg-secondary">
                  {isPt ? "Projetos & Experimentos Vinculados" : "Associated Projects & Experiments"}
                </h3>
                <ul className="space-y-2 text-sm text-fg-secondary">
                  {line.projects.map((proj, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">▹</span>
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Card Informativo de Mestrado / Pós-Graduação */}
        <div className="rounded-xl bg-surface border border-border-subtle p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-fg font-display flex items-center gap-2">
              <Layers className="h-5 w-5 text-accent" />
              <span>{isPt ? "Pós-Graduação & Mestrado" : "Graduate Studies & Master's Degree"}</span>
            </h3>
            <p className="text-sm text-fg-secondary max-w-2xl">
              &lt;TODO: Alexsander informar instituição do programa de pós-graduação, título oficial da dissertação de mestrado e orientador(a)&gt;
            </p>
          </div>

          <Link
            href={`/${locale}/publications`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-canvas font-semibold text-xs font-mono shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:bg-accent-hover transition-all whitespace-nowrap"
          >
            <span>{isPt ? "Ver Artigos & Publicações" : "View Papers & Publications"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
