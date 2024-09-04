import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import AppHeader from '@/app/components/app.header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanh First NextJS",
  description: "Thanh First NextJS with not good at all XDD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
