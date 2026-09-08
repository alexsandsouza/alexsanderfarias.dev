import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { TeachingView } from "@/modules/teaching";

export const metadata: Metadata = {
  title: "Docência & Ensino Superior em Computação",
  description:
    "Disciplinas universitárias, metodologias ativas e formação de novos engenheiros de software.",
};

export default async function TeachingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TeachingView locale={locale as Locale} />;
}
