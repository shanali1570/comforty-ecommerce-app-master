import { ProductData } from "@/types"; // Ensure this imports correctly
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Define the POST handler
export const POST = async (request: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string); // Make sure STRIPE_SECRET_KEY is defined in your environment variables

    try {
        const reqBody = await request.json(); // Parse the JSON body of the request
        const { items, email } = reqBody; // Destructure to get items and email directly

        // Map through items to create line_items for Stripe checkout session
        const extractingItems = items.map((item: ProductData) => ({
            quantity: item?.quantity,
            price_data: {
                currency: "usd",
                unit_amount: Math.round(item.price * 100), // Convert price to cents
                product_data: {
                    name: item?.title || 'Product',  // Fallback in case title is undefined 
                    description: item?.description || '',  // Fallback for description 
                    /* images might be needed here */
                    /* images: item?.image ? [item.image] : [], */
                },
            },
        }));

        const origin = request.headers.get("origin"); // Get origin URL from headers

        // Create a checkout session using Stripe's API
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: extractingItems,
            mode: "payment",
            success_url: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cancel/?canceled=true`,
            metadata:{
                email,
            },
        });

       return NextResponse.json({ url : session.url });   /// Returns the URL of the checkout session.

    } catch (error) {
       console.error("Error creating checkout session:", error);  /// Log error for debugging.
       return NextResponse.json({ error }, { status : 500 });  
    }
};
