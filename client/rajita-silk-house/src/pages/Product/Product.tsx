import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import AccordationProducts from "../../components/AccordationProducts";

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?cs=srgb&dl=pexels-shadab-%F0%9F%A6%8B-4982737.jpg&fm=jpg",
    "https://images.unsplash.com/photo-1603950227760-e609ce8e15b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmludGFnZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  ];
  return (
    <div className="md:mx-16 mb-8 mt-32 flex gap-12 md:flex-row flex-col mx-1">
      <div className="left flex flex-[1] md:gap-7 gap-2">
        <div className="images flex-2">
          <img
            className="md:object-cover object-contain cursor-pointer md:w-full w-16 md:h-36 h-16 mb-3"
            onClick={() => setSelectedImage(0)}
            src={images[0]}
            alt="product-image"
          />
          <img
            className="md:object-cover object-contain cursor-pointer md:w-full w-16 md:h-36 h-16 mb-3"
            onClick={() => setSelectedImage(1)}
            src={images[1]}
            alt="product-image"
          />
        </div>
        <div className="mainImg flex-[5]">
          <img
            className="object-cover w-full md:h-[600px] h-[300px]"
            src={images[selectedImage]}
            alt="main-image"
          />
        </div>
      </div>
      <div className="right flex-1 mx-2">
        <h1 className="text-3xl font-semibold mb-3">
          Long Sleeve Graphic T-shirt
        </h1>
        <span className="text-blue-400 text-xl">₹1000</span>
        <p className="mt-3 mb-7 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          necessitatibus impedit quos dolorem exercitationem laborum, temporibus
          numquam inventore deserunt, eos soluta fugiat officiis.
        </p>
        <div className="flex gap-3 mb-7">
          <div
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            className="bg-gray-200 px-3 text-lg cursor-pointer"
          >
            -
          </div>
          <span>{quantity}</span>
          <div
            onClick={() => setQuantity((prev) => prev + 1)}
            className="bg-gray-200 px-3 text-lg cursor-pointer"
          >
            +
          </div>
        </div>
        <button className="bg-blue-500 text-white px-5 py-2">
          🛒 &nbsp;Add To Cart
        </button>
        <div className="flex gap-5 text-blue-400 mt-5 text-[17px]">
          <span className="flex items-center cursor-pointer">
            <AiOutlineHeart />
            &nbsp;Add To Wishlist
          </span>
          <span className="cursor-pointer">
            <span className="text-2xl">𐄷 </span>Add To Compare
          </span>
        </div>
        <div className="text-gray-400 mt-7 mb-5">
          <p>Material: Silk</p>
          <p>Product Type: Saree</p>
          <p>Tag: Women, Ethnic, Handloom</p>
        </div>
        <hr />
        {/* accordation */}
        <div className="text-gray-400 mt-7 mb-5 flex flex-col gap-2">
          <div className="flex flex-col cursor-pointer gap-2">
            <AccordationProducts
              title="Description"
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
            />
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
    </div>
  );
}
