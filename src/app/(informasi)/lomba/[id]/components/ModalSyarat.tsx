import { Button } from "@/components/ui/button";

interface ModalSyaratProps {
  handleClose: () => void;
}

export default function ModalSyarat({
  handleClose}: ModalSyaratProps) {
    return (
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 max-w-sm text-[#F0D78C] bg-[#4F81C7] p-4 rounded-2xl text-xs">
        <p className="text-center font-bold text-xl">Syarat dan Ketentuan</p>
        <p className="mt-7 text-justify text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
          ducimus laudantium sapiente voluptates iusto nam recusandae sint ipsam
          voluptatibus itaque illo quod tempora excepturi saepe? Blanditiis
          tempore modi esse distinctio!
        </p>
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
    );}