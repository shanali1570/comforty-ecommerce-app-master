import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {

});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ success: false, message: "No session ID provided." }, { status: 400 });
  }

  try {
    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      return NextResponse.json({ success: true, message: "Payment verified." });
    } else {
      return NextResponse.json({ success: false, message: "Payment not completed." });
    }
  } catch (error: unknown) {
    let errorMessage = "Unknown error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { success: false, message: `Error verifying session: ${errorMessage}` },
      { status: 500 }
    );
  }
}
