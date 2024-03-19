import { NavbarItem } from "@/components/navbar-item";
import { useSearchParams } from "next/navigation";

export const Navbar = () => {
  return (
    <div className="flex bg-purple-100 dark:bg-purple-800 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Trending" param="fetchTending" />
      <NavbarItem title="Top rated" param="fetchTopRated" />
    </div>
  );
};
