import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import { RootState } from "../types/type";
import {loadStripe} from '@stripe/stripe-js'
import { makeRequest } from "../makeRequest";

export default function Cart() {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total;
  };

  const stripePromise = loadStripe('pk_test_51OG1RdSG4zNvOyei2DEjY3JC89EGeiuoueAT0g8xdMEvdWIfFtijql6h3EAkgsBdVk0KKZiSL6Pe3auMOtQzCqb300VaSrPvI7');

  const handlePayment = async() => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      })

      await stripe?.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err);

    }
  }

  return (
    <div className="relative">
      <div className="absolute z-[1] max-h-[300px] right-1 bg-white border-2 border-neutral-100 md:w-4/12 w-4/5 p-3 overflow-y-auto top-[-56px]">
        <h2 className="text-xl font-semibold mb-2 text-center">
          Products in your Cart 🛒
        </h2>
        {products?.map((item) => (
          <div
            key={crypto.randomUUID()}
            className="flex items-center mt-6 cursor-pointer"
          >
            <img
              className="w-28 h-28 object-cover"
              src={import.meta.env.VITE_UPLOAD_URL + item.img}
              alt="cart-image"
            />
            <div className="flex justify-around pl-5">
              <div>
                <h3>{item.title}</h3>
                <p className="w-11/12 text-sm mb-2">
                  {item.desc.substring(0, 100)+"..."}
                </p>
                <div className="text-blue-500">
                  {item.quantity} x {item.price}
                </div>
              </div>

              <AiOutlineDelete
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-600 font-bold text-3xl"
              />
            </div>
          </div>
        ))}
        <div>
          <div
            className="flex justify-between mt-10 mb-5">
            <h5>SUBTOTAL</h5>
            <span>Rs. {totalPrice()}</span>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={handlePayment} className="bg-[#00A86B] text-white px-3 py-2">
              Proceed To Checkout
            </button>
            <span
              onClick={() => dispatch(resetCart())}
              className="font-semibold text-red-600 cursor-pointer">
              Reset Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
