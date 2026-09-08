import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { siteConfig } from "@/shared/config/site";
import { getDictionary } from "@/shared/config/i18n";
import { Container } from "@/shared/ui/container";
import { Github, Linkedin, Terminal, ShieldCheck, BookOpen } from "lucide-react";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-canvas text-slate-400 py-12 transition-colors">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Assinatura e Posicionamento */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-slate-100 hover:text-accent transition-colors"
            >
              <Terminal className="h-4 w-4 text-accent" />
              <span>
                alexsanderfarias<span className="text-accent">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Engenharia de Software · Docência em Computação · Pesquisa Aplicada em Inteligência Artificial.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>WCAG 2.2 AA · Security Hardened</span>
            </div>
          </div>

          {/* Coluna 2: Módulos Principais */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/projects`} className="hover:text-accent transition-colors">
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experience`} className="hover:text-accent transition-colors">
                  {dict.nav.experience}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/teaching`} className="hover:text-accent transition-colors">
                  {dict.nav.teaching}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/research`} className="hover:text-accent transition-colors">
                  {dict.nav.research}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/publications`} className="hover:text-accent transition-colors">
                  {dict.nav.publications}
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Presença e Autoridade */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Autoridade & Redes
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Currículo Lattes</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>ORCID ID</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} {siteConfig.name}. {dict.footer.rights}</p>
          <p className="text-center sm:text-right">{dict.footer.engineeringTag}</p>
        </div>
      </Container>
    </footer>
  );
}
