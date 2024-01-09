import { Link, useLocation } from "react-router-dom";
import { CardComponentProps } from "../types/type";
import { useEffect, useRef } from "react";

export default function Card({ items, index }: CardComponentProps) {
  const productImgRef = useRef<HTMLDivElement | null>(null);
  const delay = 150 + index * 50;
const location = useLocation()
const isProductPage = location.pathname.includes('/products/');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && productImgRef.current) {
          productImgRef.current.classList.add("show-sliding");
        }
      });
    });

    if (productImgRef.current) {
      observer.observe(productImgRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (productImgRef.current) {
        observer.unobserve(productImgRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={productImgRef}
      className={`${isProductPage ? "md:w-[200px] w-full" : "w-[200px]"} flex flex-col gap-2 mb-12 -translate-x-[100%] opacity-0 blur-sm transition-all duration-700 ease ${delay}ms`}
    >
      <div className={`${isProductPage ? "md:w-[200px] w-full" : "w-[200px]"} h-[200px] overflow-hidden relative group`}>
        {items?.attributes?.isNew && (
          <span className="absolute left-1 top-1 bg-white text-teal-600 p-1 z-20 text-sm font-semibold">
            New Season
          </span>
        )}
        <Link to={`/product/${items.id}`}>
          <img
          loading="lazy"
            className="w-full h-full object-cover absolute z-10 transition-all duration-500 ease-in-out transform group-hover:scale-105"
            src={
              import.meta.env.VITE_UPLOAD_URL +
              items?.attributes?.img?.data?.attributes?.url
            }
            alt={items?.attributes?.title}
          />
          <img
            className="w-full h-full object-cover absolute transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:z-20"
            src={
              import.meta.env.VITE_UPLOAD_URL +
              items?.attributes?.img2?.data?.attributes?.url
            }
            alt={items?.attributes?.title}
          />
        </Link>
      </div>
      <div className="flex itemss-center justify-between">
        <h2 className="">
          {items?.attributes?.title.length > 30 ? (
            <div>
              {items?.attributes?.title.slice(0, 30)}
              <br />
              {items?.attributes?.title.slice(30)}
            </div>
          ) : (
            items?.attributes?.title
          )}
        </h2>
      </div>

      <div className="flex gap-5">
        <h3 className="font-medium text-gray-400 line-through">
          Rs.{items?.attributes?.price + 250}
        </h3>
        <h3 className="font-medium">Rs.{items?.attributes?.price}</h3>
      </div>
    </div>
  );
}
