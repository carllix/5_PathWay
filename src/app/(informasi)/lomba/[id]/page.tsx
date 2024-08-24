import Link from "next/link";
import Poster from "./components/poster";
import Deskripsi from "./components/deskripsi";
import Diskusi from "./components/diskusi";
import Details from "./components/details";

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
