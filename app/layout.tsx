import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

import { Providers } from "./providers";
import Navbar from "./components/Navbar";

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
        <Providers>
          <Sidebar />
          <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <Navbar />
            <div className="w-full flex-grow p-6">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
