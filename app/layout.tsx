import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Cursor from './components/Cursor/Cursor';
import StickyNav from './components/StickyNav/StickyNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nehemie Mombanga - Fullstack Developer',
  description:
    "Hey there! I'm Nehemie Mombanga as a dedicated full-stack developer with two years in the trenches, I marry design flair with coding finesse. My objective? To engineer refined and impactful digital platforms that rise above the ordinary.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <StickyNav />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
