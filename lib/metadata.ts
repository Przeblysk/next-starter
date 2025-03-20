import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export function createMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  canonicalUrl,
  ogImage = siteConfig.ogImage,
  noIndex = false
}: {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  noIndex?: boolean
}): Metadata {
  const spliceTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  return {
    metadataBase: new URL(siteConfig.url),
    title: spliceTitle,
    description,
    keywords,
    authors: [
      {
        name: siteConfig.author
      }
    ],
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl
        }
      : undefined,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: spliceTitle,
      description,
      siteName: siteConfig.name,
      images: [siteConfig.ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: spliceTitle,
      description,
      images: [ogImage],
      site: siteConfig.url,
      creator: siteConfig.author
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png"
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
