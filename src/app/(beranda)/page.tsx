import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Beranda() {
  const session = await getServerSession(authOptions);
  return (
    <div className="relative w-full h-screen xl:h-full overflow-hidden">
      <div className="absolute w-full h-full bg-black opacity-20 z-0"></div>
      <Image
        src="/bg-beranda.svg"
        alt="Beranda"
        width={1280}
        height={832}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-60 left-10 sm:left-20 lg:top-40 2xl:top-52 lg:left-28 font-allright text-white">
        {session?.user && (
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Hi, {session?.user.username} ...
          </p>
        )}
        <p className="mt-2 lg:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to
        </p>
        <p className="mt-2 lg:mt-8 text-7xl sm:text-8xl md:text-9xl lg:text-[150px]">
          PathWay
        </p>
      </div>
    </div>
  );
}
