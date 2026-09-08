import React from "react";
import { notFound } from "next/navigation";
import { Locale } from "@/shared/types";
import { supportedLocales } from "@/shared/config/i18n";
import { siteConfig } from "@/shared/config/site";
import { Header } from "@/shared/components/header";
import { Footer } from "@/shared/components/footer";
import { SkipLink } from "@/shared/components/skip-link";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  // JSON-LD Structured Data para SEO Técnico (Person & ProfilePage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: "Senior Software Engineer & Professor",
        description: siteConfig.description,
        url: siteConfig.url,
        sameAs: [
          siteConfig.links.github,
          siteConfig.links.linkedin,
          siteConfig.links.lattes,
          siteConfig.links.orcid,
        ],
        knowsAbout: [
          "Software Engineering",
          "Distributed Systems",
          "Artificial Intelligence",
          "Computer Science Education",
          "Next.js",
          "TypeScript",
          "DevSecOps",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/${currentLocale}#profilepage`,
        url: `${siteConfig.url}/${currentLocale}`,
        name: `${siteConfig.name} - Professional Portfolio`,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkipLink locale={currentLocale} />
      <Header locale={currentLocale} />
      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer locale={currentLocale} />
    </>
  );
}
