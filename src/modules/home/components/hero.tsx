import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { Container } from "@/shared/ui/container";
import { ArrowRight, Download, Code2, GraduationCap, Cpu } from "lucide-react";

export function Hero({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border-subtle bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,229,255,0.08),rgba(6,8,13,0))]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Lado Esquerdo: Tipografia Direta estilo HustleTech */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
                {isPt ? "DESENVOLVEDOR FULL STACK & PROFESSOR" : "FULL STACK DEV & PROFESSOR"}
              </span>
            </div>

            {/* Headline Contundente com Destaque Vermelho */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-slate-100 leading-[1.05]">
                {isPt ? "Construindo software e formando pessoas." : "Building software and empowering people."}
              </h1>
            </div>

            {/* Parágrafo de Apresentação com Tarja Vermelha */}
            <div className="relative pl-5 border-l-4 border-brand py-1 text-slate-300 text-base sm:text-lg leading-relaxed space-y-3">
              <p>
                {isPt
                  ? "Desenvolvedor Full Stack e Professor Universitário. Atuo com arquiteturas modernas em TypeScript, Next.js, Node e Cloud, combinando experiência prática na entrega de produtos escaláveis com liderança de sala de aula no ensino superior."
                  : "Full Stack Developer and University Professor. Specializing in modern architectures with TypeScript, Next.js, Node, and Cloud infrastructure, blending production engineering experience with academic excellence."}
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                {isPt
                  ? "Especialista no desenvolvimento de projetos de Empreendedorismo Digital — transformando ideias e modelos de negócios em soluções tecnológicas robustas que geram valor real."
                  : "Specialist in Digital Entrepreneurship projects — transforming business models and ideas into robust technology solutions that drive actual value."}
              </p>
            </div>

            {/* CTAs Primários no Estilo HustleTech: Baixar Currículo (Vermelho) & Falar Comigo (Outline) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-brand hover:bg-brand-hover text-white font-mono font-bold text-xs uppercase tracking-widest shadow-md transition-all active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                <span>{isPt ? "BAIXAR MEU CURRÍCULO" : "DOWNLOAD RESUME"}</span>
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-transparent hover:bg-surface-elevated text-slate-200 border border-slate-700 hover:border-slate-500 font-mono font-bold text-xs uppercase tracking-widest transition-all"
              >
                <span>{isPt ? "FALAR COMIGO" : "GET IN TOUCH"}</span>
                <ArrowRight className="h-4 w-4 text-brand" />
              </Link>
            </div>

            {/* Tríade de Pilares Técnicos */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-subtle max-w-lg text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-brand" />
                <span className="text-slate-200">Dev Full Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-brand" />
                <span className="text-slate-200">Professor Universitário</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-brand" />
                <span className="text-slate-200">Empreendedorismo</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Fotografia Profissional estilo HustleTech */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-xl border border-border-muted bg-surface/90 p-2 shadow-2xl group">
              {/* Marcador superior vermelho no estilo HustleTech */}
              <div className="absolute -top-1 -right-1 w-12 h-1 bg-brand rounded-full" />
              <div className="absolute -bottom-1 -left-1 w-12 h-1 bg-brand rounded-full" />

              <div className="h-full w-full rounded-lg bg-canvas border border-border-subtle flex flex-col items-center justify-between p-6 text-center relative overflow-hidden bg-gradient-to-b from-surface/80 via-canvas to-canvas">
                {/* Malha de fundo técnica */}
                <div className="absolute inset-0 bg-[radial-gradient(#d90429_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10" />

                <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-400 border-b border-border-subtle pb-2 relative z-10">
                  <span className="text-brand font-bold uppercase tracking-wider">DEV_ID // 001</span>
                  <span>MANAUS / BRASIL</span>
                </div>

                <div className="relative z-10 space-y-4 my-auto">
                  <div className="mx-auto h-24 w-24 rounded-full bg-surface-elevated border-2 border-brand/40 flex items-center justify-center shadow-[0_0_25px_rgba(217,4,41,0.25)]">
                    <Code2 className="h-10 w-10 text-brand" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-lg font-bold text-slate-100 font-display">
                      Alexsander Farias
                    </p>
                    <p className="text-xs font-mono text-slate-300">
                      Dev Full Stack & Professor Universitário
                    </p>
                  </div>

                  <div className="pt-1 text-[11px] font-mono text-slate-400 bg-surface/90 border border-border-subtle rounded px-3 py-1.5">
                    &lt;TODO: Alexsander fornecer foto de perfil&gt;
                  </div>
                </div>

                <div className="w-full pt-2 border-t border-border-subtle text-[11px] font-mono text-slate-400 flex items-center justify-between relative z-10">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Disponível para Projetos</span>
                  </span>
                  <span className="text-slate-400">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
