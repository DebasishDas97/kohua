import { Link } from "react-router-dom";
import { CardProps } from "../types/type";
import { AiOutlineHeart } from "react-icons/ai";

export default function Card(item: CardProps) {
  return (
    <Link to={`product/${item.id}`}>
      <div className="flex w-[280px] flex-col gap-2 mb-12">
        <div className="w-full h-[400px] overflow-hidden relative group">
          {item.isNew && (
            <span className="absolute left-1 top-1 bg-white text-teal-600 p-1 z-20 text-sm font-semibold">
              New Season
            </span>
          )}
          <img
            className="w-full h-full object-cover absolute z-10 transition-all duration-500 ease-in-out transform group-hover:scale-105"
            src={item.img}
            alt={item.title}
          />
          <img
            className="w-full h-full object-cover absolute transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:z-20"
            src={item.img2}
            alt={item.title}
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="">
            {item.title.length > 30 ? (
              <div>
                {item.title.slice(0, 30)}
                <br />
                {item.title.slice(30)}
              </div>
            ) : (
              item.title
            )}
          </h2>
          <AiOutlineHeart className="text-xl" />
        </div>

        <div className="flex gap-5">
          <h3 className="font-medium text-gray-400 line-through">
            {item.oldPrice}
          </h3>
          <h3 className="font-medium">{item.price}</h3>
        </div>
      </div>
    </Link>
  );
}
