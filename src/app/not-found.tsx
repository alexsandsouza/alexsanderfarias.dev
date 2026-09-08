import React from "react";
import Link from "next/link";
import { Container } from "@/shared/ui/container";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-surface border border-border-subtle text-accent shadow-[0_0_20px_rgba(0,229,255,0.15)]">
            <Terminal className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              Error 404 · Resource Not Found
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display">
              Página Não Encontrada
            </h1>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              O recurso solicitado não existe ou foi realocado. Verifique a URL ou retorne à página inicial.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/pt"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-canvas font-semibold text-xs font-mono shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:bg-accent-hover transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retornar ao Início</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
