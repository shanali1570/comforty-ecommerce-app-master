import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopFooter from "@/components/TopFooter";
import SideBar from "@/components/SideBar";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";

import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "Comforty-Ecommerce-App",
  description: "Comforty Ecommerce application for Hacktoon education purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Layout >
          <WishlistProvider>
        <Header />
        <main>
          {children}
        </main>
        <TopFooter/>
        <Footer />

        <SideBar />
        <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#FFFFFF",
              },
            }}
          />
          </WishlistProvider>
        </Layout>
        
        
      </body>
    </html>
  );
}
