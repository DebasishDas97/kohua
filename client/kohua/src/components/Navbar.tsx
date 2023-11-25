import Logo from "../assets/images/kohua-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
// import { BiSearch } from "react-icons/bi";
import { BiStore } from "react-icons/bi";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { RootState } from "../types/type";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const products = useSelector((state: RootState) => state.cart.products);

  useEffect(() => {
    const handleOutsideClick = () => {
      setIsCategoryOpen(false);
    };

    if (isCategoryOpen) {
      // Attach the event listener when the menu is shown
      document.addEventListener("click", handleOutsideClick);
    } else {
      // Remove the event listener when the menu is hidden
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isCategoryOpen]);

  useEffect(() => {
    const handleOutsideClick = () => {
      setShowMenu(false);
    };

    if (showMenu) {
      // Attach the event listener when the menu is shown
      document.addEventListener("click", handleOutsideClick);
    } else {
      // Remove the event listener when the menu is hidden
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  const handleMenuIconClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop event propagation
    setShowMenu(!showMenu); // Toggle showMenu state
    setOpenCart(false);
  };

  const openCategories = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsCategoryOpen(!isCategoryOpen);
    setOpenCart(false);
  };

  const handleOpenCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenCart(!openCart);
    setIsCategoryOpen(false);
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <nav className="m-0 flex top-0 fixed z-50 justify-between items-center h-16 md:py-9 py-10 px-3 lg:px-20 md:px-10 bg-gray-50 w-full">
        <Link to="/">
          <img className="h-[60px] cursor-pointer" src={Logo} alt="logo" />
        </Link>
        <div className="gap-10 text-2xl items-center hidden md:flex">
          <Link to="/">Home</Link>
          <div className="relative">
            <div
              onClick={openCategories}
              className="cursor-pointer flex items-center"
            >
              Categories
              <IoMdArrowDropdown />
            </div>
            {isCategoryOpen && (
              <div className="dropdown-menu absolute top-12 left-0 bg-gray-50 p-4">
                <div className="gap-7 text-2xl flex flex-col w-[200px]">
                  <Link to="products/1">Green Tea</Link>
                  <Link to="products/2">Kohua Gold</Link>
                  <Link to="products/3">Kohua Premium</Link>
                  <Link to="products/4">Kohua Special</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="cursor-pointer">
            About
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Contact
          </Link>
          {/* <BiSearch className="cursor-pointer" /> */}
          {/* <BsPerson className="cursor-pointer" /> */}

          <div onClick={handleOpenCart} className="flex relative">
            <AiOutlineShoppingCart className="cursor-pointer" />
            <span className="absolute bg-blue-400 rounded-full w-5 h-5 text-center text-sm -top-3 -right-3">
              {products.length}
            </span>
          </div>
        </div>

        {/* Menu Icon */}
        {!showMenu ? (
          <>
            {/* <div className="relative md:hidden block">
              <input
                placeholder="Search Products"
                className="border border-gray-700 px-3 py-[3px] outline-none"
                type="search"
              />
              <BiSearch className="absolute top-1 right-1 cursor-pointer text-2xl" />
            </div> */}
            <BiStore
              className="cursor-pointer md:hidden block text-4xl"
              onClick={handleMenuIconClick}
            />
          </>
        ) : (
          <IoMdClose
            className="cursor-pointer md:hidden block text-3xl"
            onClick={handleMenuIconClick}
          />
        )}

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`${
            showMenu ? "translate-x-[0px]" : "translate-x-[300px]"
          } transition ease-in-out duration-500 z-10 rounded-sm absolute right-0 top-[60px] flex flex-col gap-7 p-5 bg-gray-50 w-[250px]`}
        >
          <div className="flex justify-around gap-7 p-4 rounded-md items-center bg-gray-100">
            {/* <BsPerson className="cursor-pointer text-2xl" /> */}

            <div onClick={handleOpenCart} className="flex relative">
              See Cart Items&nbsp;
              <AiOutlineShoppingCart className="cursor-pointer text-xl" />
              <span className="absolute bg-blue-400 rounded-full w-5 h-5 text-center -top-3 -right-3">
                {products.length}
              </span>
            </div>
          </div>
          <Link to="/" className="cursor-pointer text-xl menu-item">
            Homepage 🏡
          </Link>
          <Link to="/about" className="cursor-pointer text-xl menu-item">
            About Us ✨
          </Link>
          <Link to="/contact" className="cursor-pointer text-xl menu-item">
            Contact Us 📧
          </Link>
          <div className="gap-7 flex flex-col text-xl">
            <h3 className="font-bold text-cyan-700 text-xl">
              CATEGORIES⚡️ :-
            </h3>
            <Link className="menu-item" to="products/1">
              Green Tea
            </Link>
            <Link className="menu-item" to="products/2">
              Kohua Gold
            </Link>
            <Link className="menu-item" to="products/3">
              Kohua Premium
            </Link>
            <Link className="menu-item" to="products/4">
              Kohua Especial
            </Link>
          </div>
        </div>
      </nav>
      {openCart && <Cart />}
    </div>
  );
}
