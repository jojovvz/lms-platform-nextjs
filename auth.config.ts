import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { compare } from "bcryptjs";
import { db } from "./drizzle/client";
import { users } from "./drizzle/schema";
import { eq } from "drizzle-orm";

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.error("Missing credentials");
                    throw new Error('Invalid credentials!');
                }

                try {
                    const user = await db
                        .select()
                        .from(users)
                        .where(eq(users.email, credentials.email as string))

                    if (!user) {
                        console.error("User not found:", credentials.email);
                        throw new Error('User not found');
                    }

                    const isCorrectPassword = await compare(credentials.password as string, user[0].password as string);

                    if (!isCorrectPassword) {
                        console.error("Incorrect password for user:", credentials.email);
                        throw new Error('Invalid credentials!');
                    }

                    if (!user[0].emailVerified) {
                        throw new Error('Email Not Verified');
                    }

                    console.log("User authenticated successfully:", user[0].email);
                    return user[0];  

                } catch (error) {
                    console.error("Authentication error:", error);
                    throw new Error('An error occurred during login');
                }
            },
        })
    ],
} satisfies NextAuthConfig