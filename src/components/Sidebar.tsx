'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUser, FaCertificate } from 'react-icons/fa';
import { IoLogOutOutline, IoCodeOutline, IoHome, IoCreate, IoJournalOutline } from 'react-icons/io5';

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);  // Track collapsed state

  const navItems = [
    { name: 'Dashboard', href: '/dashboardMahasiswa', icon: IoHome },
    { name: 'Pengajuan Kerja Praktek', href: '/pengajuan-mahasiswa', icon: IoCreate },
    { name: 'Logbook Bimbingan KP', href: '/mahasiswa-logbook', icon: IoJournalOutline },
    { name: 'Pengajuan Sidang', href: '/form_pengajuan', icon: FaCertificate },
    { name: 'Profil Mahasiswa', href: '/profilmahasiswa', icon: FaUser },
    { name: 'Tentang', href: '/halamanTentang', icon: IoCodeOutline },
    { name: 'Logout', href: '/logout', icon: IoLogOutOutline },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <aside
      className={`bg-gray-800 text-white min-h-screen p-4 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      onMouseEnter={() => setIsCollapsed(false)}  // Expand on hover
      onMouseLeave={() => setIsCollapsed(true)}   // Collapse on hover out
    >
      {/* Title (Change when collapsed) */}
      <div className="mb-5 font-bold text-center">
        {isCollapsed ? 'KP' : 'Kerja Praktek'}
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded-md ${
                isActive(item.href) ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <item.icon className="text-xl" />
              {/* Show name only when not collapsed */}
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
