import React from "react";
import Accordion from "./accordion";
import { Button } from "@/components/ui/button";

export default function Details() {
  return (
    <div className="bg-[#F0D78C] rounded-3xl p-5">
      <p className="font-bold text-xl">BizMaster Challenge</p>
      <p className="text-lg my-1">
        Fakultas Ekonomi dan Bisnis Universitas Indonesia
      </p>
      <div className="grid grid-cols-2 justify-stretch gap-2 my-4">
        <Button className="font-semibold h-10 p-4 bg-[#4F81C7] rounded-xl text-[#F0D78C] hover:bg-blue-900">
          Narahubung
        </Button>
        <Button className="font-semibold h-10 p-4 bg-[#4F81C7] rounded-xl text-[#F0D78C] hover:bg-blue-900">
          Daftar
        </Button>
      </div>
      <div className="grid grid-cols-2 text-sm">
        <div className="flex flex-col gap-1">
          <p>Deadline</p>
          <p>Pendaftaran</p>
          <p>Tingkat</p>
          <p>Bidang</p>
        </div>
        <div className="font-bold text-end flex flex-col gap-1">
          <p>30 September 2024</p>
          <p>Rp150.000,00</p>
          <p>Universitas</p>
          <p>Bisnis</p>
        </div>
      </div>
      <div className="relative">
        <h1 className="font-extrabold text-3xl">FAQ</h1>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};
