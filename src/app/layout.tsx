import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyrightSesion from "@/components/CopyrightSesion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Điện Máy Xanh Clone",
  description: "Giao diện mô phỏng trang chủ Điện Máy Xanh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full overflow-x-hidden `}
      >
        {/* Header */}
        <header className="w-full">
          <Header />
        </header>

        {/* Main Content */}
        <main className="w-full flex justify-center">
          <div className="w-full md:max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </main>

        <footer className="w-full flex flex-col">
          <Footer />
          <CopyrightSesion />
        </footer>
      </body>
    </html>
  );
}
