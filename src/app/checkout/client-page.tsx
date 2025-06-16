"use client";

import { useCart } from "@/context/carProvider";
import { useMemo } from "react";
import CheckoutButton from "./checkout-button";
import Link from "next/link";
import { Checkout } from "@/interface/dictionary";

interface Props {
  dictionary: Checkout;
}

export default function ClientPage({ dictionary }: Props) {
  const { cart } = useCart();

  const checkoutResume = useMemo(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce(
      (acc, item) => acc + (item?.offert ?? item?.price) * item.quantity,
      0
    );
    const igv = ((totalPrice / 118) * 18).toFixed(2); // si aplicás 18%

    return {
      totalItems,
      totalPrice,
      igv,
      items: cart.map((item) => ({
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        unit_price: item?.offert ?? item?.price,
        currency_id: "PEN",
      })),
    };
  }, [cart]);
  console.log(checkoutResume);
  return (
    <section className="flex flex-col items-center pt-16 gap-16">
      <div className="flex flex-col gap-2">
        <h1 className="uppercase font-bold text-3xl text-center">
          {dictionary?.pay}
        </h1>
        <div className="flex gap-2 text-[#767677] font-bold">
          <p>{`(${checkoutResume?.totalItems} ${
            checkoutResume?.totalItems > 1
              ? dictionary?.totalItems?.many
              : dictionary?.totalItems?.one
          })`}</p>
          <p>{`S/ ${checkoutResume?.totalPrice.toFixed(2)}`}</p>
        </div>
      </div>
      <div className="flex w-full justify-between px-28">
        <div className="flex flex-col flex-1">
          <label className="flex flex-col gap-10">
            <p className="uppercase font-bold text-lg">
              {dictionary?.contact?.name}
            </p>
            <input
              placeholder={dictionary?.contact?.email}
              className="self-start px-3 py-2 border-[1px] border-black/50"
            />
          </label>
        </div>
        <div className="flex flex-col flex-1 pl-[34%]">
          <div className="flex justify-between text-lg font-bold uppercase">
            <p>{dictionary?.order?.name}</p>
            <Link
              href={"/cart"}
              className="capitalize underline text-sm tracking-wider"
            >
              {dictionary?.order?.edit}
            </Link>
          </div>
          <div className="flex justify-between mt-6">
            <p>
              {checkoutResume?.totalItems}{" "}
              {checkoutResume?.totalItems === 1
                ? dictionary?.totalItems?.one
                : dictionary?.totalItems?.many}
            </p>
            <p>S/ {checkoutResume?.totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold mt-6">
            <p className="capitalize">{dictionary?.order?.total}</p>
            <p>S/ {checkoutResume?.totalPrice.toFixed(2)}</p>
          </div>
          <p className="text-black/50 text-base">{`(${dictionary?.order?.igv} S/ ${checkoutResume?.igv})`}</p>
        </div>
      </div>
      <CheckoutButton items={checkoutResume?.items} />
    </section>
  );
}
