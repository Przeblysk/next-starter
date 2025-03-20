const SITE_URL = process.env.NEXT_PUBLIC_APP_URL!

export const siteConfig = {
  url: SITE_URL,
  name: "Next Starter",
  description:
    "A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, i18n, Drizzle,Eslint, Prettier. Start your project quickly and efficiently.",
  keywords: [
    "Next.js",
    "React",
    "Next.js starter",
    "Next.js boilerplate",
    "Starter Template",
    "Tailwind CSS",
    "TypeScript",
    "Shadcn/ui",
    "Next-auth",
    "Drizzle",
    "Next-intl",
    "i18n"
  ],
  author: "Przeblysk",
  ogImage: `${SITE_URL}/og.png`,
  links: {
    twitter: "https://twitter.com/vercel",
    github: "https://github.com/vercel/next.js"
  }
}
