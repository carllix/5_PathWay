"use client";

import Poster from "../../components/poster";
import Deskripsi from "../../components/deskripsi";
import Diskusi from "../../components/diskusi";
import Details from "../../components/details";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalSyarat from "../../components/ModalSyarat";
import Papa from "papaparse";
import { Lomba } from "../page";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { formatTitleToUrl } from "../../components/Card";

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

export default function DetailLomba() {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;

  const { data: session, status } = useSession();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [lombaData, setLombaData] = useState<Lomba[]>([]);

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
    fetch("/dataset_lomba.csv")
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            setLombaData(results.data as Lomba[]);
          },
        });
      })
      .catch((error) => console.error("Error fetching CSV file:", error));
  }, []);

  const lomba = lombaData.find(
    (lomba) => formatTitleToUrl(lomba.judul_lomba) === slug
  );

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-10">
      <button onClick={() => router.back()} className="text- flex gap-2">
        <Image src="/back.svg" alt="back" width={20} height={20} />
        Kembali
      </button>
      {lomba && (
        <>
          <div className="grid lg:grid-cols-2 gap-9 mt-10">
            <Poster imageUrl="/default_lomba.jpg" />
            <div className="flex flex-col gap-9">
              <Details
                title={lomba.judul_lomba}
                organizer={lomba.lembaga_penyelenggara}
                contactLink={`https://wa.me/${lomba.narahubung}`}
                deadline={formatDate(lomba.deadline_pendaftaran)}
                registrationLink={lomba.more_info}
                registrationFee={lomba.biaya_pendaftaran}
                level={lomba.tingkat}
                category={lomba.bidang}
              />
              <Deskripsi
                desc={lomba.deskripsi}
                onButtonClick={openModal}
              />
            </div>
          </div>

          {/* Forum Diskusi */}
          <h1 className="font-extrabold text-xl mt-10">Forum Diskusi</h1>
          {status === "authenticated" ? (
            <Diskusi />
          ) : (
            <p className="my-4">
              Anda harus login terlebih dahulu untuk membagikan komentar di
              forum diskusi ini!{" "}
              <Link href="/login" className="underline text-[#4F81C7]">
                Login
              </Link>
            </p>
          )}

          {showModal && (
            <div>
              <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <ModalSyarat
                  more_info={lomba.more_info}
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
