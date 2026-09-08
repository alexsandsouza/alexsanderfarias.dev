import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { ResearchView } from "@/modules/research";

export const metadata: Metadata = {
  title: "Pesquisa Científica & Inteligência Artificial",
  description:
    "Linhas de pesquisa em IA aplicada à educação em computação, síntese de código e sistemas distribuídos.",
};

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ResearchView locale={locale as Locale} />;
}
