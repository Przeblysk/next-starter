"use client"

import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useTransition } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card"

interface LoginFormProps {
  variant?: "default" | "plain"
}

export function LoginForm({ variant = "default" }: LoginFormProps) {
  const t = useTranslations()
  const CardComponent = variant === "plain" ? "div" : Card

  const [isPending, startTransition] = useTransition()

  const handleSignIn = (provider: string) => {
    startTransition(async () => {
      await signIn(provider, { callbackUrl: "/" })
    })
  }

  return (
    <CardComponent
      className={cn(
        "w-[380px] relative",
        variant === "plain" && "border-none shadow-none"
      )}>
      {isPending && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-dashed border-slate-200" />
        </div>
      )}
      {variant === "default" && (
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            {t("Auth.welcome-back")}
          </CardTitle>
          <CardDescription className="text-center">
            {t("Auth.choose-sign-in-method")}
          </CardDescription>
        </CardHeader>
      )}
      <CardContent className="grid gap-4">
        <Button
          variant="outline"
          onClick={() => handleSignIn("github")}
          disabled={isPending}
          className="w-full">
          <FaGithub className="h-6 w-6" />
          Github
        </Button>
        <Button
          variant="outline"
          onClick={() => handleSignIn("google")}
          disabled={isPending}
          className="w-full">
          <FaGoogle className="h-6 w-6" />
          Google
        </Button>
      </CardContent>
    </CardComponent>
  )
}
