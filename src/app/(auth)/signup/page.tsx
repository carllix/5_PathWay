"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill in all fields!");
      return;
    }

    setError("");

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (response.ok) {
      // Redirect to another page
      router.push("/login");
    } else {
      // Show error message
      console.error("Signup failed");
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-5 text-center items-center justify-center min-h-screen bg-[#4F81C7]">
      <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#F0D78C] drop-shadow-[0_3px_2px_rgba(0,0,0,0.3)]">
        Silakan Sign Up!
      </p>
      <div className="h-4 mb-4">
        {error && (
          <p className="text-red-600 font-medium text-sm sm:text-base lg:text-lg">
            {error}
          </p>
        )}
      </div>
      <input
        className="rounded-2xl w-5/6 max-w-md p-3 text-xs text-[#8E8E93] font-normal bg-[#CCE7F7]"
        type="text"
        placeholder="Masukkan username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
        Sign Up
      </Button>
      <p className="text-[#F0D78C] text-sm sm:text-base lg:text-lg mt-4">
        Sudah punya akun?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
