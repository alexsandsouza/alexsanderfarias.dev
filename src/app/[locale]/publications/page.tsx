import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { PublicationsCatalog } from "@/modules/publications";

export const metadata: Metadata = {
  title: "Publicações Científicas & Artigos Indexados",
  description:
    "Catálogo formal de publicações científicas, com filtros por área, identificadores DOI e gerador de citação BibTeX.",
};

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PublicationsCatalog locale={locale as Locale} />;
}
