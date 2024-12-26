"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl"

import { LoginForm } from "./login-form"

interface LoginFormDialogProps {
  triggerText?: string
  triggerClassName?: string
}

export function LoginFormDialog({
  triggerText,
  triggerClassName
}: LoginFormDialogProps) {
  const t = useTranslations()
  triggerText = t("Auth.sign-in")
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={triggerClassName}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="py-2 text-center text-2xl">
          {t("Auth.welcome-back")}
        </DialogTitle>
        <LoginForm variant="plain" />
      </DialogContent>
    </Dialog>
  )
}
