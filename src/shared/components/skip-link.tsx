import React from "react";

export function SkipLink({ locale = "pt" }: { locale?: string }) {
  const label =
    locale === "en"
      ? "Skip to main content"
      : "Pular para o conteúdo principal";

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-canvas font-medium rounded-md shadow-lg outline-none ring-2 ring-white"
    >
      {label}
    </a>
  );
}
