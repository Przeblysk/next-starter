"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Locale } from "@/i18n/config"
import { setUserLocale } from "@/services/locale"
import { Loader2 } from "lucide-react"
import { useLocale } from "next-intl"
import { useTransition } from "react"

const LanguageLabel: Record<string, string> = {
  en: "🇺🇸 English",
  zh: "🇨🇳 简体中文"
}

const availableLanguageTags = ["en", "zh"]

export const LanguageSwitcher = () => {
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()
  const onSelect = (value: string) => {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative h-8 w-20 rounded-sm" variant="ghost">
          {isPending ? (
            <Loader2 className="mr-2 size-4 animate-spin" />
          ) : (
            LanguageLabel[locale]
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLanguageTags.map((locale) => (
          <DropdownMenuItem key={locale} onSelect={() => onSelect(locale)}>
            {LanguageLabel[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
