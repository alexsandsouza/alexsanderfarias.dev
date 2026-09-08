"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/shared/types";
import { navigationItems } from "@/shared/config/navigation";
import { getDictionary } from "@/shared/config/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "@/shared/ui/container";
import { Menu, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(locale);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-canvas/90 backdrop-blur-md transition-colors">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Marca estilo hustle_tech */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1 font-mono text-base font-bold tracking-tight text-fg transition-opacity hover:opacity-80 focus-visible:outline-none rounded-sm"
          >
            <span>alexsander</span>
            <span className="text-brand font-black">_</span>
            <span>farias</span>
          </Link>

          {/* Navegação Desktop Limpa (4 menus essenciais) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-fg-secondary font-semibold"
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
                    "py-1 transition-colors hover:text-fg",
                    isActive
                      ? "text-fg border-b-2 border-brand font-bold"
                      : "text-fg-secondary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Controles: Idioma + Ação */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle locale={locale} />
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded bg-brand hover:bg-brand-hover text-white text-xs font-mono font-bold tracking-widest uppercase shadow-sm transition-all active:scale-[0.98]"
            >
              {dict.hero.ctaContact}
            </Link>

            {/* Botão Hambúrguer Mobile */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-fg-secondary hover:text-fg hover:bg-surface-elevated focus-visible:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-panel"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Menu Mobile Dropdown */}
      <div
        id="mobile-navigation-panel"
        hidden={!mobileMenuOpen}
        className="md:hidden border-b border-border-subtle bg-surface px-4 pt-3 pb-6"
      >
        <nav id="mobile-navigation" aria-label="Navegação Mobile" className="grid grid-cols-2 gap-2">
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
                    : "text-fg-secondary hover:bg-surface-elevated hover:text-fg"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <Link
          href={`/${locale}/contact`}
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 flex min-h-11 items-center justify-center rounded-md bg-brand px-4 text-xs font-mono font-bold uppercase tracking-widest text-white"
        >
          {dict.hero.ctaContact}
        </Link>
      </div>
    </header>
  );
}
