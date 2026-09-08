import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { getDictionary } from "@/shared/config/i18n";
import { Container } from "@/shared/ui/container";
import { ArrowRight, Terminal, Shield, Network, GraduationCap } from "lucide-react";

export function Manifesto({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-20 border-b border-border-subtle bg-surface/30">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
              {dict.homeManifesto.badge}
            </span>
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-10 bg-brand rounded-full shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-fg font-display leading-tight">
                {dict.homeManifesto.title}
              </h2>
            </div>
            <p className="text-base text-fg-secondary leading-relaxed pl-6">
              {dict.homeManifesto.p1}
            </p>
            <p className="text-base text-fg-secondary leading-relaxed pl-6">
              {dict.homeManifesto.p2}
            </p>

            <div className="pt-2 pl-6">
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover transition-colors font-mono"
              >
                <span>Conhecer biografia e trajetória completa</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-surface border border-border-subtle p-5 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-accent/20 flex items-center justify-center text-accent">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-fg font-display">
                Engenharia Sólida
              </h3>
              <p className="text-xs text-fg-secondary leading-relaxed">
                Contratos tipados, modularidade estrita, desacoplamento e foco em manutenibilidade a longo prazo.
              </p>
            </div>

            <div className="rounded-xl bg-surface border border-border-subtle p-5 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-accent/20 flex items-center justify-center text-accent">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-fg font-display">
                Security by Design
              </h3>
              <p className="text-xs text-fg-secondary leading-relaxed">
                Proteção contra OWASP Top 10, sanitização contínua e cabeçalhos defensivos de borda.
              </p>
            </div>

            <div className="rounded-xl bg-surface border border-border-subtle p-5 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-accent/20 flex items-center justify-center text-accent">
                <Network className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-fg font-display">
                Sistemas Distribuídos
              </h3>
              <p className="text-xs text-fg-secondary leading-relaxed">
                Operação sob alta concorrência com processamento assíncrono e resiliência a falhas de I/O.
              </p>
            </div>

            <div className="rounded-xl bg-surface border border-border-subtle p-5 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-accent/20 flex items-center justify-center text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-fg font-display">
                Formação Acadêmica
              </h3>
              <p className="text-xs text-fg-secondary leading-relaxed">
                Rigor metodológico na formação de novos engenheiros e pesquisa ativa de IA na educação.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
