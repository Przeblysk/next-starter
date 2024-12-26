"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card"

export function LoginForm() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
        <CardDescription className="text-center">
          Choose your preferred sign in method
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          variant="outline"
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full">
          <Image
            src="/github.svg"
            alt="Github"
            width={16}
            height={16}
            className="mr-2"
          />
          Github
        </Button>
        <Button
          variant="outline"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full">
          <Image
            src="/google.svg"
            alt="Google"
            width={16}
            height={16}
            className="mr-2"
          />
          Google
        </Button>
      </CardContent>
    </Card>
  )
}
