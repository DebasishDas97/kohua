import { listData } from "../constants/ListData";
import Card from "./Card";
import { ListProps } from "../types/type";

export default function List({ catId, maxPrice, sort }: ListProps) {
  return (
    <div
      className={`flex flex-wrap md:justify-center justify-start gap-5 md:overflow-visible overflow-x-scroll hide-scrollbar ${
        maxPrice ? "justify-center" : ""
      }`}
    >
      {listData?.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
}
