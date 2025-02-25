'use server'

import { db } from "@/drizzle/client"
import { users } from "@/drizzle/schema"
import { eq } from "drizzle-orm"


export const findInstructor = async (instructorId: string) => {
    try {
        const instructor = await db.select()
            .from(users)
            .where(eq(users.id, instructorId));

        return instructor[0];

    } catch (error: any) {
        throw new Error(error.message);
    }
}