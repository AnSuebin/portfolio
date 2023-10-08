import Providers from '@/utils/provider';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
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
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
