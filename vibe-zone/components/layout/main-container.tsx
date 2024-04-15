"use client";
import { usePathname } from "next/navigation";
import { TopBar } from "./top-bar";
import { pageTitles } from "@/constants/constants";

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  const currentPath = usePathname();

  const regex = /^\/([^\/]+)/;
  const match = currentPath.match(regex);
  const firstPath = match ? match[0] : currentPath;

  const title = pageTitles.find((page) => page.url === firstPath)?.title || "";

  console.log(title);

  return (
    <div className="flex flex-col flex-1 max-w-3xl 2xl:max-w-5xl px-4 md:px-10 lg:px-4 xl:px-20">
      <TopBar />
      <div className="mt-6 mb-20">
        <h1 className="mb-5 text-heading2-bold max-sm:text-heading3-bold text-light-1">
          {title}
        </h1>
        <div className="h-screen overflow-y-scroll custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
