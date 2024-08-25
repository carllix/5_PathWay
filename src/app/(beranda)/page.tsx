export default function Beranda() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <img 
        src="/image-beranda.svg" 
        alt="Beranda"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute top-[52%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/Welcome to PathWay.svg" 
          alt="Title" 
          className="w-[1100px] h-[1100px] max-w-full"
        />
      </div>

    </div>
  );
}
