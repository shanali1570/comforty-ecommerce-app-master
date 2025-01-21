"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "@/redux/ComfortySlice";
import toast from "react-hot-toast";
import { StoreState } from "@/types";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch();
  const { cart } = useSelector((state: StoreState) => state.shoppers);
  const userEmail = "smsali100@gmail.com"; // Replace with authenticated user's email

  useEffect(() => {
    const saveOrder = async () => {
      try {
        console.log("Sending order to API:", { cart, sessionId, userEmail });

        const response = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart,
            email: userEmail,
            id: sessionId,
            totalAmt: cart.reduce((total, item) => total + item.price * item.quantity, 0),
          }),
        });

        const data = await response.json();
        console.log("Order API Response:", data);

        if (data.success) {
          toast.success("Order saved successfully!");
        } else {
          toast.error(data.message || "Failed to save order.");
        }
      } catch (error) {
        console.error("Error saving order:", error);
        toast.error("An error occurred while saving the order.");
      }
    };

    if (sessionId && cart.length > 0) {
      saveOrder();
      dispatch(resetCart()); // Clear the cart
      toast.success("Your cart has been reset!");
    }
  }, [cart, dispatch, sessionId, userEmail]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
      {sessionId && (
        <p>
          Thank you for your purchase! Your session ID: <strong>{sessionId}</strong>
        </p>
      )}
      <a
        href="/orders"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
      >
        View Orders
      </a>
    </div>
  );
};

export default SuccessPage;
