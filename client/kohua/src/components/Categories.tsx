import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Categories() {
  // These are not dynamic values, you can just define them on the element
  const column = "flex-[1] flex flex-col gap-3";
  const row = "flex-[1] flex gap-3 relative overflow-hidden";
  const button =
    "min-w-[100px] uppercase cursor-pointer p-3 text-center bg-black m-auto top-0 left-0 right-0 bottom-0 w-fit h-12 text-white absolute text-lg font-medium";

    const { state } = useFetch(`/categories/?populate=*`);
    // This is not ideal. You are doing way too much checks
    // You also restrict the user to only have 5 items?
    // That doesn't sound right? 
    const firstData = Array.isArray(state?.data) ? state?.data[1] : state?.data;
    const secondData = Array.isArray(state?.data) ? state?.data[2] : state?.data;
    const thirdData = Array.isArray(state?.data) ? state?.data[3] : state?.data;
    const fourthData = Array.isArray(state?.data) ? state?.data[4] : state?.data;
    const zeroData = Array.isArray(state?.data) ? state?.data[0] : state?.data;

    // It feels like you have a lot of repetition in your return statement
    // You might want to sit down and take a look at your data structure and model
    // to reduce this repetition
  return (
    <section id="categories-section" className="flex gap-3 m-3 lg:mx-[200px] md:mx-[50px] mx-[11px] md:mb-[140px] mb-20 flex-wrap md:flex-nowrap md:h-[80vh] h-auto">
      <div className={column}>
        <div className={row}>
          <img
            className="object-cover w-full h-full"
            src={import.meta.env.VITE_UPLOAD_URL + firstData?.attributes?.img?.data?.attributes?.url}
          />
          <Link className={button} to={`/products/${firstData?.id}`}>
            {firstData?.attributes?.title}
          </Link>
        </div>
        <div className={row}>
        <img
                className="object-cover w-full h-full"
                src={import.meta.env.VITE_UPLOAD_URL + zeroData?.attributes?.img?.data?.attributes?.url}
                alt="premium-tea-category-img"
              />
               <Link className={button} to={`/products/${zeroData?.id}`}>
              {zeroData?.attributes?.title}
              </Link>

        </div>
      </div>

      <div className="md:flex-[2] flex-auto flex flex-col gap-3">
        <div className={row}>
          <div className={column}>
            <div className={row}>
            <img
            className="object-cover w-full h-full"
            src={import.meta.env.VITE_UPLOAD_URL + thirdData?.attributes?.img?.data?.attributes?.url}
          />
          <Link className={button} to={`/products/${thirdData?.id}`}>
          {thirdData?.attributes?.title}
          </Link>
            </div>
          </div>
          <div className={column}>
            <div className={row}>
              <img
                className="object-cover w-full h-full"
                src={import.meta.env.VITE_UPLOAD_URL + secondData?.attributes?.img?.data?.attributes?.url}
                alt="special-tea-category-img"
              />
              <Link className={button} to={`/products/${secondData?.id}`}>
                {secondData?.attributes?.title}
              </Link>
            </div>
          </div>
        </div>
        <div className={row}>
          <img
            className="object-cover w-full h-full"
            src={import.meta.env.VITE_UPLOAD_URL + fourthData?.attributes?.img?.data?.attributes?.url}
            alt="offers-tea-category-img"
          />
          <Link className={button} to={`/products/${fourthData?.id}`}>
          {fourthData?.attributes?.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
