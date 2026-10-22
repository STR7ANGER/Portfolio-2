/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  // Trailing-slash variants would otherwise be reachable as duplicate URLs.
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // One year, this domain only. Deliberately omits `includeSubDomains`
          // and `preload`: those are near-irreversible (removal from the HSTS
          // preload list takes months) and would break any future non-HTTPS
          // subdomain. Add them once you're sure every subdomain is HTTPS.
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000",
          },
        ],
      },
    ]
  },
}

export default nextConfig
