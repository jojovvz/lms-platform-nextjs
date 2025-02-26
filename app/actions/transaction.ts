export const getTransactionDetails = async () => {
  const response = await fetch(
    "https://lms-platform-nextjs-website.vercel.app/api/webhook",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("webhook API Failed!");
  }

  const webhookData = await response.json();
  console.log(webhookData);
  return webhookData;
};
