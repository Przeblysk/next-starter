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
import { useLocale } from "next-intl"
import { useTransition } from "react"

const LanguageLabel: Record<string, string> = {
  en: "EN",
  zh: "中文"
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
        <Button className="relative h-8 w-8 rounded-sm" variant="ghost">
          {LanguageLabel[locale]}
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
