"use server"

import { auth } from "@/lib/auth"
import { getTranslations } from "next-intl/server"

export const helloAction = async (message: string) => {
  const session = await auth()
  const t = await getTranslations()

  if (!session || !session.user) {
    return {
      message: t("HelloAction.not-logged-in-message", {
        message
      })
    }
  }
  return {
    message: t("HelloAction.logged-in-message", {
      username: session.user.name ?? "",
      message
    })
  }
}
