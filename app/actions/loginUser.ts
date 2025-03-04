import { signIn } from "next-auth/react";
import { FieldValues } from "react-hook-form";

export const loginUser = async (data: FieldValues) => {
    try {
        const response = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (response?.error) {
            throw new Error(response.error);
        }

        if (response?.status !== 200) {
            throw new Error("An unexpected error occurred during login.");
        }

        return response;
    } catch (error: any) {
        console.error("Login error:", error);
        throw new Error(error.message || "An error occurred while logging in.");
    }
};