import cx from "@/libs/cx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  elements: {
    path: string;
    name: string;
  };
  className: string;
}

const Button1 = ({ elements, className }: Props) => {
  return (
    <Link
      className={cx("relative", className)}
      href={elements?.path}
      onClick={() => {}}
    >
      <button className="group bg-black text-white uppercase flex w-full justify-between font-bold text-sm tracking-[2px] px-3.5 py-3.5 z-10 relative">
        {elements?.name}
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
  );
};

export default Button1;
