import useFetch from "../hooks/useFetch";
import { FeaturedProductsProps } from "../types/type";
import Card from "./Card";
import Loading from "./Loading";
import Element from "../assets/images/profile-1.png"

export default function FeaturedProducts({
  heading,
  desc,
}: FeaturedProductsProps) {
  const { state } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${heading}`
  );


  return (
    <section className="md:mx-10 xl:mx-28 margin-96 margin-20-rem mx-[11px] p-3 md:p-0 md:my-[100px] my-10 relative">
      <div className="flex md:flex-row flex-col justify-between items-center mb-12 md:gap-0 gap-4">
        <h1 className="flex-[2] capitalize font-bold text-3xl md:text-4xl relative z-10">
          {heading} products
          <img className="absolute right-36 rotate-12 top-[-20px] mix-blend-screen" src={Element} alt="element" />
        </h1>
        <p className="flex-[3] text-gray-500 text-lg md:text-left text-center">
          {desc}
        </p>
      </div>
      <div className="flex md:justify-center justify-start gap-7 overflow-x-scroll hide-scrollbar">
        {state.error ? (
          <div className="text-red-600 text-2xl">Something went wrong!</div>
        ) : state.loading ? (
          <div><Loading /></div>
        ) : (
          state?.data && Array.isArray(state.data) && state.data.map((item, index) => (
            <Card key={item.id} items={item} index={index} />
          ))
        )}
      </div>
    </section>
  );
}
