import CardArticle from "@/shared/cardArticle";

const SecondSection = ({ dictionary }) => {
  const articles = [
    {
      name: "Chimpunes Predator Elite Terreno Firme",
      price: "1,099",
    },
  ];
  return (
    <section className="px-16 flex flex-col py-10">
      <p className="uppercase underline self-end text-[15px] leading-[22px] tracking-[-0.3px]">
        {dictionary?.url?.name}
      </p>
      {articles &&
        articles?.map((art, i) => <CardArticle article={art} key={i} />)}
    </section>
  );
};

export default SecondSection;
