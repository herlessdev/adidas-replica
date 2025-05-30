import Image from "next/image";

const ItemCar = ({ item, dictionary }) => {
  console.log(item);
  return (
    <div className="flex border-[.5px] border-[#767677]">
      <Image
        src={item?.color?.url_car}
        alt={item?.name}
        width={240}
        height={240}
      />
      <div className="px-[30px] py-[18px] leading-[1.435] flex flex-col">
        <div className="flex gap-4">
          <p className="uppercase">{item?.name}</p>
          <div className="relative">
            <p className="text-[#767677]">S/ {item?.price}.00</p>
            <div className="absolute h-[.1px] w-full bg-[#767677] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <p className="text-[#e64545] ml-[-12px]">S/ {item?.offert}.00</p>
        </div>
        <p className="uppercase">{item?.color?.name}</p>
        <p className="uppercase mt-2.5">
          {dictionary?.size}: {item?.size}
        </p>
        <select
          name="select"
          defaultValue="value1"
          className="mt-auto w-[101px] px-1.5 font-bold py-[18px] border-[0.5px] border-black/50"
        >
          <option value="value1">{item?.quantity}</option>
          <option value="value2">2</option>
          <option value="value3">3</option>
        </select>
      </div>
    </div>
  );
};

export default ItemCar;
