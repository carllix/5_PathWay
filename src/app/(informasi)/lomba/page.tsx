"use client";

import Image from "next/image";
import { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import InformasiNavigation from "../components/InformasiNavigation";
import ModalLombaFilter from "../components/ModalLombaFilter";
import { usePathname } from "next/navigation";

export default function Lomba() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const pathname = usePathname();
  
  const openModal = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-12 px-4">
      <div className="mx-4 flex justify-between gap-2 sm:gap-8 md:gap-10">
        {/* Search Bar */}
        <div className="flex w-7/12 items-center justify-between rounded-lg bg-[#F0D78C] py-2 px-3">
          <input
            type="text"
            placeholder="Sedang cari lomba apa?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-[10px] sm:text-xs md:text-sm lg:text-base placeholder-black"
          />
          <IoMdSearch className="text-xl text-gray-400" />
        </div>

        {/* Navigation */}
        <InformasiNavigation path={pathname} />

        {/* Filter */}
        <div
          className="flex w-1/12 items-center justify-center bg-[#F0D78C] p-2 rounded-lg cursor-pointer"
          onClick={openModal}
        >
          <Image
            src="/informasi/icon-filter.png"
            alt="filter"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* List Lomba */}


      {showModal && (
        <div>
          <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <ModalLombaFilter handleSave={handleSave} />
          </div>
        </div>
      )}
    </div>
  );
}
