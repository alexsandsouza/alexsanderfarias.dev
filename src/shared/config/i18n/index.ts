import ptMessages from "./locales/pt.json";
import enMessages from "./locales/en.json";
import { Locale } from "@/shared/types";

export const defaultLocale: Locale = "pt";
export const supportedLocales: Locale[] = ["pt", "en"];

const dictionaries = {
  pt: ptMessages,
  en: enMessages,
};

export function getDictionary(locale: string = "pt") {
  const normalizedLocale = (supportedLocales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  return dictionaries[normalizedLocale];
}
