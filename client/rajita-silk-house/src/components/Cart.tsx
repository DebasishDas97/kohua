import { AiOutlineDelete } from "react-icons/ai";
export default function Cart() {
  const cartData = [
    {
      id: 1,
      img: "https://img1.eshakti.com/clothimages/CL0087358EL.jpg",
      img2: "https://beisat.com/479606-medium_default/half-placket-belted-layered-ruffle-dress.jpg",
      title: "Green Cotton Dress",
      isNew: true,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, commodi.",
      oldPrice: "₹ 419",
      price: " ₹ 312",
    },
    {
      id: 2,
      img: "https://media.boohoo.com/i/boohoo/gzz02238_olive_xl_1/female-olive-dobby-ruffle-detail-wrap-front-maxi-dress",
      img2: "https://media.boohoo.com/i/boohoo/gzz02238_olive_xl/womens-olive-dobby-ruffle-detail-wrap-front-maxi-dress/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
      title: "Dobby Ruffle Detail Wrap",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, commodi.",
      isNew: false,
      oldPrice: "₹ 941",
      price: "₹ 723",
    },
  ];
  return (
    <div className="relative">
      <div className="absolute max-h-[300px] right-4 bg-white border-2 border-neutral-100 w-4/12 p-3 overflow-y-scroll">
        <h2 className="text-xl font-semibold mb-2">Products in your cart 🛒</h2>
        {cartData?.map((item) => (
          <div
            key={crypto.randomUUID()}
            className="flex items-center mt-6 cursor-pointer"
          >
            <img
              className="w-28 h-28 object-contain"
              src={item.img}
              alt="cart-image"
            />
            <div className="flex justify-around pl-5">
              <div>
                <h3>{item.title}</h3>
                <p className="w-11/12 text-sm mb-2">
                  {item.desc.substring(0, 100)}
                </p>
                <div className="text-blue-500">1 x {item.price}</div>
              </div>

              <AiOutlineDelete className="text-red-600 font-bold text-3xl" />
            </div>
          </div>
        ))}
        <div>
          <div
            className="flex justify-between mt-10 mb-5
          "
          >
            <h5>SUBTOTAL</h5>
            <span>$19.9</span>
          </div>

          <button className="bg-blue-500 text-white px-3 py-2">
            Proceed To Checkout
          </button>
          <div className="font-semibold text-red-600 mt-5 cursor-pointer">
            Reset Cart
          </div>
        </div>
      </div>
    </div>
  );
}
