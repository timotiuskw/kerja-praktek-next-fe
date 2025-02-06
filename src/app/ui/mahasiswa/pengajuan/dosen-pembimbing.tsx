'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/app/css/mahasiswa/pengajuan/dosen-pembimbing.css';
import Sidebar from '@/app/ui/mahasiswa/sidebar';

const DataTable = dynamic(() => import("react-data-table-component"), {ssr: false});

export default function DosenPembimbing() {
    // Data dummy untuk dosen
    const [dosenList, setDosenList] = useState([
        {
        npp: '12345',
        nama: 'Dr. John Doe',
        sisaKuota: 3,
        jumlahAjuan: 5,
        },
        {
        npp: '23456',
        nama: 'Prof. Jane Smith',
        sisaKuota: 2,
        jumlahAjuan: 4,
        },
        {
        npp: '34567',
        nama: 'Dr. Emily White',
        sisaKuota: 4,
        jumlahAjuan: 6,
        },
    ]);

    // Definisikan kolom-kolom untuk DataTable
    const columns = [
        {
        name: 'No.',
        selector: (row, index) => index + 1,
        sortable: true,
        width: '50px',
        },
        {
        name: 'NPP',
        selector: row => row.npp,
        sortable: true,
        },
        {
        name: 'Nama Dosen',
        selector: row => row.nama,
        sortable: true,
        },
        {
        name: 'Sisa Kuota',
        selector: row => row.sisaKuota,
        sortable: true,
        },
        {
        name: 'Jumlah Ajuan',
        selector: row => row.jumlahAjuan,
        sortable: true,
        },
        {
        name: 'Aksi',
        cell: (row) => (
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">Pilih</button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },
    ];

    return (
        <div className="flex w-dvw">
            <Sidebar></Sidebar>

            <div className="main p-10 bg-[#fafbfe]">
                <div className=''>
                    <ul className="flex bg-light rounded-xl mb-3">
                        <li className="flex-1">
                            <a href="#nav-tab-dosbing" className="block text-center py-2 px-4 rounded-lg text-white bg-[#2259ff]">Dosen Pembimbing</a>
                        </li>
                        <li className="flex-1">
                            <a href="#nav-tab-pengajuan" className="block text-center py-2 px-4 rounded-lg text-blue-500 bg-[#2259ff]">Form Pengajuan</a>
                        </li>
                        <li className="flex-1">
                            <a href="#nav-tab-draft" className="block text-center py-2 px-4 rounded-lg text-blue-500 bg-[#2259ff]">Draft Pengajuan</a>
                        </li>
                    </ul>
                </div>

                <div id="nav-tab-dosbing" className="tab-pane fade show active">
                    <h4 className="text-xl font-bold mb-4">Pemilihan Dosen Pembimbing</h4>
                    <p className="mb-2">Berikut ini adalah daftar dosen pembimbing yang tersedia:</p>

                    <div className="overflow-x-auto rounded-lg shadow">
                    <DataTable
                        columns={columns}
                        data={dosenList}
                        pagination
                        highlightOnHover
                        striped
                        responsive
                    />
                    </div>
                </div>
            </div>
            {/* <div className="tabs">
                <ul className="flex justify-around bg-light rounded-xl mb-3">
                <li className="flex-1">
                    <a href="#nav-tab-dosbing" className="block text-center py-2 px-4 rounded-tl-lg text-blue-500">Dosen Pembimbing</a>
                </li>
                <li className="flex-1">
                    <a href="#nav-tab-pengajuan" className="block text-center py-2 px-4 text-blue-500">Form Pengajuan</a>
                </li>
                <li className="flex-1">
                    <a href="#nav-tab-draft" className="block text-center py-2 px-4 rounded-tr-lg text-blue-500">Draft Pengajuan</a>
                </li>
                </ul>
            </div>

            <div id="nav-tab-dosbing" className="tab-pane fade show active">
                <h4 className="text-xl font-bold mb-4">Pemilihan Dosen Pembimbing</h4>
                <p className="mb-2">Berikut ini adalah daftar dosen pembimbing yang tersedia:</p>

                <div className="overflow-x-auto rounded-lg shadow">
                <DataTable
                    columns={columns}
                    data={dosenList}
                    pagination
                    highlightOnHover
                    striped
                    responsive
                />
                </div>
            </div>

            <div id="nav-tab-pengajuan" className="tab-pane fade">Form Pengajuan</div>
            <div id="nav-tab-draft" className="tab-pane fade">Draft Pengajuan</div> */}
        </div>
    );
};

