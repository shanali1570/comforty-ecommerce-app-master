"use client";

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!stripe || !elements) {
      setError("Stripe is not loaded yet. Please try again.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card details are missing.");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post("/api/payment-intent", { amount: 5000 });
      console.log("PaymentIntent response:", data); // Debug API response
      const { clientSecret } = data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        setError(result.error.message || "Payment failed.");
      } else if (result.paymentIntent?.status === "succeeded") {
        setSuccess("Payment succeeded!");
      }
    } catch (err: unknown) {
      let errorMessage = "An error occurred. Please try again.";
  
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message || err.message;
      }
  
      console.error("Error in payment flow:", errorMessage);
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-md">
      <h1 className="text-lg font-bold mb-4">Card Payment</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  color: "#32325d",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#fa755a",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? "Processing Payment..." : "Pay $50.00"}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
