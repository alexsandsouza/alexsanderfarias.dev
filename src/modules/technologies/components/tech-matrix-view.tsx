import React from "react";
import { Locale } from "@/shared/types";
import { getTechStack } from "../services/technologies.service";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { Code2 } from "lucide-react";

export function TechMatrixView({ locale }: { locale: Locale }) {
  const categories = getTechStack();
  const isPt = locale === "pt";

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho */}
        <div className="space-y-4 max-w-3xl mb-16">
          <Badge variant="accent">
            {isPt ? "Matriz Tecnológica Contextualizada" : "Contextualized Tech Matrix"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-fg font-display">
            {isPt ? "Competências & Stack de Engenharia" : "Engineering Skills & Stack"}
          </h1>
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed">
            {isPt
              ? "Rejeitamos 'paredes de ícones' descontextualizadas. Cada competência listada abaixo reflete anos de prática deliberada em produção corporativa, docência de ensino superior ou pesquisa acadêmica formal."
              : "We reject uncontextualized icon walls. Every skill cataloged below represents deliberate production experience, university lecture hall leadership, or empirical research."}
          </p>

          <div className="flex items-center gap-4 text-xs font-mono pt-2">
            <div className="flex items-center gap-1.5 text-fg-secondary">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>{isPt ? "Destaque / Core Mastery" : "Core Mastery Highlight"}</span>
            </div>
            <div className="flex items-center gap-1.5 text-fg-secondary">
              <span className="h-2 w-2 rounded-full bg-border-muted" />
              <span>{isPt ? "Avançado / Proficiente" : "Advanced / Proficient"}</span>
            </div>
          </div>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl bg-surface border border-border-subtle hover:border-border-muted p-6 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3">
                  <h2 className="text-base font-bold text-fg font-display">
                    {cat.nameKey}
                  </h2>
                  <Code2 className="h-4 w-4 text-accent" />
                </div>

                <ul className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className={`flex items-center justify-between p-2 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? "bg-accent/10 text-fg border border-accent/25"
                          : "bg-surface-elevated text-fg-secondary border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        )}
                        <span className={skill.highlight ? "font-semibold" : ""}>
                          {skill.name}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] uppercase tracking-wider ${
                          skill.level === "expert"
                            ? "text-accent font-bold"
                            : "text-fg-secondary"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
