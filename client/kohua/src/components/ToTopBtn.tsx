import { useEffect, useState } from "react";

export default function ToTopBtn() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(() => scrolledFromTop > 300);
    };
    window.addEventListener("scroll", scrollCallback);
    scrollCallback();
    // clean-up function
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
    onClick={scrollToTop}
      aria-label="scroll to top"
      className={`${
        shown ? 'scale-100' : 'scale-0'
      } w-10 h-10 transition-transform duration-500 flex fixed right-5 bottom-10 bg-gray-800 z-20 rounded-full shadow-lg shadow-gray-900 justify-center items-center`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#ffff"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
