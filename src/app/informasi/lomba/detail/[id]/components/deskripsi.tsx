import React from "react";

const Deskripsi = () => {
  return (
    <div className="bg-[#F0D78C] rounded-3xl p-5">
      <p className="text-2xl">
        Kompetisi ini adalah ajang bagi peserta untuk merancang dan
        mempresentasikan model bisnis inovatif dengan menghadirkan ide-ide
        kreatif yang dapat diimplementasikan di dunia nyata. Peserta akan
        melalui beberapa tahap simulasi yang dirancang untuk menguji kemampuan
        mereka dalam berbagai aspek bisnis, seperti analisis pasar, pengembangan
        produk, strategi pemasaran, dan manajemen keuangan.
      </p>
      <button className="bg-[#4F81C7] rounded-xl font-bold p-3 text-[#F0D78C] mt-20 text-2xl flex items-center hover:bg-blue-900">
        Syarat dan Ketentuan
        <img src="/link.svg" className="ml-3" />
      </button>
    </div>
  );
};

export default Deskripsi;
