"use client";

import { useRouter } from "next/navigation";

export default function InformasiNavigation({ path }: { path: string }) {
  const router = useRouter();

  return (
    <div className="w-4/12 sm:w-3/12 bg-[#F0D78C] flex text-[9px] sm:text-xs md:text-sm lg:text-base items-center rounded-lg justify-evenly">
      <p
        className={`cursor-pointer hover:font-bold ${
          path === "/lomba" ? "font-bold" : ""
        }`}
        onClick={() => router.push("/lomba")}
      >
        Lomba
      </p>
      <p
        className={`cursor-pointer hover:font-bold ${
          path === "/beasiswa" ? "font-bold" : ""
        }`}
        onClick={() => router.push("/beasiswa")}
      >
        Beasiswa
      </p>
    </div>
  );
}
