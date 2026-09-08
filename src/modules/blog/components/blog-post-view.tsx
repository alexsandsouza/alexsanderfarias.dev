import React from "react";
import Link from "next/link";
import { Locale, BlogPost } from "@/shared/types";
import { formatDate } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export function BlogPostView({
  post,
  locale,
}: {
  post: BlogPost;
  locale: Locale;
}) {
  const isPt = locale === "pt";

  return (
    <article className="py-16 sm:py-24">
      <Container size="narrow">
        {/* Navegação de Retorno */}
        <div className="mb-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-xs font-mono text-fg-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{isPt ? "Voltar ao Blog" : "Back to Blog"}</span>
          </Link>
        </div>

        {/* Cabeçalho do Post */}
        <header className="space-y-6 pb-10 border-b border-border-subtle">
          <Badge variant="accent">{post.category.toUpperCase()}</Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-fg font-display leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-fg-secondary leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-fg-secondary pt-2 border-t border-border-subtle/60">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-accent" />
              <span>{formatDate(post.publishedAt, isPt ? "pt-BR" : "en-US")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>{post.readTimeMinutes} min de leitura</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag className="h-3.5 w-3.5 text-fg-muted" />
              <div className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-fg-secondary">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo do Artigo */}
        <div className="pt-12 max-w-none text-fg-secondary leading-relaxed space-y-6 font-sans">
          {post.content.split("\n\n").map((block, idx) => {
            if (block.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-fg font-display pt-4">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-fg font-display pt-6 border-b border-border-subtle pb-2">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("```")) {
              const codeContent = block.replace(/```[a-z]*/g, "").trim();
              return (
                <pre
                  key={idx}
                  className="p-4 rounded-xl bg-surface border border-border-subtle overflow-x-auto text-xs font-mono text-cyan-300 my-4"
                >
                  <code>{codeContent}</code>
                </pre>
              );
            }
            return (
              <p key={idx} className="text-base text-fg-secondary leading-relaxed">
                {block}
              </p>
            );
          })}
        </div>

        {/* Rodapé do Artigo */}
        <footer className="mt-16 pt-8 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-fg-secondary">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-accent hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{isPt ? "Explorar outros artigos" : "Explore more essays"}</span>
          </Link>

          <span>Alexsander Farias · alexsanderfarias.dev</span>
        </footer>
      </Container>
    </article>
  );
}
