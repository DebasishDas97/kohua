import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Categories() {
  const column = "flex-[1] flex flex-col gap-3";
  const row = "flex-[1] flex gap-3 relative overflow-hidden";
  const button =
    "min-w-[100px] uppercase cursor-pointer p-3 text-center bg-black m-auto top-0 left-0 right-0 bottom-0 w-fit h-12 text-white absolute text-lg font-medium";

    const { state } = useFetch(`/categories/?populate=*`);
    const firstData = Array.isArray(state?.data) ? state?.data[1] : state?.data;
    const secondData = Array.isArray(state?.data) ? state?.data[2] : state?.data;
    const thirdData = Array.isArray(state?.data) ? state?.data[3] : state?.data;
    const zeroData = Array.isArray(state?.data) ? state?.data[0] : state?.data;
console.log(state);

  return (
    <section className="flex gap-3 m-3 lg:mx-[200px] md:mx-[50px] mx-[11px] mb-[140px] flex-wrap md:flex-nowrap md:h-[80vh] h-auto">
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
            src={import.meta.env.VITE_UPLOAD_URL + thirdData?.attributes?.img?.data?.attributes?.url}
          />
          <Link className={button} to={`/products/${thirdData?.id}`}>
          {thirdData?.attributes?.title}
          </Link>
        </div>
      </div>

      <div className="md:flex-[2] flex-auto flex flex-col gap-3">
        <div className={row}>
          <div className={column}>
            <div className={row}>
              <img
                className="object-cover w-full h-full"
                src="https://png.pngtree.com/thumb_back/fw800/background/20220813/pngtree-a-blend-of-a-premium-tea-leaves-tea-green-tea-gourmet-photo-image_1224109.jpg"
                alt="premium-tea-category-img"
              />
              <Link className={button} to={`/products/${zeroData?.id}`}>
              {zeroData?.attributes?.title}
              </Link>
            </div>
          </div>
          <div className={column}>
            <div className={row}>
              <img
                className="object-cover w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAbhXjE9VzxrgA0ceW4IHt5jSB5zt7SIQteaDfviXo0XHqbxxiOY3qWnmEnXt39EdCpE&usqp=CAU"
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
            src="https://image.slidesdocs.com/responsive-images/background/summer-afternoon-tea-beginning-of-autumn-drink-teapot-powerpoint-background_acccf72917__960_540.jpg"
            alt="offers-tea-category-img"
          />
          <Link className={button} to="/products/1">
            Offers
          </Link>
        </div>
      </div>
    </section>
  );
}
