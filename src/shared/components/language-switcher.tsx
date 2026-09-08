"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/shared/types";
import { cn } from "@/shared/lib/utils";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  // Substitui o segmento de locale atual na URL
  const getRedirectPath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/");
    if (segments.length > 1 && (segments[1] === "pt" || segments[1] === "en")) {
      segments[1] = targetLocale;
      return segments.join("/") || `/${targetLocale}`;
    }
    return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  };

  return (
    <div
      role="group"
      aria-label="Selecionar idioma / Select language"
      className="inline-flex items-center rounded-lg bg-surface border border-border-subtle p-0.5 text-xs font-mono font-medium"
    >
      <Link
        href={getRedirectPath("pt")}
        className={cn(
          "px-2.5 py-1 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
          currentLocale === "pt"
            ? "bg-accent/15 text-accent border border-accent/30 font-semibold"
            : "text-slate-400 hover:text-slate-200"
        )}
        aria-current={currentLocale === "pt" ? "true" : undefined}
      >
        PT
      </Link>
      <Link
        href={getRedirectPath("en")}
        className={cn(
          "px-2.5 py-1 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
          currentLocale === "en"
            ? "bg-accent/15 text-accent border border-accent/30 font-semibold"
            : "text-slate-400 hover:text-slate-200"
        )}
        aria-current={currentLocale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
