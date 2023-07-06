import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Home1Img from "../assets/images/home1.jpeg";
import Home2Img from "../assets/images/home2.webp";
import Home3Img from "../assets/images/home3.webp";

const data = [Home1Img, Home2Img, Home3Img];

export default function Slider() {
  const [sliderVal, setSliderVal] = useState(0);
  const [isArrowClicked, setisArrowClicked] = useState(false);
  let interval: number;

  const prevSlideImage = () => {
    setSliderVal((prevVal) => (prevVal === 0 ? 200 : prevVal - 100));
    setisArrowClicked(true);
  };

  const nextSlideImage = () => {
    setSliderVal((prevVal) => (prevVal === 200 ? 0 : prevVal + 100));
    setisArrowClicked(true);
  };

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
    <section className="w-[100vw] mt-[80px] h-[calc(100vh-80px)] relative">
      <div
        className="w-[300vw] h-full flex transition-all ease-in-out duration-1000 overflow-x-hidden"
        style={{ transform: `translateX(-${sliderVal}vw)` }}
      >
        {data.map((item) => (
          <img
            key={crypto.randomUUID()}
            className="w-[100vw] h-full object-cover"
            src={item}
            alt="slider-image"
          />
        ))}
      </div>
      <div className="flex justify-center gap-10 absolute left-0 right-0 bottom-24">
        <AiOutlineArrowLeft
          onClick={prevSlideImage}
          className="border-[1px] border-red-100 w-12 h-10 p-2 cursor-pointer"
        />
        <AiOutlineArrowRight
          onClick={nextSlideImage}
          className="border-[1px] border-red-100 w-12 h-10 p-2 cursor-pointer"
        />
      </div>
    </section>
  );
}
