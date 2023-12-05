import useFetch from "../hooks/useFetch";
import { FeaturedProductsProps } from "../types/type";
import Card from "./Card";

export default function FeaturedProducts({
  heading,
  desc,
}: FeaturedProductsProps) {
  const { state } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${heading}`
  );

  /** The code can be made cleaner if you would have a `Layout` element which
  * includes the shared layout then do early return statement with the
  * correct children defined in the `Layout`
  * eg.:
  *
  *  const Layout = ({ children }: PropsWithChildren) => (
  *    <div>
  *      // Whatever the layout is, include props if needed //
  *      {children}
  *    </div>
  *  )
  *
  *
  *  if (state.error) {
  *     return (
  *       <Layout>
  *         <div className="text-red-600 text-2xl">Something went wrong!</div>
  *       </Layout>
  *     )
  *  }
  *
  * etc...
  */

  return (
    <section className="md:mx-[50px] lg:mx-[200px] mx-0 p-3 md:p-0 md:my-[100px] my-10">
      <div className="flex md:flex-row flex-col justify-between items-center mb-12 md:gap-0 gap-4">
        <h1 className="flex-[2] capitalize font-bold text-4xl">
          {heading} products
        </h1>
        <p className="flex-[3] text-gray-500 text-lg md:text-left text-center">
          {desc}
        </p>
      </div>
      <div className="flex md:justify-center justify-start md:gap-8 gap-7 md:overflow-visible overflow-x-scroll hide-scrollbar">
        {state.error ? (
          <div className="text-red-600 text-2xl">Something went wrong!</div>
        ) : state.loading ? (
          <div>Loading...</div>
        ) : (
          state?.data && Array.isArray(state.data) && state.data.map((item, index) => (
            <Card key={item.id} items={item} index={index} />
          ))
        )}
      </div>
    </section>
  );
}
