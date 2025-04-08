import { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { getEnvVariable } from '../utils/envUtils';
import { makeRequest } from '../makeRequest';

import GreenTea from "../assets/images/green-tea-3.png"
import GoldTea from "../assets/images/gold-tea-3.png"
import GreenTeaLeaf from "../assets/images/green-tea-leaf.png"

export default function ProductSLider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll(".slide__info__image__transition") as NodeListOf<HTMLElement>;
    images.forEach((image) => {
      image.style.animation = "none";
      image.offsetHeight;
      image.style.animation = "slideIn 1s ease-out forwards";
    });

  }, [currentSlide]);

  const slides = [
    {
      id: 12,
      attributes: {
        img: GoldTea,
        desc: "The revered Camellia sinensis plants nurtured in the fertile soils of Assam, Kohua Gold Tea is renowned for its delight taste and quality, its leaves carries the optimal balance of flavor and aroma, resulting in a brew that is nothing short of extraordinary. Steep a cup of Kohua Gold Tea, you'll be greeted by a tantalizing aroma that transports you to the serene landscapes of Assam.",
        title: "Kohua Gold Tea",
        quantity: "1kg",
        price: "Rs. 650",

      }
    },
    {
      id: 7,
      attributes: {
        img: GreenTea,
        desc: "Kohua Green Tea is a treasure from the lush gardens of Assam, where each sip encapsulates the essence of tradition, purity, and unparalleled flavor. It adherence to the traditional method of plucking, wherein only the tender topmost leaves and buds, known as `eati koli duti paat` in Assamese, are carefully handpicked. This meticulous selection process ensures that each leaf carries the optimal balance of flavor and aroma.",
        title: "Kohua Green Tea",
        quantity: "200gm",
        price: "Rs. 480",

      }
    },
  ];

  const changeSlide = (dir) => {
    if (dir === "right" && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (dir === "left" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const publishStripeKey = getEnvVariable("VITE_STRIPE_PUBLISH_KEY");
  const stripePromise = loadStripe(publishStripeKey);

  const handlePayment = async (items, e) => {
    console.log(items);

    e.stopPropagation();
    e.preventDefault();
    const products = [
      {
        id: items?.id,
        title: items?.attributes?.title,
        desc: items?.attributes?.desc,
        price: items?.attributes?.price,
        img: items?.attributes?.img?.data?.attributes?.url,
        quantity: 1,
      },
    ];

    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="m-3 md:mx-10 margin-96 xl:mx-28 md:mt-28 mt-[5rem] mb-28 mx-[11px] md:mb-[140px]">

      <div className="slide">
        <div className="slide__decorative-sidebar">
          <img src={slides[currentSlide].attributes.img} alt={slides[currentSlide].attributes.title} className='slide__info__image__transition' />
        </div>
        <div className="slide__info">
          <div className="slide__info__text">
            <h1 className="slide__info__title">{slides[currentSlide].attributes.title}</h1>
            <p className="slide__info__description">{slides[currentSlide].attributes.desc}</p>
          </div>
          <img src={slides[currentSlide].attributes.img} alt={slides[currentSlide].attributes.title} className="slide__info__image slide__info__image__transition relative z-10" />
          <img className='absolute -right-28 animate-slide md:bottom-auto bottom-0' src={GreenTeaLeaf} alt="Green Tea Leaf" />
          <div className="slide__arrows z-10">
            <a
              className={currentSlide > 0 ? "slide__arrows__arrow" : "slide__arrows__arrow slide__arrows__arrow--disabled"}
              onClick={() => changeSlide("left")}
            >
              &lt;
            </a>
            <a
              className={currentSlide < slides.length - 1 ? "slide__arrows__arrow" : "slide__arrows__arrow slide__arrows__arrow--disabled"}
              onClick={() => changeSlide("right")}
            >
              &gt;
            </a>
          </div>
        </div>
        <div className="slide__next px-10">
          <span className='text-lg'>Best Seller</span>
        </div>
        <div className="slide__details">
          <div className="slide__details__title">Details About Product</div>
          <div className="slide__details__block slide__details__block--temp">
            <h3 className="slide__details__subtitle text-lg">Quantity</h3>
            <p className="slide__details__block__description">{slides[currentSlide].attributes.quantity}</p>
          </div>
          <div className="slide__details__block slide__details__block--water">
            <h3 className="slide__details__subtitle text-lg">Price</h3>
            <p className="slide__details__block__description">{slides[currentSlide].attributes.price}</p>
          </div>
          <div className="slide__details__block slide__details__block--nutrition">
            <button className='text-lg' onClick={(e) => handlePayment(slides[currentSlide], e)}>Buy Now <span>→</span></button>
          </div>
        </div>
        <div className="slide__count">
          <p className="slide__count__title">Explore</p>
          <span className="slide__count__count">{currentSlide + 1}</span>
        </div>
      </div>
    </div>
  );
};

