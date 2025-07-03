/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import SliderNav from "./slider-nav";
import { Roboto } from "next/font/google";
import cx from "@/libs/cx";
import { useCart } from "@/context/carProvider";
import { useMemo } from "react";
import type { Navbar } from "@/interface/dictionary";
import Link from "next/link";

interface Props {
  dictionary: Navbar;
}

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700", "400", "100"],
});

const Navbar = ({ dictionary }: Props) => {
  const { cart } = useCart();

  const resumen = useMemo(() => {
    const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart?.reduce(
      (acc, item) => acc + item.quantity * (item.offert ?? item.price),
      0
    );

    const igv = (total / 118) * 18;
    const subtotal = total - igv;

    return {
      totalItems,
      subtotal: subtotal.toFixed(2),
      igv: igv.toFixed(2),
      total: total.toFixed(2),
    };
  }, [cart]);
  return (
    <>
      <SliderNav dictionary={dictionary?.slider} />
      <nav className="flex flex-col pl-10 pr-[67px] justify-between border-gray border-b-[0.5px]">
        <ul className="max-[950px]:hidden flex text-[11px] leading-[14px] tracking-[.38px] justify-end gap-5 py-2 text-black text-opacity-70">
          {dictionary?.["list-hidden"].map((u, i) => (
            <li key={i} className="hover:underline">
              {u}
            </li>
          ))}
        </ul>
        <div className="flex pt-[11px] pb-[7px] justify-between">
          <div className="hidden items-center justify-center max-[950px]:flex">
            <Image src="/menu.svg" width={24} height={24} alt="menu" />
          </div>
          <a className="flex" href={"/"}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={60}
              height={38.39}
              className="mt-[-30px] max-[950px]:mt-0"
            />
          </a>
          <div className="flex gap-4 items-center">
            <ul
              className={cx(
                roboto.className,
                "flex text-[13px] leading-[1] uppercase gap-5 items-center max-[950px]:hidden"
              )}
            >
              {dictionary?.["list"].map((u: any, i: any, arr: any) => (
                <li
                  key={i}
                  className={cx(
                    "tracking-[2px]",
                    i < 4 && "font-bold",
                    i === arr.length - 1 &&
                      "text-[#e3383f] font-bold hidden xl:flex"
                  )}
                >
                  {u}
                </li>
              ))}
            </ul>
            <input
              placeholder={dictionary?.input?.name}
              className="bg-[#eceff1] capitalize px-3 py-[8px] w-[120px] xl:w-[198px] text-[13.4px] leading-[16px] max-[950px]:hidden"
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
              <li>
                <Link className="relative flex" href={"/cart"}>
                  {resumen?.totalItems > 0 && (
                    <p className="bg-[#197fb6] absolute left-[50%] bottom-[70%] rounded-full w-[22px] h-[22px] text-sm text-white font-bold flex items-center justify-center">
                      {resumen?.totalItems}
                    </p>
                  )}
                  <Image
                    src="/shopcar.svg"
                    alt="shopcar-icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
