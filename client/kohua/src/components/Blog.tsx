import { Link } from "react-router-dom";
import BlogCover1 from "../assets/images/blog-cover-1.webp"
import BlogCover2 from "../assets/images/blog-cover-2.webp"
import BlogCover3 from "../assets/images/blog-cover-3.webp"
import BlogCover4 from "../assets/images/blog-cover-4.webp"
export default function Blog() {
  return (
    <section className="overflow-hidden margin-96 md:mx-10 xl:mx-28 mx-0 p-3 md:p-0 md:my-[140px] mt-20 mb-10 relative">
      <img
        className="absolute top-0 right-0 xl:mt-10 -mr-24 lg:-mr-0"
        src="https://shuffle.dev/saturn-assets/images/blog/star-circle-right.svg"
        alt="Star Circle"
      />

      <div className="relative container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-15 text-center">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-teal-500 bg-teal-50 rounded-full">
              OUR BLOGS
            </span>
            <div className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold mb-10">
              <span>News & </span>
              <span className="font-serif italic">Articles</span>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mb-18">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="relative group w-full">
                <Link to="https://blogs.kohua.in/exploring-the-world-of-tea-a-journey-through-flavor-and-culture/">
                  <img
                    className="block w-full mb-5"
                    src={BlogCover1}
                    alt="Blog Cover Image"
                  />
                  <span className="block text-gray-500 mb-2">April 1, 2024</span>
                  <h4 className="text-3xl font-semibold text-gray-900 group-hover:text-orange-900 mb-2">
                  Exploring the World of Tea
                  </h4>
                  <p className="max-w-xl text-lg text-gray-500">
                  Welcome to our delightful journey through the enchanting world of tea.
                  </p>
                </Link>

              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative  group mb-8 w-full">
                <Link to="https://blogs.kohua.in/the-timeless-elixir-why-we-should-have-tea/" className="md:flex">
                  <img
                    className="md:w-48 w-full md:h-40 h-full"
                    src={BlogCover2}
                    alt="Blog Cover Image"
                  />
                  <div className="mt-4 md:mt-0 md:ml-6 pt-2">
                    <span className="block text-gray-500 mb-2">
                      April 4, 2024
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-900">
                    The Timeless Elixir: Why We Should Have Tea
                    </h4>
                    <p className="max-w-xl text-lg text-gray-500">
                      Let's go beyond its soothing aroma and comforting warmth.
                    </p>
                  </div>
                </Link>

              </div>
              <div className="relative group w-full mb-8">
                <Link to="https://blogs.kohua.in/how-improper-tea-preparation-can-lead-to-health-issues/" className="md:flex">
                  <img
                    className="md:w-48 w-full"
                    src={BlogCover3}
                    alt="Blog Cover Image"
                  />
                  <div className="mt-4 md:mt-0 md:ml-6 pt-2">
                    <span className="block text-gray-500 mb-2">
                      April 10, 2024
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-900">
                    How Improper Tea Preparation Can Lead to Health Issues
                    </h4>
                    <p className="max-w-xl text-lg text-gray-500">
                    Let's delve into how mishandling tea can turn this beloved beverage into a source of trouble.
                    </p>
                  </div>
                </Link>

              </div>
              <div className="relative group w-full mb-8">
                <Link to="https://blogs.kohua.in/unveiling-the-wonders-of-green-tea-a-journey-to-health-and-vitality/" className="md:flex">
                  <img
                    className="md:w-48 w-full"
                    src={BlogCover4}
                    alt="Blog Cover Image"
                  />
                  <div className="mt-4 md:mt-0 md:ml-6 pt-2">
                    <span className="block text-gray-500 mb-2">
                      April 20, 2024
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-900">
                    Unveiling the Wonders of Green Tea: A Journey to Health and Vitality
                    </h4>
                    <p className="max-w-xl text-lg text-gray-500">
                    Green Tea traces its origins back thousands of years to ancient China
                    </p>
                  </div>
                </Link>

              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link
              to="https://blogs.kohua.in/"
              className="relative group inline-block py-4 px-7 font-semibold text-teal-500 hover:text-orange-50 rounded-full bg-teal-50 transition duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative">See More Articles</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
