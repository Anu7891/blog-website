import { Inter } from "next/font/google";
import "./globals.css";

import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Crypto3Blog',
  description: 'Stay updated with the latest crypto news, trends, and insights on Crypto3Blog.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} >{children}</body>
    </html>
  );
}
