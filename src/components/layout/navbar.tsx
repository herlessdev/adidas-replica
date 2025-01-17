import Image from "next/image";
import SliderNav from "./slider-nav";
import { Roboto } from "next/font/google";
import cx from "@/libs/cx";

interface Props {
  dictionary: any;
}

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700", "400", "100"],
});

const Navbar = ({ dictionary }: Props) => {
  return (
    <>
      <SliderNav dictionary={dictionary?.slider} />
      <nav className="flex flex-col pl-10 pr-[67px] justify-between">
        <ul className="flex text-[11px] leading-[14px] tracking-[.38px] justify-end gap-5 py-2 text-black text-opacity-70">
          {dictionary?.["list-hidden"].map((u, i) => (
            <li key={i} className="hover:underline">
              {u}
            </li>
          ))}
        </ul>
        <div className="flex py-[11px] justify-between">
          <Image
            src="/logo.svg"
            alt="logo"
            width={60}
            height={38.39}
            className="mt-[-30px]"
          />
          <div className="flex gap-4 items-center">
            <ul
              className={cx(
                roboto.className,
                "flex text-[13px] leading-[1] uppercase gap-5 items-center"
              )}
            >
              {dictionary?.["list"].map((u, i, arr) => (
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
              <li>
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
