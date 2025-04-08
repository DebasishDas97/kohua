import { Link, useLocation } from "react-router-dom";
import { CardProps } from "../types/type";
import { useEffect, useRef } from "react";
import { getEnvVariable } from "../utils/envUtils";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../makeRequest";
import { addToCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";

interface CardComponentProps {
  items: CardProps;
  index: number;
}

export default function Card({ items, index }: CardComponentProps) {
  const productImgRef = useRef<HTMLAnchorElement | HTMLDivElement>(null);
  const delay = 150 + index * 50;
  const location = useLocation();
  const isProductPage = location.pathname.includes("/products/");
  const dispatch = useDispatch()

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

  const uploadUrl = getEnvVariable("VITE_UPLOAD_URL");

  const publishStripeKey = getEnvVariable("VITE_STRIPE_PUBLISH_KEY");
  const stripePromise = loadStripe(publishStripeKey);

  const handlePayment = async (items, e) => {

    e.stopPropagation();
    e.preventDefault();
    const products = [
      {
        id: items?.id,
        title: items?.attributes?.title,
        desc: items?.attributes?.desc,
        price: items?.attributes?.price,
        img: items?.attributes?.img?.data?.attributes?.url,
        quantity: 1,
      },
    ];


    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {items?.attributes?.inStock ? (
        <div
          ref={productImgRef as React.MutableRefObject<HTMLDivElement>}
          className={`${
            isProductPage ? "md:w-[303px] w-full h-[303]" : "w-[250px]"
          } flex flex-col gap-2 mb-8 -translate-x-[100%] opacity-0 blur-sm transition-all duration-700 ease ${delay}ms`}
        >
          <Link
          to={`/product/${items.id}`}
            className={`${
              isProductPage
                ? "md:w-[303px] w-full h-[303px]"
                : "w-[250px] h-[250px]"
            } overflow-hidden relative group`}
          >
            {!items?.attributes?.inStock && (
              <span className="absolute left-1 top-1 bg-white text-teal-600 p-1 z-20 text-sm font-semibold">
                Out Of Stock
              </span>
            )}

            <img
              className="w-full cursor-pointer h-full object-cover absolute transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:z-20"
              src={uploadUrl + items?.attributes?.img?.data?.attributes?.url}
              alt={items?.attributes?.title}
            />
          </Link>

          <div className="flex items-center justify-between">
            <h2 className="text-lg">
              {items?.attributes?.title.length > 30 ? (
                <div>
                  {items?.attributes?.title.slice(0, 30)}
                  <br />
                  {items?.attributes?.title.slice(30)}
                </div>
              ) : (
                "Kohua " + items?.attributes?.title
              )}
            </h2>
            <svg
            className="cursor-pointer"
              onClick={(e) =>
                {
                  e.stopPropagation();
                  e.preventDefault;
                  dispatch(
                  addToCart({
                    id: items?.id,
                    title: items?.attributes?.title,
                    desc: items?.attributes?.desc,
                    price: items?.attributes?.price,
                    img: items?.attributes?.img?.data?.attributes?.url,
                    quantity: 1,
                  })
                )}
              }
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
                clipRule="evenodd"
              ></path>
              <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path>
            </svg>
          </div>

          <div className="flex gap-5">
            <h3 className="font-medium text-gray-400 line-through">
              Rs.{items?.attributes?.old_price}
            </h3>
            <h3 className="font-medium">Rs.{items?.attributes?.price}</h3>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-orange-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-1 text-sm font-semibold text-gray-900">
              {items?.attributes?.rating}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <div className="text-sm font-medium text-gray-900 underline hover:no-underline">
              {items?.attributes?.reviews} reviews
            </div>
          </div>
          <div id="container" className="mt-1">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span
                className="button-text"
                onClick={(e) => handlePayment(items, e)}
              >
                Buy Now
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div
          ref={productImgRef as React.MutableRefObject<HTMLDivElement>}
          className={`${
            isProductPage ? "md:w-[303px] w-full h-[303]" : "w-[250px]"
          } flex flex-col gap-2 mb-8 -translate-x-[100%] opacity-0 blur-sm transition-all duration-700 ease ${delay}ms`}
        >
          <div
            className={`${
              isProductPage
                ? "md:w-[303px] w-full h-[303px]"
                : "w-[250px] h-[250px]"
            } overflow-hidden relative group`}
          >
            {!items?.attributes?.inStock && (
              <span className="absolute left-1 top-1 bg-white text-teal-500 tracking-wide p-1 z-20 text-sm font-semibold">
                Out Of Stock
              </span>
            )}

            <img
              className="w-full cursor-pointer h-full object-cover absolute transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:z-20"
              src={uploadUrl + items?.attributes?.img?.data?.attributes?.url}
              alt={items?.attributes?.title}
            />
          </div>

          <div className="flex items-center">
            <h2 className="text-lg">
              {items?.attributes?.title.length > 30 ? (
                <div>
                  {items?.attributes?.title.slice(0, 30)}
                  <br />
                  {items?.attributes?.title.slice(30)}
                </div>
              ) : (
                "Kohua " + items?.attributes?.title
              )}
            </h2>
          </div>

          <div className="flex gap-5">
            <h3 className="font-medium text-gray-400 line-through">
              Rs.{items?.attributes?.old_price}
            </h3>
            <h3 className="font-medium">Rs.{items?.attributes?.price}</h3>
          </div>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-orange-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-semibold text-gray-900">
              {items?.attributes?.rating}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <div className="text-sm font-medium text-gray-900 underline hover:no-underline">
              {items?.attributes?.reviews} reviews
            </div>
          </div>
          <div id="container" className="mt-1">
            <button className="learn-more" disabled>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Buy Now</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
