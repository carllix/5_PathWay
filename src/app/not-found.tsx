import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 lg:gap-7 text-center items-center justify-center min-h-screen bg-[#4F81C7] font-bold">
      <p className="text-3xl sm:text-5xl lg:text-6xl text-[#FCFAFA]">Oops!</p>
      <p className="text-6xl sm:text-8xl lg:text-9xl text-[#F0D78C]">404</p>
      <div className="text-sm sm:text-lg lg:text-xl text-white">
        <p>Jangan khawatir, kalian langsung bisa</p>
        <p>
          kembali ke{" "}
          <Link href="/" className="underline text-[CCE7F7]">
            beranda
          </Link>
        </p>
      </div>
    </div>
  );
}
