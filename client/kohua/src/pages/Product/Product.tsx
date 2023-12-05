import { useState } from "react";
import AccordationProducts from "../../components/AccordationProducts";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export default function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { state } = useFetch(`/products/${id}?populate=*`);
  const isArray = Array.isArray(state?.data);

  // Oh no no no, don't do this!
  let product: any;

  // You should use a shared component or 2 different components
  // To accommodate both scenarios
  // I would also use `TypeGuard` to determine what component
  // should be used
  if (isArray) {
    if (Array.isArray(state?.data) && state.data.length > 0) {
      product = state.data[0];
    }
  } else {
    product = Array.isArray(state?.data)
    ? state?.data[0]?.attributes
    : state?.data?.attributes ||
    ''
  }



  return (
    <div className="md:mx-16 mb-28 mt-32 flex gap-12 md:flex-row flex-col mx-1">
      {state.loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left md:mx-0 mx-2 md:flex-row flex-col-reverse flex flex-[1] md:gap-7 gap-2">
            <div className="images flex-2 md:flex-col md:gap-0 gap-5 mt-5 flex-row flex">
              <img
                className="md:object-cover object-cover cursor-pointer md:w-20 md:h-20 w-16 h-16 mb-3"
                onClick={() => setSelectedImage("img")}
                src={import.meta.env.VITE_UPLOAD_URL + (product?.img?.data?.attributes?.url || '')}
                alt="product-image"
              />
              <img
                className="md:object-cover object-cover cursor-pointer md:w-20 md:h-20 w-16 h-16 mb-3"
                onClick={() => setSelectedImage("img2")}
                src={import.meta.env.VITE_UPLOAD_URL + (product?.img2?.data?.attributes?.url || '')}
                alt="product-image"
              />
            </div>
            <div className="mainImg flex-[5]">
              <img
                className="object-cover w-full md:h-[33rem] h-[300px]"
                src={import.meta.env.VITE_UPLOAD_URL + (product?.[selectedImage]?.data?.attributes?.url || '')}
                alt="main-image"
              />
            </div>
          </div>
          <div className="right flex-1 mx-2">
            <h1 className="text-3xl font-semibold mb-3">{product?.title}</h1>
            <span className="text-blue-400 text-xl">Rs. {product?.price}</span>
            <p className="mt-3 mb-7 text-xl">{product?.desc}</p>

            <div className="flex gap-3 mb-7">
              <div onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} className="bg-gray-200 px-3 text-lg cursor-pointer">-</div>
              <span>{quantity}</span>
              <div onClick={() => setQuantity((prev) => prev + 1)} className="bg-gray-200 px-3 text-lg cursor-pointer">+</div>
            </div>

            <button
              onClick={() => dispatch(addToCart({
                id: product?.id,
                title: product?.title,
                desc: product?.desc,
                price: product?.price,
                img: product?.img?.data?.attributes?.url || '',
                quantity,
              }))}
              className="bg-blue-500 text-white px-5 py-2 flex items-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ... SVG Path ... */}
              </svg>
              &nbsp;Add To Cart
            </button>

            <div className="text-gray-400 mt-7 mb-5">
              <p>Category : {product?.categories?.data[0]?.attributes?.title}</p>
              <p>Product Type : {product?.type}</p>
              <p>Quantity : {product?.sub_categories?.data[0]?.attributes?.title}</p>
            </div>

            <hr />

            <div className="text-gray-400 mt-7 mb-5 flex flex-col gap-2">
              <div className="flex flex-col cursor-pointer gap-2">
                <AccordationProducts title="Additional Info" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." />
                <AccordationProducts title="FAQ" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
