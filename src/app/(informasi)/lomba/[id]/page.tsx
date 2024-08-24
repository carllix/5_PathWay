import Link from "next/link";
import Poster from "./components/poster";
import Deskripsi from "./components/deskripsi";
import Diskusi from "./components/diskusi";
import Details from "./components/details";
import Image from "next/image";

export default function DetailLomba() {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-10">
      <Link href="/lomba" className="text- flex gap-2">
        <Image src="/back.svg" alt="back" width={20} height={20} />
        Kembali
      </Link>
      <div className="grid lg:grid-cols-3 gap-9 mt-10">
        <Poster />
        <Deskripsi />
        <Details />
      </div>
      <Diskusi />
    </div>
  );
}
