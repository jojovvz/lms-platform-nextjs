'use server'

import { FieldValues } from "react-hook-form";

export const verifyUser = async (data: FieldValues) => {
    const mutation = `
        mutation {
            verifyUser(token: "${data.token}") {
                id
                email
                emailVerified
            }
        }
    `;
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: mutation }),
    });

    if (!response.ok) {
        throw new Error("Failed to verify user");
    }

    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors[0].message);
    }

    return result.data.createUser;
};