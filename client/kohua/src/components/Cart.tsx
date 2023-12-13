import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import { RootState } from "../types/type";
import {loadStripe} from '@stripe/stripe-js'
import { makeRequest } from "../makeRequest";
import { Link } from "react-router-dom";

export default function Cart() {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total;
  };

  const stripePromise = loadStripe('pk_test_51OG1RdSG4zNvOyei2DEjY3JC89EGeiuoueAT0g8xdMEvdWIfFtijql6h3EAkgsBdVk0KKZiSL6Pe3auMOtQzCqb300VaSrPvI7');

  document.addEventListener('DOMContentLoaded', function () {
    // Check if the payment was successful
    const urlParams = new URLSearchParams(window.location.search);
    const paymentSuccess = urlParams.get('payment_success');

    if (paymentSuccess === 'true') {
        // Display the thank you popup
        const popup = document.createElement('div');
        popup.innerHTML = '<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); z-index: 999;">Thank you! Your order will reach you soon.</div>';
        document.body.appendChild(popup);

        // Close the popup and redirect after 3 seconds
        setTimeout(function () {
            document.body.removeChild(popup);
            window.location.href = "/"; // Replace "/" with the URL of your homepage
        }, 3000);
    }
});

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
      alert("Something went wrong! Try again later or Contact us.");

    }
  }

  return (

      <div className="fixed z-[1] max-h-[350px] right-0 bg-white border-2 border-neutral-100 md:w-4/12 w-full p-3 overflow-y-auto top-[72px]">
        <h2 className="text-2xl font-semibold my-2 text-center">
          Products in your Cart 🛒
        </h2>
        {products?.map((item) => (
          <div
            key={crypto.randomUUID()}
            className="flex items-center mt-6 cursor-pointer"
          >
            <Link className="w-28 h-28" to={`product/${item.id}`}>
            <img
              className="w-full h-full object-cover"
              src={import.meta.env.VITE_UPLOAD_URL + item.img}
              alt="cart-image"
            />
            </Link>
            <div className="flex flex-1 justify-around pl-5">
              <div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="w-11/12 text-sm mb-2">
                  {item.desc.substring(0, 60)+"..."}
                </p>
                <div className="text-blue-500">
                  {item.quantity} x {item.price}
                </div>
              </div>

              <AiOutlineDelete
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-600 font-bold text-2xl"
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

  );
}
