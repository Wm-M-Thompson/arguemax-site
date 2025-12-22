import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientNavbar from '@/components/ClientNavbar';  // Adjust to '../ClientNavbar' or '@/ClientNavbar' if needed

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Likable Logic',
  description: 'Making complex ideas clear, logical, and approachable.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} className="bg-[#eaeef6] min-h-screen font-sans">
        <ClientNavbar />
        <main className="ml-32 p-8 flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}