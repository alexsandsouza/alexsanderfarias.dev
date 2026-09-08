"use client";

import React, { useState, useMemo } from "react";
import { Locale } from "@/shared/types";
import { getPublications } from "../services/publications.service";
import { BibTeXButton } from "./bibtex-button";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { ExternalLink, FileText, Info } from "lucide-react";

export function PublicationsCatalog({ locale }: { locale: Locale }) {
  const allPubs = getPublications();
  const isPt = locale === "pt";

  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredPubs = useMemo(() => {
    return allPubs.filter((pub) => {
      const matchArea = selectedArea === "all" || pub.area === selectedArea;
      const matchType = selectedType === "all" || pub.type === selectedType;
      return matchArea && matchType;
    });
  }, [allPubs, selectedArea, selectedType]);

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho */}
        <div className="space-y-4 max-w-3xl mb-12">
          <Badge variant="accent">
            {isPt ? "Produção Bibliográfica" : "Scientific Publications"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-fg font-display">
            {isPt ? "Artigos & Publicações Científicas" : "Papers & Peer-Reviewed Publications"}
          </h1>
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed">
            {isPt
              ? "Produção acadêmica formal em inteligência artificial aplicada à educação, arquiteturas de software e sistemas distribuídos, com suporte a exportação direta BibTeX e identificador DOI."
              : "Peer-reviewed academic contributions in educational AI, systems engineering, and distributed computing, complete with one-click BibTeX exports and canonical DOI links."}
          </p>

          <div className="inline-flex items-center gap-2 p-3 rounded-lg bg-surface border border-border-subtle text-xs font-mono text-fg-secondary">
            <Info className="h-4 w-4 text-accent" />
            <span>
              &lt;TODO: Alexsander fornecer dados oficiais das publicações para atualização dos títulos e DOIs&gt;
            </span>
          </div>
        </div>

        {/* Barra de Filtros Reativos */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-surface border border-border-subtle mb-10 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-fg-secondary font-semibold uppercase tracking-wider">
              {isPt ? "Área Temática:" : "Research Area:"}
            </span>
            {[
              { id: "all", label: isPt ? "Todas" : "All" },
              { id: "ai", label: "IA na Educação" },
              { id: "education", label: "Ensino de Computação" },
              { id: "software-engineering", label: "Engenharia de Software" },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedArea(btn.id)}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedArea === btn.id
                    ? "bg-accent/15 text-accent border border-accent/30 font-semibold"
                    : "text-fg-secondary hover:text-fg hover:bg-surface-elevated"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-fg-secondary font-semibold uppercase tracking-wider">
              {isPt ? "Tipo:" : "Type:"}
            </span>
            {[
              { id: "all", label: isPt ? "Todos" : "All" },
              { id: "journal", label: "Periódico / Journal" },
              { id: "conference", label: "Conferência" },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedType(btn.id)}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedType === btn.id
                    ? "bg-accent/15 text-accent border border-accent/30 font-semibold"
                    : "text-fg-secondary hover:text-fg hover:bg-surface-elevated"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Publicações */}
        <div className="space-y-6">
          {filteredPubs.map((pub) => (
            <div
              key={pub.id}
              className="rounded-xl bg-surface border border-border-subtle hover:border-border-muted p-6 sm:p-8 transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {pub.year}
                  </span>
                  <span className="text-xs font-mono uppercase text-fg-secondary">
                    [{pub.type}]
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <BibTeXButton bibtex={pub.bibtex} />
                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-xs font-mono text-fg-secondary hover:text-fg transition-colors"
                      title="Baixar artigo em PDF"
                    >
                      <FileText className="h-3.5 w-3.5 text-accent" />
                      <span>PDF</span>
                    </a>
                  )}
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-xs font-mono text-fg-secondary hover:text-fg transition-colors"
                      title="Registro DOI Oficial"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-accent" />
                      <span>DOI</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-2xl font-bold text-fg font-display">
                  {pub.title}
                </h2>
                <p className="text-sm font-mono text-fg-secondary">
                  {pub.authors.join(", ")}
                </p>
                <p className="text-xs font-mono text-accent">
                  {pub.venue}
                </p>
              </div>

              {pub.abstract && (
                <p className="text-sm text-fg-secondary leading-relaxed pt-2">
                  {pub.abstract}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
