/**
 * MediCare Hospital Website
 * Copyright © 2024 Rukshan Malishaka
 * Developer: Rukshan Malishaka (rukshanm.com)
 * All rights reserved.
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MediCare Hospital - Exceptional Healthcare Services',
  description: 'Providing exceptional healthcare services with compassion, innovation, and excellence. Your health is our priority.',
  keywords: 'hospital, healthcare, medical services, emergency care, surgery, cardiology, pediatrics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
