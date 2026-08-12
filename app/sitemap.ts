import type { MetadataRoute } from "next";

// Set this only after choosing and approving the real deployment hostname.
// The local fallback keeps development and tests self-contained.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
