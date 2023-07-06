import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center mt-10 pb-5 relative z-10">
      {/* subscribe email */}
      <div className="footer-subscribe-section">
        <h4 className="font-sans text-2xl mb-5">
          Subscribe to us for early offers ! ✨
        </h4>
        <div className="flex items-center justify-center mb-10 md:px-0 px-3">
          <input
            className="border-2 border-cyan-600 w-[300px] h-10 p-1 rounded-l outline-none"
            type="text"
            placeholder=" Email Address 📧"
          />
          <label className="text-center bg-cyan-600 p-2 text-white font-medium tracking-wider rounded-r cursor-pointer">
            Subscribe
          </label>
        </div>
      </div>

      {/* NavLinks */}
      <div className="mt-16 md:mb-10 mb-[2.8rem] flex justify-evenly relative z-10 md:flex-row md:gap-0 flex-col gap-9">
        <div>
          <h3 className="text-2xl font-semibold mb-2">About</h3>
          <p className="md:w-96 w-auto md:px-0 px-3 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit
            facilis nulla sint placeat esse iste veritatis, beatae perspiciatis,
            alias illum voluptate quas!
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Categories</h3>
          <ul className="text-lg">
            <li>
              <NavLink to="/">Mekhela Chador</NavLink>
            </li>
            <li>
              <NavLink to="/">Sarees</NavLink>
            </li>
            <li>
              <NavLink to="/">Lehenga</NavLink>
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
              <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bg"></div>
      <span className="text-cyan-600 font-bold md:text-2xl text-sm relative z-10">
        Rajita's Silk House{" "}
      </span>
      <span className="md:text-xl text-sm relative z-10">
        {" "}
        &copy; Copyright 2023 || All Rights Reserved
      </span>
    </footer>
  );
}
