import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col lg:gap-5 text-center items-center justify-center min-h-screen bg-[#4F81C7] font-bold">
      <p className="text-3xl mb-3 sm:text-5xl lg:text-5xl text-[#F0D78C] mb-6 drop-shadow-[0_3px_2px_rgba(0,0,0,0.3)]">Silakan Log In!</p>
      <input className="rounded-2xl h-12 w-[44%] p-5 text-2xl text-[#8E8E93] font-normal bg-[#CCE7F7]" type="text" placeholder="Masukkan username" />
      <input className="rounded-2xl h-12 w-[44%] p-5 text-2xl text-[#8E8E93] font-normal bg-[#CCE7F7]" type="text" placeholder="Masukkan kata sandi" />
      <div className="text-sm sm:text-lg lg:text-xl text-white mt-3">
        <a href="/" className="bg-[#F0D78C] text-[#4F81C7] text-3xl py-1 px-[68px] rounded-2xl ">Log In</a>
        <p className="text-[#F0D78C] mt-16">
          Belum punya akun?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
