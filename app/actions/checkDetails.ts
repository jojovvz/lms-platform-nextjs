"use server";

import { db } from "@/drizzle/client";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const checkDetails = async (email: string | undefined) => {
    try {
        const user = await db.select()
            .from(users)
            .where(eq(users.email, email as any));

        if (user.length === 0) {
            return false;
        }

        const { bio, image, phone } = user[0];
        if (bio == null || !image == null || !phone == null) {
            return false;
        }

        return true;
    } catch (error: any) {
        console.error("Error in checkDetails:", error);
        throw new Error("Failed to check user details");
    }
};
