import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, cardNumber, expiry, cvc } = await req.json();

    // Fake validation
    if (!amount || !cardNumber || !expiry || !cvc) {
      return NextResponse.json({ success: false, message: "Missing payment details." }, { status: 400 });
    }

    // Simulate successful payment
    if (cardNumber === "4242424242424242") {
      return NextResponse.json({ success: true, message: "Payment succeeded!" });
    }

    // Simulate failed payment
    return NextResponse.json({ success: false, message: "Payment failed. Invalid card details." });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: "An error occurred." }, { status: 500 });
  }
}
