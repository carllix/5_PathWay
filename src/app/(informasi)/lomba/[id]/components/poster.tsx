import React from "react";
import Image from "next/image";

interface PosterProps {
  imageUrl: string;
}

export default function Poster({ imageUrl }: PosterProps) {
  return (
    <div className="flex justify-center">
      <Image
        className="rounded-3xl w-4/5 lg:w-full"
        src={imageUrl}
        alt="poster"
        width={800}
        height={1134}
      />
    </div>
  );
};
