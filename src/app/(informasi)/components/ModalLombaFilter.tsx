import { Button } from "@/components/ui/button";

const bidang = [
  "Akademik",
  "Bisnis",
  "Teknologi",
  "Seni",
  "Manajemen",
  "Ekonomi",
];
const tingkat = [
  "Universitas",
  "Kota/Kabupaten",
  "Provinsi",
  "Nasional",
  "Internasional",
];

interface ModalLombaFilterProps {
  handleSave: () => void;
}

const pelaksanaan = ["Daring", "Luring", "Hybrid"];
const anggota = ["Individu","Kelompok"];

const Kategori = ({ title, values }: { title: string; values: string[] }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <p className="font-bold">{title}</p>
      <div className="flex flex-wrap gap-y-2 gap-x-1">
        {values.map((value, index) => (
          <Button key={index} variant="blue">
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default function ModalLombaFilter({ handleSave }: ModalLombaFilterProps) {
  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 max-w-sm bg-[#F0D78C] p-4 rounded-xl text-xs">
      <Kategori title="Bidang" values={bidang} />
      <Kategori title="Tingkat" values={tingkat} />
      <Kategori title="Pelaksanaan" values={pelaksanaan} />
      <Kategori title="Anggota" values={anggota} />
      <div className="flex justify-center mt-6">
        <Button variant="white" className="text-xs" onClick={handleSave}>
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
