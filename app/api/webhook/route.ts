import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const body = await request.text();
    const signature = request.headers.get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature as any,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error) {
        return new NextResponse("invalid signature", { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === 'checkout.session.completed') {
        console.log(`🔔 Payment received!`);
        console.log("Data: ", session);
    }
}