import Image from "next/image";
import Link from "next/link";

export function formatTitleToUrl(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function Card({
  title,
  deadline,
  description,
  type,
  imageUrl,
}: {
  title: string;
  deadline: string;
  description: string;
  type: string;
  imageUrl: string;
}) {
  return (
    <div className="rounded-xl shadow-md p-4 bg-[#CCE7F7] text-sm sm:text-base hover:bg-[#B0D4ED] cursor-pointer">
      <Link
        href={
          type === "beasiswa"
            ? `/beasiswa/${formatTitleToUrl(title)}`
            : `/lomba/${formatTitleToUrl(title)}`
        }
      >
        <div className="flex flex-col gap-2">
          {/* Gambar tidak tersedia pada dataset */}
          <Image
            src={imageUrl}
            alt="poster"
            width={800}
            height={1134}
            className="rounded-xl w-full h-80"
          />
          <p className="font-bold">{title}</p>
          <div className="flex flex-row gap-2">
            <p className="">Batas Pendaftaran : </p>
            <p className="font-bold">{deadline}</p>
          </div>
          <p className="text-justify text-xs sm:text-sm ">
            {" "}
            {description.split(" ").length > 20
              ? description.split(" ").slice(0, 20).join(" ") + " ..."
              : description}
          </p>
        </div>
      </Link>
    </div>
  );
}
