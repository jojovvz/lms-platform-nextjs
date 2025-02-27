export const getTransactionDetails = async (courseId: string) => {
  const response = await fetch(
    "https://lms-platform-nextjs-website.vercel.app/api/webhook",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courseId
      }),
    }
  );

  if (!response.ok) {
    throw new Error("webhook API Failed!");
  }

  const webhookData = await response.json();
  console.log(webhookData);
  return webhookData;
};
