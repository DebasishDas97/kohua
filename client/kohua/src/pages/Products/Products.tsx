import { useParams } from "react-router-dom";
import List from "../../components/List";
import { useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import GreenTeaCat from "../../assets/images/green-tea-cat.webp"
import PremiumTeaCat from "../../assets/images/premium-tea-cat.webp"
import SpecialTeaCat from "../../assets/images/special-tea-cat.webp"
import GoldTeaCat from "../../assets/images/gold-tea-cat.webp"
import useFetch from "../../hooks/useFetch";
import { Helmet } from "react-helmet-async";

export default function Products() {
  const { id } = useParams(); // Assuming useParams() returns an object with an "id" property
  const [maxPrice, setMaxPrice] = useState(4000);
  const [selectedSubCats, setSelectedSubCats] = useState<string[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const media = window.matchMedia("(min-width: 280px) and (max-width: 540px)");

  let catId: number | undefined;

  if (id) {
    catId = parseInt(id);
  }

  let imageSrc: string;
  let title : string;
  let desc: string;
  switch (catId) {
    case 1:
      imageSrc = PremiumTeaCat;
      title = "Kohua Premium Tea";
      desc = "Indulge in the pinnacle of tea craftsmanship with our distinguished 'Kohua Premium Tea,' a masterpiece born from the verdant landscapes of Assam. Elevate your tea experience as we present a blend that encapsulates the epitome of luxury and flavor.";
      break;
    case 2:
      imageSrc = GoldTeaCat;
      title = "Kohua Gold tea";
      desc = "Indulge in the richness of flavor with our exquisite 'Kohua Gold Tea.' Meticulously curated, this blend captures the essence of a golden brew, delivering a tea experience that is unparalleled.";
      break;
    case 3:
      imageSrc = SpecialTeaCat;
      title = "Kohua Special tea";
      desc = "Experience the extraordinary with Kohua Special Tea range, curated for the connoisseurs of fine tea.";
      break;
    case 4:
      imageSrc = GreenTeaCat;
      title = "Kohua Green tea";
      desc = "Discover the essence of nature in every sip with our 'Kohua Green Tea.' Sourced from lush tea gardens, this tea embodies the purity of organic cultivation."
      break;
    default:
      // Default image if catid doesn't match any case
      imageSrc = GoldTeaCat;
      break;
  }


  // Now you can use "parsedId" safely without the risk of it being undefined
  const { state } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedSubCats(
      checked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <>
    <Helmet>
    <title>{`Category ${title}`} - Kohua</title>
    <meta
      name="description"
      content={`Get to know why you should have it, from our ${title}.`}
    />
    <link rel="canonical" href={`https://kohua.in/products/${catId}`} />
  </Helmet>
    <div className="md:mt-28 mt-24 mb-24 md:mx-10 margin-96 xl:mx-28 mx-[11px]">
      <div
        onClick={() => setShowFilter(!showFilter)}
        className="md:hidden mb-3 flex items-center justify-end text-xl text-blue-500"
      >
        Filter <AiOutlineFilter />
      </div>
      <div className="md:flex block md:items-start items-center">
        {/* for mobile */}
        {showFilter && (
          <div className="h-full -top-3 left-0 p-5 flex-1 md:static fixed mt-20 md:mt-0 md:bg-none bg-gray-50 z-10">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl">Categories ✨</h2>
              {state?.data &&
                Array.isArray(state.data) &&
                state.data.map((item) => {
                  return (
                    <label
                      key={item.id}
                      className="text-lg cursor-pointer"
                      htmlFor={item.id.toString()}
                    >
                      <input
                        className="cursor-pointer capitalize"
                        type="checkbox"
                        value={item.id}
                        onChange={handleChange}
                        id={item.id.toString()}
                      />
                      &nbsp;{item.attributes.title}
                    </label>
                  );
                })}
            </div>
            <div>
              <h2 className="text-2xl">Filter By Price 🏷️</h2>
              <div className="flex flex-col gap-2 my-3">
                <label
                  className="flex items-center gap-1 cursor-pointer"
                  htmlFor="200-500"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    id="200-500"
                    value="500"
                    onChange={(e) => setMaxPrice(+e.target.value)}
                  />
                  &#8804;500
                </label>

                <label
                  className="flex items-center gap-1 cursor-pointer"
                  htmlFor="500-1000"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    id="500-1000"
                    value="1000"
                    onChange={(e) => setMaxPrice(+e.target.value)}
                  />
                  &#8804;1000
                </label>

                <label
                  className="flex items-center gap-1 cursor-pointer"
                  htmlFor="1000-2000"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    id="1000-2000"
                    value="2000"
                    onChange={(e) => setMaxPrice(+e.target.value)}
                  />
                  &#8804;2000
                </label>

                <label
                  className="flex items-center gap-1 cursor-pointer"
                  htmlFor="2000-4000"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    id="2000-4000"
                    value="24000"
                    onChange={(e) => setMaxPrice(+e.target.value)}
                  />
                  &#8804;4000
                </label>
              </div>
            </div>
          </div>
        )}

        {/* for desktop */}
        {!media.matches && (
          <div className="h-full top-0 flex-1">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl">Categories ✨</h2>
              {state?.data &&
                Array.isArray(state.data) &&
                state.data.map((item) => {
                  return (
                    <label
                      key={item.id}
                      className="text-lg cursor-pointer"
                      htmlFor={item.id.toString()}
                    >
                      <input
                        className="cursor-pointer capitalize"
                        type="checkbox"
                        value={item.id}
                        onChange={handleChange}
                        id={item.id.toString()}
                      />
                      &nbsp;{item.attributes.title}
                    </label>
                  );
                })}
            </div>
            <div>
              <h2 className="text-2xl">Filter By Price 🏷️</h2>
              <div className="flex flex-col gap-2 my-3">
                <label
                  className="flex items-center gap-1 cursor-pointer"
                  htmlFor="200-500"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    id="200-500"
                    value="500"
                    onChange={(e) => setMaxPrice(+e.target.value)}
                  />
                  &#8804;500
                </label>

                <label
                  className="flex items-center gap-1 cursor-pointer"
                  htmlFor="500-1000"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    id="500-1000"
                    value="1000"
                    onChange={(e) => setMaxPrice(+e.target.value)}
                  />
                  &#8804;1000
                </label>

                <label
                  className="flex items-center gap-1 cursor-pointer"
                  htmlFor="1000-2000"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    id="1000-2000"
                    value="2000"
                    onChange={(e) => setMaxPrice(+e.target.value)}
                  />
                  &#8804;2000
                </label>

                <label
                  className="flex items-center gap-1 cursor-pointer"
                  htmlFor="2000-4000"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    id="2000-4000"
                    value="4000"
                    onChange={(e) => setMaxPrice(+e.target.value)}
                  />
                  &#8804;4000
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="flex-[5]">
          <img
            className="mb-20 w-full object-cover md:h-auto h-[200px]"
            src={imageSrc}
            alt="products"
          />
          <List catId={catId} maxPrice={maxPrice} subCats={selectedSubCats} />
        </div>
      </div>
    </div>
    </>
  );
}
