import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pricewise",
  description: "Track product prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <main className="max-w-[1440px] mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
