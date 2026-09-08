import { blogPosts } from "../data/posts";
import { BlogPost } from "@/shared/types";

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
