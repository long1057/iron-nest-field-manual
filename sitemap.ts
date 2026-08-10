import type { MetadataRoute } from "next";

const siteUrl = "https://iron-nest-field-manual.l016040610.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/guides",
    "/guides/gameplay",
    "/guides/first-firing-solution",
    "/guides/tactical-map",
    "/guides/elevation-calculator",
    "/guides/shell-types",
    "/guides/multiplayer",
    "/guides/demo-walkthrough",
    "/missions",
    "/missions/counter-battery",
    "/missions/mission-2",
    "/wiki",
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
