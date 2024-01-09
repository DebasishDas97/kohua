import { ChangeEvent, FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { makeRequest } from "../makeRequest";
const initialFormData = {
  useremail: "",
};
export default function Footer() {
  const date = new Date();
  const [formData, setFormData] =
    useState<Record<string, string>>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      await makeRequest.post("/subscribes", { data: formData });

      // If submission is successful, show thank you message and clear form
      setShowThankYou(true);
      setFormData({ useremail: "" });
    } catch (err) {
      alert(
        "Something went wrong! Try again later or contact us at contact@kohua.in"
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowThankYou(false);
      }, 2000);
    }
  };

  return (
    <footer className="text-center md:mt-0 mt-7 pb-5 relative z-10 px-6">
      {/* subscribe email */}
      <div className="footer-subscribe-section">
        <h4 className="font-sans md:text-2xl text-xl mb-5">
          Subscribe to us for early offers ! ✨
        </h4>
        <div className="flex flex-col items-center justify-center mb-6 md:mb-10 md:px-0 px-3">
          <form
            className="flex items-center justify-center mb-5 md:px-0 px-3"
            onSubmit={handleSubmit}
          >
            <input
              className="border-2 border-cyan-600 md:w-[260px] w-[230px] h-10 p-1 rounded-l outline-none"
              type="text"
              id="email"
              name="useremail"
              value={formData.useremail}
              onChange={handleFormData}
              placeholder="Email Address 📧"
            />
            <button
              type="submit"
              className="text-center bg-cyan-600 p-2 text-white font-medium tracking-wider rounded-r cursor-pointer"
              disabled={isSubmitting}
            >
              Subscribe
            </button>
          </form>
          {/* Show thank you message after submission */}
          {showThankYou && (
            <div className="text-green-600">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </div>
      </div>

      {/* NavLinks */}
      <div className="md:mb-10 mb-[2.8rem] flex justify-evenly relative z-10 md:flex-row md:gap-0 flex-col gap-9 md:px-0 px-3 text-left">
        <div>
          <h3 className="text-2xl font-semibold mb-2">About Us</h3>
          <p className="md:w-96 w-auto md:px-0 text-lg">
            Our love for tea is deeply ingrained in our heritage, and it's this
            profound connection that fuels our commitment to delivering the
            finest Assam tea to your cup.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Categories</h3>
          <ul className="text-lg">
            <li>
              <NavLink to="/products/4">Green Tea</NavLink>
            </li>
            <li>
              <NavLink to="/products/2">Kohua Gold</NavLink>
            </li>
            <li>
              <NavLink to="/products/1">Kohua Premium</NavLink>
            </li>
            <li>
              <NavLink to="/products/3">Kohua Special</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Help</h3>
          <ul className="text-lg">
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-of-service">Terms Of Service</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/cancellation">Cancellation</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <span className="text-cyan-600 font-bold md:text-2xl text-sm relative z-10">
        Kohua{" "}
      </span>
      <span className="md:text-xl text-sm relative z-10">
        {" "}
        &copy; Copyright {`${date.getFullYear()}`} || All Rights Reserved
      </span>
    </footer>
  );
}
