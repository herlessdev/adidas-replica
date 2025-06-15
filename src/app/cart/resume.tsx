import { useCart } from "@/context/carProvider";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Resume = ({ dictionary }: any) => {
  const { cart } = useCart();
  console.log(cart);

  const rawTotal = useMemo(() => {
    return cart?.reduce(
      (acc, item) =>
        acc + item.quantity * (item.offert ? item.offert : item.price),
      0
    );
  }, [cart]);

  const igv = ((rawTotal / 118) * 18).toFixed(2);

  return (
    <div className="w-[364.58px] mr-[52px] flex flex-col">
      <p className="uppercase font-bold text-xl">{dictionary?.title}</p>
      <p className="mt-5 flex justify-between">
        {cart?.length + " " + dictionary?.product}
        <span className="">S/ {rawTotal.toFixed(2)}</span>
      </p>
      <div className="capitalize font-bold flex justify-between">
        <p className="flex flex-col">
          {dictionary?.total}
          <span className="font-light text-gray-400 normal-case">
            {"(" + dictionary?.igv} S/{igv + ")"}
          </span>
        </p>
        <span>S/ {rawTotal.toFixed(2)}</span>
      </div>
      <Link
        className="relative inline-flex mt-10"
        href={"/checkout"}
        onClick={() => {}}
      >
        <button className="group bg-black text-white uppercase flex w-full justify-between font-bold text-sm tracking-[2px] px-3.5 py-3.5 z-10 relative">
          {dictionary?.pay}
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
  );
};

export default Resume;
