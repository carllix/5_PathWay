"use client";

import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-sm text-white">
      <div className="w-full px-5 py-3 bg-[#4F81C7] rounded-lg flex items-center justify-between">
        <p>{title}</p>
        {isOpen ? (
          <MdExpandMore
            onClick={toggleAccordion}
            className="cursor-pointer text-xl"
          />
        ) : (
          <MdExpandLess
            onClick={toggleAccordion}
            className="cursor-pointer text-xl"
          />
        )}
      </div>
      {isOpen && (
        <div className="px-5 py-3 mt-1 rounded-lg bg-blue-800 p-2">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
