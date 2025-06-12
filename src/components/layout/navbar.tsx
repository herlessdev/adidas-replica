/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import SliderNav from "./slider-nav";
import { Roboto } from "next/font/google";
import cx from "@/libs/cx";
import { useCart } from "@/context/carProvider";
import { useMemo } from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dictionary: any;
}

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700", "400", "100"],
});

const Navbar = ({ dictionary }: Props) => {
  const { cart } = useCart();

  const itemsTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);
  return (
    <>
      <SliderNav dictionary={dictionary?.slider} />
      <nav className="flex flex-col pl-10 pr-[67px] justify-between border-gray border-b-[0.5px]">
        <ul className="flex text-[11px] leading-[14px] tracking-[.38px] justify-end gap-5 py-2 text-black text-opacity-70">
          {dictionary?.["list-hidden"].map((u, i) => (
            <li key={i} className="hover:underline">
              {u}
            </li>
          ))}
        </ul>
        <div className="flex pt-[11px] pb-[7px] justify-between">
          <a className="flex" href={"/"}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={60}
              height={38.39}
              className="mt-[-30px]"
            />
          </a>
          <div className="flex gap-4 items-center">
            <ul
              className={cx(
                roboto.className,
                "flex text-[13px] leading-[1] uppercase gap-5 items-center"
              )}
            >
              {dictionary?.["list"].map((u:any, i:any, arr:any) => (
                <li
                  key={i}
                  className={cx(
                    "tracking-[2px]",
                    i < 4 && "font-bold",
                    i === arr.length - 1 && "text-[#e3383f] font-bold"
                  )}
                >
                  {u}
                </li>
              ))}
            </ul>
            <input
              placeholder={dictionary?.input?.name}
              className="bg-[#eceff1] capitalize px-3 py-[8px] w-[198px] text-[13.4px] leading-[16px]"
            />
            <ul className="flex gap-6">
              <li>
                <Image src="/user.svg" alt="user-icon" width={24} height={24} />
              </li>
              <li>
                <Image
                  src="/heart.svg"
                  alt="heart-icon"
                  width={24}
                  height={24}
                />
              </li>
              <li className="relative">
                {itemsTotal > 0 && (
                  <p className="bg-[#197fb6] absolute left-[50%] bottom-[70%] rounded-full w-[22px] h-[22px] text-sm text-white font-bold flex items-center justify-center">
                    {itemsTotal}
                  </p>
                )}
                <Image
                  src="/shopcar.svg"
                  alt="shopcar-icon"
                  width={24}
                  height={24}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
