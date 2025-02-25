'use server'

import { auth } from "@/auth";
import { db } from "@/drizzle/client";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const getCurrentUser = async () => {
    try {
        const session = await auth();

        if (!session?.user) {
            return null;
        }

        const user = await db.select()
            .from(users)
            .where(eq(users.email, session.user.email as any));

        return user[0];
        
    } catch (error: any) {
        throw new Error(error);
    }
}