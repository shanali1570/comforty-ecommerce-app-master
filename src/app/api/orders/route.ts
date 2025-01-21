import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

interface OrderItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export const POST = async (request: NextRequest) => {
  try {
    const { cart, email, id, totalAmt }: { cart: OrderItem[]; email: string; id: string; totalAmt: number } =
      await request.json();

    if (!cart || !email || !id || !totalAmt) {
      return NextResponse.json({
        success: false,
        message: "Invalid request. Missing required fields.",
      });
    }

    const orderDoc = {
      _type: "order",
      _id: id, // Use the payment session ID as the document ID
      email,
      totalAmount: totalAmt,
      items: cart.map((item) => ({
        _type: "product",
        _id: item._id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      createdAt: new Date().toISOString(),
    };

    console.log("Saving Order to Sanity:", orderDoc);

    await client.createIfNotExists(orderDoc);

    return NextResponse.json({
      success: true,
      message: "Order saved successfully to Sanity.",
    });
  } catch (error) {
    console.error("Error in /api/orders:", error);

    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred.",
    });
  }
};
