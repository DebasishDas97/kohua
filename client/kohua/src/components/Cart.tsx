import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import { RootState } from "../types/type";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../makeRequest";
import { Link } from "react-router-dom";
import { getEnvVariable } from "../utils/envUtils";
import { useEffect } from "react";

interface CartProps {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Cart({ openCart, setOpenCart }: CartProps) {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total;
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      setOpenCart(false);
    };

    if (openCart) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openCart]);

  const publishStripeKey = getEnvVariable("VITE_STRIPE_PUBLISH_KEY");

  const stripePromise = loadStripe(publishStripeKey);

  const handlePayment = async () => {
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

  const uploadUrl = getEnvVariable("VITE_UPLOAD_URL");

  return (
    <div>
      <div
        className={`fixed z-20 h-full right-0 bg-white border-2 border-neutral-100 md:w-[35%] w-full py-3 px-5 overflow-y-auto top-0 ${
          openCart ? "active-cart" : "not-active-cart"
        }`}
      >
        <h2 className="text-2xl font-semibold my-2 flex items-center justify-between">
          Shopping Cart{" "}
          <span className="cursor-pointer" onClick={() => setOpenCart(false)}>
            <svg
              className="hover:rotate-[180deg] duration-700"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="0.9em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </span>
        </h2>
        {products?.map((item, index) => (
          <Link to={`product/${item.id}`}
            key={products[index].id}
            className="flex items-center my-8 cursor-pointer"
          >
            <div className="w-28 h-28">
              <img
                className="w-full h-full object-cover"
                src={uploadUrl + item.img}
                alt="cart-image"
              />
            </div>
            <div className="flex flex-1 justify-around pl-5">
              <div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="w-11/12 text-sm mb-2">
                  {item.desc.substring(0, 60) + "..."}
                </p>
                <div className="text-blue-500">
                  {item.quantity} x {item.price}
                </div>
              </div>

              <AiOutlineDelete
                onClick={(e) => {e.stopPropagation();
                  e.preventDefault();
                  dispatch(removeItem(item.id))}}
                className="text-red-600 font-bold text-2xl"
              />
            </div>
          </Link>
        ))}
        <div>
          <div className="flex justify-between mt-10 mb-5">
            <h5 className="tracking-wide">SUBTOTAL</h5>
            <span>Rs. {totalPrice()}</span>
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={products?.length === 0}
              onClick={handlePayment}
              className="border-2 border-black px-3 py-2 transition-colors duration-700 ease-in-out hover:bg-black hover:text-white"
            >
              Proceed To Checkout
            </button>

            <span
              onClick={(e) => {e.stopPropagation();
                e.preventDefault();
                dispatch(resetCart())}}
              className="font-semibold text-red-600 cursor-pointer"
            >
              Reset Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
