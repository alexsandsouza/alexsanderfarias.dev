import { describe, it, expect } from "vitest";
import { contactFormSchema } from "./schemas";

describe("contactFormSchema", () => {
  it("deve aceitar payload válido com todos os requisitos atendidos", () => {
    const validData = {
      name: "Engenheiro Visitante",
      email: "visitante@empresa.com",
      subject: "Proposta de Consultoria em Arquitetura",
      message: "Gostaríamos de conversar sobre uma consultoria técnica para nossa plataforma.",
      _gotcha: "",
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("deve rejeitar submissões com campo Honeypot preenchido (tentativa de bot)", () => {
    const botData = {
      name: "Spam Bot",
      email: "bot@spam.com",
      subject: "Buy cheap goods",
      message: "This is a spam message that exceeds twenty characters.",
      _gotcha: "http://malicious-link.com",
    };

    const result = contactFormSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });

  it("deve rejeitar submissões com mensagem curta demais", () => {
    const shortData = {
      name: "Visitante",
      email: "visitante@teste.com",
      subject: "Dúvida",
      message: "Oi tudo bem?", // < 20 caracteres
    };

    const result = contactFormSchema.safeParse(shortData);
    expect(result.success).toBe(false);
  });
});
