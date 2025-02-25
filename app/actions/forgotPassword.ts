'use server'

import { generateVerificationToken } from "@/lib/token";
import { passwordResetEmail } from "./password-reset-email";

export const forgotPassword = async (email: string) => {
    try {
        const verificationToken = await generateVerificationToken(email);

        await passwordResetEmail(email, verificationToken.token);
    } catch (error: any) {
        throw new Error(error);
    }
}