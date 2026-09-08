import { describe, it, expect, beforeEach } from "vitest";
import { applyTheme, parseStoredTheme, THEME_STORAGE_KEY } from "./theme";

describe("parseStoredTheme", () => {
  it("aceita somente valores válidos", () => {
    expect(parseStoredTheme("dark")).toBe("dark");
    expect(parseStoredTheme("light")).toBe("light");
  });

  it("rejeita valores inválidos e retorna o tema padrão", () => {
    expect(parseStoredTheme(null)).toBe("dark");
    expect(parseStoredTheme(undefined)).toBe("dark");
    expect(parseStoredTheme("")).toBe("dark");
    expect(parseStoredTheme("system")).toBe("dark");
    expect(parseStoredTheme("<script>alert(1)</script>")).toBe("dark");
    expect(parseStoredTheme({ theme: "light" })).toBe("dark");
  });
});

describe("applyTheme", () => {
  beforeEach(() => {
    document.documentElement.className = "";
    document.documentElement.style.colorScheme = "";
  });

  it("aplica o tema escuro na raiz do documento", () => {
    applyTheme("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });

  it("aplica o tema claro na raiz do documento", () => {
    document.documentElement.classList.add("dark");
    applyTheme("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(document.documentElement.style.colorScheme).toBe("light");
  });
});

describe("THEME_STORAGE_KEY", () => {
  it("usa uma chave explícita e estável", () => {
    expect(THEME_STORAGE_KEY).toBe("alexsanderfarias-theme");
  });
});
