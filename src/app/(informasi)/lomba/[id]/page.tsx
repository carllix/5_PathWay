"use client";

import Link from "next/link";
import Poster from "../../components/poster";
import Deskripsi from "../../components/deskripsi";
import Diskusi from "../../components/diskusi";
import Details from "../../components/details";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalSyarat from "../../components/ModalSyarat";

export default function DetailLomba() {
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const openModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
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
      <Link href="/lomba" className="text- flex gap-2">
        <Image src="/back.svg" alt="back" width={20} height={20} />
        Kembali
      </Link>
      <div className="grid lg:grid-cols-2 gap-9 mt-10">
        <Poster imageUrl="/information-details.jpg" />
        <div className="flex flex-col gap-9">
          <Details
            title="BizMaster Challenge"
            organizer="Fakultas Ekonomi dan Bisnis Universitas Indonesia"
            contactLink="#"
            deadline="10 Januari 2023"
            registrationLink="#"
            registrationFee="Rp100.000"
            level="Universitas"
            category="Bisnis"
          />
          <Deskripsi
            desc="Kompetisi ini adalah ajang bagi peserta untuk merancang dan
        mempresentasikan model bisnis inovatif dengan menghadirkan ide-ide
        kreatif yang dapat diimplementasikan di dunia nyata. Peserta akan
        melalui beberapa tahap simulasi yang dirancang untuk menguji kemampuan
        mereka dalam berbagai aspek bisnis, seperti analisis pasar, pengembangan
        produk, strategi pemasaran, dan manajemen keuangan."
            onButtonClick={openModal}
          />
        </div>
      </div>
      <Diskusi />

      {showModal && (
        <div>
          <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <ModalSyarat handleClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
}
