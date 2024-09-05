import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DetailsProps {
  title: string;
  organizer: string;
  contactLink?: string;
  registrationLink: string;
  deadline: string;
  registrationFee?: string;
  level: string;
  category?: string;
  scholarship_amount?: string;
}

export default function Details({
  title,
  organizer,
  contactLink,
  registrationLink,
  deadline,
  registrationFee,
  level,
  category,
  scholarship_amount
}: DetailsProps) {
  return (
    <div className="bg-[#F0D78C] rounded-3xl p-5">
      <p className="font-bold text-xl">{title}</p>
      <p className="text-lg my-1">{organizer}</p>
      <div className="grid grid-cols-2 justify-stretch gap-2 my-4">
        <Button className="font-semibold h-10 p-4 bg-[#4F81C7] rounded-xl text-white hover:bg-blue-900">
          {contactLink && (
            <Link href={contactLink} target="_blank">
              Narahubung
            </Link>
          )}
        </Button>
        <Button className="font-semibold h-10 p-4 bg-[#4F81C7] rounded-xl text-white hover:bg-blue-900">
          <Link href={registrationLink} target="_blank">
            Daftar
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 text-sm">
        <div className="flex flex-col gap-3">
          <p>Deadline</p>
          <p>{registrationFee? "Biaya Pendaftaran" : "Total Beasiswa"}</p>
          <p>Tingkat</p>
          {category && <p>Bidang</p>}
        </div>
        <div className="font-bold text-end flex flex-col gap-3">
          <p>{deadline}</p>
          <p>{registrationFee? registrationFee : scholarship_amount}</p>
          <p>{level}</p>
          {category && <p className="uppercase">{category}</p>}
        </div>
      </div>
      {/* <div className="relative mt-6">
        <h1 className="font-extrabold text-xl">FAQ</h1>
        <div className="mt-4 flex flex-col gap-2">
          <Accordion title="FAQ 1" content="Lorem Ipsum Dolor Sit Amet" />
          <Accordion title="FAQ 2" content="Lorem Ipsum Dolor Sit Amet" />
          <Accordion title="FAQ 3" content="Lorem Ipsum Dolor Sit Amet" />
        </div>
      </div> */}
    </div>
  );
}
