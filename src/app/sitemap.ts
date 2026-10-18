import type { MetadataRoute } from "next";
import { discoverDakarDetails } from "@/data/discoverDetails";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fourpoint.linkup.sn";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["", "/discover", "/ten", "/transport", "/map", "/infos"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const discoverRoutes = discoverDakarDetails.map((detail) => ({
    url: `${siteUrl}/discover/${detail.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...discoverRoutes];
}
