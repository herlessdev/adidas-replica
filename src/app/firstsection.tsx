import cx from "@/libs/cx";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700", "400", "100"],
});

const FirstSection = ({ dictionary }) => {
  return (
    <section>
      <div
        className={cx(
          roboto.className,
          "bg-[#eceff1] py-[14.5px] uppercase text-center text-sm tracking-[.15px]"
        )}
      >
        {dictionary?.offer}
      </div>
      <div className="w-full h-[599px] relative">
        <Image
          className="z-[-1] object-contain"
          layout="fill"
          alt="first-front-page"
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/pe_ss25_football_predator_pure_victory_mp1_banner_male_d_f118bbff68.jpg"
        />
        <div className="absolute left-16 bottom-[75px]">
          <p
            className={cx(
              roboto.className,
              "bg-white inline-flex font-bold px-1.5 py-[1px]  text-xl"
            )}
          >
            {dictionary?.title}
          </p>
          <p className="bg-white px-1.5 mt-2">{dictionary?.description}</p>
          <div className="relative">
            <button className="group bg-black text-white uppercase flex gap-4 text-sm tracking-[2px] px-3.5 py-3.5 z-10 relative">
              {dictionary?.button?.name}
              <Image
                src="/arrow-right.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
              <div className="group-hover:opacity-50 w-full h-full bg-black absolute top-0 left-0 opacity-0 duration-300" />
            </button>
            <div className="absolute top-1 left-1 z-0 bg-[#ede734] border-black border-[1px] w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
