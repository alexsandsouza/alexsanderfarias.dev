"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { Locale } from "@/shared/types";
import { getDictionary } from "@/shared/config/i18n";
import { Container } from "@/shared/ui/container";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" },
    },
  };

  const photoVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative overflow-hidden border-b border-border-subtle bg-canvas pt-16 pb-20 md:pt-24 md:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-[20%] right-[-8%] h-[420px] w-[420px] rounded-full bg-brand/[0.07] blur-[140px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20"
        >
          <div className="flex flex-col gap-8 md:gap-10 lg:col-span-7">
            <motion.p
              variants={itemVariants}
              className="text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-fg-secondary"
            >
              {dict.hero.eyebrow}
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-fg sm:text-5xl xl:text-6xl"
            >
              <span className="block">{dict.hero.titleLine1}</span>
              <span className="block">{dict.hero.titleLine2}</span>
              <span className="block text-brand">{dict.hero.titleLine3}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base leading-relaxed text-fg-secondary sm:text-lg"
            >
              {dict.hero.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={`/${locale}/projects`}
                className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-brand px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_-16px_rgb(var(--color-brand)/0.9)] transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_12px_32px_-14px_rgb(var(--color-brand)/0.85)] active:scale-[0.98]"
              >
                <span className="relative z-10">{dict.hero.ctaProjects}</span>
                <ArrowRight
                  className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/12 to-white/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border-muted bg-transparent px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest text-fg transition-colors duration-200 hover:border-brand/50 hover:bg-surface-elevated"
              >
                {dict.hero.ctaContact}
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div variants={photoVariants} className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl"
                aria-hidden="true"
              />

              <figure className="relative overflow-hidden rounded-2xl border border-border-muted bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.55)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-canvas">
                  <Image
                    src="/images/Foto_Estudio2.png"
                    alt={dict.hero.photoAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 420px"
                    className="object-cover object-top motion-safe:transition-transform motion-safe:duration-700 motion-safe:hover:scale-[1.02]"
                  />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 bg-gradient-to-t from-canvas via-canvas/80 to-transparent px-4 pb-4 pt-10 text-[11px] font-mono sm:px-5">
                  <span className="inline-flex items-center gap-1.5 text-fg-secondary">
                    <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    <span>{dict.hero.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-fg">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    <span>{dict.hero.availability}</span>
                  </span>
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
