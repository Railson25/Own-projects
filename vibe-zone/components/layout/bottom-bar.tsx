"use client";

import { sidebarLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BottomBar = () => {
  const pathname = usePathname();
  //   const isActive = sidebarLinks.some((link) => pathname === link.route);
  return (
    <div className="flex items-center justify-between bottom-0 z-20 w-full bg-dark-1 px-6 py-3 md:hidden">
      {sidebarLinks.map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className={`flex gap-2 items-center rounded-lg py-2 px-4 ${
            pathname === link.route && "bg-purple-1"
          }`}
        >
          {link.icon}
          <span className="text-subtle-medium text-light-1 max-sm:hidden">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};
