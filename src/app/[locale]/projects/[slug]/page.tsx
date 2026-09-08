import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { supportedLocales } from "@/shared/config/i18n";
import { getAllProjects, getProjectBySlug, CaseStudyView } from "@/modules/projects";

export async function generateStaticParams() {
  const projects = getAllProjects();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of supportedLocales) {
    for (const project of projects) {
      params.push({ locale, slug: project.slug });
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
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto Não Encontrado" };
  }

  return {
    title: `${project.title} | Case Study de Engenharia`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Case Study de Engenharia`,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} locale={locale as Locale} />;
}
