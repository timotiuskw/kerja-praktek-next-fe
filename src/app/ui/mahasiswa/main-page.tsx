import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/app/css/mahasiswa/main-page.css';

export default function MainPage() {
    return (
        <div className="flex">
            <aside id="sidebar" className="w-16 sm:w-64 transition-all ease-in-out duration-300 bg-[#114D91] flex flex-col h-screen">
                <div className="flex items-center p-4">
                    <button className="bg-transparent cursor-pointer border-0 p-4">
                        <i className="lni lni-list text-white text-2xl"></i>
                    </button>
                    <div className="sidebar-logo ml-auto text-white font-semibold text-xl hidden sm:block">
                        <a href="https://kp-sti.inihikam.my.id/mahasiswa">Kerja Praktek</a>
                    </div>
                </div>
                <ul className="sidebar-nav flex-1 p-4">
                    <li className="sidebar-item mb-2">
                        <a href="https://kp-sti.inihikam.my.id/mahasiswa" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                            <i className="lni lni-home text-xl mr-3"></i>
                            <span className="hidden sm:inline">Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item mb-2">
                        <a href="https://kp-sti.inihikam.my.id/pengajuan" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                            <i className="lni lni-pencil-alt text-xl mr-3"></i>
                            <span className="hidden sm:inline">Pengajuan Kerja Praktek</span>
                        </a>
                    </li>
                    <li className="sidebar-item mb-2">
                        <a href="https://kp-sti.inihikam.my.id/logbook" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                            <i className="lni lni-notepad text-xl mr-3"></i>
                            <span className="hidden sm:inline">Logbook Bimbingan KP</span>
                        </a>
                    </li>
                    <li className="sidebar-item mb-2">
                        <a href="https://kp-sti.inihikam.my.id/form-sidang" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                            <i className="fas fa-certificate text-xl mr-3"></i>
                            <span className="hidden sm:inline">Pengajuan Sidang</span>
                        </a>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <a href="https://kp-sti.inihikam.my.id/profilmhs" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                        <i className="fas fa-user text-xl mr-3"></i>
                        <span className="hidden sm:inline">Profil Mahasiswa</span>
                    </a>
                </div>
                <div className="sidebar-footer">
                    <a href="https://kp-sti.inihikam.my.id/tentang" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                        <i className="lni lni-code-alt text-xl mr-3"></i>
                        <span className="hidden sm:inline">Tentang</span>
                    </a>
                </div>
                <div className="sidebar-footer">
                    <a href="https://kp-sti.inihikam.my.id/logout" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                        <i className="lni lni-exit text-xl mr-3"></i>
                        <span className="hidden sm:inline">Logout</span>
                    </a>
                </div>
            </aside>
            <div className="main flex-1 p-6 bg-[#fafbfe]">
                <div className="container-dashboard bg-gradient-to-br from-[#9eb9ff] to-[#c7edff] rounded-lg p-6 mb-6 text-center font-semibold text-lg">
                    <h1>Welcome,</h1>
                    <h1>ELECIA BUDI SYABILA</h1>
                    <p>Siap untuk kerja praktek hari ini?</p>
                </div>

                <div className="container-border bg-[#f0f5ff] rounded-lg p-6">
                    <div className="border bg-white shadow-md rounded-lg">
                        <div className="bg-blue-600 text-white flex items-center p-4 rounded-t-lg">
                            <i className="fas fa-info-circle mr-2"></i> Pengumuman Kerja Praktek
                        </div>
                        <div className="card-body p-4" id="markdown-content-2">
                            Pendaftaran Kerja Praktek telah dibuka! Silahkan melakukan pengajuan KP pada website ini.
                        </div>
                        <small className="text-sm text-gray-500 mt-2 ml-4">Published by: Koordinator KP on 20 Jan 2025, 22:34</small>
                    </div>
                    <hr className="my-4" />
                    <div className="bg-yellow-200 p-4 rounded-md">
                        <i className="fas fa-exclamation-circle mr-2"></i> Anda belum memiliki jadwal sidang.
                    </div>
                    <hr className="my-4" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <h1 className="text-xl font-semibold"><i className="far fa-calendar-check mr-2"></i> Aktivitas Terbaru</h1>
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto border-collapse">
                                    <thead className="bg-blue-600 text-white">
                                        <tr>
                                            <th className="text-center p-2">No.</th>
                                            <th className="text-center p-2">Aktivitas</th>
                                            <th className="text-center p-2">Tanggal Pengajuan</th>
                                            <th className="text-center p-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center p-2">1</td>
                                            <td className="p-2">Pengajuan Bimbingan Kerja Praktek</td>
                                            <td className="text-center p-2">24 Jan 2025</td>
                                            <td className="text-center p-2">
                                                <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Diterima
                                                    <i className="fas fa-check ml-2"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-span-1 py-5 bg-[#f0f5ff] rounded-lg">
                            <h1 className="text-xl font-semibold"><i className="fas fa-bell mr-2"></i> Notifikasi</h1>
                            <p>Dosen Pembimbing telah menerima topikmu! Silahkan ke halaman Logbook untuk mengisi catatan bimbingan.</p>
                            <a href="https://kp-sti.inihikam.my.id/logbook" className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
                                <i className="fas fa-chevron-right mr-2"></i> Menuju ke Halaman
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
