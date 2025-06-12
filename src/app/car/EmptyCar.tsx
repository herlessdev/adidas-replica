import Button1 from "@/components/shared/button-1";

const EmptyCart = ({ dictionary }) => {
  return (
    <div className="px-[52px] pt-[65px]">
      <h3 className="font-extrabold uppercase text-[34px] tracking-[0.2px] leading-[1]">
        {dictionary?.title}
      </h3>
      <p className="mt-10">{dictionary?.description}</p>
      <Button1
        elements={dictionary?.button}
        className={"inline-flex mt-[27px] w-[158px] ml-[-3px]"}
      />
    </div>
  );
};

export default EmptyCart;
