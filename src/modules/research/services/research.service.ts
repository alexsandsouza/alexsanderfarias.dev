import { researchLines } from "../data/research";
import { ResearchLine } from "@/shared/types";

export function getResearchOverview(): ResearchLine[] {
  return researchLines;
}
