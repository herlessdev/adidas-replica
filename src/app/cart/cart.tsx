"use client";
import { useCart } from "@/context/carProvider";
import cx from "@/libs/cx";
import { Roboto } from "next/font/google";
import ItemCar from "./itemCar";
import Resume from "./resume";
import EmptyCart from "./EmptyCar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartClient = ({ dictionary }: any) => {
  const { cart } = useCart();
  return (
    <section
      className={cx(
        "flex gap-[52px] mx-auto max-w-[1175px] xl:max-w-[1250px] px-[15px] xl:px-0 w-full py-[51px]",
        roboto.className
      )}
    >
      {cart?.length > 0 ? (
        <>
          <div className="xl:ml-[52px]">
            <p className="uppercase font-bold font-sans text-[35px] leading-[40px]">
              {dictionary?.name}
            </p>
            <p className="mt-[18px] text-base">
              {dictionary?.total}{" "}
              <span>
                ({cart?.length} producto{cart?.length > 1 && "s"})
              </span>{" "}
              <span className="font-bold">
                S/{" "}
                {cart?.reduce(
                  (acumulador, item) =>
                    acumulador + Number(item?.offert ?? item?.price),
                  0
                )}
              </span>
            </p>
            <p className="mt-2.5 font-normal tracking-[0.45px] text-[15px] leading-[22px]">
              {dictionary?.warning}
            </p>
            {/* envios para miembros
          <div className="bg-[#eceff1] px-8 py-[19px] mt-[21px]">
            <p className="font-bold uppercase">{dictionary?.send?.first}</p>
            <p className="mt-2 leading-[1.6]">{dictionary?.send?.second}</p>
          </div>*/}
            <div className="mt-10">
              {cart?.map((item, i) => (
                <ItemCar item={item} key={i} dictionary={dictionary?.product} />
              ))}
            </div>
          </div>
          <Resume dictionary={dictionary?.resume} />
        </>
      ) : (
        <EmptyCart dictionary={dictionary?.empty} />
      )}
    </section>
  );
};

export default CartClient;
