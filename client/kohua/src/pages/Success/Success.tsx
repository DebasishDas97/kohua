import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("categories-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="my-24 margin-96 md:mx-[100px] mx-0 text-center thanks-confeti px-6">
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-8">
          Thank You for Your Payment! ✅
        </h2>
        <p className="md:text-2xl text-lg mb-6">
          We appreciate your business and the trust you've placed in us. Your
          payment has been successfully processed.
        </p>

        <p className="md:text-2xl text-lg mb-6">
          If you have any questions or concerns, please feel free to{" "}
          <Link to="/contact">contact us</Link>.
        </p>
        <p className="md:text-2xl text-lg md:mb-12 mb-10">
          We look forward to serving you in the future!
        </p>
        <button
          onClick={navigateToContact}
          className="py-2 px-5 text-xl tracking-wider font-medium text-center text-white rounded-lg bg-cyan-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Explore Our Categories
        </button>
      </div>
    </>
  );
}
