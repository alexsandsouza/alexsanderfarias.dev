import React from "react";
import { Metadata } from "next";
import { Locale } from "@/shared/types";
import { ContactForm } from "@/modules/contact";

export const metadata: Metadata = {
  title: "Contato Seguro & Correspondência Formal",
  description:
    "Entre em contato com Alexsander Farias para consultorias, palestras técnicas e pesquisa em inteligência artificial.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ContactForm locale={locale as Locale} />;
}
