import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./theme-toggle";
import { applyTheme, THEME_STORAGE_KEY } from "@/shared/config/theme";

describe("ThemeToggle", () => {
  beforeEach(() => {
    window.localStorage.clear();
    applyTheme("dark");
  });

  it("expõe um grupo acessível para alternar o tema", () => {
    render(<ThemeToggle locale="pt" />);
    expect(screen.getByRole("group", { name: "Aparência" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ativar versão clara" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ativar versão escura" })).toBeTruthy();
  });

  it("persiste a preferência clara e atualiza o documento", () => {
    render(<ThemeToggle locale="pt" />);
    fireEvent.click(screen.getByRole("button", { name: "Ativar versão clara" }));

    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(screen.getByRole("button", { name: "Ativar versão clara" }).getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByRole("button", { name: "Ativar versão escura" }).getAttribute("aria-pressed")).toBe("false");
  });

  it("persiste a preferência escura", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "light");
    applyTheme("light");
    render(<ThemeToggle locale="en" />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));

    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
