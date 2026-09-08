import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { TechMatrixView } from "@/modules/technologies";

export const metadata: Metadata = {
  title: "Stack Tecnológica & Engenharia de Sistemas",
  description:
    "Competências técnicas organizadas por domínio: arquitetura, linguagens, web performance, nuvem e segurança.",
};

export default async function StackPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TechMatrixView locale={locale as Locale} />;
}
