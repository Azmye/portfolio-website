import Navbar from '@/components/layout/navbar';
import './globals.css';
import { Quicksand } from 'next/font/google';
import NavbarMobile from '@/components/layout/navbar-mobile';
import BottomBarMobile from '@/components/layout/bottom-bar-mobile';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: 'mhmmd azmi',
  description: 'Portfolio Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        <NavbarMobile />
        {children}
        <BottomBarMobile />
      </body>
    </html>
  );
}
