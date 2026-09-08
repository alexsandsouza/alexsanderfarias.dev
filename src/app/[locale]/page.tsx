import React from "react";
import { Locale } from "@/shared/types";
import { Hero, MetricsSection, SelectedWork, Manifesto } from "@/modules/home";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  return (
    <div className="space-y-0">
      <Hero locale={currentLocale} />
      <MetricsSection locale={currentLocale} />
      <SelectedWork locale={currentLocale} />
      <Manifesto locale={currentLocale} />
    </div>
  );
}
