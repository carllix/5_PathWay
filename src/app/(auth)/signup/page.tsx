import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col gap-5 text-center items-center justify-center min-h-screen bg-[#4F81C7] font-bold">
      {/* Judul Sign Up */}
      <p className="text-xl sm:text-2xl lg:text-3xl text-[#F0D78C] mb-6 drop-shadow-[0_3px_2px_rgba(0,0,0,0.3)]">
        Silakan Sign Up!
      </p>

      {/* Container Input Field */}

      {/* Input Username */}
      <input
        className="rounded-2xl w-5/6 max-w-md p-3 text-xs text-[#8E8E93] font-normal bg-[#CCE7F7]"
        type="text"
        placeholder="Masukkan username"
      />
      {/* Input Email */}
      <input
        className="rounded-2xl w-5/6 max-w-md p-3 text-xs text-[#8E8E93] font-normal bg-[#CCE7F7]"
        type="text"
        placeholder="Masukkan alamat email"
      />
      {/* Input Password */}
      <input
        className="rounded-2xl w-5/6 max-w-md p-3 text-xs text-[#8E8E93] font-normal bg-[#CCE7F7]"
        type="text"
        placeholder="Masukkan kata sandi"
      />
      {/* Button Sign Up */}
      <Button
        variant="yellow"
        className="w-20 h-8 sm:w-24 sm:h-9 lg:w-28 lg:h-10 rounded-xl"
      >
        <Link href="/">Sign Up</Link>
      </Button>

      {/* Login jika sudah punya akun*/}
      <p className="text-[#F0D78C] text-sm sm:text-base lg:text-lg mt-4">
        Sudah punya akun?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
