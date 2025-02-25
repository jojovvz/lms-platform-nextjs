"use server";

import { FieldValues } from "react-hook-form";

export const createCourse = async (data: FieldValues) => {
    const { description, instructor, price, thumbnail, title, video, discount } = data;
    const mutation = `
      mutation {
        createCourse(
          title: "${title}", 
          description: "${description}", 
          instructor: "${instructor}", 
          price: ${price}, 
          discount: ${discount}, 
          thumbnail: "${thumbnail}", 
          video: "${video}"
        ) {
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
