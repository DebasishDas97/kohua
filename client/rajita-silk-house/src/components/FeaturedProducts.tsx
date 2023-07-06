import { FeaturedProductsProps } from "../types/type";
import { featuredProductsData } from "../constants/FeaturedProductsData";
import Card from "./Card";

export default function FeaturedProducts({ heading }: FeaturedProductsProps) {
  return (
    <section className="md:mx-[200px] mx-0 p-3 md:p-0 my-[100px]">
      <div className="flex justify-between items-center mb-12 md:gap-0 gap-4">
        <h1 className="flex-[2] capitalize font-bold text-3xl">
          {heading} products
        </h1>
        <p className="flex-[3] text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          quidem esse cum, sed nostrum incidunt quasi pariatur, dolorem numquam
          aspernatur quam dicta consequuntur, at saepe. Quidem laboriosam
          distinctio rerum architecto?
        </p>
      </div>
      <div className="flex md:justify-center justify-start md:gap-12 gap-7 md:overflow-visible overflow-x-scroll hide-scrollbar">
        {featuredProductsData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
