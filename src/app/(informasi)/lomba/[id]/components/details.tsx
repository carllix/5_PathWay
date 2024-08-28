import React from "react";
import Accordion from "./accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DetailsProps {
  title: string;
  organizer: string;
  contactLink: string;
  reagistrationLink: string;
  deadline: string;
  registrationFee: string;
  level: string;
  category: string;
}
export default function Details({
  title,
  organizer,
  contactLink,
  reagistrationLink,
  deadline,
  registrationFee,
  level,
  category,
}: DetailsProps) {
  return (
    <div className="bg-[#F0D78C] rounded-3xl p-5">
      <p className="font-bold text-xl">{title}</p>
      <p className="text-lg my-1">{organizer}</p>
      <div className="grid grid-cols-2 justify-stretch gap-2 my-4">
        <Button className="font-semibold h-10 p-4 bg-[#4F81C7] rounded-xl text-white hover:bg-blue-900">
          <Link href={contactLink}>Narahubung</Link>
        </Button>
        <Button className="font-semibold h-10 p-4 bg-[#4F81C7] rounded-xl text-white hover:bg-blue-900">
          <Link href={reagistrationLink}>Daftar</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 text-sm">
        <div className="flex flex-col gap-3">
          <p>Deadline</p>
          <p>Pendaftaran</p>
          <p>Tingkat</p>
          <p>Bidang</p>
        </div>
        <div className="font-bold text-end flex flex-col gap-3">
          <p>{deadline}</p>
          <p>{registrationFee}</p>
          <p>{level}</p>
          <p>{category}</p>
        </div>
      </div>
      <div className="relative mt-8">
        <h1 className="font-extrabold text-xl">FAQ</h1>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
