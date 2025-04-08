import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Home1Img from "../assets/images/slider-bg-1.webp";
import Home3Img from "../assets/images/slider-home-2.webp";
import Home2Img from "../assets/images/home-slider-3.webp";

const data = [
  {
    title: "Rejuvenate Your Soul, One Cup at",
    otherTitle: "a Time",
    desc: "Indulge in a moment of tranquility and rejuvenation with every sip of our carefully crafted teas.",
    img: Home1Img,
  },
  {
    title: "A Taste of Class, Steep",
    otherTitle: "to Perfection",
    desc: "Each cup is a testament to our dedication to quality and authenticity, as we source only the finest tea leaves.",
    img: Home2Img,
  },
  { title: "Brewing Happiness, with", otherTitle: "the Time", desc: "We believe that happiness can be found in savoring a perfectly brewed cup of tea.", img: Home3Img },
];

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
    <section className="w-[100vw] h-auto relative">
      <div
        className="w-[300vw] md:h-[43rem] h-full flex transition-all ease-in-out duration-1000 overflow-x-hidden"
        style={{ transform: `translateX(-${sliderVal}vw)` }}
      >
        {data.map((item) => (
          <div
            key={item.title}
            className="relative padding-96 xl:px-28 pt-[130px] pb-[50px] bg-cover w-full bg-bottom" style={{ backgroundImage: `url(${item.img})` }}
          >

            <div className="relative container px-4 mx-auto">
              <div className="max-w-3xl">
                <div className="pl-8 lg:pl-18 border-l-2 border-gray-200 mb-16">
                  <h1 className="font-heading text-4xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-white mb-8 sm:mb-14">
                    <span data-config-id="auto-txt-16-6">
                      {item.title}&nbsp;
                    </span>
                    <span
                      className="font-serif italic text-teal-300"
                      data-config-id="auto-txt-17-6"
                    >
                      {item.otherTitle}
                    </span>
                  </h1>
                </div>
                <div className="lg:flex md:mb-20 mb-0 items-center">
                  <div className="max-w-md lg:mb-0 lg:mr-8">
                    <p
                      className="text-xl font-semibold text-gray-200 tracking-wide"
                      data-config-id="auto-txt-18-6"
                    >
                     {item.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-center justify-between">
                <div className="flex mb-12 lg:mb-0 items-center">
                  <div className="flex justify-center md:gap-10 gap-4 absolute left-3 bottom-2">
                    <AiOutlineArrowLeft
                      onClick={prevSlideImage}
                      className="rounded-full text-[#edeae3] border-[1px] border-red-100 md:w-12 w-10 h-10 md:h-12 p-2 cursor-pointer"
                    />
                    <AiOutlineArrowRight
                      onClick={nextSlideImage}
                      className="rounded-full text-[#edeae3] border-[1px] border-red-100 md:w-12 w-10 h-10 md:h-12 p-2 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex md:absolute md:text-right md:right-[11px] md:bottom-1">
                  <div className="md:mr-8 xl:mr-0 mr-8 mt-2">
                    <svg
                      width="84"
                      height="10"
                      viewBox="0 0 84 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-6"
                    >
                      <path
                        d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
                        fill="#ffff"
                      ></path>
                    </svg>
                  </div>
                  <div className="max-w-sm xl:max-w-lg">
                    <p
                      className="text-gray-200 tracking-wide text-lg"
                      data-config-id="auto-txt-24-6"
                    >
                      Today, our tea business stands as a dynamic team of over 200 individuals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
