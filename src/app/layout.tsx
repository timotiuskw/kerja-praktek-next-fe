'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import Layout from '@/components/Layout';
import { metadata } from './metadata'; 
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Ganti useRouter dengan usePathname
  const [showLoginCss, setShowLoginCss] = useState(false);

  useEffect(() => {
    console.log('Current path:', pathname);

    if (pathname === '/') {
      setShowLoginCss(true);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/3.0/lineicons.css"
        />
        {showLoginCss && (
          <link
            rel="stylesheet"
            href="/styles/login.css"
          />
        )}
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
