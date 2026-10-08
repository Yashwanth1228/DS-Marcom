import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/about",
    "/properties",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/properties/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...projectRoutes];
}
