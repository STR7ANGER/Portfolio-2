import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { siteConfig, siteUrl } from "@/lib/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Aditya",
    lastName: "Maurya",
    username: "STR7ANGER",
    gender: "unspecified",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // The hero shows the phone/email intentionally; stop mobile Safari from
  // re-styling unrelated number strings elsewhere on the page.
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: [{ color: "#000000" }],
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="bg-black text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  )
}
