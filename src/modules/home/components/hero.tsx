import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { getDictionary } from "@/shared/config/i18n";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { ArrowRight, Download, Mail, Code2, GraduationCap, Cpu } from "lucide-react";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border-subtle bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,229,255,0.08),rgba(6,8,13,0))]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Lado Esquerdo: Tipografia Editorial & Posicionamento */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="accent">
                {dict.hero.badge}
              </Badge>
            </div>

            {/* Headline de Grande Impacto Editorial */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-100 uppercase leading-[1.08]">
                <span className="block text-slate-100">{dict.hero.titleLine1}</span>
                <span className="block text-slate-300">{dict.hero.titleLine2}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-sky-400">
                  {dict.hero.titleLine3}
                </span>
              </h1>
            </div>

            {/* Identificação de Nome & Papéis */}
            <div className="pt-2 border-l-2 border-accent/40 pl-4">
              <p className="text-xl font-semibold text-slate-200 font-display">
                Alexsander Farias
              </p>
              <p className="text-sm font-mono text-slate-400">
                Dev Full Stack · Professor Universitário · Empreendedorismo Digital
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {dict.hero.subtitle}
            </p>

            {/* CTAs Primários e Secundários */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-canvas font-semibold text-sm shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all active:scale-[0.98]"
              >
                <span>{dict.hero.ctaProjects}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-elevated text-slate-200 hover:text-white border border-border-subtle hover:border-border-muted font-medium text-sm transition-all"
              >
                <Download className="h-4 w-4 text-slate-400" />
                <span>{dict.hero.ctaCv}</span>
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-surface font-medium text-sm transition-all"
              >
                <Mail className="h-4 w-4 text-accent" />
                <span>{dict.hero.ctaContact}</span>
              </Link>
            </div>

            {/* Tríade de Pilares Técnicos */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-subtle/80 max-w-lg text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-accent" />
                <span>Dev Full Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span>Professor Universitário</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-accent" />
                <span>Empreendedorismo Digital</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Fotografia Profissional com Tratamento Editorial */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl border border-border-muted bg-surface/80 p-3 shadow-2xl backdrop-blur-sm group">
              {/* Moldura técnica com marcadores de canto */}
              <div className="absolute top-2 left-2 h-2 w-2 border-t border-l border-accent/60" />
              <div className="absolute top-2 right-2 h-2 w-2 border-t border-r border-accent/60" />
              <div className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-accent/60" />
              <div className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-accent/60" />

              <div className="h-full w-full rounded-xl bg-canvas border border-border-subtle flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                {/* Malha de fundo sutil */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="relative z-10 space-y-4">
                  <div className="mx-auto h-24 w-24 rounded-full bg-surface-elevated border border-accent/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                    <Code2 className="h-10 w-10 text-accent" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-mono tracking-widest text-accent uppercase">
                      Fotografia Oficial
                    </p>
                    <p className="text-base font-semibold text-slate-200 font-display">
                      Alexsander Farias
                    </p>
                    <p className="text-xs font-mono text-slate-400">
                      [Espaço reservado para foto profissional]
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-slate-400 bg-surface/90 border border-border-subtle rounded-md px-3 py-1.5">
                    &lt;TODO: Alexsander fornecer foto de alta resolução&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
