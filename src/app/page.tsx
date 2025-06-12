"use client";
import { useEffect, useState } from "react";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <ThirdSection dictionary={dictionary?.["third-section"]} />
    </section>
  );
}
