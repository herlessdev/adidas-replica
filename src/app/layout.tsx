import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/context/carProvider";

export const metadata: Metadata = {
  title: "Adidas replica",
  description: "Página web",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dictionary = await import(`../locales/es.json`).then(
    (module) => module.default
  );

  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <header>
            <Navbar dictionary={dictionary?.navbar} />
          </header>
          {children}
          <Footer dictionary={dictionary?.footer} />
        </CartProvider>
      </body>
    </html>
  );
}
