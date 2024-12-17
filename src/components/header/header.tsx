import { auth } from "@/lib/auth"

import { LanguageSwitcher } from "./language-switcher"
import { SignInButton } from "./sign-in-button"
import { ThemeSwitcher } from "./theme-switcher"
import { UserDropdown } from "./user-dropdown"

export const Header = async () => {
  const session = await auth()

  return (
    <header className="border-grid sticky top-0 z-50 w-full h-[64px] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container w-full mx-auto flex h-16 items-center">
        <h3 className="text-xl font-bold">next-starter</h3>
        <nav className="flex items-center gap-1 ml-auto">
          {session ? <UserDropdown session={session} /> : <SignInButton />}
          <ThemeSwitcher />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
