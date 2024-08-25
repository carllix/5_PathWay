import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl shadow-md p-4 bg-[#CCE7F7] text-sm sm:text-base hover:bg-[#B0D4ED] cursor-pointer">
      <Link href="/lomba/1">
        <div className="flex flex-col gap-2">
          <Image
            src="/information-details.jpg"
            alt="poster"
            width={800}
            height={1134}
            className="rounded-xl w-full h-80"
          />
          <p className="font-bold">{title}</p>
          <p className="text-justify text-xs sm:text-sm ">{description}</p>
        </div>
      </Link>
    </div>
  );
}
