"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isInformasiActive = /^\/(lomba|beasiswa)(\/.*)?$/.test(pathname);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto py-4 px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800 flex">
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
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`text-gray-800 hover:text-gray-600 ${
                pathname === "/" ? "font-bold" : ""
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/lomba"
              className={`text-gray-800 hover:text-gray-600 ${
                isInformasiActive ? "font-bold" : ""
              }`}
            >
              Informasi
            </Link>
            <Link
              href="/about"
              className={`text-gray-800 hover:text-gray-600 ${
                pathname === "/about" ? "font-bold" : ""
              }`}
            >
              Tentang Kita
            </Link>
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
        <div className="md:hidden flex flex-col items-center bg-white pb-5">
          <Link
            href="/"
            className={`py-2 text-gray-800 hover:text-gray-600 ${
              pathname === "/" ? "font-bold" : ""
            }`}
          >
            Beranda
          </Link>
          <Link
            href="/lomba"
            className={`py-2 text-gray-800 hover:text-gray-600 ${
              isInformasiActive ? "font-bold" : ""
            }`}
          >
            Informasi
          </Link>
          <Link
            href="/about"
            className={`py-2 text-gray-800 hover:text-gray-600 ${
              pathname === "/about" ? "font-bold" : ""
            }`}
          >
            Tentang Kita
          </Link>
        </div>
      )}
    </nav>
  );
}
