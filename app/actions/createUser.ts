'use server'

import { FieldValues } from "react-hook-form";

export const createUser = async (data: FieldValues) => {
    const mutation = `
        mutation {
            createUser(name: "${data.name}", email: "${data.email}", password: "${data.password}") {
                id
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
        throw new Error("Failed to create user");
    }

    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors[0].message);
    }

    return result.data.createUser;
};