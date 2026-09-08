/**
 * Sanitiza strings de entrada para mitigar XSS e injeções acidentais.
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== "string") return "";

  return input
    .trim()
    .replace(/<[^>]*>/g, "") // Remove tags HTML completas
    .replace(/javascript:/gi, "") // Remove esquemas de pseudo-protocolo
    .replace(/data:/gi, "")
    .replace(/vbscript:/gi, "")
    .replace(/onload|onclick|onerror|onmouseover/gi, "");
}

/**
 * Valida se um e-mail possui estrutura canônica segura (RFC 5322 simplificado)
 */
export function isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
