"use server";

export const getCourses = async () => {
    const query = `
        query  {
            getCourses {
                id
                title
                description
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
    throw new Error("Failed to create user");
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.getCourses;
};
