"use client";

import { useState, useLayoutEffect } from "react";

export default function About() {

  const [paragraphSize, setParagraphSize] = useState({
    fontSize: '30px',
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setParagraphSize({
          fontSize: '20px',
        });
      } else {
        setParagraphSize({
          fontSize: '30px',
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <img 
        src="/image-about.svg" 
        alt="Background"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-[#f0d78c] opacity-70 mix-blend-overlay pointer-events-none"></div>

      <div className="absolute top-[25%] left-[41%] transform -translate-x-1/2 text-white text-center">
        <img 
          src="/About Pathway.svg" 
          alt="About Pathway"
          className="w-[1000px] h-auto max-w-full"
        />
      </div>

      <div 
        className="absolute top-[55%] left-[45%] translate-x-[-50%] w-[60%] text-white text-center"
        style={{
          fontSize: paragraphSize.fontSize,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
        }}
      >

        <p className="text-justify">
          PathWay adalah platform digital yang dirancang khusus untuk memenuhi kebutuhan mahasiswa 
          dalam mencari informasi penting secara efisien. Kami memahami betapa pentingnya akses 
          terhadap informasi yang akurat dan terpusat, terutama terkait lomba, beasiswa, dan peluang 
          lainnya yang dapat mendukung perjalanan akademik dan karier mahasiswa.
        </p>
      </div>
    </div>
  );
}
