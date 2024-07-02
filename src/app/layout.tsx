import type { Metadata } from "next";
import { Noto_Sans_Thai } from 'next/font/google'
import "./globals.css";

const noto_sans_thai = Noto_Sans_Thai({ weight: '400', subsets: ['thai'] })

export const metadata: Metadata = {
  title: "Depression Face Detection",
  description: "Depression Research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans_thai.className}>{children}</body>
    </html>
  );
}