"use client";

import Poster from "../../components/poster";
import Deskripsi from "../../components/deskripsi";
import Diskusi from "../../components/diskusi";
import Details from "../../components/details";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalSyarat from "../../components/ModalSyarat";
import Papa from "papaparse";
import { Beasiswa } from "../page";
import { useParams, useRouter } from "next/navigation";

function formatDate(dateString: string) {
  // Memisahkan string tanggal dan membuat objek Date
  const [day, month, year] = dateString.split("-");
  const date = new Date(`${year}-${month}-${day}`);

  // Format tanggal ke format yang diinginkan
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function DetailBeasiswa() {
  const router = useRouter();
  const params = useParams();
  const title = decodeURIComponent(params.slug);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [beasiswaData, setBeasiswaData] = useState<Beasiswa[]>([]);

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

  const beasiswa = beasiswaData.find(
    (beasiswa) => beasiswa.judul_beasiswa === title
  );

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-10">
      <button onClick={() => router.back()} className="text- flex gap-2">
        <Image src="/back.svg" alt="back" width={20} height={20} />
        Kembali
      </button>
      {beasiswa && (
        <>
          <div className="grid lg:grid-cols-2 gap-9 mt-10">
            <Poster imageUrl="/information-details.jpg" />
            <div className="flex flex-col gap-9">
              <Details
                title={beasiswa.judul_beasiswa}
                organizer={beasiswa.lembaga_penyelenggara}
                contactLink={`https://wa.me/1233444`}
                deadline={formatDate(beasiswa.deadline_pendaftaran)}
                registrationLink={beasiswa.more_info}
                scholarship_amount={beasiswa.totaluang_beasiswa}
                level={beasiswa.tingkat}
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
                <ModalSyarat
                syarat={beasiswa.syarat_ketentuan}
                  more_info={beasiswa.more_info}
                  handleClose={handleClose}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
