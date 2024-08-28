import Link from "next/link";
import Poster from "./components/poster";
import Deskripsi from "./components/deskripsi";
import Diskusi from "./components/diskusi";
import Details from "./components/details";
import Image from "next/image";

export default function DetailLomba() {
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-10">
      <Link href="/lomba" className="text- flex gap-2">
        <Image src="/back.svg" alt="back" width={20} height={20} />
        Kembali
      </Link>
      <div className="grid lg:grid-cols-3 gap-9 mt-10">
        <Poster imageUrl="/information-details.jpg" />
        <Deskripsi
          desc="Kompetisi ini adalah ajang bagi peserta untuk merancang dan
        mempresentasikan model bisnis inovatif dengan menghadirkan ide-ide
        kreatif yang dapat diimplementasikan di dunia nyata. Peserta akan
        melalui beberapa tahap simulasi yang dirancang untuk menguji kemampuan
        mereka dalam berbagai aspek bisnis, seperti analisis pasar, pengembangan
        produk, strategi pemasaran, dan manajemen keuangan."
          url="#"
        />
        <Details
          title="BizMaster Challenge"
          organizer="Fakultas Ekonomi dan Bisnis Universitas Indonesia"
          contactLink="#"
          reagistrationLink="#"
          deadline="10 Januari 2023"
          registrationFee="Rp100.000"
          level="Universitas"
          category="Bisnis"
        />
      </div>
      <Diskusi />
    </div>
  );
}
