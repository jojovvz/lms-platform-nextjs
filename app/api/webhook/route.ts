import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("Stripe-Signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    throw new Error("Webhook Error: " + error.message);
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("Session: ", session);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
