"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useTransition } from "react"

export const SignInButton = () => {
  const t = useTranslations()
  const [isPending, startTransition] = useTransition()

  const handleSignIn = () => {
    startTransition(async () => {
      await signIn("github")
    })
  }

  return (
    <Button className="font-bold" onClick={handleSignIn} disabled={isPending}>
      {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
      {t("Auth.sign-in")}
    </Button>
  )
}
