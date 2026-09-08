import { publicationsData } from "../data/publications";
import { PublicationItem } from "@/shared/types";

export function getPublications(): PublicationItem[] {
  return publicationsData;
}
