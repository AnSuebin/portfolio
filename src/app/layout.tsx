import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import HomeBottom from '@/components/home/HomeBottom';
import HomeHeader from '@/components/home/HomeHeader';
import Providers from '@/utils/provider';

import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'An-Portfolio',
  description: '새로운 세상을 여는 프론트엔드 개발자 안수빈입니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full max-w-screen-xl mx-auto overflow-auto">
        <main>
          <Providers>
            <HomeHeader />
            {children}
            <HomeBottom />
          </Providers>
        </main>
      </body>
    </html>
  );
}
