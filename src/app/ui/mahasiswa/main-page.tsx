'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import DataTable from 'react-data-table-component';
import '@/app/css/mahasiswa/main-page.css';
import Sidebar from '@/app/ui/mahasiswa/sidebar';

const DataTable = dynamic(() => import("react-data-table-component"), {ssr: false});

export default function MainPage() {
    const columns = [
        {
          name: 'No.',
          selector: row => row.no,
          sortable: true,
          cell: row => (
            <div className="text-center p-2 w-4">{row.no}</div>
          ),
        },
        {
          name: 'Aktivitas',
          selector: row => row.aktivitas,
          sortable: true,
          cell: row => (
            <div className="text-left p-2">{row.aktivitas}</div>
          ),
        },
        {
          name: 'Tanggal Pengajuan',
          selector: row => row.tanggal,
          sortable: true,
          cell: row => (
            <div className="text-center p-2">{row.tanggal}</div>
          ),
        },
        {
          name: 'Status',
          selector: row => row.status,
          sortable: true,
          cell: row => (
            <div className="text-center p-2">
              <button
                className={`${
                  row.status === 'Diterima' ? 'bg-green-500' : 'bg-red-500'
                } text-white py-2 px-4 rounded-lg`}>
                {row.status}{' '}
              </button>
            </div>
          ),
        },
      ];
      
    const dummyData = [
        { no: 1, aktivitas: 'Pengajuan Bimbingan Kerja Praktek', tanggal: '24 Jan 2025', status: 'Ditolak' },
        { no: 2, aktivitas: 'Pengajuan Skripsi', tanggal: '25 Jan 2025', status: 'Diterima' },
    ];
    
    const customStyles = {
        headCells: {
            style: {
            backgroundColor: '#1e40af', // Blue color for header
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
            border: '1px solid rgb(222, 226, 230)',
            },
        },
        cells: {
            style: {
            padding: '0.5rem',
            textAlign: 'center',
            border: '1px solid rgb(222, 226, 230)',
            },
        },
    };

    return (
        <div className="flex">
            <Sidebar></Sidebar>
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
                        <div className="text-sm text-gray-500 mt-2 ml-4 mb-2">
                            Published by: Koordinator KP on 20 Jan 2025, 22:34
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="bg-yellow-200 p-4 rounded-md">
                        <i className="fas fa-exclamation-circle mr-2"></i> Anda belum memiliki jadwal sidang.
                    </div>
                    <hr className="my-4" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <h1 className="text-xl font-semibold mb-4"><i className="far fa-calendar-check mr-2"></i> Aktivitas Terbaru</h1>
                            <div className="overflow-x-auto">
                                <DataTable
                                    columns={columns}
                                    data={dummyData}
                                    pagination
                                    customStyles={customStyles}
                                />
                            </div>
                        </div>
                        <div className="col-span-1 bg-[#f0f5ff] rounded-lg">
                            <h1 className="text-xl font-semibold mb-4"><i className="fas fa-bell mr-2"></i> Notifikasi</h1>
                            <p className='mb-4'>Dosen Pembimbing telah menerima topikmu! Silahkan ke halaman Logbook untuk mengisi catatan bimbingan.</p>
                            <a href="https://kp-sti.inihikam.my.id/logbook" className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
                                <i className="fas fa-chevron-right mr-2"></i> Menuju ke Halaman
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
