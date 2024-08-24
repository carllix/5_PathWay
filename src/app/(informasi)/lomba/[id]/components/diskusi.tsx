import React from "react";

const Diskusi = () => {
  return (
    <div className="my-4">
      <h1 className="font-extrabold text-xl">Forum Diskusi</h1>

      <textarea
        placeholder="Berikan komentarmu disini..."
        className="bg-[#F0D78C] rounded-3xl p-6 my-4 h-80 w-full placeholder:text-black font-medium text-start resize-none"
      />
    </div>
  );
};

export default Diskusi;
