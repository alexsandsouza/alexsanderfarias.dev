"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/shared/types";
import { navigationItems } from "@/shared/config/navigation";
import { getDictionary } from "@/shared/config/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { Container } from "@/shared/ui/container";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(locale);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur-md transition-colors">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Marca */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-slate-100 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
          >
            <Terminal className="h-4 w-4 text-accent" />
            <span>
              alexsanderfarias<span className="text-accent">.dev</span>
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav
            aria-label="Navegação Principal"
            className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-300"
          >
            {navigationItems.map((item) => {
              const fullHref = item.href === "/" ? `/${locale}` : `/${locale}${item.href}`;
              const isActive =
                item.href === "/"
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname?.startsWith(fullHref);

              const label = dict.nav[item.key as keyof typeof dict.nav] || item.key;

              return (
                <Link
                  key={item.key}
                  href={fullHref}
                  className={cn(
                    "px-2.5 py-1.5 rounded-md transition-all text-xs font-medium tracking-wide",
                    isActive
                      ? "text-accent bg-accent/10 border border-accent/20 font-semibold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-surface-elevated"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Ações à Direita: Switcher de Idioma & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />

            {/* Botão Hambúrguer Mobile */}
            <button
              type="button"
              className="xl:hidden p-2 rounded-md text-slate-400 hover:text-slate-100 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-border-subtle bg-surface px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <nav aria-label="Navegação Mobile" className="grid grid-cols-2 gap-2">
            {navigationItems.map((item) => {
              const fullHref = item.href === "/" ? `/${locale}` : `/${locale}${item.href}`;
              const isActive =
                item.href === "/"
                  ? pathname === `/${locale}`
                  : pathname?.startsWith(fullHref);

              const label = dict.nav[item.key as keyof typeof dict.nav] || item.key;

              return (
                <Link
                  key={item.key}
                  href={fullHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors",
                    isActive
                      ? "bg-accent/15 text-accent border border-accent/30 font-semibold"
                      : "text-slate-300 hover:bg-surface-elevated hover:text-white"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
