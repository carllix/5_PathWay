"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          isOpen ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
        }`}
      >
        <div className="bg-[#80aae5] rounded-3xl flex justify-between px-4 py-2">
          This is the answer
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#4F81C7] rounded-3xl flex justify-between px-4 py-2"
      >
        <span>This is the question</span>
        <img src="/arrow.svg" />
      </button>
    </div>
  );
};

export default Accordion;
