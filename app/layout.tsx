import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "SpaceX Visualizer",
  description: "This is a visualizer for SpaceX specific information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-family-karla flex">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
