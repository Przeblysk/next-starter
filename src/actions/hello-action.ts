"use server"

import { auth } from "@/lib/auth"

export const helloAction = async (message: string) => {
  const session = await auth()

  if (!session || !session.user) {
    return {
      message: `Your message is from server.This is your message 👉 ${message}`
    }
  }
  return {
    message: `Hello ${session.user.name} 👋, This message is from server!!!This is your message 👉 ${message}`
  }
}
