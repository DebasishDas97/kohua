import { useParams } from "react-router-dom";
import List from "../../components/List";
import { useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import Store from "/src/assets/images/store.jpg";

export default function Products() {
  const { id } = useParams(); // Assuming useParams() returns an object with an "id" property

  let catId: number | undefined;

  if (id) {
    catId = parseInt(id);
  }

  // Now you can use "parsedId" safely without the risk of it being undefined

  const [maxPrice, setMaxPrice] = useState(20000);
  const [sort, setSort] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const media = window.matchMedia("(min-width: 280px) and (max-width: 540px)");
  return (
    <div className="md:mt-28 mt-24 mb-5 mx-3">
      <div className="md:hidden mb-3 flex items-center justify-end text-xl text-blue-500">
        Filter <AiOutlineFilter onClick={() => setShowFilter(!showFilter)} />
      </div>
      <div className="md:mx-16 flex md:items-start items-center">
        {/* for mobile */}
        {showFilter && (
          <div className="h-full top-0 left-0 p-5 flex-1 md:static fixed mt-20 md:mt-0 md:bg-none bg-gray-50 z-50">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl">Categories ✨</h2>
              <label className="text-lg" htmlFor="Mekhela Chador">
                <input type="checkbox" name="Mekhela Chador" id="" />
                &nbsp;Mekhela Chador
              </label>
              <label className="text-lg" htmlFor="Sarees">
                <input type="checkbox" name="Sarees" id="" />
                &nbsp;Sarees
              </label>
              <label className="text-lg" htmlFor="Lehengas">
                <input type="checkbox" name="Lehengas" id="" />
                &nbsp;Lehengas
              </label>
            </div>
            <div>
              <h2 className="text-2xl">Filter By Price 🏷️</h2>
              <div className="flex items-center gap-2 my-3">
                <span>500</span>
                <input
                  type="range"
                  name=""
                  id=""
                  min={500}
                  max={20000}
                  onChange={(e) => setMaxPrice(+e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <h2 className="text-2xl">Sort By 🗳️</h2>
              <label className="text-lg" htmlFor="trending">
                <input
                  type="radio"
                  value="trend"
                  name="trending"
                  onChange={() => setSort("trend")}
                />
                &nbsp;Trending
              </label>
              <label className="text-lg" htmlFor="new">
                <input
                  type="radio"
                  value="new"
                  name="new"
                  onChange={() => setSort("new")}
                />
                &nbsp;New Arrivals
              </label>
              <label className="text-lg" htmlFor="lowest">
                <input
                  type="radio"
                  value="low-price"
                  name="lowest"
                  onChange={() => setSort("low-price")}
                />
                &nbsp;Low Price
              </label>
              <label className="text-lg" htmlFor="highest">
                <input
                  type="radio"
                  value="high-price"
                  name="highest"
                  onChange={() => setSort("high-price")}
                />
                &nbsp;High Price
              </label>
            </div>
          </div>
        )}

        {/* for desktop */}
        {!media.matches && (
          <div className="h-full top-0 flex-1">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl">Categories ✨</h2>
              <label className="text-lg" htmlFor="Mekhela Chador">
                <input type="checkbox" name="Mekhela Chador" id="" />
                &nbsp;Mekhela Chador
              </label>
              <label className="text-lg" htmlFor="Sarees">
                <input type="checkbox" name="Sarees" id="" />
                &nbsp;Sarees
              </label>
              <label className="text-lg" htmlFor="Lehengas">
                <input type="checkbox" name="Lehengas" id="" />
                &nbsp;Lehengas
              </label>
            </div>
            <div>
              <h2 className="text-2xl">Filter By Price 🏷️</h2>
              <div className="flex items-center gap-2 my-3">
                <span>500</span>
                <input
                  type="range"
                  name=""
                  id=""
                  min={500}
                  max={20000}
                  onChange={(e) => setMaxPrice(+e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <h2 className="text-2xl">Sort By 🗳️</h2>
              <label className="text-lg" htmlFor="trending">
                <input
                  type="radio"
                  value="trend"
                  name="trending"
                  onChange={() => setSort("trend")}
                />
                &nbsp;Trending
              </label>
              <label className="text-lg" htmlFor="new">
                <input
                  type="radio"
                  value="new"
                  name="new"
                  onChange={() => setSort("new")}
                />
                &nbsp;New Arrivals
              </label>
              <label className="text-lg" htmlFor="lowest">
                <input
                  type="radio"
                  value="low-price"
                  name="lowest"
                  onChange={() => setSort("low-price")}
                />
                &nbsp;Low Price
              </label>
              <label className="text-lg" htmlFor="highest">
                <input
                  type="radio"
                  value="high-price"
                  name="highest"
                  onChange={() => setSort("high-price")}
                />
                &nbsp;High Price
              </label>
            </div>
          </div>
        )}

        <div className="flex-[4]">
          <img
            className="mb-20 object-cover md:h-auto h-[200px]"
            src={Store}
            alt=""
          />
          <List catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </div>
  );
}
