import { NavLink } from "react-router-dom";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="text-center md:mt-24 mt-10 pb-5 relative z-10">
      {/* subscribe email */}
      <div className="footer-subscribe-section">
        <h4 className="font-sans text-2xl mb-5">
          Subscribe to us for early offers ! ✨
        </h4>
        <div className="flex items-center justify-center mb-10 md:px-0 px-3">
          <form className="flex items-center justify-center mb-10 md:px-0 px-3">
            <input
              className="border-2 border-cyan-600 w-[260px] h-10 p-1 rounded-l outline-none"
              type="text"
              id="email"
              placeholder="Email Address 📧"
            />
            <button
              type="submit"
              className="text-center bg-cyan-600 p-2 text-white font-medium tracking-wider rounded-r cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* NavLinks */}
      <div className="mt-16 md:mb-10 mb-[2.8rem] flex justify-evenly relative z-10 md:flex-row md:gap-0 flex-col gap-9">
        <div>
          <h3 className="text-2xl font-semibold mb-2">About Us</h3>
          <p className="md:w-96 w-auto md:px-0 px-3 text-lg">
          Our love for tea is deeply ingrained in our heritage, and it's this profound connection that fuels our commitment to delivering the finest Assam tea to your cup.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Categories</h3>
          <ul className="text-lg">
            <li>
              <NavLink to="/">Green Tea</NavLink>
            </li>
            <li>
              <NavLink to="/">Kohua Gold</NavLink>
            </li>
            <li>
              <NavLink to="/">Kohua Premium</NavLink>
            </li>
            <li>
              <NavLink to="/">Kohua Special</NavLink>
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
