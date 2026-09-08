"use client";

import React, { useActionState } from "react";
import { Locale } from "@/shared/types";
import { siteConfig } from "@/shared/config/site";
import { submitContactAction, ContactActionResult } from "../actions/contact.action";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import {
  Mail,
  Send,
  ShieldCheck,
  Github,
  Linkedin,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lock,
} from "lucide-react";

export function ContactForm({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [state, formAction, isPending] = useActionState<ContactActionResult | null, FormData>(
    submitContactAction,
    null
  );

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho */}
        <div className="space-y-4 max-w-3xl mb-16">
          <Badge variant="accent">
            {isPt ? "Comunicação Segura & Formal" : "Secure & Formal Communication"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100 font-display">
            {isPt ? "Entre em Contato" : "Get in Touch"}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {isPt
              ? "Disponível para consultorias em arquitetura de sistemas, palestras técnicas, projetos de pesquisa em IA e colaborações acadêmicas."
              : "Available for systems architecture advisory, technical keynotes, applied AI research, and academic collaborations."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Formulário com Proteção Honeypot */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-surface border border-border-subtle p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100 font-display">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>{isPt ? "Mensagem Criptografada & Segura" : "Secure Encrypted Transmission"}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <Lock className="h-3 w-3" />
                  <span>Server-Validated</span>
                </div>
              </div>

              {/* Feedback de Sucesso */}
              {state?.success && (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-300 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p>{state.message}</p>
                </div>
              )}

              {/* Feedback de Erro Geral */}
              {state && !state.success && (
                <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-sm">
                  <AlertTriangle className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <p>{state.message}</p>
                </div>
              )}

              <form action={formAction} className="space-y-4">
                {/* Campo Honeypot invisível para bots */}
                <div aria-hidden="true" className="sr-only">
                  <label htmlFor="_gotcha">Não preencha este campo se for humano</label>
                  <input
                    type="text"
                    id="_gotcha"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono font-medium text-slate-300">
                      {isPt ? "Seu Nome Completo" : "Full Name"} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ex: Dra. Mariana Silva"
                      className="w-full h-11 px-3.5 rounded-lg bg-canvas border border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                    />
                    {state?.errors?.name && (
                      <p className="text-xs text-rose-400 font-mono">
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono font-medium text-slate-300">
                      {isPt ? "E-mail Corporativo / Pessoal" : "Email Address"} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="nome@empresa.com"
                      className="w-full h-11 px-3.5 rounded-lg bg-canvas border border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                    />
                    {state?.errors?.email && (
                      <p className="text-xs text-rose-400 font-mono">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Assunto */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono font-medium text-slate-300">
                    {isPt ? "Assunto / Tópico" : "Subject / Topic"} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Ex: Convite para Keynote / Consultoria Técnica"
                    className="w-full h-11 px-3.5 rounded-lg bg-canvas border border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                  />
                  {state?.errors?.subject && (
                    <p className="text-xs text-rose-400 font-mono">
                      {state.errors.subject[0]}
                    </p>
                  )}
                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-slate-300">
                    {isPt ? "Mensagem Detalhada" : "Detailed Message"} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={
                      isPt
                        ? "Descreva o contexto, prazos ou especificações técnicas da sua demanda..."
                        : "Describe the context, timeline, or technical scope of your inquiry..."
                    }
                    className="w-full p-3.5 rounded-lg bg-canvas border border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent text-sm text-slate-100 placeholder-slate-600 outline-none transition-all resize-y"
                  />
                  {state?.errors?.message && (
                    <p className="text-xs text-rose-400 font-mono">
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-lg bg-accent text-canvas font-semibold text-sm shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    {isPending ? (
                      <span className="font-mono text-xs animate-pulse">
                        {isPt ? "Processando e validando..." : "Validating payload..."}
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>{isPt ? "Enviar Mensagem Segura" : "Send Secure Message"}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Coluna de Canais Oficiais */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-surface border border-border-subtle p-6 space-y-4">
              <h2 className="text-lg font-bold text-slate-100 font-display">
                {isPt ? "Canais de Comunicação Direta" : "Direct Official Channels"}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isPt
                  ? "Para correspondências acadêmicas, convites de bancas examinadoras ou oportunidades de engenharia."
                  : "For academic correspondence, thesis committee invitations, or software advisory."}
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <div className="text-xs font-mono truncate">
                    <p className="text-slate-400">E-mail Oficial</p>
                    <p className="text-slate-200 font-semibold">{siteConfig.links.email}</p>
                  </div>
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-accent flex-shrink-0" />
                  <div className="text-xs font-mono">
                    <p className="text-slate-400">LinkedIn</p>
                    <p className="text-slate-200 font-semibold">linkedin.com/in/alexsanderfarias</p>
                  </div>
                </a>

                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 transition-colors"
                >
                  <Github className="h-5 w-5 text-accent flex-shrink-0" />
                  <div className="text-xs font-mono">
                    <p className="text-slate-400">GitHub</p>
                    <p className="text-slate-200 font-semibold">github.com/alexsandsouza</p>
                  </div>
                </a>

                <a
                  href={siteConfig.links.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-subtle text-slate-200 transition-colors"
                >
                  <BookOpen className="h-5 w-5 text-accent flex-shrink-0" />
                  <div className="text-xs font-mono">
                    <p className="text-slate-400">Currículo Lattes</p>
                    <p className="text-slate-200 font-semibold">Plataforma Lattes (CNPq)</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Garantia de Privacidade e Segurança */}
            <div className="rounded-xl bg-surface/50 border border-border-subtle p-6 space-y-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Privacidade & DevSecOps</span>
              </div>
              <p className="leading-relaxed">
                Este formulário não utiliza cookies invasivos ou rastreadores de terceiros. Todos os dados são validados em camada de servidor e protegidos por políticas restritivas de Content Security Policy (CSP).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
