import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Bookmark() {
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-10 min-h-screen">
      <h1 className="text-center">My Bookmark</h1>

      {/* Bookmark Lomba */}
      <Table className="border-spacing-0 rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Lomba</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Deadline</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell className="text-start">
              ARKAVIDIA ITB COMPFEST UI 2-19 PASMING BASED
            </TableCell>
            <TableCell>Bisnis</TableCell>
            <TableCell>Open</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Bookmark Beasiswa */}
      <Table className="border-spacing-0 rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Beasiswa</TableHead>
            <TableHead>Total Uang Beasiswa</TableHead>
            <TableHead>Deadline</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell className="text-start">
              ARKAVIDIA ITB COMPFEST UI 2-19 PASMING BASED
            </TableCell>
            <TableCell>Bisnis</TableCell>
            <TableCell>Open</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
