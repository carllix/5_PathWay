import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: string;
}) {
  return (
    <div className="rounded-xl shadow-md p-4 bg-[#CCE7F7] text-sm sm:text-base hover:bg-[#B0D4ED] cursor-pointer">
      <Link
        href={type === "beasiswa" ? `/beasiswa/${title}` : `/lomba/${title}`}
      >
        <div className="flex flex-col gap-2">
          {/* Gambar tidak tersedia pada dataset */}
          <Image
            src="/information-details.jpg"
            alt="poster"
            width={800}
            height={1134}
            className="rounded-xl w-full h-80"
          />
          <p className="font-bold">{title}</p>
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
