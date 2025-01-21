"use client";

import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import Loader from "./Loader";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
        <Elements stripe={stripePromise}>
          {children}
          </Elements>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default Layout;
