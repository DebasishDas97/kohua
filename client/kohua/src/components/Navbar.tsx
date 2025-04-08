import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/kohua-logo.png";
import Cart from "./Cart";
import { RootState } from "../types/type";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [rotation, setRotation] = useState(0);
  const products = useSelector((state: RootState) => state.cart.products);

  useEffect(() => {
    const handleOutsideClick = () => {
      setShowMenu(false);
    };

    if (showMenu) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  const handleMenuIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setRotation(rotation + 180);
    setShowMenu(!showMenu);
    setOpenCart(false);
  };

  const handleOpenCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenCart(!openCart);
    setShowMenu(false);
  };

  return (
    <>
      <nav className="py-3 z-20 fixed top-0 bg-gray-50 w-full box-shadow">
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between">
            <div className="flex items-center gap-16">
              <div>
                <Link to="/" className="flex gap-1 items-center ">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-14 w-44 object-contain text-primary"
                  />
                </Link>
              </div>
              <div className="hidden text-gray-500 lg:flex gap-8 text-xl">
                <Link to="/" className="">
                  Home
                </Link>
                {/* <Link to="#">Benefits</Link> */}
                <Link to="/about">About</Link>
                <Link to="products/4">Green Tea</Link>
                <Link to="products/2">Gold Tea</Link>
                <Link to="products/1">Premium Tea</Link>
                <Link to="products/3">Special Tea</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="xs:flex items-center gap-10">
                <div>
                  <button
                    onClick={handleOpenCart}
                    className="relative rounded-full border-solid border-2 transition-colors duration-700 ease-in-out border-gray-300 hover:border-gray-700 py-1 px-4 hover:bg-gray-700 hover:text-gray-100 text-xl text-gray-500 flex items-center"
                  >
                    <span>Cart &nbsp;</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path>
                    </svg>
                    <span className="absolute w-[1em] h-[1em] text-center text-sm top-[11px] right-[19px]">
                      {products.length}
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:hidden flex items-center mr-4">
                <button onClick={handleMenuIconClick}>
                  <svg
                  className="rotate-icon"
                    stroke="#91A3B0"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: `rotate(${rotation}deg)`}}
                  >
                    <path
                      d="M7 6C5.34315 6 4 7.34315 4 9H20C20 7.34315 18.6569 6 17 6H7Z"
                      fill="#91A3B0"
                    ></path>
                    <path
                      d="M7 18C5.34315 18 4 16.6569 4 15H20C20 16.6569 18.6569 18 17 18H7Z"
                      fill="#91A3B0"
                    ></path>
                    <path
                      d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3Z"
                      fill="#91A3B0"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div
          className={`fixed top-[4rem] z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !showMenu ? "h-0" : "h-full pt-7"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 text-lg font-bold tracking-wider">
              <Link to="/" className="border-gray-600">
                Home
              </Link>
              <Link to="/about">About</Link>
              <Link to="products/1">Green Tea</Link>
              <Link to="products/2">Gold Tea</Link>
              <Link to="products/3">Premium Tea</Link>
              <Link to="products/4">Special Tea</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
}
