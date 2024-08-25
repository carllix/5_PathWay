import React from "react";
import Image from "next/image";

export default function Poster() {
  return (
    <div className="flex justify-center">
      <Image
        className="rounded-3xl w-4/5 lg:w-full"
        src="/information-details.jpg"
        alt="poster"
        width={800}
        height={1134}
      />
    </div>
  );
};
