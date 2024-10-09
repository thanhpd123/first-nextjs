import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import AppHeader from '@/app/components/app.header';
import AppFooter from "@/app/components/app.footer";
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';

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
        <div style={{ marginBottom: '20px' }}>
          <AppHeader />
        </div>

        {children}

        <div style={{ marginTop: '20px' }}>
          <AppFooter />
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
