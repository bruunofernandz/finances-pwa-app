'use client';

import localFont from 'next/font/local';
import './globals.css';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SplashScreen } from '@/components/SplashScreen';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoading ? (
          <SplashScreen handleIsLoaded={() => setIsLoading(false)} />
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
