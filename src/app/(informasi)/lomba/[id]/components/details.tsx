import React from "react";
import Accordion from "./accordion";

const Details = () => {
  return (
    <div className="bg-[#F0D78C] rounded-3xl p-5">
      <h1 className="font-extrabold text-3xl">BizMaster Challenge</h1>
      <h2 className="text-2xl my-1">
        Fakultas Ekonomi dan Bisnis Universitas Indonesia
      </h2>
      <div className="grid grid-cols-2 justify-stretch gap-2 my-4">
        <button className="bg-[#4F81C7] rounded-xl font-bold p-1 text-[#F0D78C] text-xl hover:bg-blue-900">
          Narahubung
        </button>
        <button className="bg-[#4F81C7] rounded-xl font-bold p-1 text-[#F0D78C] text-xl hover:bg-blue-900">
          Daftar
        </button>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="my-4">Deadline</p>
          <p className="my-4">Pendaftaran</p>
          <p className="my-4">Tingkat</p>
          <p className="my-4">Bidang</p>
        </div>
        <div className="font-bold text-end">
          <p className="my-4">30 September 2024</p>
          <p className="my-4">Rp150.000,00</p>
          <p className="my-4">Universitas</p>
          <p className="my-4">Bisnis</p>
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

export default Details;
