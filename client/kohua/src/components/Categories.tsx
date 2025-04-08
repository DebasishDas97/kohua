import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GoldTea from "../assets/images/gold-tea-cat-home.webp"
import GreenTea from "../assets/images/green-tea-cat-home.webp"
import PremiumTea from "../assets/images/premium-cat.webp"
import SpecialTea from "../assets/images/special-cat.webp"
import OfferCat from "../assets/images/offers-cat.webp"

export default function Categories() {
  const column = "flex-[1] flex md:flex-col flex-row gap-3";
  const row = "flex-[1] flex gap-3 relative overflow-hidden";
  const row1 = "flex-[1] flex relative overflow-hidden";
  const button =
    "min-w-[100px] uppercase cursor-pointer py-1 text-center m-auto right-3 bottom-2 w-fit text-white absolute md:text-2xl text-[1rem] font-semibold flex items-center flex-col";

  const { state } = useFetch(`/categories/?populate=*`);
  const firstData = Array.isArray(state?.data) ? state?.data[1] : state?.data;
  const secondData = Array.isArray(state?.data) ? state?.data[2] : state?.data;
  const thirdData = Array.isArray(state?.data) ? state?.data[3] : state?.data;
  const fourthData = Array.isArray(state?.data) ? state?.data[4] : state?.data;
  const zeroData = Array.isArray(state?.data) ? state?.data[0] : state?.data;


  return (
    <>
    <div className="max-w-2xl mx-auto mb-15 text-center">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-teal-500 bg-teal-50 rounded-full">
              CATEGORIES
            </span>
            <div className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold mb-10">
              <span>Shop By </span>
              <span className="font-serif italic">Category</span>
            </div>
          </div>
    <section
      id="categories-section"
      className="flex gap-3 m-3 margin-96 md:mx-10 xl:mx-28 mx-[11px] md:mb-[140px] mb-20 flex-wrap md:flex-nowrap md:h-[80vh] h-auto "
    >

      <div className={column}>
        <Link className={`${row1}`} to={`/products/${firstData?.id}`}>
          <img
            className="object-cover w-full h-full"
            src={GoldTea}
          />
           <div className="overlay"></div>
          <div className={button}>
            {firstData?.attributes?.title}
            <span className="border-b-[1px] border-[#f0f8ff] w-[70%]"></span>
          </div>
        </Link>
        <Link className={`${row} gap-0`} to={`/products/${zeroData?.id}`}>
          <img
            className="object-cover w-full h-full"
            src={PremiumTea}
            alt="premium-tea-category-img"
          />
           <div className="overlay"></div>
          <div className={button}>{zeroData?.attributes?.title}
          <span className="border-b-[1px] border-[#f0f8ff] w-[70%]"></span>

          </div>

        </Link>
      </div>

      <div className="md:flex-[2] flex-auto flex flex-col gap-3">
        <div className={row}>
          <div className={column}>
            <Link to={`/products/${thirdData?.id}`} className={`${row1}`}>
              <img
                className="object-cover w-full h-full"
                src={GreenTea}
              />
           <div className="overlay"></div>

              <div className={button}>{thirdData?.attributes?.title}
            <span className="border-b-[1px] border-[#f0f8ff] w-[70%]"></span>
              </div>
            </Link>
          </div>
          <div className={column}>
            <Link to={`/products/${secondData?.id}`} className={`${row} gap-0`}>
              <img
                className="object-cover w-full h-full"
                src={SpecialTea}
                alt="special-tea-category-img"
              />
           <div className="overlay"></div>

              <div className={`${button} mr-0 md:mr-3`}>{secondData?.attributes?.title}
            <span className="border-b-[1px] border-[#f0f8ff] w-[70%]"></span>
              </div>
            </Link>
          </div>
        </div>
        <Link to={`/products/${fourthData?.id}`} className={`${row} gap-0`}>
          <img
            className="object-cover w-full h-full"
            src={OfferCat}
            alt="offers-tea-category-img"
          />
           <div className="overlay"></div>

          <div className={`${button} mr-0 md:mr-3`}>Kohua {fourthData?.attributes?.title}
          <span className="border-b-[1px] border-[#f0f8ff] w-[70%]"></span>
          </div>
        </Link>
      </div>
    </section>
    </>
  );
}
