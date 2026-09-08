"use client";

import React, { useEffect } from "react";
import { Container } from "@/shared/ui/container";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log seguro do erro sem expor detalhes sensíveis no cliente
    console.error("[APPLICATION ERROR]", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-surface border border-rose-500/30 text-rose-400">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">
              Error 500 · Internal Server Anomaly
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-fg font-display">
              Falha Temporária de Execução
            </h1>
            <p className="text-sm text-fg-secondary max-w-md mx-auto leading-relaxed">
              Ocorreu um erro imprevisto durante o processamento. Nenhuma informação confidencial foi comprometida.
            </p>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-fg font-semibold text-xs font-mono transition-all"
            >
              <RefreshCw className="h-4 w-4 text-accent" />
              <span>Tentar Novamente</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
