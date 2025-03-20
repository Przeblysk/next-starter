"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const UserDropdown = ({ session: { user } }: { session: Session }) => {
  const t = useTranslations()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          className="overflow-hidden rounded-full"
          src={`${user?.image}`}
          alt={`${user?.name}`}
          width={32}
          height={32}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("Auth.my-account")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="w-[200px] flex flex-col items-center justify-center p-2">
          <Image
            className="overflow-hidden rounded-full"
            src={`${user?.image}`}
            alt={`${user?.name}`}
            width={100}
            height={100}
          />
          <h2 className="py-2 text-lg font-bold">{user?.name}</h2>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 size-4" /> <span>{t("Auth.sign-out")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
