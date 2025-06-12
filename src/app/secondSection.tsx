import CardArticle from "@/components/shared/cardArticle";
import articles from "@/data/articles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SecondSection = ({ dictionary }:any) => {
  return (
    <section className="px-[60px] flex flex-col py-10 gap-10">
      <p className="uppercase underline self-end text-[15px] leading-[22px] tracking-[-0.3px] hover:bg-black hover:text-white hover:no-underline cursor-pointer duration-300">
        {dictionary?.url?.name}
      </p>
      <div className="flex gap-2">
        {articles &&
          articles?.map((art, i) => (
            <CardArticle
              article={art}
              key={i}
              url={art?.url}
              marca={art?.marca}
            />
          ))}
      </div>
    </section>
  );
};

export default SecondSection;
