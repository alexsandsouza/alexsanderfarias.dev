import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { BlogIndexView } from "@/modules/blog";

export const metadata: Metadata = {
  title: "Blog & Base de Conhecimento Técnico",
  description:
    "Ensaios técnicos e artigos sobre engenharia de software, inteligência artificial, segurança e ensino de computação.",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BlogIndexView locale={locale as Locale} />;
}
