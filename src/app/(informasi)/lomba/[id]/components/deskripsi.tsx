import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import React from "react";

export default function Deskripsi (){
  return (
    <div className="bg-[#F0D78C] rounded-3xl p-5">
      <p className="text-sm text-justify lg:leading-6">
        Kompetisi ini adalah ajang bagi peserta untuk merancang dan
        mempresentasikan model bisnis inovatif dengan menghadirkan ide-ide
        kreatif yang dapat diimplementasikan di dunia nyata. Peserta akan
        melalui beberapa tahap simulasi yang dirancang untuk menguji kemampuan
        mereka dalam berbagai aspek bisnis, seperti analisis pasar, pengembangan
        produk, strategi pemasaran, dan manajemen keuangan.
      </p>
      <Button className="mt-4 font-semibold h-10 p-4 w-5/6 bg-[#4F81C7] rounded-xl text-[#F0D78C] hover:bg-blue-900 flex justify-center mx-auto">
        <Link href="#" className="flex items-center gap-3">
          <p>Syarat dan Ketentuan</p>
          <FaLink className="text-black" />
        </Link>
      </Button>
    </div>
  );
};
