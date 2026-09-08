import React from "react";
import Link from "next/link";
import { Locale } from "@/shared/types";
import { getAllPosts } from "../services/blog.service";
import { formatDate } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function BlogIndexView({ locale }: { locale: Locale }) {
  const posts = getAllPosts();
  const isPt = locale === "pt";

  return (
    <div className="py-16 sm:py-24">
      <Container size="wide">
        {/* Cabeçalho */}
        <div className="space-y-4 max-w-3xl mb-16">
          <Badge variant="accent">
            {isPt ? "Base de Conhecimento & Artigos" : "Technical Knowledge & Articles"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-fg font-display">
            {isPt ? "Engenharia, IA & Arquitetura" : "Engineering, AI & Architecture"}
          </h1>
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed">
            {isPt
              ? "Artigos aprofundados sobre boas práticas de arquitetura de software, segurança por design, metodologias ativas no ensino de computação e inteligência artificial aplicada."
              : "In-depth technical essays exploring durable software architecture, security by design, computer science pedagogy, and empirical AI applications."}
          </p>
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl bg-surface border border-border-subtle hover:border-border-muted p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-fg-secondary">
                  <span className="text-accent uppercase tracking-wider font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-fg-secondary" />
                    <span>{post.readTimeMinutes} min de leitura</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-fg font-display group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-fg-secondary leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-fg-secondary bg-surface-elevated border border-border-subtle px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border-subtle/50 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-fg-secondary">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{formatDate(post.publishedAt, isPt ? "pt-BR" : "en-US")}</span>
                </span>

                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent group-hover:translate-x-1 transition-transform"
                >
                  <span>{isPt ? "Ler Artigo" : "Read Essay"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
