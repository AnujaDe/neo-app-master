import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NeoHeader } from "@/components/header/NeoHeader";
import NeoFooter from "@/components/footer/NeoFooter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neo - Smart Financial Solutions",
  description: "Neo is a tool designed to win your life goals.",
};

export default function NeoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#e3f0fc] via-[#e0f3fc] to-[#bde2fa] min-h-screen`}>
        <NeoHeader />
        <main>{children}</main>
        <NeoFooter />
      </body>
    </html>
  );
}