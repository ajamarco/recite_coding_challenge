import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

import { Providers } from "./providers";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
