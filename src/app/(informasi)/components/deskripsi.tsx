import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdLink } from "react-icons/md";
import React from "react";

interface DeskripsiProps {
  desc: string;
  onButtonClick: () => void;
}

export default function Deskripsi({ desc, onButtonClick }: DeskripsiProps) {
  return (
    <div className="bg-[#F0D78C] rounded-3xl p-5 flex flex-col justify-between h-full">
      <p className="text-sm lg:text-base text-justify leading-6 lg:leading-8">
        {desc}
      </p>
      <Button
        onClick={onButtonClick}
        className="mt-4 font-semibold h-10 p-4 w-5/6 bg-[#4F81C7] rounded-xl text-white hover:bg-blue-900 flex justify-center mx-auto text-sm xl:text-base gap-2"
      >
        <MdLink className="text-xl" />
        <p>Syarat dan Ketentuan</p>
      </Button>
    </div>
  );
}
