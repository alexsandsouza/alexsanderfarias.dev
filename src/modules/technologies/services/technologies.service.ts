import { techCategories } from "../data/technologies";
import { TechCategory } from "@/shared/types";

export function getTechStack(): TechCategory[] {
  return techCategories;
}
