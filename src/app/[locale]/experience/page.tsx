import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { ExperienceTimeline } from "@/modules/experience";

export const metadata: Metadata = {
  title: "Experiência Profissional & Docência",
  description:
    "Linha do tempo profissional de Alexsander Farias em engenharia de software corporativa e ensino superior.",
};

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ExperienceTimeline locale={locale as Locale} />;
}
