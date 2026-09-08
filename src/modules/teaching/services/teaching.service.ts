import { teachingCourses } from "../data/teaching";
import { TeachingCourse } from "@/shared/types";

export function getTeachingPortfolio(): TeachingCourse[] {
  return teachingCourses;
}
