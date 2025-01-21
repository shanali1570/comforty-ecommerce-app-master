"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface OrderItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  _id: string;
  email: string;
  totalAmount: number;
  items: OrderItem[];
  createdAt: string;
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const userEmail = "smsali100@gmail.com"; // Replace with the logged-in user's email

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("Fetching orders for email:", userEmail);

        const query = `*[_type == "order" && email == $email]{
          _id,
          email,
          totalAmount,
          items,
          createdAt
        } | order(createdAt desc)`;

        const data: Order[] = await client.fetch(query, { email: userEmail });

        console.log("Fetched orders:", data);

        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userEmail]);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="p-4">
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="border p-4 rounded shadow">
              <p>
                <strong>Order ID:</strong> {order._id}
              </p>
              <p>
                <strong>Total Amount:</strong> ${order.totalAmount}
              </p>
              <p>
                <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Items:</strong>
              </p>
              <ul className="pl-4 list-disc">
                {order.items.map((item) => (
                  <li key={item._id}>
                    {item.title} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrdersPage;
