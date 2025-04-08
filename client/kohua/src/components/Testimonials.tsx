import LeafTesti from "../assets/images/leaf-testi.png"
import Testi2 from "../assets/images/testi-2.webp"
import Testi3 from "../assets/images/testi-3.webp"
import Testi4 from "../assets/images/testi-4.webp"

export default function Testimonials() {
  return (
    <>
     <div className="text-center z-10 relative text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mx-1">
      Read trusted <span className="text-teal-500">reviews</span> from our customers
    </div>
     <div className="md:mx-10 margin-96 xl:mx-28 mx-[11px] p-3 md:p-0 my-10 relative">
    <img className="absolute right-[-10px] mix-blend-screen w-40 top-[-70px] md:top-[-100px] rotate-45" src={LeafTesti} alt="Leaf" />
        <div className="flex w-full flex-col xl:flex-row justify-center items-center gap-6">
        <section className="xl:w-[80%] xl:flex xl:flex-col xl:gap-6 xl:justify-between">
        <div className="xl:flex xl:flex-row xl:gap-6 xl:h-[50%]">
          <div className="flex relative z-10 flex-col justify-center p-8 rounded-lg shadow-lg bg-violet-500 mb-8 xl:mb-0 xl:p-4 bg-hero bg-no-repeat bg-auto bg-right-top bg-origin-content">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <img
                src="data:image/jpeg;base64,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"
                alt="user profile"
                className="rounded-full w-12 h-12 hover:border-2 border-violet hover:cursor-pointer xl:w-6 xl:h-6"
              />
              <div className="flex flex-col justify-center">
                <span className="text-white opacity-80 hover:cursor-pointer xl:text-[1rem]">
                  <b>Rahul Patel</b>
                </span>
                <span className="text-blue-100 opacity-50 text-sm xl:text-[1rem]">
                  User
                </span>
              </div>
            </div>
            <h2 className="my-4 text-white font-medium text-2xl xl:text-xl xl:my-2">
              <b>
              Kohua Green Tea has become my daily ritual.
              </b>
            </h2>
            <p className="text-white opacity-60 text-base xl:text-lg">
              “ As a firm believer in the power of holistic wellness, Green Tea has become my go-to companion on my journey to a healthier lifestyle. Its delicate yet robust flavor profile invigorates my senses and rejuvenates my spirit. With its abundance of antioxidants and detoxifying properties, Green Tea has become more than just a beverage; it's a cornerstone of my well-being. Each cup is a gentle reminder to nurture my body, mind, and soul ”
            </p>
          </div>
          <div className="flex flex-col justify-center p-8 rounded-lg shadow-lg bg-slate-600 mb-8 xl:mb-0 xl:p-4">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <img
                src={Testi2}
                alt="user profile"
                className="rounded-full w-12 h-12 hover:border-2 border-violet hover:cursor-pointer xl:w-6 xl:h-6"
              />
              <div className="flex flex-col justify-center">
                <span className="text-white opacity-80 hover:cursor-pointer xl:text-[1rem]">
                  <b>Aarav Patel</b>
                </span>
                <span className="text-blue-100 opacity-50 text-sm xl:text-[1rem]">
                  User
                </span>
              </div>
            </div>
            <h2 className="my-4 text-white font-medium text-2xl xl:text-lg xl:my-2">
              <b>Gold Tea is like a treasure in a cup! </b>
            </h2>
            <p className="text-white opacity-60 text-base xl:text-lg">
              “ Gold Tea has been a cherished part of my morning ritual for years now. The rich aroma of the tea leaves as they steep in hot water is enough to awaken my senses. ”
            </p>
          </div>
        </div>
        <div className="xl:flex xl:flex-row xl:gap-6 xl:h-[50%]">
          <div className="flex flex-col justify-center p-8 mb-8 rounded-lg shadow-2xl bg-white xl:mb-0 xl:p-4">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <img
                src={Testi4}
                alt="user profile"
                className="rounded-full w-12 h-12 hover:border-2 border-dark hover:cursor-pointer xl:w-6 xl:h-6"
              />
              <div className="flex flex-col justify-center">
                <span className="text-dark hover:cursor-pointer xl:text-[1rem]">
                  <b>Diya Patel</b>
                </span>
                <span className="text-gray opacity-50 text-[1rem]">
                  User
                </span>
              </div>
            </div>
            <h2 className="my-4 text-gray font-medium text-2xl xl:text-lg xl:my-2">
              <b>Premium Tea leaves a lingering taste of perfection.</b>
            </h2>
            <p className="text-gray opacity-50 text-base xl:text-lg">
              “ Premium Tea is the epitome of luxury in a cup. From the moment the tea leaves unfurl in the steaming water, releasing their complex bouquet of aromas.
              ”
            </p>
          </div>
          <div className="flex flex-col justify-center p-8 rounded-lg shadow-lg bg-gray-800 mb-8 xl:mb-0 xl:p-4">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <img
                src="data:image/jpeg;base64,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"
                alt="user profile"
                className="rounded-full w-12 h-12 hover:border-2 border-violet hover:cursor-pointer xl:w-6 xl:h-6"
              />
              <div className="flex flex-col justify-center">
                <span className="text-white opacity-80 hover:cursor-pointer xl:text-[1rem]">
                  <b>Advik Sharma</b>
                </span>
                <span className="text-blue-200 opacity-50 text-sm xl:text-[1rem]">
                  User
                </span>
              </div>
            </div>
            <h2 className="my-4 text-white font-medium text-2xl xl:text-lg xl:my-2">
              <b>
              Definitely worth every penny!
              </b>
            </h2>
            <p className="text-white opacity-60 text-base xl:text-lg">
              “ From the moment the tea leaves unfurl in the steaming water, releasing their complex bouquet of aromas, to the last sip that leaves a lingering sweetness on my tongue, every moment is a celebration of indulgence. The smooth, velvety texture and nuanced flavors of Premium Tea elevate my tea-drinking experience to new heights. It's not just tea; it's a symphony of elegance and refinement. ”
            </p>
          </div>
        </div>
      </section>
      <section className="xl:w-[20%]">
        <div className="flex flex-col justify-center p-8 rounded-lg shadow-2xl bg-white xl:p-4">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
            <img
              src={Testi3}
              alt="user profile"
              className="rounded-full w-12 h-12 hover:border-2 border-dark hover:cursor-pointer xl:w-6 xl:h-6"
            />
            <div className="flex flex-col justify-center">
              <span className="text-dark hover:cursor-pointer xl:text-[1rem]">
                <b>Ishita Gupta</b>
              </span>
              <span className="text-gray opacity-50 text-[1rem]">
                User
              </span>
            </div>
          </div>
          <h2 className="my-4 text-gray font-medium text-2xl xl:text-lg xl:my-2">
            <b>Truly a golden delight!</b>
          </h2>
          <p className="text-gray opacity-50 text-base xl:text-lg">
            “ Kohua Gold Tea has become an indispensable part of my daily routine. Its bold flavor and comforting warmth never fail to uplift my spirits. Whether I'm tackling a busy workday or unwinding after a long day, this tea is my constant companion. Truly a golden delight! The heady aroma with the robust flavor of Assam tea leaves creates a symphony of flavors that dance on my palate, transporting me to the bustling streets of Assam with each sip. The tea is awesome. ”
          </p>
        </div>
      </section>
        </div>

    </div>
    </>

  );
}
