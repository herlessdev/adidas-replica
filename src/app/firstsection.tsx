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
        {dictionary?.description}
      </div>
      <div className="w-full h-[599px] relative">
        <Image
          className="z-[-1] object-contain"
          layout="fill"
          alt="first-front-page"
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/pe_ss25_football_predator_pure_victory_mp1_banner_male_d_f118bbff68.jpg"
        />
      </div>
    </section>
  );
};

export default FirstSection;
