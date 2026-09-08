import { MetadataRoute } from "next";
import { siteConfig } from "@/shared/config/site";
import { supportedLocales } from "@/shared/config/i18n";
import { getAllProjects } from "@/modules/projects";
import { getAllPosts } from "@/modules/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/teaching",
    "/research",
    "/publications",
    "/stack",
    "/blog",
    "/contact",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const projects = getAllProjects();
  const posts = getAllPosts();

  for (const locale of supportedLocales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }

    for (const project of projects) {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }

    for (const post of posts) {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
