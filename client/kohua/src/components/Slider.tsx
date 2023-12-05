import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Home1Img from "../assets/images/hero-img3.webp";
import Home2Img from "../assets/images/hero-img2.webp";
import Home3Img from "../assets/images/hero-img.webp";

const data = [
  { title: "1", desc: "", img: Home1Img },
  { title: "2", desc: "", img: Home2Img },
  { title: "3", desc: "", img: Home3Img },
];

export default function Slider() {
  const [sliderVal, setSliderVal] = useState(0);
  const [isArrowClicked, setisArrowClicked] = useState(false);
  // the interval will be redefined on every render,
  // this should be outside of the component or a reference
  let interval: number;

  const prevSlideImage = () => {
    setSliderVal((prevVal) => (prevVal === 0 ? 200 : prevVal - 100));
    setisArrowClicked(true);
  };

  const nextSlideImage = () => {
    setSliderVal((prevVal) => (prevVal === 200 ? 0 : prevVal + 100));
    setisArrowClicked(true);
  };

  // Don't use useEffect for this, this is unnecessary
  // Do the job inside your click handlers
  useEffect(() => {
    if (!isArrowClicked) {
      interval = setInterval(() => {
        setSliderVal((prevVal) => (prevVal === 200 ? 0 : prevVal + 100));
      }, 4000); // Change slide every 3 seconds
    } else {
      clearInterval(interval);
    }

    return () => {
      // Clean up the interval when the component is unmounted
      clearInterval(interval);
    };
  }, [isArrowClicked]);

  return (
    <section className="w-[100vw] mt-[64px] h-[calc(100vh-64px)] relative">
      <div
        className="w-[300vw] h-full flex transition-all ease-in-out duration-1000 overflow-x-hidden"
        style={{ transform: `translateX(-${sliderVal}vw)` }}
      >
        {data.map((item) => (
          <img
            key={item.title}
            className="w-[100vw] h-full object-cover"
            src={item.img}
            alt="slider-image"
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex justify-center gap-10 absolute left-0 right-0 bottom-12">
        <AiOutlineArrowLeft
          onClick={prevSlideImage}
          className="rounded-full text-[#edeae3] border-[1px] border-red-100 md:w-12 w-10 h-10 md:h-12 p-2 cursor-pointer"
        />
        <AiOutlineArrowRight
          onClick={nextSlideImage}
          className="rounded-full text-[#edeae3] border-[1px] border-red-100 md:w-12 w-10 h-10 md:h-12 p-2 cursor-pointer"
        />
      </div>
    </section>
  );
}
