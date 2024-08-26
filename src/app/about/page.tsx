import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full h-screen xl:h-full overflow-hidden">
      <div className="absolute w-full h-full bg-black opacity-30 z-0"></div>
      <Image
        src="/bg-about.svg"
        alt="About"
        width={1280}
        height={832}
        className="w-full h-full object-cover"
      />
      <div className="absolute flex items-center gap-5 top-44 left-8 sm:left-20 lg:top-44 2xl:top-56 lg:left-28 font-allright text-white">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">About</p>
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">PathWay</p>
      </div>
      <p className="absolute z-50 top-64 left-8 sm:left-20 sm:top-[270px] md:top-[290px] lg:top-80 2xl:top-96 lg:left-28 text-white text-sm md:text-base lg:text-lg 2xl:text-xl text-justify font-light w-4/5 sm:w-3/4 lg:w-2/3 2xl:w-1/2 leading-6">
        PathWay adalah platform digital yang dirancang khusus untuk memenuhi
        kebutuhan mahasiswa dalam mencari informasi penting secara efisien. Kami
        memahami betapa pentingnya akses terhadap informasi yang akurat dan
        terpusat, terutama terkait lomba, beasiswa, dan peluang lainnya yang
        dapat mendukung perjalanan akademik dan karier mahasiswa.
      </p>
    </div>
  );
}
