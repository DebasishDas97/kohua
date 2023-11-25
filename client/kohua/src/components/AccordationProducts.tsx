import { useState } from "react";
import { AccordationProps } from "../types/type";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function AccordionProducts({
  title,
  content,
}: AccordationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        {title}
        <MdKeyboardArrowDown
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>
      <div className={`accordion-content ${isOpen ? "open" : "closed"}`}>
        {isOpen && <div>{content}</div>}
      </div>
    </div>
  );
}
