"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-full mx-auto py-4 px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800 flex">
              <Image
                src="/name-pathway.svg"
                alt="logo"
                width={100}
                height={40}
              />
              <Image
                src="/logo-pathway.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="/"
              className={`text-gray-800 hover:text-gray-600 ${
                pathname === "/" ? "font-bold" : ""
              }`}
            >
              Beranda
            </a>
            <a
              href="/lomba"
              className={`text-gray-800 hover:text-gray-600 ${
                pathname === "/lomba" ? "font-bold" : ""
              }`}
            >
              Informasi
            </a>
            <a
              href="/about"
              className={`text-gray-800 hover:text-gray-600 ${
                pathname === "/about" ? "font-bold" : ""
              }`}
            >
              Tentang Kita
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white">
          <a
            href="/"
            className={`py-2 text-gray-800 hover:text-gray-600 ${
              pathname === "/" ? "font-bold" : ""
            }`}
          >
            Beranda
          </a>
          <a
            href="/lomba"
            className={`py-2 text-gray-800 hover:text-gray-600 ${
              pathname === "/lomba" ? "font-bold" : ""
            }`}
          >
            Informasi
          </a>
          <a
            href="/about"
            className={`py-2 text-gray-800 hover:text-gray-600 ${
              pathname === "/about" ? "font-bold" : ""
            }`}
          >
            Tentang Kita
          </a>
        </div>
      )}
    </nav>
  );
}
