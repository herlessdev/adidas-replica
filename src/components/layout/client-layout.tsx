"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/checkout");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      const mod = await import("../../locales/es.json");
      setDictionary(mod.default);
    };

    loadDictionary();
  }, []);

  return (
    <>
      {!hideLayout && <Navbar dictionary={dictionary?.navbar} />}
      {children}
      {!hideLayout && <Footer dictionary={dictionary?.footer} />}
    </>
  );
}
