import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/drizzle/client"
import authConfig from "./auth.config";
import { users } from "./drizzle/schema";
import { eq } from "drizzle-orm";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  ...authConfig,
  session: {
    strategy: "jwt"
  },
  events: {
    async linkAccount({ user }) {
      await db.update(users)
        .set({
          emailVerified: new Date()
        })
        .where(eq(users.email, user.email as any))
    }
  },
  secret: process.env.AUTH_SECRET
});