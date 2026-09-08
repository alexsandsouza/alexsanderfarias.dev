import { experienceData } from "../data/experience";
import { ExperienceItem } from "@/shared/types";

export function getExperienceHistory(): ExperienceItem[] {
  return experienceData;
}
