import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Railsinho Blog",
  description: "De frente com Railsinho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full flex items-center justify-center">
          <Navbar />
        </nav>
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
