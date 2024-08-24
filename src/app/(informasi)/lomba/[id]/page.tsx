import Link from "next/link";
import Poster from "./components/poster";
import Deskripsi from "./components/deskripsi";
import Details from "./components/details";
import Diskusi from "./components/diskusi";

export default function DetailLomba() {
  return (
    <div className="p-5 mx-8">
      <Link href="#" className="text-xl flex gap-2">
        <img src="/back.svg" />
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
