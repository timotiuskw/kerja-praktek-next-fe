import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row border rounded-5 p-6 bg-white shadow-lg w-full md:w-[900px]">
        <div className="flex justify-center items-center flex-col bg-blue-800 text-white rounded-lg p-6 md:w-1/2">
          <p className="text-3xl font-semibold">Kerja Praktek</p>
          <small className="text-center mt-2 text-sm">Universitas Dian Nuswantoro</small>
        </div>
        <div className="flex justify-center items-center flex-col md:w-1/2 p-6">
          <div className="mb-3 w-full">
            <Image
              src="/gambar/2.png"
              alt="Login Image"
              width={500}
              height={500}
              className="object-contain w-full"
            />
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <a
                href="https://kp-sti.inihikam.my.id/login/google"
                className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 w-full text-center"
            >
                <i className="lni lni-google"></i>&nbsp; Login dengan Google
            </a>
            <a
                href="/login"
                className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 w-full text-center"
            >
                Login Koordinator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
