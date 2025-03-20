import { ThemeProvider } from "@/components/theme-provider"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import { PropsWithChildren } from "react"

import "./globals.css"

import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Toaster } from "@/components/ui/toaster"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({})

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            {children}
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
