"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import InformasiNavigation from "../components/InformasiNavigation";
import ModalLombaFilter from "../components/ModalLombaFilter";
import { usePathname } from "next/navigation";
import Card from "../components/Card";

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

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-10">
      <div className="flex justify-between gap-2 sm:gap-8 md:gap-10">
        {/* Search Bar */}
        <div className="flex w-7/12 items-center rounded-xl bg-[#F0D78C] py-2 px-3 md:px-5 gap-x-2 md:gap-x-4">
          <IoMdSearch className="text-xl" />
          <input
            type="text"
            placeholder="Sedang cari lomba apa?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-[10px] sm:text-xs md:text-sm lg:text-base placeholder-black"
          />
        </div>

        {/* Navigation */}
        <InformasiNavigation path={pathname} />

        {/* Filter */}
        <div
          className="flex w-1/12 items-center justify-center bg-[#F0D78C] p-2 rounded-xl cursor-pointer"
          onClick={openModal}
        >
          <IoFilter className="text-xl" />
        </div>
      </div>

      {/* List Lomba */}
      <div className="mt-6">
        <p className="mb-4 text-sm">Berikut rekomendasi lomba untuk kamu</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2x1:grid-cols-5 gap-10">
          <Card title="Lomba 1" description="Deskripsi lomba 1" />
          <Card title="Lomba 1" description="Deskripsi lomba 1" />
          <Card title="Lomba 1" description="Deskripsi lomba 1" />
        </div>
      </div>

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
