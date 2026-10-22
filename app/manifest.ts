import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortTitle,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    categories: ["portfolio", "technology", "developer"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
