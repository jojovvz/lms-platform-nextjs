import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@/drizzle/client";
import { payments } from "@/drizzle/schema";
import { getCurrentUser } from "@/app/actions/findUser";

export async function POST(request: Request) {
  const { courseId } = await request.json();
  let event: Stripe.Event;
  const user = await getCurrentUser();

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
      await db.insert(payments)
        .values({
          id: session.id,
          amount: session.amount_total,
          status: session.payment_status,
          userId: user?.id,
          courseId: courseId,
        } as any);
      console.log("Session: ", session);    
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
