import React from "react";
import { Locale } from "@/shared/types";
import { getDictionary } from "@/shared/config/i18n";
import { homeMetrics } from "../data/metrics";
import { Container } from "@/shared/ui/container";
import { Info } from "lucide-react";

export function MetricsSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-16 border-b border-border-subtle bg-surface/40">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 font-display">
              {dict.metrics.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {dict.metrics.subtitle}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-surface border border-border-subtle px-3 py-1.5 rounded-md">
            <Info className="h-3.5 w-3.5 text-accent" />
            <span>{dict.metrics.placeholderNotice}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {homeMetrics.map((metric) => {
            const label = dict.metrics[metric.labelKey as keyof typeof dict.metrics] || metric.labelKey;

            return (
              <div
                key={metric.id}
                className="rounded-xl bg-surface border border-border-subtle hover:border-accent/40 p-5 flex flex-col justify-between transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-100 group-hover:text-accent transition-colors">
                    {metric.value}
                  </span>
                  {metric.isPlaceholder && (
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-border-subtle px-1.5 py-0.5 rounded">
                      pendente
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-3 font-medium leading-snug">
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
