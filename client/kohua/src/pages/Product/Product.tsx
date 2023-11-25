import { useState } from "react";
// import { AiOutlineHeart } from "react-icons/ai";
import AccordationProducts from "../../components/AccordationProducts";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export default function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  const { state } = useFetch(`/products/${id}?populate=*`);
console.log(state);

  return (
    <div className="md:mx-16 mb-8 mt-32 flex gap-12 md:flex-row flex-col mx-1">
      {state.loading ? "Loading..." : (
        <>
      <div className="left md:mx-0 mx-2 md:flex-row flex-col-reverse flex flex-[1] md:gap-7 gap-2">
        <div className="images flex-2 md:flex-col md:gap-0 gap-5 mt-5 flex-row flex">
          <img
            className="md:object-cover object-cover cursor-pointer md:w-20 md:h-20 w-16 h-16 mb-3"
            onClick={() => setSelectedImage("img")}
            src={import.meta.env.VITE_UPLOAD_URL + state?.data?.attributes?.img?.data?.attributes?.url}
            alt="product-image"
          />
          <img
            className="md:object-cover object-cover cursor-pointer md:w-20 md:h-20 w-16 h-16 mb-3"
            onClick={() => setSelectedImage("img2")}
            src={import.meta.env.VITE_UPLOAD_URL + state?.data?.attributes?.img2?.data?.attributes?.url}
            alt="product-image"
          />
        </div>
        <div className="mainImg flex-[5]">
          <img
            className="object-cover w-full md:h-[33rem] h-[300px]"
            src={import.meta.env.VITE_UPLOAD_URL + state?.data?.attributes?.[selectedImage]?.data?.attributes?.url}
            alt="main-image"
          />
        </div>
      </div>
      <div className="right flex-1 mx-2">
        <h1 className="text-3xl font-semibold mb-3">
         {state?.data?.attributes?.title}
        </h1>
        <span className="text-blue-400 text-xl">Rs.{state?.data?.attributes?.price}</span>
        <p className="mt-3 mb-7 text-xl">
        {state?.data?.attributes?.desc}
        </p>
        <div className="flex gap-3 mb-7">
          <div onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            className="bg-gray-200 px-3 text-lg cursor-pointer">
            -
          </div>
          <span>{quantity}</span>
          <div onClick={() => setQuantity((prev) => prev + 1)}
            className="bg-gray-200 px-3 text-lg cursor-pointer">
            +
          </div>
        </div>
        <button onClick={() => dispatch(addToCart({
          id:state?.data?.id,
          title:state?.data?.attributes?.title,
          desc:state?.data?.attributes?.desc,
          price:state?.data?.attributes?.price,
          img:state?.data?.attributes?.img?.data?.attributes?.url,
          quantity,
          }))} className="bg-blue-500 text-white px-5 py-2 flex items-center">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path></svg>&nbsp;Add To Cart
        </button>

        <div className="text-gray-400 mt-7 mb-5">
          <p>Category : {state?.data?.attributes?.categories?.data[0].attributes?.title}</p>
          <p>Product Type : {state?.data?.attributes?.type}</p>
          <p>Quantity : {state?.data?.attributes?.sub_categories?.data[0].attributes?.title}</p>
        </div>
        <hr />
        {/* accordation */}
        <div className="text-gray-400 mt-7 mb-5 flex flex-col gap-2">
          <div className="flex flex-col cursor-pointer gap-2">

            <AccordationProducts
              title="Additional Info"
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
            />
            <AccordationProducts
              title="FAQ"
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
            />
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
}
