import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { siteConfig, siteUrl } from "@/lib/site-config"

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"
export const ogAlt = `${siteConfig.name} — ${siteConfig.jobTitle}`

const STACK = ["Next.js", "Node.js", ".NET", "PostgreSQL", "AWS", "Azure"]

/**
 * Shared renderer for both the OpenGraph and Twitter card images.
 * Note: Satori requires an explicit `display: flex` on any element with
 * more than one child, so every wrapper below sets it.
 */
export async function renderOgImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo-mark.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(255,255,255,0.16) 0%, rgba(0,0,0,0) 48%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={84} height={84} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#a1a1aa",
              letterSpacing: 4,
            }}
          >
            {siteUrl.replace(/^https?:\/\//, "").toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -2,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 34,
              color: "#d4d4d8",
              maxWidth: 940,
              lineHeight: 1.35,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {STACK.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                backgroundColor: "rgba(255,255,255,0.06)",
                color: "#e4e4e7",
                fontSize: 25,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize
  )
}
