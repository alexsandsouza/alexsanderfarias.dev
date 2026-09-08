import * as React from "react";
import { cn } from "@/shared/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "brand" | "outline" | "success" | "muted";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono tracking-wide transition-colors";

  const variants = {
    default:
      "bg-surface-elevated text-slate-300 border border-border-subtle",
    accent:
      "bg-accent/10 text-accent border border-accent/30 shadow-[0_0_12px_rgba(0,229,255,0.15)]",
    brand:
      "bg-brand/15 text-brand-hover border border-brand/40 uppercase tracking-widest font-semibold",
    outline:
      "border border-border-muted text-slate-400 bg-transparent",
    success:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    muted:
      "bg-slate-900/60 text-slate-400 border border-slate-800",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
