import { NextResponse } from 'next/server'

import { stripe } from '@/lib/stripe'

export async function POST(req: Request) {
  const { price, name } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/course/1`,
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
