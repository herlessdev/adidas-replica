"use client";
import { useEffect, useState } from "react";
import FirstSection from "./firstsection";
import SecondSection from "./secondsection";

export default function Home() {
  const [dictionary, setDictionary] = useState<any | null>(null);
  useEffect(() => {
    const fetchDictionary = async () => {
      const data = await import("../locales/es.json").then(
        (module) => module.default
      );
      setDictionary(data?.home);
    };

    fetchDictionary();
  }, []);
  console.log(dictionary);
  return (
    <section className="">
      <FirstSection dictionary={dictionary?.["first-section"]} />
      <SecondSection dictionary={dictionary?.["second-section"]} />
    </section>
  );
}
