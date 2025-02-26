export const payNow = async (price: number, name: string, courseId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/stripe-checkout`, {
        method: 'POST',
        body: JSON.stringify({ price, name, courseId }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to create checkout session');
    }
    
    const data = await res.json();
    // Redirect the user to the Stripe checkout page:
    window.location.href = data.url;
};
