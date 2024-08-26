import Image from "next/image";
export default function Beranda() {
  return (
    <div className="relative w-full h-screen xl:h-full overflow-hidden">
      <Image
        src="/image-beranda.svg"
        alt="Beranda"
        width={1280}
        height={832}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-64 left-10 sm:left-20 lg:top-44 2xl:top-56 lg:left-28 font-allright text-white">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Welcome to</p>
        <p className="mt-6 lg:mt-12 text-7xl sm:text-8xl md:text-9xl lg:text-[150px]">PathWay</p>
      </div>
    </div>
  );
}
