"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function BibTeXButton({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-xs font-mono text-fg-secondary hover:text-fg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      aria-label="Copiar citação em formato BibTeX"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copiado!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 text-accent" />
          <span>BibTeX</span>
        </>
      )}
    </button>
  );
}
