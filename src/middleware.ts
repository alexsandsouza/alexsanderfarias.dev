import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supportedLocales, defaultLocale } from "@/shared/config/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignora rotas de assets estáticos, api, robots e sitemap
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon.ico") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Verifica se o pathname já possui um locale válido
  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Negociação simples de locale via cabeçalho Accept-Language
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale =
    acceptLanguage.toLowerCase().includes("en") && !acceptLanguage.toLowerCase().startsWith("pt")
      ? "en"
      : defaultLocale;

  const redirectUrl = new URL(`/${preferredLocale}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
