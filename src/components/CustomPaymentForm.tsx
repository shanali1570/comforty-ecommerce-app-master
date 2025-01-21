"use client";

import React, { useState } from "react";

const CustomPaymentForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("An error occurred while processing payment."+error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Custom Payment Form</h1>
      {message && <p className={`mb-4 ${message.includes("succeeded") ? "text-green-500" : "text-red-500"}`}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter card number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Expiry</label>
          <input
            type="text"
            name="expiry"
            value={formData.expiry}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">CVC</label>
          <input
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter CVC"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default CustomPaymentForm;
