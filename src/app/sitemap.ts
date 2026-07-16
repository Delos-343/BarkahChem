import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Generated as a static /sitemap.xml during export. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
