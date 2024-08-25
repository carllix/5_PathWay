import { useState } from "react";
import { Button } from "@/components/ui/button";

const bidang = [
  "IT",
  "Bisnis",
  "Essay",
  "Poster",
  "Videografi",
];
const tingkat = [
  "Universitas",
  "Kota/Kabupaten",
  "Provinsi",
  "Nasional",
  "Internasional",
];
const pelaksanaan = ["Daring", "Luring", "Hybrid"];
const anggota = ["Individu", "Kelompok"];

interface ModalLombaFilterProps {
  handleSave: () => void;
}

const Kategori = ({
  title,
  values,
  selectedValues,
  toggleValue,
}: {
  title: string;
  values: string[];
  selectedValues: string[];
  toggleValue: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <p className="font-bold">{title}</p>
      <div className="flex flex-wrap gap-y-2 gap-x-1">
        {values.map((value, index) => (
          <Button
            key={index}
            variant={selectedValues.includes(value) ? "blue_active" : "blue"}
            onClick={() => toggleValue(value)}
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default function ModalLombaFilter({
  handleSave,
}: ModalLombaFilterProps) {
  const [selectedBidang, setSelectedBidang] = useState<string[]>([]);
  const [selectedTingkat, setSelectedTingkat] = useState<string[]>([]);
  const [selectedPelaksanaan, setSelectedPelaksanaan] = useState<string[]>([]);
  const [selectedAnggota, setSelectedAnggota] = useState<string[]>([]);

  const toggleSelection = (
    selectedValues: string[],
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 max-w-sm bg-[#F0D78C] p-4 rounded-xl text-xs">
      <Kategori
        title="Bidang"
        values={bidang}
        selectedValues={selectedBidang}
        toggleValue={(value) =>
          toggleSelection(selectedBidang, setSelectedBidang, value)
        }
      />
      <Kategori
        title="Tingkat"
        values={tingkat}
        selectedValues={selectedTingkat}
        toggleValue={(value) =>
          toggleSelection(selectedTingkat, setSelectedTingkat, value)
        }
      />
      <Kategori
        title="Pelaksanaan"
        values={pelaksanaan}
        selectedValues={selectedPelaksanaan}
        toggleValue={(value) =>
          toggleSelection(selectedPelaksanaan, setSelectedPelaksanaan, value)
        }
      />
      <Kategori
        title="Anggota"
        values={anggota}
        selectedValues={selectedAnggota}
        toggleValue={(value) =>
          toggleSelection(selectedAnggota, setSelectedAnggota, value)
        }
      />
      <div className="flex justify-center mt-6">
        <Button variant="white" className="text-xs" onClick={handleSave}>
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
