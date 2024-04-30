import { Outlet } from "react-router-dom";

import { LeftSideBar } from "@/components/shared/left-side-bar";
import { TopBar } from "@/components/shared/top-bar";
import { BottomBar } from "@/components/shared/bottom-bar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSideBar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <BottomBar />
    </div>
  );
};

export default RootLayout;
