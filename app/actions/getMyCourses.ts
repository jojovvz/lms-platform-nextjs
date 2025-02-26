"use server";

import { getCurrentUser } from "./findUser";

export const getMyCourses = async () => {
  const user = await getCurrentUser();
  const userId = user?.id;
  const query = `
  query GetMyCourses($userId: String!) {
    getMyCourses(userId: ${userId}) {
      createdAt
      description
      discount
      id
      instructor
      price
      rating
      studentsEnrolled
      thumbnail
      title
      updatedAt
      video
    }
  }
`;

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  console.log("My Courses: ", result.data.getMyCourses);
  return result.data.getMyCourses;
};
