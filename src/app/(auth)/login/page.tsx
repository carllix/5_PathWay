"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const signInData = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if(signInData?.error){
      console.log(signInData.error);
    } else {
      router.push('/')
    }
  };
  return (
    <div className="flex flex-col gap-5 text-center items-center justify-center min-h-screen bg-[#4F81C7]">
      <p className="text-xl sm:text-2xl lg:text-3xl text-[#F0D78C] mb-6 drop-shadow-[0_3px_2px_rgba(0,0,0,0.3)] font-bold">
        Silakan Log In!
      </p>
      <input
        className="rounded-2xl w-5/6 max-w-md p-3 text-xs text-[#8E8E93] font-normal bg-[#CCE7F7]"
        type="text"
        placeholder="Masukkan alamat email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="rounded-2xl w-5/6 max-w-md p-3 text-xs text-[#8E8E93] font-normal bg-[#CCE7F7]"
        type="password"
        placeholder="Masukkan kata sandi"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="yellow"
        className="w-20 h-8 sm:w-24 sm:h-9 lg:w-28 lg:h-10 rounded-xl"
        onClick={onSubmit}
      >
        Login
      </Button>
      <p className="text-[#F0D78C] text-sm sm:text-base lg:text-lg mt-4">
        Belum punya akun?{" "}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
