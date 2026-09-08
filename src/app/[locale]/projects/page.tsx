import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { ProjectsCatalog } from "@/modules/projects";

export const metadata: Metadata = {
  title: "Projetos & Case Studies de Engenharia",
  description:
    "Estudos de caso aprofundados dissecando sistemas complexos em 11 dimensões de engenharia de software.",
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ProjectsCatalog locale={locale as Locale} />;
}
