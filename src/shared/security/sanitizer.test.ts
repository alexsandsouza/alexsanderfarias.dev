import { describe, it, expect } from "vitest";
import { sanitizeInput, isValidEmailFormat } from "./sanitizer";

describe("sanitizeInput", () => {
  it("deve remover tags HTML potencialmente perigosas", () => {
    const malicious = "<script>alert('xss')</script>Texto legítimo";
    const cleaned = sanitizeInput(malicious);
    expect(cleaned).not.toContain("<script>");
    expect(cleaned).not.toContain("</script>");
    expect(cleaned).toContain("alert('xss')Texto legítimo");
  });

  it("deve remover pseudo-protocolos javascript: e event handlers", () => {
    const attack = "javascript:alert(1) onload=bad()";
    const cleaned = sanitizeInput(attack);
    expect(cleaned).not.toContain("javascript:");
    expect(cleaned).not.toContain("onload");
  });

  it("deve lidar com valores não-string de forma segura", () => {
    // @ts-expect-error teste com valor inválido
    expect(sanitizeInput(null)).toBe("");
    // @ts-expect-error teste com valor inválido
    expect(sanitizeInput(undefined)).toBe("");
  });
});

describe("isValidEmailFormat", () => {
  it("deve validar e-mails com formatos válidos", () => {
    expect(isValidEmailFormat("contato@alexsanderfarias.dev")).toBe(true);
    expect(isValidEmailFormat("usuario.teste@universidade.edu.br")).toBe(true);
  });

  it("deve rejeitar e-mails inválidos ou maliciosos", () => {
    expect(isValidEmailFormat("invalido")).toBe(false);
    expect(isValidEmailFormat("@sem-usuario.com")).toBe(false);
    expect(isValidEmailFormat("usuario@sem-tld")).toBe(false);
  });
});
