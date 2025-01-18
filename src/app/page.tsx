"use client";
import cx from "@/libs/cx";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700", "400", "100"],
});

export default function Home() {
  const [dictionary, setDictionary] = useState<any | null>(null);
  useEffect(() => {
    const fetchDictionary = async () => {
      const data = await import("../locales/es.json").then(
        (module) => module.default
      );
      setDictionary(data);
    };

    fetchDictionary();
  }, []);
  return (
    <section className="">
      <div>
        <div
          className={cx(
            roboto.className,
            "bg-[#eceff1] py-3.5 uppercase text-center text-sm tracking-[.15px]"
          )}
        >
          {dictionary?.home?.["first-seccion"]?.description}
        </div>
      </div>
    </section>
  );
}
