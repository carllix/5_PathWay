import React from "react";
import Image from "next/image";
import { FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col md:flex-row items-start mb-4 md:mb-0">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold flex">
              <Image
                src={"name-pathway.svg"}
                alt="logo"
                width={100}
                height={40}
              />
              <Image
                src={"logo-pathway.svg"}
                alt="logo"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <div className="mb-2">
              <a href="/about" className="block text-black hover:underline">
                <b>Tentang Kita</b>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-400"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-left md:text-right">
          <p>
            <b>PT EduPrestasi Nusantara</b>
          </p>
          <p>Jalan Prestasi Utama No. 45</p>
          <p>Kel. Cendekia, Kec. Inovasi</p>
          <p>Kota Pintar, Prov. Cemerlang 12345</p>
        </div>
      </div>
    </footer>
  );
}
