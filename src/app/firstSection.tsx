import ArrowRight from "@/assets/icons/arrow-right";
import cx from "@/libs/cx";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700", "400", "100"],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FirstSection = ({ dictionary }: any) => {
  return (
    <section className="">
      <div
        className={cx(
          roboto.className,
          "bg-[#eceff1] py-[14.5px] flex px-7 uppercase text-center text-sm tracking-[.15px]"
        )}
      >
        <p className="text-center w-full">{dictionary?.offer}</p>
        <ArrowRight className="w-5 h-5 text-[#767879] ml-auto" />
      </div>
      <div className="w-full aspect-[1920/736] xl:aspect-auto xl:h-[599px] relative">
        <Image
          className="z-[-1] object-cover xl:object-contain"
          fill
          alt="first-front-page"
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/pe_ss25_football_predator_pure_victory_mp1_banner_male_d_f118bbff68.jpg"
        />
        <div className="absolute left-[6%] bottom-[6%]">
          <p
            className={cx(
              roboto.className,
              "bg-white inline-flex font-bold px-1.5 py-[1px]  text-xl"
            )}
          >
            {dictionary?.title}
          </p>
          <p className="bg-white px-1.5 mt-2">{dictionary?.description}</p>
          <div className="group relative mt-4 inline-flex">
            <button className="bg-white group-hover:bg-[#f5f5f5] flex text-black font-bold uppercase gap-3 text-[15px] leading-[20px] tracking-[-0.5px] px-4 py-[12px] z-10 relative">
              {dictionary?.button?.name}
              <ArrowRight className="w-6 h-6 text-[#808080]" />
            </button>
            <div className="absolute top-1 left-1 z-0 border-white border-[1px] w-full h-full group-hover:border-[#7b7b7b]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
