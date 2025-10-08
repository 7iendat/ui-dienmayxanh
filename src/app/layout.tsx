import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
