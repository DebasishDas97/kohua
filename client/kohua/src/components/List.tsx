import Card from "./Card";
import { ListProps } from "../types/type";
import useFetch from "../hooks/useFetch";

export default function List({ catId, maxPrice, subCats }: ListProps) {
  const subCategoryFilters = subCats
    .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
    .join("");
  const priceFilter = `&[filters][price][$lte]=${maxPrice}`;
  const queryString = `/products?populate=*&[filters][categories][id]=${catId}${subCategoryFilters}${priceFilter}`;

  const { state } = useFetch(queryString);

  return (
    <div
      className="flex justify-start gap-5 md:overflow-visible overflow-x-scroll hide-scrollbar"
    >
      {state.loading
        ? "Loading..."
        :state?.data && Array.isArray(state.data) && state.data.map((item, index) => (
          // This is wrong again
          <Card key={crypto.randomUUID()} items={item} index={index} />
        ))
        }
    </div>
  );
}
