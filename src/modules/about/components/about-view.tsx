import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { siteConfig } from "@/shared/config/site";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { Download, ArrowRight, BookOpen, ShieldCheck, Github, Linkedin, Mail } from "lucide-react";

export function AboutView({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho de Seção */}
        <div className="space-y-4 max-w-3xl mb-16">
          <Badge variant="accent">
            {isPt ? "Trajetória & Posicionamento" : "Trajectory & Positioning"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100 font-display">
            Alexsander Farias
          </h1>
          <p className="text-xl text-slate-300 font-display leading-relaxed">
            {isPt
              ? "Desenvolvedor Full Stack, Professor Universitário e especialista em Desenvolvimento de Projetos de Empreendedorismo Digital."
              : "Full Stack Developer, University Professor, and specialist in Digital Entrepreneurship and Software Products."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Coluna Principal: Narrativa e Storytelling */}
          <div className="lg:col-span-8 space-y-12 text-slate-300 leading-relaxed text-base sm:text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 font-display border-b border-border-subtle pb-3">
                {isPt ? "1. Filosofia de Engenharia" : "1. Engineering Philosophy"}
              </h2>
              <p>
                {isPt
                  ? "Acredito que o verdadeiro desafio da engenharia de software não reside em escrever código velozmente, mas em desenhar sistemas cuja complexidade permaneça sob controle ao longo de anos. Minha abordagem técnica prioriza o desacoplamento de domínios, a simplicidade arquitetural (KISS), a testabilidade rigorosa e a segurança por design."
                  : "I believe the genuine challenge of software engineering lies not in writing code rapidly, but in designing systems whose complexity remains manageable across years. My technical ethos prioritizes domain isolation, architectural simplicity (KISS), rigorous testing, and proactive security by design."}
              </p>
              <p className="text-slate-400">
                {isPt
                  ? "Em vez de perseguir modismos tecnológicos efêmeros, baseio decisões em princípios fundamentais da computação: contratos explícitos, garantias de tipo estritas, isolamento de falhas e observabilidade contínua."
                  : "Rather than chasing transient trends, I anchor decisions in core computing foundations: explicit contracts, strict type guarantees, fault isolation, and actionable telemetry."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 font-display border-b border-border-subtle pb-3">
                {isPt ? "2. Atuação no Ensino Superior" : "2. Academic & Higher Education Leadership"}
              </h2>
              <p>
                {isPt
                  ? "Como docente em Ciência da Computação, Engenharia de Software e Sistemas de Informação, vejo a sala de aula como um laboratório contínuo de inovação pedagógica. Utilizo metodologias ativas, simulação de code reviews corporativos e projetos reais para preparar estudantes para os desafios concretos do mercado global."
                  : "As a university professor across Computer Science, Software Engineering, and Information Systems, I regard the lecture hall as a living lab for pedagogical innovation. I implement active learning, simulated corporate code reviews, and production-grade projects to prepare engineers for the global industry."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 font-display border-b border-border-subtle pb-3">
                {isPt ? "3. Pesquisa Científica & IA" : "3. Scientific Research & Applied AI"}
              </h2>
              <p>
                {isPt
                  ? "Minha frente de pesquisa investiga como os Modelos de Linguagem em Larga Escala (LLMs) e técnicas de recuperação aumentada por geração (RAG) podem ser estruturados com guardrails pedagógicos, estimulando o pensamento socrático e a depuração crítica em estudantes de programação."
                  : "My research agenda investigates how Large Language Models (LLMs) and retrieval-augmented generation (RAG) can be structured with pedagogical guardrails, promoting Socratic inquiry and critical debugging among computing students."}
              </p>
            </section>

            {/* Marcador Transparente de Dados Pendentes */}
            <div className="rounded-lg bg-surface border border-border-subtle p-5 space-y-2 text-sm font-mono text-slate-400">
              <p className="text-accent font-semibold">
                [Auditoria de Dados Profissionais / Data Audit]
              </p>
              <p>
                &lt;TODO: Alexsander informar instituição acadêmica formal, título do mestrado/doutorado e bio biográfica detalhada&gt;
              </p>
            </div>
          </div>

          {/* Coluna Lateral: Dados Rápidos, CV & Redes */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card de Download do CV */}
            <div className="rounded-xl bg-surface border border-border-subtle p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-100 font-display">
                Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isPt
                  ? "Documento consolidado contendo histórico profissional completo, publicações e certificações."
                  : "Consolidated document containing complete professional track record, publications, and certifications."}
              </p>

              <div className="p-3 bg-surface-elevated border border-border-subtle rounded-lg text-xs font-mono text-slate-400 space-y-2">
                <p>&lt;TODO: Alexsander disponibilizar arquivo PDF do CV&gt;</p>
                <button
                  type="button"
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-surface border border-border-muted text-slate-400 text-xs font-mono cursor-not-allowed opacity-60"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV (PDF)</span>
                </button>
              </div>
            </div>

            {/* Card de Credenciais Verificadas */}
            <div className="rounded-xl bg-surface border border-border-subtle p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-100 font-display">
                {isPt ? "Canais de Autoridade" : "Authority Channels"}
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="h-4 w-4 text-accent" />
                    <span>GitHub</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="h-4 w-4 text-accent" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <a
                  href={siteConfig.links.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span>Currículo Lattes (CNPq)</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <a
                  href={siteConfig.links.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    <span>ORCID iD</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent transition-colors font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4" />
                    <span>{isPt ? "Entrar em Contato" : "Get in Touch"}</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
