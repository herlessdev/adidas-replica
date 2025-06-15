"use client";

import { useCart } from "@/context/carProvider";
import { useMemo } from "react";
import CheckoutButton from "./checkout-button";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ClientPage({ dictionary }: any) {
  const { cart } = useCart();

  console.log(cart);
  const checkoutResume = useMemo(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce(
      (acc, item) => acc + (item?.offert ?? item?.price) * item.quantity,
      0
    );
    const igv = parseFloat((totalPrice * 0.18).toFixed(2)); // si aplicás 18%

    return {
      totalItems,
      totalPrice,
      igv,
      items: cart.map((item) => ({
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
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
            <p className="uppercase font-bold text-lg">Contacto</p>
            <input
              placeholder="email"
              className="self-start px-3 py-2 border-[1px] border-black/50"
            />
          </label>
        </div>
        <div className="flex flex-col flex-1 pl-[34%]">
          <div className="flex justify-between text-lg font-bold uppercase">
            <p>TU PEDIDO</p>
            <Link href={"/cart"} className="underline text-sm tracking-wider">
              Editar
            </Link>
          </div>
        </div>
      </div>
      <CheckoutButton />
    </section>
  );
}
