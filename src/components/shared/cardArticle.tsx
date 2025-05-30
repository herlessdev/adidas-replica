import Heart from "@/assets/icons/heart";
import { slugify } from "@/utils/slugify";
import Link from "next/link";

const CardArticle = ({ article, url, marca }) => {
  return (
    <Link
      href={slugify(article.name)}
      className="cursor-pointer w-full max-w-[295px] self-start border-[1px] p-[1px] duration-300 hover:border-black border-transparent"
    >
      {article && (
        <>
          <div className="relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full" src={url} alt={""} />
            <Heart className="w-5 h-4 absolute top-5 right-5 hover:text-black text-transparent duration-300" />
            <p className="absolute group-hover:bottom-2 duration-300 text-sm bottom-0 left-2 bg-white px-1.5 py-1">
              S/ {article?.price}
            </p>
          </div>
          <p className="text-sm tracking-wide mt-2 px-2">{article?.name}</p>
          <p className="text-[#838384] text-[13px] mt-3 px-2 pb-4 leading-[13px] text-opacity-65 tracking-widest">
            {marca}
          </p>
        </>
      )}
    </Link>
  );
};

export default CardArticle;
