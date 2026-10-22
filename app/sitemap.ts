import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/Aditya-Maurya-Resume.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]
}
