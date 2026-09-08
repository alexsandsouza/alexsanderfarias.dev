import { projectsData } from "../data/projects";
import { ProjectCaseStudy } from "@/shared/types";

export function getAllProjects(): ProjectCaseStudy[] {
  return projectsData;
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projectsData.find((project) => project.slug === slug);
}
