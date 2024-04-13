import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { RightSideBar } from "@/components/layout/right-side-bar";
import { LeftSideBar } from "@/components/layout/left-side-bar";
import { MainContainer } from "@/components/layout/main-container";
import { BottomBar } from "@/components/layout/bottom-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vibe zone",
  description: "Next 14 Social Media App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`bg-purple-2 ${inter.className}`}
          suppressHydrationWarning
        >
          <main className="flex">
            <LeftSideBar />
            <MainContainer>{children}</MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
