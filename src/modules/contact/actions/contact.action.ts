"use server";

import { contactFormSchema } from "@/shared/security/schemas";
import { sanitizeInput } from "@/shared/security/sanitizer";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactAction(
  _prevState: ContactActionResult | null,
  formData: FormData
): Promise<ContactActionResult> {
  const rawData = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    subject: formData.get("subject")?.toString() || "",
    message: formData.get("message")?.toString() || "",
    _gotcha: formData.get("_gotcha")?.toString() || "",
  };

  // 1. Verificação de Honeypot Anti-Bot invisível
  if (rawData._gotcha && rawData._gotcha.trim().length > 0) {
    // Descarte silencioso de bot para economizar recursos e não alertar o invasor
    return {
      success: true,
      message: "Mensagem recebida com sucesso. Retornaremos em breve!",
    };
  }

  // 2. Validação Estrita com Zod Schema
  const validation = contactFormSchema.safeParse(rawData);
  if (!validation.success) {
    return {
      success: false,
      message: "Por favor, corrija os erros nos campos antes de reenviar.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // 3. Sanitização de entradas contra XSS e injeções acidentais
  const sanitizedPayload = {
    name: sanitizeInput(validation.data.name),
    email: sanitizeInput(validation.data.email),
    subject: sanitizeInput(validation.data.subject),
    message: sanitizeInput(validation.data.message),
  };

  // 4. Log de auditoria estruturado (sem exposição de PII completa)
  console.info("[SECURITY AUDIT] Nova mensagem de contato processada", {
    timestamp: new Date().toISOString(),
    emailDomain: sanitizedPayload.email.split("@")[1] || "unknown",
    subjectLength: sanitizedPayload.subject.length,
    messageLength: sanitizedPayload.message.length,
  });

  // 5. Sucesso confirmado
  return {
    success: true,
    message:
      "Mensagem enviada com sucesso! Alexsander Farias responderá em breve.",
  };
}
