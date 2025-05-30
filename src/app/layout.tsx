import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OKR Tracker - Objectives and Key Results Management",
  description: "Comprehensive OKR management system for tracking employee performance and goal alignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={null}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
