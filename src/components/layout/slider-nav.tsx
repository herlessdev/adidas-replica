"use client";
import { useEffect, useState } from "react";
import { Roboto_Serif } from "next/font/google";
import cx from "@/libs/cx";
import ArrowDown from "@/assets/icons/arrow-down";

interface Props {
  dictionary: any;
}

const SliderNav = ({ dictionary }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dictionary?.length);
    }, 2500);
  }, [dictionary]);
  return (
    <div className="bg-black text-white w-full h-[40px] flex justify-center items-center relative">
      {dictionary?.map((u, i) => (
        <p
          className={cx(
            "tracking-[.75px] w-full flex gap-4 items-center justify-center uppercase font-bold text-[11px] top-1/2 left-1/2 absolute translate-x-[-50%] translate-y-[-50%] transition-opacity duration-[0.75s]",
            currentIndex === i ? "opacity-1 z-10" : "opacity-0 z-[-1]"
          )}
          key={i}
        >
          {dictionary[currentIndex]}
          <ArrowDown className="w-5 h-5" />
        </p>
      ))}
    </div>
  );
};

export default SliderNav;
