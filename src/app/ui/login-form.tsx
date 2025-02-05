import React from 'react';
import Link from 'next/link';
import '@/app/css/login-form.css';

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row border rounded-5 p-6 bg-white shadow-lg w-full md:w-[900px]">
        <div className="flex justify-center items-center flex-col bg-blue-800 text-white rounded-lg p-6 md:w-1/2">
          <p className="text-3xl font-semibold">Kerja Praktek</p>
          <small className="text-center mt-2 text-sm">Universitas Dian Nuswantoro</small>
        </div>
        {/* Right Box */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          </div>
          <form action="/api/login" method="POST" className="flex flex-col justify-between h-full">
            {/* CSRF Token */}
            <input type="hidden" name="_csrf" value="your_csrf_token_here" />

            {/* Error Handling */}
            {/* Replace with actual error handling logic */}
            <div className="mb-4 text-red-500">
              {/* {errors.nim_npp || errors.email} */}
            </div>

            <div className="mb-4">
              <label htmlFor="nim_npp" className="sr-only">NIM/NPP/Email</label>
              <input
                type="text"
                id="nim_npp"
                name="nim_npp"
                placeholder="Masukkan NIM/NPP atau Email"
                required
                autoFocus
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan Password"
                required
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-right mb-4">
              <Link href="/forgot-password">
                <span className="text-blue-500 text-sm hover:underline">Reset Password</span>
              </Link>
            </div>

            <Link href="/mahasiswa">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-300"
              >
                Log in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
