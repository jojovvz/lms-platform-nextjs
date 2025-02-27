'use server'
import { signIn } from "@/auth"

export const socialSignIn = async (provider: "google") => {
    await signIn(provider);
}