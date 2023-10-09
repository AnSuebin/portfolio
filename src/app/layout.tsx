import Providers from '@/utils/provider';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import HomeHeader from '@/components/home/HomeHeader';
import HomeBottom from '@/components/home/HomeBottom';
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'portfolio',
  description: 'portfolio about AN',
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
