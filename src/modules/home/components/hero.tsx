"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Locale } from "@/shared/types";
import { siteConfig } from "@/shared/config/site";
import { Container } from "@/shared/ui/container";
import {
  ArrowRight,
  Download,
  Terminal,
  Code2,
  GraduationCap,
  Sparkles,
  MapPin,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function Hero({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const shouldReduceMotion = useReducedMotion();

  // Mouse spotlight coords
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const photoVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 border-b border-border-subtle bg-canvas selection:bg-brand selection:text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Subtle Mouse Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 hidden md:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 4, 41, 0.045), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* 2. Technological Grid & Ambient Mesh Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#151b28_1px,transparent_1px),linear-gradient(to_bottom,#151b28_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Subtle Crimson Gradient Accent Glow behind photo area */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          {/* ========================================================= */}
          {/* LADO ESQUERDO: Posicionamento, Headline & Indicadores     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow com microinteração e badge técnica */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand-hover text-xs font-mono font-semibold tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
                </span>
                <span>{isPt ? "Dev Full Stack · Docência · Pesquisa" : "Full Stack Dev · Professor · Researcher"}</span>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <MapPin className="h-3 w-3 text-brand" />
                <span>MANAUS / BRASIL</span>
              </span>
            </motion.div>

            {/* Headline Monumental com Destaque Crimson */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-slate-100 leading-[1.04]">
                <span className="block">{isPt ? "Construindo software." : "Building software."}</span>
                <span className="block text-slate-300">{isPt ? "Formando pessoas." : "Empowering people."}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-hover via-brand to-rose-400">
                  {isPt ? "Criando o que vem depois." : "Creating what comes next."}
                </span>
              </h1>
            </motion.div>

            {/* Descrição Autoral com Marcador Vertical Vermelho */}
            <motion.div
              variants={itemVariants}
              className="relative pl-5 border-l-2 border-brand/80 py-1 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl space-y-2"
            >
              <p>
                {isPt
                  ? "Engenheiro de Software Full Stack e Professor Universitário. Atuo com arquiteturas escaláveis em TypeScript, Next.js, Node e Cloud, aplicando inteligência artificial e métodos ágeis para transformar desafios em produtos digitais de alto impacto."
                  : "Full Stack Software Engineer and University Professor. Architecting scalable systems in TypeScript, Next.js, Node, and Cloud infrastructure, merging cutting-edge AI with pedagogical rigour to deliver high-impact digital ventures."}
              </p>
            </motion.div>

            {/* CTAs Primários com Microinterações e Links Rápidos */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                {/* CTA Principal: Conheça meus projetos */}
                <Link
                  href={`/${locale}/projects`}
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-brand text-white font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(217,4,41,0.35)] hover:bg-brand-hover hover:shadow-[0_0_35px_rgba(217,4,41,0.5)] transition-all active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10">{isPt ? "Conheça meus projetos" : "Explore my projects"}</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>

                {/* CTA Secundário: Falar comigo */}
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface border border-slate-700 hover:border-brand/60 hover:bg-surface-elevated text-slate-200 font-mono font-bold text-xs uppercase tracking-widest transition-all"
                >
                  <span>{isPt ? "Falar comigo" : "Get in touch"}</span>
                  <span className="text-brand">/&gt;</span>
                </Link>

                {/* CTA Terciário Opcional: Baixar currículo */}
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded text-slate-400 hover:text-slate-200 font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <Download className="h-3.5 w-3.5 text-brand" />
                  <span>{isPt ? "Baixar CV" : "Resume"}</span>
                </Link>
              </div>

              {/* Links de Autoridade Discretos */}
              <div className="flex items-center gap-5 pt-2 text-xs font-mono text-slate-400">
                <span className="text-slate-400 uppercase tracking-wider text-[11px]">{isPt ? "Canais:" : "Channels:"}</span>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand hover:underline flex items-center gap-1 transition-colors"
                >
                  GitHub <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
                <span className="text-slate-700">/</span>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand hover:underline flex items-center gap-1 transition-colors"
                >
                  LinkedIn <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
                <span className="text-slate-700">/</span>
                <a
                  href={siteConfig.links.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand hover:underline flex items-center gap-1 transition-colors"
                >
                  ORCID <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </div>
            </motion.div>

            {/* Tríade de Indicadores com Linha Vermelha de Conexão */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-border-subtle max-w-xl text-xs font-mono"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-brand">
                  <Code2 className="h-4 w-4" />
                  <span className="font-bold text-slate-200">Full Stack</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">TypeScript · Next.js · Cloud</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-brand">
                  <GraduationCap className="h-4 w-4" />
                  <span className="font-bold text-slate-200">{isPt ? "Docência" : "Teaching"}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">Ensino Superior · Mentoria</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-brand">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-bold text-slate-200">{isPt ? "Pesquisa & IA" : "AI & Research"}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">Engenharia · Inovação</p>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* LADO DIREITO: Composição Editorial com Fotografia Real   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              variants={photoVariants}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none"
            >
              {/* Layer 1: Moldura geométrica de profundidade com acento carmesim */}
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-2xl bg-gradient-to-tr from-brand/20 via-border-subtle/50 to-transparent blur-sm pointer-events-none"
                aria-hidden="true"
              />

              {/* Layer 2: Container principal da composição */}
              <div className="relative rounded-2xl border border-border-muted bg-surface/90 backdrop-blur-md overflow-hidden shadow-2xl">
                {/* Header técnico do Card (estilo terminal / painel de engenharia) */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle/80 bg-surface-elevated/70 text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    <span className="text-slate-300 font-semibold tracking-wider">DEV_ID // ALEXSANDER_FARIAS</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-[10px] uppercase font-bold tracking-widest">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Área da Fotografia Profissional em Destaque */}
                <div className="relative w-full aspect-[4/5] bg-canvas overflow-hidden">
                  <Image
                    src="/images/Foto_Estudio2.png"
                    alt="Alexsander Farias - Engenheiro de Software Full Stack e Professor Universitário"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />

                  {/* Gradiente sutil inferior para fusão com a interface */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/15 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Elemento flutuante 1: Terminal / Status de Produção (canto inferior esquerdo) */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-lg bg-surface/95 border border-border-muted p-3 backdrop-blur-md shadow-xl text-xs font-mono space-y-1"
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-border-subtle pb-1">
                      <span className="flex items-center gap-1.5 text-brand font-bold">
                        <Terminal className="h-3 w-3" />
                        <span>ROLE_SCOPE</span>
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-slate-200 font-semibold pt-0.5">
                      Full Stack Dev & Professor
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Engenharia de Software · Empreendedorismo Digital
                    </p>
                  </motion.div>

                  {/* Elemento flutuante 2: Coordenadas e Geometria (canto superior direito) */}
                  <div
                    className="absolute top-3 right-3 px-2 py-1 rounded bg-canvas/80 border border-border-subtle text-[10px] font-mono text-slate-400 backdrop-blur-sm pointer-events-none"
                    aria-hidden="true"
                  >
                    3°06&apos;S 60°01&apos;W
                  </div>
                </div>

                {/* Footer do Card com Detalhes de Autoridade */}
                <div className="px-4 py-3 border-t border-border-subtle/80 bg-surface/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="text-brand font-bold">●</span>
                    <span className="text-slate-300">Disponível para Projetos</span>
                  </span>
                  <span className="text-[11px] text-slate-400">2026 // v2.0</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

