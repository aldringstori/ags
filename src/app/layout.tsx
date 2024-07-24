import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import { TracingBeam } from "@/components/tracing-beam"; 
import { Navbar } from '@/components/navbar-menu'; 
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
});

export const metadata = {
  title: 'ags',
  description: 'agslife',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans`}>
        <div className="relative z-10">
          <Navbar />
        </div>
        <TracingBeam> 
          <div className="mt-[-20px]"> {/* Adjust margin here */}
            {children}
          </div>
        </TracingBeam>
      </body>
    </html>
  );
}
