import { Button } from "@/components/ui/button";
import React from "react";

const Diskusi = () => {
  return (
    <div>
      <textarea
        placeholder="Berikan komentarmu disini..."
        className="bg-[#F0D78C] rounded-3xl p-6 my-4 h-80 w-full placeholder:text-black font-medium text-start resize-none"
      />
      <div className="flex lg:justify-end justify-center">
        <Button className="w-40 mt-1 font-semibold h-10 p-4 bg-[#4F81C7] rounded-xl text-white hover:bg-blue-900 text-sm xl:text-base">
          Kirim
        </Button>
      </div>
    </div>
  );
};

export default Diskusi;
