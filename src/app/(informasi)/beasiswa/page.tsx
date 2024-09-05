"use client";

import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import InformasiNavigation from "../components/InformasiNavigation";
import { usePathname } from "next/navigation";
import Card from "../components/Card";
import Papa from "papaparse";
import ModalBeasiswaFilter from "../components/ModalBeasiswaFilter";

export interface Beasiswa {
  judul_beasiswa: string;
  tanggal_pendaftaran: string;
  deadline_pendaftaran: string;
  tingkat: string;
  lembaga_penyelenggara: string;
  syarat_ketentuan: string
  totaluang_beasiswa: string;
  more_info: string;
  deskripsi: string;
}

export default function Beasiswa() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [beasiswaData, setBeasiswaData] = useState<Beasiswa[]>([]);
  const [selectedTingkat, setSelectedTingkat] = useState<string[]>([]);
  const pathname = usePathname();

  const openModal = () => {
    setShowModal(true);
  };

  const handleSave = (selectedTingkat: string[]) => {
    setSelectedTingkat(selectedTingkat);
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

  useEffect(() => {
    fetch("/dataset_beasiswa.csv")
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            setBeasiswaData(results.data as Beasiswa[]);
          },
        });
      })
      .catch((error) => console.error("Error fetching CSV file:", error));
  }, []);

  const filteredBeasiswa = beasiswaData.filter((beasiswa) => {
    const matchesSearchQuery = beasiswa.judul_beasiswa
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const tingkatArray = beasiswa.tingkat
      .split(",")
      .map((tingkat) => tingkat.trim().toLowerCase());
    const matchesTingkat =
      selectedTingkat.length === 0 ||
      selectedTingkat.some((tingkat) =>
        tingkatArray.includes(tingkat.toLowerCase())
      );

    return matchesSearchQuery && matchesTingkat;
  });


  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-10">
      <div className="flex justify-between gap-2 sm:gap-8 md:gap-10">
        {/* Search Bar */}
        <div className="flex w-7/12 items-center rounded-xl bg-[#F0D78C] py-2 px-3 md:px-5 gap-x-2 md:gap-x-4">
          <IoMdSearch className="text-xl" />
          <input
            type="text"
            placeholder="Sedang cari beasiswa apa?"
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

      {/* List Beasiswa */}
      <div className="mt-6">
        <p className="mb-4 text-sm">
          {filteredBeasiswa.length > 0
            ? "Berikut rekomendasi beasiswa untuk kamu"
            : "Maaf beasiswa yang kamu cari tidak ada"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2x1:grid-cols-5 gap-10">
          {filteredBeasiswa.map((beasiswa, index) => (
            <Card
              key={index}
              title={beasiswa.judul_beasiswa}
              type="beasiswa"
              description={beasiswa.deskripsi}
              imageUrl="/default_beasiswa.jpg"
            />
          ))}
        </div>
      </div>

      {showModal && (
        <div>
          <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <ModalBeasiswaFilter handleSave={handleSave} />
          </div>
        </div>
      )}
    </div>
  );
}
