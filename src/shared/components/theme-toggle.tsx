"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Locale } from "@/shared/types";
import { getDictionary } from "@/shared/config/i18n";
import { applyTheme, parseStoredTheme, THEME_STORAGE_KEY, type ThemeName } from "@/shared/config/theme";
import { cn } from "@/shared/lib/utils";

export function ThemeToggle({ locale = "pt" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const [theme, setTheme] = useState<ThemeName>("dark");

  useEffect(() => {
    const stored = parseStoredTheme(window.localStorage.getItem(THEME_STORAGE_KEY));
    applyTheme(stored);
    setTheme(stored);
  }, []);

  const selectTheme = (next: ThemeName) => {
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  };

  const isDark = theme === "dark";

  return (
    <div
      role="group"
      aria-label={dict.theme.groupLabel}
      className="inline-flex items-center rounded-lg border border-border-subtle bg-surface p-0.5"
    >
      <button
        type="button"
        aria-pressed={!isDark}
        aria-label={dict.theme.switchToLight}
        title={dict.theme.light}
        onClick={() => selectTheme("light")}
        className={cn(
          "inline-flex min-h-8 min-w-8 items-center justify-center gap-1.5 rounded-md border px-2 py-1.5 text-xs font-mono font-medium transition-colors duration-150",
          "focus-visible:outline-none",
          !isDark
            ? "border-transparent bg-fg text-canvas font-semibold"
            : "border-transparent text-fg-secondary hover:text-fg"
        )}
      >
        <Sun className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{dict.theme.light}</span>
      </button>
      <button
        type="button"
        aria-pressed={isDark}
        aria-label={dict.theme.switchToDark}
        title={dict.theme.dark}
        onClick={() => selectTheme("dark")}
        className={cn(
          "inline-flex min-h-8 min-w-8 items-center justify-center gap-1.5 rounded-md border px-2 py-1.5 text-xs font-mono font-medium transition-colors duration-150",
          "focus-visible:outline-none",
          isDark
            ? "border-transparent bg-fg text-canvas font-semibold"
            : "border-transparent text-fg-secondary hover:text-fg"
        )}
      >
        <Moon className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{dict.theme.dark}</span>
      </button>
    </div>
  );
}
