import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { AboutView } from "@/modules/about";

export const metadata: Metadata = {
  title: "Sobre & Filosofia de Engenharia",
  description:
    "Conheça a trajetória, filosofia de engenharia e liderança acadêmica de Alexsander Farias.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutView locale={locale as Locale} />;
}
