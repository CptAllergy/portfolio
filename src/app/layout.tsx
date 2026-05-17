import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import React from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonçalo Prates — Full-Stack Developer",
  description: "Gonçalo Prates Web Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body
        className={`${inter.className} bg-mauve-100 text-gray-950 dark:bg-slate-900 dark:text-gray-50/90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <ThemeSwitcher />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
