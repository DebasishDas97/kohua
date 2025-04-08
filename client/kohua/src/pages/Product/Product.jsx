import { useState } from "react";
import AccordationProducts from "../../components/AccordationProducts";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { getEnvVariable } from "../../utils/envUtils";
import { loadStripe } from '@stripe/stripe-js'
import { makeRequest } from "../../makeRequest";
import Loading from "../../components/Loading.tsx"
import { Helmet } from "react-helmet-async"

export default function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  const { state } = useFetch(`/products/${id}?populate=*`);
  const products = [{
    id: state?.data?.id,
    title: state?.data?.attributes?.title,
    desc: state?.data?.attributes?.desc,
    price: state?.data?.attributes?.price,
    img: state?.data?.attributes?.img?.data?.attributes?.url,
    quantity,

  }]

  const productTitle = products[0]?.title;

  let accordationContent = "";

  switch (true) {
    case productTitle?.includes("Premium Tea"):
      accordationContent = "At Kohua, we understand the importance of quality in every sip. Kohua Premium Tea, a blend crafted to enhance your daily tea experience. Rooted in quality and tradition, Kohua Premium Tea is meticulously curated to bring richness and delight to your cup, making it an indispensable part of every household kitchen.Whether you prefer a soothing morning cuppa or a refreshing afternoon pick-me-up, Kohua Premium Tea is the perfect companion for every occasion. Its versatility extends beyond mere refreshment; it's a catalyst for conversations, a moment of solace, and a source of comfort on even the busiest of days.";
      break;
    case productTitle?.includes("Gold Tea"):
      accordationContent = "The revered Camellia sinensis plants nurtured in the fertile soils of Assam, Kohua Gold Tea is renowned for its delight taste and quality, its leaves carries the optimal balance of flavor and aroma, resulting in a brew that is nothing short of extraordinary. Steep a cup of Kohua Gold Tea, you'll be greeted by a tantalizing aroma that transports you to the serene landscapes of Assam. With each sip, you'll experience a symphony of flavors – from delicate floral notes to a subtle hint of sweetness, culminating in a refreshing and revitalizing experience for your senses with Kohua Gold Tea.";
      break;
    case productTitle?.includes("Green Tea"):
      accordationContent = "Kohua Green Tea is a treasure from the lush gardens of Assam, where each sip encapsulates the essence of tradition, purity, and unparalleled flavor. Kohua Green Tea is renowned for its exquisite taste and quality which sets it apart. It adherence to the traditional method of plucking, wherein only the tender topmost leaves and buds, known as `eati koli duti paat` in Assamese, are carefully handpicked. This meticulous selection process ensures that each leaf carries the optimal balance of flavor and aroma, resulting in a brew that is nothing short of extraordinary.";
      break;
    case productTitle?.includes("Special Tea"):
      accordationContent = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos quos animi officia id architecto doloremque deserunt ullam aliquam! Delectus deleniti veritatis dolorum fuga impedit tempora deserunt consequuntur distinctio ducimus!";
      break;
  }


  const publishStripeKey = getEnvVariable("VITE_STRIPE_PUBLISH_KEY");
  const stripePromise = loadStripe(publishStripeKey);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      })

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      alert(err);
    }
  }

  const handleAddToCart = () => {

    setIsAdded(true)
    setTimeout(() => {
      dispatch(addToCart({
        id: state?.data?.id,
        title: state?.data?.attributes?.title,
        desc: state?.data?.attributes?.desc,
        price: state?.data?.attributes?.price,
        img: state?.data?.attributes?.img?.data?.attributes?.url,
        quantity,
      }))
      setIsAdded(false)
    }, 3000)
  }

  const uploadUrl = getEnvVariable("VITE_UPLOAD_URL");

  return (
    <>
      <Helmet>
        <title>{`${productTitle}`} - Kohua</title>
        <meta
          name="description"
          content={`Get to know about why you should have it ${productTitle}.`}
        />
        <link rel="canonical" href={`https://kohua.in/product/${id}`} />
      </Helmet>
      <div className="md:mx-10 xl:mx-28 margin-96 mx-[11px] md:mb-24 mt-32 flex gap-12 md:flex-row flex-col">
        {state.loading ? <Loading /> : (
          <>
            <div className="left md:mx-0 mx-2 md:flex-row flex-col-reverse flex flex-[1] md:gap-7 gap-2">
              <div className="images flex-2 md:flex-col md:gap-0 gap-5 mt-5 flex-row flex">
                <img
                  className="md:object-cover object-cover cursor-pointer md:w-20 md:h-20 w-16 h-16 mb-3"
                  onClick={() => setSelectedImage("img")}
                  src={uploadUrl + state?.data?.attributes?.img?.data?.attributes?.url}
                  alt="product-image"
                />
                <img
                  className="md:object-cover object-cover cursor-pointer md:w-20 md:h-20 w-16 h-16 mb-3"
                  onClick={() => setSelectedImage("img2")}
                  src={uploadUrl + state?.data?.attributes?.img2?.data?.attributes?.url}
                  alt="product-image"
                />
              </div>
              <div className="mainImg flex-[5]">
                <img
                  className="object-cover w-full md:h-[33rem] h-[300px]"
                  src={uploadUrl + state?.data?.attributes?.[selectedImage]?.data?.attributes?.url}
                  alt="main-image"
                />
              </div>
            </div>
            <div className="right flex-1 mx-2">
              <h1 className="text-3xl font-semibold">
                {state?.data?.attributes?.title}
              </h1>
              <div className="flex items-center mb-3">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-semibold text-gray-400">
                  {state?.data?.attributes?.rating}
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <div className="text-sm font-medium text-gray-400 underline hover:no-underline">
                  {state?.data?.attributes?.reviews} reviews
                </div>
              </div>
              <span className="text-teal-500 text-xl">Rs.{state?.data?.attributes?.price}</span>
              <p className="mt-3 mb-7 text-xl">
                {state?.data?.attributes?.desc}
              </p>
              <div className="flex gap-3 mb-7">
                <div onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
                  className="bg-gray-200 rounded-full px-3 text-lg cursor-pointer">
                  -
                </div>
                <span>{quantity}</span>
                <div onClick={() => setQuantity((prev) => prev + 1)}
                  className="bg-gray-200 px-3 rounded-full text-lg cursor-pointer">
                  +
                </div>
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-black border-2 rounded-md border-black text-white px-5 py-2" onClick={handlePayment}>
                  Buy Now
                </button>
                <button onClick={handleAddToCart} className={`add-to-cart border-2 relative border-black rounded-md text-black px-5 py-2 flex items-center ${isAdded ? 'added' : ''}`}>
                  <div className="default pl-4 relative">Add to cart</div>
                  <div className="success absolute top-[9px] left-[50%]">Added</div>
                  <div className="cart absolute left-0 top-0 right-0 bottom-0 z-[1px] overflow-hidden">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="dots w-1 h-1 top-5 left-[50%] ml-[-7px] absolute"></div>
                </button>
              </div>
              <div className="text-gray-400 mt-7 mb-5">
                <p>Product Type : {state?.data?.attributes?.type}</p>
                <p>Quantity : {state?.data?.attributes?.sub_categories?.data[0].attributes?.title}</p>
                <div>Inc. of all taxes</div>
                <div>Delivery expected within <strong>3-5 days.</strong></div>
              </div>
              <hr />
              {/* accordation */}
              <div className="text-gray-400 mt-7 mb-5 flex flex-col gap-2">
                <div className="flex flex-col cursor-pointer gap-2">

                  <AccordationProducts
                    content={accordationContent}
                  />

                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
