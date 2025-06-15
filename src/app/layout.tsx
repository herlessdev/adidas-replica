import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/carProvider";
import ClientLayout from "@/components/layout/client-layout";

export const metadata: Metadata = {
  title: "Adidas replica",
  description: "Página web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-[100vh]">
        <CartProvider>
          <ClientLayout>{children}</ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
