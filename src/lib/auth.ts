import db from "@/db/drizzle"
import { accounts, sessions, users, verificationTokens } from "@/db/schema"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    // @ts-expect-error Drizzle adapter type mismatch
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens
  }),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
})
