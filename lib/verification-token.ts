import { db } from "@/drizzle/client";
import { verificationTokens } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.select().from(verificationTokens).where(eq(verificationTokens.token, token));

        return verificationToken[0];
    } catch (error) {
        return null;
    }
}

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.select().from(verificationTokens).where(eq(verificationTokens.email, email));

        return verificationToken[0];
    } catch (error) {
        return null;
    }
}