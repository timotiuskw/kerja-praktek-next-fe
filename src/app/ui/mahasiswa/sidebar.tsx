import React, { useState } from 'react';
import '@/app/css/sidebar.css';

export default function Sidebar() {

    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <aside 
                id="sidebar" 
                className={`transition-all ease-in-out duration-300 bg-[#114D91] flex flex-col h-screen ${isExpanded ? 'expanded' : ''}`}
                onMouseEnter={(e) => setIsExpanded(true)}
                onMouseLeave={(e) => setIsExpanded(false)}
        >
                <div className="flex items-center justify-center p-4">
                    {isExpanded ? (
                        <div className="sidebar-logo text-white font-semibold text-xl min-h-10">
                            <a href="#">Kerja Praktek</a>
                        </div>
                    ) : (
                        <div className="sidebar-logo text-white font-semibold text-xl min-h-10">
                            KP
                        </div>
                    )}
                </div>
                <ul className="sidebar-nav flex-1">
                    <li className="sidebar-item">
                        <a href="/mahasiswa/dashboard" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                            <i className="lni lni-home text-xl mr-3"></i>
                            {isExpanded ? (
                                <span>Dashboard</span>
                            ) : (
                                <span>&nbsp;</span>
                            )}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/mahasiswa/pengajuan" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                            <i className="lni lni-pencil-alt text-xl mr-3"></i>
                            {isExpanded ? (
                                <span>Pengajuan Kerja Praktek</span>
                            ) : (
                                <span>&nbsp;</span>
                            )}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/mahasiswa/logbook" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                            <i className="lni lni-notepad text-xl mr-3"></i>
                            {isExpanded ? (
                                <span>Logbook Bimbingan KP</span>
                            ) : (
                                <span>&nbsp;</span>
                            )}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/mahasiswa/form-sidang" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                            <i className="fas fa-certificate text-xl mr-3"></i>
                            {isExpanded ? (
                                <span>Pengajuan Sidang</span>
                            ) : (
                                <span>&nbsp;</span>
                            )}
                        </a>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <a href="/mahasiswa/profilmhs" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                        <i className="fas fa-user text-xl mr-3"></i>
                        {isExpanded ? (
                                <span>Profil Mahasiswa</span>
                            ) : (
                                <span>&nbsp;</span>
                            )}
                    </a>
                </div>
                <div className="sidebar-footer">
                    <a href="/mahasiswa/tentang" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                        <i className="lni lni-code-alt text-xl mr-3"></i>
                        {isExpanded ? (
                                <span>Tentang</span>
                            ) : (
                                <span>&nbsp;</span>
                            )}
                    </a>
                </div>
                <div className="sidebar-footer">
                    <a href="/" className="sidebar-link flex items-center p-2 text-white hover:bg-opacity-10 hover:border-white">
                        <i className="lni lni-exit text-xl mr-3"></i>
                        {isExpanded ? (
                                <span>Logout</span>
                            ) : (
                                <span>&nbsp;</span>
                            )}
                    </a>
                </div>
        </aside>
    )
}