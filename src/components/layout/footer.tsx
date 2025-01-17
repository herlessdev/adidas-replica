import Image from "next/image";

interface Props {
  dictionary: any;
}
const Footer = ({ dictionary }: Props) => {
  return (
    <footer>
      <div className="flex bg-[#ede734] gap-10  py-[37px] items-center justify-center uppercase font-bold">
        <p className="text-3xl">{dictionary?.club?.description}</p>
        <div className="relative">
          <button className="group bg-black text-white uppercase flex gap-4 text-sm tracking-[2px] px-3.5 py-3.5 z-10 relative">
            {dictionary?.club?.button?.name}
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

      <div className="bg-[#282c31] pt-8 pb-4 flex flex-col gap-8 text-[#c2c4ca] text-xs">
        <ul className="flex items-center justify-center">
          {dictionary?.finished?.opts?.map((opt, i, arr) => (
            <>
              <li key={i} className="px-5">
                {opt}
              </li>
              {i !== arr.length - 1 && (
                <div className="bg-[#c2c4ca] w-[1px] h-[20px]" />
              )}
            </>
          ))}
        </ul>
        <p className="text-center">{dictionary?.finished?.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
