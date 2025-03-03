import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { getTransactionDetails } from "@/app/actions/transaction";

export async function POST(req: Request) {
  const { price, name, courseId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: name,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/course/${courseId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/?canceled=true`,
    });


    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
