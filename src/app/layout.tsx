import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonçalo Prates",
  description: "Gonçalo Prates Web Portfolio",
  icons: {
    icon: "/favicon2.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 pt-28 text-gray-950 sm:pt-36`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
