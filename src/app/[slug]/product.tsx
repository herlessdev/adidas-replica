/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Star from "@/assets/icons/star";
import { useCart } from "@/context/carProvider";
import cx from "@/libs/cx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Product = ({ dictionary, product }: any) => {
  const [indexSelect, setIndexSelect] = useState(0);
  const [sizeIndexSelect, setSizeIndexSelect] = useState(0);
  const { addToCart } = useCart();
  console.log(product?.colors?.[indexSelect]);
  console.log(product);

  return (
    <section className="flex items-start">
      <div className="grid grid-cols-2 items-stretch gap-x-0.5 w-[calc(100%-320px)]">
        <div className="relative w-full">
          <div>
            <a>Atrás</a>
            <a>Inicio</a>
          </div>
          {product && (
            <Image
              src={product?.colors?.[indexSelect]?.url?.["full"]}
              alt={product?.name}
              fill
              style={{ objectFit: "cover" }}
              className=""
            />
          )}
        </div>
        <div className="">
          <video
            preload="auto"
            muted
            loop
            autoPlay
            playsInline
            src={product?.colors?.[indexSelect]?.url?.["video"]}
          />
        </div>
      </div>

      <div className="ml-auto w-[320px] px-[20.5px] py-[29.5px] text-[15px] leading-[22px] tracking-wider">
        <div className="flex items-center justify-between">
          <div className="flex">
            <p>{product?.category}</p>
            <p className="font-bold px-1">•</p>
            <p className="">{product?.marca}</p>
          </div>
          <div className="flex gap-1">
            {Array(5)
              .fill(0)
              .map((item, i) => (
                <Star key={i} className="w-2.5 h-2.5 text-black" />
              ))}
          </div>
        </div>

        <p className="font-bold text-[28.5px] leading-[33px] mt-2">
          {product?.name?.toUpperCase()}
        </p>

        <div className="flex gap-1 mt-3 tracking-normal">
          <div className="relative">
            <p className="text-[#767677]">S/ {product?.price}</p>
            <div className="absolute h-[.1px] w-full bg-[#767677] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <p className="text-[#e64545] font-bold">S/ {product?.offert}</p>
        </div>

        {/*colors */}
        <div className="mt-10 flex flex-col">
          <p className="capitalize font-bold tracking-normal">
            {dictionary?.colors}
          </p>
          <div className="mt-[11px] flex gap-[5px]">
            {product?.colors?.map((color: any, i: number) => (
              <div
                key={i}
                className="group cursor-pointer duration-300 w-[70px] h-[68px] relative"
                onClick={() => {
                  setIndexSelect(i);
                }}
              >
                <Image fill src={color?.url?.[180]} alt={""} />
                <div
                  className={cx(
                    "w-full h-1 left-0 bottom-0 absolute group-hover:bg-black",
                    indexSelect === i ? "bg-black" : "bg-transparent"
                  )}
                />
              </div>
            ))}
          </div>
          <p className="text-[13px] leading-[16px] mt-[7px] tracking-wide">
            {product?.colors?.[indexSelect]?.name}
          </p>
        </div>
        {/*size */}
        <div className="mt-10">
          <p className="capitalize text-base font-bold tracking-normal">
            {dictionary?.sizes}
          </p>

          <div className="mt-[10px] flex gap-2 cursor-pointer">
            {product?.sizes?.map((size: string, i: any) => (
              <div
                key={i}
                onClick={() => {
                  setSizeIndexSelect(i);
                }}
                className={cx(
                  "group relative inline-flex px-4 py-3 text-xs",

                  !product?.colors?.[indexSelect]?.stock?.[size]
                    ? sizeIndexSelect === i
                      ? "bg-black/40 text-white font-extrabold tracking-tighter"
                      : "bg-black/5 text-black/50 hover:bg-black/40 hover:text-white"
                    : sizeIndexSelect === i
                    ? "bg-black text-white font-extrabold tracking-tighter"
                    : "bg-black/10 hover:bg-black hover:text-white"
                )}
              >
                {" "}
                {!product?.colors?.[indexSelect]?.stock?.[size] && (
                  <div
                    className={cx(
                      "group-hover:bg-white absolute w-[calc(100%-20px)] h-[.5px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]",
                      sizeIndexSelect === i ? "bg-white" : "bg-black/50"
                    )}
                  />
                )}
                <p>{size}</p>
              </div>
            ))}
          </div>
        </div>

        <Link
          className="relative inline-flex mt-10"
          href={"/car"}
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { colors, ...rest } = product;
            addToCart({
              ...rest,
              color: product?.colors?.[indexSelect],
              size: product?.sizes?.[sizeIndexSelect],
            });
          }}
        >
          <button className="group bg-black text-white uppercase flex gap-11 font-bold text-sm tracking-[2px] px-3.5 py-3.5 z-10 relative">
            {dictionary?.car?.name}
            <Image
              src="/arrow-right.svg"
              alt="arrow-right"
              width={24}
              height={24}
            />
            <div className="group-hover:opacity-50 w-full h-full bg-black absolute top-0 left-0 opacity-0 duration-300" />
          </button>
          <div className="absolute top-1 left-1 z-0 bg-white border-black border-[1px] w-full h-full" />
        </Link>
      </div>
    </section>
  );
};

export default Product;
