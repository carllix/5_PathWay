import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { formatTitleToUrl } from "../(informasi)/components/Card";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Bookmark() {
  const session = await getServerSession(authOptions);
  
  const BookmarkLomba = await db.bookmarkLomba.findMany({
    where: { user_email: session?.user.email ?? "" },
  });

  const BookmarkBeasiswa = await db.bookmarkBeasiswa.findMany({
    where: { user_email: session?.user.email ?? "" },
  });

  const formatDateToIndo = (date: Date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const getStatus = (deadline: Date) => {
    const now = new Date();
    return now > deadline ? "Closed" : "Open";
  };

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-10 min-h-screen">
      <h1 className="text-center font-bold text-sm sm:text-base md:text-lg lg:text-2xl">
        My Bookmark
      </h1>

      {/* Bookmark Lomba */}
      <h1 className="text-xs font-bold mt-5 md:mt-10 lg:mt-14 mb-2 sm:text-sm md:text-base lg:text-lg">
        Lomba
      </h1>
      {BookmarkLomba.length > 0 ? (
        <Table className="border-spacing-0 rounded-lg text-[9px] sm:text-xs md:text-sm lg:text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">No</TableHead>
              <TableHead className="font-semibold">Lomba</TableHead>
              <TableHead className="font-semibold">Kategori</TableHead>
              <TableHead className="font-semibold">Deadline</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {BookmarkLomba.map((lomba, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="text-start text-blue-500 underline">
                  <Link href={`/lomba/${formatTitleToUrl(lomba.title)}`}>
                    {lomba.title}
                  </Link>
                </TableCell>
                <TableCell className="uppercase">{lomba.category}</TableCell>
                <TableCell>{formatDateToIndo(lomba.deadline)}</TableCell>
                <TableCell
                  className={
                    getStatus(lomba.deadline) === "Closed"
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {getStatus(lomba.deadline)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-4">
          Belum ada lomba yang dibookmark ...
        </p>
      )}

      {/* Bookmark Beasiswa */}
      <h1 className="text-xs font-bold mt-10 mb-2 sm:text-sm md:text-base lg:text-lg">
        Beasiswa
      </h1>
      {BookmarkBeasiswa.length > 0 ? (
        <Table className="border-spacing-0 rounded-lg text-[9px] sm:text-xs md:text-sm lg:text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">No</TableHead>
              <TableHead className="font-semibold">Beasiswa</TableHead>
              <TableHead className="font-semibold">
                Total Uang Beasiswa
              </TableHead>
              <TableHead className="font-semibold">Deadline</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {BookmarkBeasiswa.map((beasiswa, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="text-start text-blue-500 underline">
                  <Link href={`/beasiswa/${formatTitleToUrl(beasiswa.title)}`}>
                    {beasiswa.title}
                  </Link>
                </TableCell>
                <TableCell>{beasiswa.total_uang}</TableCell>
                <TableCell>{formatDateToIndo(beasiswa.deadline)}</TableCell>
                <TableCell
                  className={
                    getStatus(beasiswa.deadline) === "Closed"
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {getStatus(beasiswa.deadline)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-4">
          Belum ada beasiswa yang dibookmark ...
        </p>
      )}
    </div>
  );
}
