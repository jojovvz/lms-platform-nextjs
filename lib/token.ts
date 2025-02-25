import { uuid as uuidv4 } from 'uuidv4';
import { getVerificationTokenByEmail } from './verification-token';
import { db } from '@/drizzle/client';
import { verificationTokens } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export const generateVerificationToken = async (email: string) => {
    try {
        const token = uuidv4();
        const expires = new Date(new Date().getTime() + 3600 * 1000);

        const existingToken = await getVerificationTokenByEmail(email);

        if (existingToken) {
            await db.delete(verificationTokens)
                .where(eq(verificationTokens.id, existingToken.id));
        }

        const verificationToken = await db.insert(verificationTokens).values({
            email: email,
            token: token,
            expires: expires
        }).returning();
    
        return verificationToken[0]

    } catch (error: any) {
        throw new Error('Error: ', error);
    }
};