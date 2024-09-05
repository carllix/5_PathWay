import { Button } from "@/components/ui/button";

interface ModalSyaratProps {
  syarat?: string;
  more_info: string;
  handleClose: () => void;
}

export default function ModalSyarat({
  syarat,
  more_info,
  handleClose,
}: ModalSyaratProps) {
  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 max-w-sm text-[#F0D78C] bg-[#4F81C7] p-4 rounded-2xl text-sm">
      <p className="text-center font-bold text-xl">Syarat dan Ketentuan</p>
      <div className="mt-7 text-justify text-white">
        {syarat && (
          <p className="mb-3">
            {syarat}
          </p>
        )}
        <p className="text-start">For more information : <span className="underline underline-offset-4">{more_info}</span></p>
      </div>
      <div className="flex justify-center">
        <Button
          variant="yellow"
          className="mt-4 h-8 rounded-xl"
          onClick={handleClose}
        >
          Saya sudah mengerti
        </Button>
      </div>
    </div>
  );
}
