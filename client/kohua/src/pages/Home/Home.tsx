import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";
import useFetch from "../../hooks/useFetch";

export default function Home() {
;

  return (
    <>
      <Slider />
      <FeaturedProducts
        heading="Featured"
        desc="Elevate your senses with our handpicked Tea Leaves. Sourced from the lush tea gardens of Assam, these leaves are renowned for their vibrant green color and refreshing taste. Dive into a world of antioxidants and vitality with each sip."
      />
      <Categories />
      <FeaturedProducts
        heading="Trending"
        desc="Discover the teas that are taking the tea world by storm. Our trending products collection features a curated selection of teas that have captured the hearts and taste buds of tea enthusiasts worldwide. From timeless classics to innovative blends, these teas are a testament to the artistry of tea making."
      />
    </>
  );
}
