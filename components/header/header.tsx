import { siteConfig } from "@/config/site"
import { auth } from "@/lib/auth"

import { LoginFormDialog } from "../auth/login-form-dialog"
import { Logo } from "../logo"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeSwitcher } from "./theme-switcher"
import { UserDropdown } from "./user-dropdown"

export const Header = async () => {
  const session = await auth()

  return (
    <header className="border-grid sticky top-0 z-50 w-full h-[64px] border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="container w-full mx-auto flex h-16 items-center">
        <Logo className="mx-4" />
        <h3 className="hidden text-xl font-bold sm:block">{siteConfig.name}</h3>
        <nav className="flex items-center gap-1 ml-auto">
          {session ? <UserDropdown session={session} /> : <LoginFormDialog />}
          <ThemeSwitcher />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
