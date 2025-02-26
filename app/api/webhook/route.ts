import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(request: Request) {
  let event: Stripe.Event;

  try {
    const signature = (await headers()).get("Stripe-Signature");
    event = stripe.webhooks.constructEvent(
      await request.text(),
      signature as string,
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
