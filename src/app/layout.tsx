import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import { TracingBeam } from "@/components/tracing-beam"; // Import TracingBeam component
import "./globals.css";
import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Navbar } from '@/components/navbar-menu'; 


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
        <TracingBeam> {/* Wrap children with TracingBeam for the effect */}
          {children}
        </TracingBeam>
      </body>
    </html>
  );
}
