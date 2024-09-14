import { useState } from "react";
import { Button } from "@/components/ui/button";

const tingkat = ["S1", "S2", "S3"];

interface ModalBeasiswaFilterProps {
  handleSave: (selectedTingkat: string[]) => void;
}

const Tingkat = ({
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
      <div className="grid grid-cols-3 gap-y-2 gap-x-4">
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
}: ModalBeasiswaFilterProps) {
  const [selectedTingkat, setSelectedTingkat] = useState<string[]>([]);

  const toggleSelection = (value: string) => {
    setSelectedTingkat((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 max-w-sm bg-[#F0D78C] p-4 rounded-2xl text-xs">
      <Tingkat
        title="Tingkat"
        values={tingkat}
        selectedValues={selectedTingkat}
        toggleValue={toggleSelection}
      />
      <div className="flex justify-center mt-6">
        <Button
          variant="white"
          className="text-xs"
          onClick={() => handleSave(selectedTingkat)}
        >
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
