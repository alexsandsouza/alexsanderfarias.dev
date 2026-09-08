import { describe, it, expect } from "vitest";
import { calculateReadingTime } from "./reading-time";

describe("calculateReadingTime", () => {
  it("deve retornar 1 minuto para textos vazios ou com poucos caracteres", () => {
    expect(calculateReadingTime("")).toBe(1);
    expect(calculateReadingTime("   ")).toBe(1);
    expect(calculateReadingTime("Olá mundo")).toBe(1);
  });

  it("deve estimar corretamente o tempo de leitura para textos mais longos", () => {
    // Gerar texto com 400 palavras -> aprox 2 minutos em 200 palavras/min
    const text400Words = Array(400).fill("palavra").join(" ");
    expect(calculateReadingTime(text400Words)).toBe(2);

    // Gerar texto com 550 palavras -> 3 minutos (arredondamento para cima)
    const text550Words = Array(550).fill("palavra").join(" ");
    expect(calculateReadingTime(text550Words)).toBe(3);
  });
});
