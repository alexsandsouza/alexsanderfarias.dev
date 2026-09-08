import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { supportedLocales } from "@/shared/config/i18n";
import { getAllPosts, getPostBySlug, BlogPostView } from "@/modules/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of supportedLocales) {
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Artigo Não Encontrado" };
  }

  return {
    title: `${post.title} | Artigo Técnico`,
    description: post.description,
    openGraph: {
      type: "article",
      title: `${post.title} | Artigo Técnico`,
      description: post.description,
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} locale={locale as Locale} />;
}
