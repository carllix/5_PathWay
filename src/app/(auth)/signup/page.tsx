export default function Signup() {
  return (
    <div className="flex h-screen justify-center items-center bg-[#4F81C7]">
      <div className="flex flex-col items-center w-7/12 sm:w-1/2 lg:w-5/12">
        {/* Judul Sign Up */}
        <p className="mb-6 text-[#F0D78C] text-3xl font-bold">
          Silakan Sign Up!
        </p>

        {/* Container Input Field */}
        <div className="flex flex-col w-full space-y-3">
          {/* Input Username */}
          <input
            type="text"
            placeholder="Masukkan username"
            className="w-full rounded-full bg-[#CCE7F7] py-3 px-4 text-sm placeholder-gray-450 focus:outline-none"
          />
          {/* Input Email */}
          <input
            type="email"
            placeholder="Masukkan alamat email"
            className="w-full rounded-full bg-[#CCE7F7] py-3 px-4 text-sm placeholder-gray-450 focus:outline-none"
          />
          {/* Input Password */}
          <input
            type="password"
            placeholder="Masukkan kata sandi"
            className="w-full rounded-full bg-[#CCE7F7] py-3 px-4 text-sm placeholder-gray-450 focus:outline-none"
          />
        </div>
        {/* Button Sign Up */}
        <button className="mt-6 w-[170px] rounded-full bg-[#F0D78C] text-[#4F81C7] py-3 text-m font-semibold">
          Sign Up
        </button>

        {/* Login jika sudah punya akun*/}
        <p className="mt-9 text-sm text-[#F0D78C] ">
          Sudah punya akun? <a href="#" className="text-[#F0D78C] underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
