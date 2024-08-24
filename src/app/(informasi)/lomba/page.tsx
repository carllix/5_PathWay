import Image from 'next/image';

export default function Lomba() {
  return (
    <div className="p-5 max-w-5xl mx-auto">

      
      {/* Search Bar */}
      <div className="flex items-center max-w-xs border border-gray-300 rounded-lg overflow-hidden p-5">
        {/* Search Field */}
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow p-2 focus:outline-none bg-[#F0D78C]"
        />

        {/* Search Button */}
        <button className="p-2 bg-[#F0D78C] text-white flex items-center justify-center">
          <Image 
            src="/InformationPage/search.svg" // Path to your SVG in the public directory
            alt="Search"
            width={20} // Adjust size as needed
            height={20}
          />
        </button>
      </div>

      <h1>Berikut rekomendasi lomba untuk kamu</h1>
      {/* Card Info Lomba */}
      <div className="grid grid-cols-3 gap-5 p-5">
        <div className="p-5 rounded-lg shadow-md" style={{ backgroundColor: "#CCE7F7" }}>
          {/* Image */}
          <img src="image1-url" alt="IMG LOMBA" className="w-full rounded-lg mb-4" />
          {/* Overview lomba */}
          <h2 className="text-lg font-bold">BizMaster Challenge</h2>
          <p className="text-sm ">Kompetisi mengasah dan berlomba menjadi entrepreneur dan inovator masa depan yang siap membangun industri dunia nyata.</p>
        </div>
        <div className="p-5 rounded-lg shadow-md" style={{ backgroundColor: "#CCE7F7" }}>
          {/* Image */}
          <img src="image1-url" alt="IMG LOMBA" className="w-full rounded-lg mb-4" />
          {/* Overview lomba */}
          <h2 className="text-lg font-bold">BizMaster Challenge</h2>
          <p className="text-sm ">Kompetisi mengasah dan berlomba menjadi entrepreneur dan inovator masa depan yang siap membangun industri dunia nyata.</p>
        </div>
        <div className="p-5 rounded-lg shadow-md" style={{ backgroundColor: "#CCE7F7" }}>
          {/* Image */}
          <img src="image1-url" alt="IMG LOMBA" className="w-full rounded-lg mb-4" />
          {/* Overview lomba */}
          <h2 className="text-lg font-bold">BizMaster Challenge</h2>
          <p className="text-sm ">Kompetisi mengasah dan berlomba menjadi entrepreneur dan inovator masa depan yang siap membangun industri dunia nyata.</p>
        </div>
        <div className="p-5 rounded-lg shadow-md" style={{ backgroundColor: "#CCE7F7" }}>
          {/* Image */}
          <img src="image1-url" alt="IMG LOMBA" className="w-full rounded-lg mb-4" />
          {/* Overview lomba */}
          <h2 className="text-lg font-bold">BizMaster Challenge</h2>
          <p className="text-sm ">Kompetisi mengasah dan berlomba menjadi entrepreneur dan inovator masa depan yang siap membangun industri dunia nyata.</p>
        </div>
        <div className="p-5 rounded-lg shadow-md" style={{ backgroundColor: "#CCE7F7" }}>
          {/* Image */}
          <img src="image1-url" alt="IMG LOMBA" className="w-full rounded-lg mb-4" />
          {/* Overview lomba */}
          <h2 className="text-lg font-bold">BizMaster Challenge</h2>
          <p className="text-sm ">Kompetisi mengasah dan berlomba menjadi entrepreneur dan inovator masa depan yang siap membangun industri dunia nyata.</p>
        </div>
        <div className="p-5 rounded-lg shadow-md" style={{ backgroundColor: "#CCE7F7" }}>
          {/* Image */}
          <img src="image1-url" alt="IMG LOMBA" className="w-full rounded-lg mb-4" />
          {/* Overview lomba */}
          <h2 className="text-lg font-bold">BizMaster Challenge</h2>
          <p className="text-sm ">Kompetisi mengasah dan berlomba menjadi entrepreneur dan inovator masa depan yang siap membangun industri dunia nyata.</p>
        </div>
      </div>


    </div>
  );
}
