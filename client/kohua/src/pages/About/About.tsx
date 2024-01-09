import { Link } from "react-router-dom";
import AboutImg from "../../assets/images/hero-img.webp";

export default function About() {
  return (
    <div className="my-24 md:mx-[100px] mx-0">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        About Us
      </h1>
      <div className="md:py-16">
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row md:gap-12 gap-8">
            {/* Left Column - Text */}
            <div className="md:w-[10%] md:border-t md:border-gray-300">
              <h2 className="text-2xl font-normal mt-5">Info</h2>
            </div>
            <div className="border-t border-gray-300 pt-5 md:ml-[37%] ml-0 flex-1">
              <p className="md:text-xl text-lg">
                Founded by passionate tea enthusiast with deep roots in Assam,
                Kohua has a story that dates back generations. Our love for tea
                is deeply ingrained in our heritage, and it's this profound
                connection that fuels our commitment to delivering the finest
                Assam tea to your cup.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Text (Order 1 on medium and above screens) */}
          <div className="md:order-1 md:flex justify-center flex-col pr-0 lg:pr-16 hidden">
            <p className="md:text-xl text-lg leading-relaxed">
              We take great pride in our commitment to quality and
              sustainability. Our tea gardens follow environmentally responsible
              practices, ensuring that our tea is not only delicious but also
              eco-friendly. From plucking to packaging, every step of our
              tea-making process is carried out with the utmost care to maintain
              the highest quality standards.
            </p>
            <p className="md:text-xl text-lg leading-relaxed mt-4">
              Have questions or want to know more about our teas? We'd love to
              hear from you. Reach out to us anytime, and our team will be
              delighted to assist you.
            </p>
            <Link
              className="bg-cyan-600 text-lg px-3 py-1 text-white font-medium tracking-wider rounded-md cursor-pointer mt-8 w-32 text-center"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Column - Image (Order 2 on medium and above screens) */}
          <div className="md:order-2">
            <img
              src={AboutImg}
              alt="about-us"
              className="w-full rounded-lg object-cover md:h-full"
              loading="lazy"
            />
          </div>

          {/* Left Column - Text (Order 2 on small screens) */}
          <div className="md:hidden flex justify-center flex-col pr-0 md:pr-16">
            <p className="md:text-xl text-lg leading-relaxed">
              We take great pride in our commitment to quality and
              sustainability. Our tea gardens follow environmentally responsible
              practices, ensuring that our tea is not only delicious but also
              eco-friendly. From plucking to packaging, every step of our
              tea-making process is carried out with the utmost care to maintain
              the highest quality standards.
            </p>
            <p className="md:text-xl text-lg leading-relaxed mt-4">
              Have questions or want to know more about our teas? We'd love to
              hear from you. Reach out to us anytime, and our team will be
              delighted to assist you.
            </p>
            <Link
              className="bg-cyan-600 px-3 py-1 text-white font-medium tracking-wider rounded-md cursor-pointer mt-8 md:mt-8 mx-auto w-32  text-center"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
