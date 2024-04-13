"use client";

import { sidebarLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const pathname = usePathname();
  //   const isActive = sidebarLinks.some((link) => pathname === link.route);
  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className={`flex gap-4 justify-start rounded-lg py-2 px-4 ${
            pathname === link.route && "bg-purple-1"
          }`}
        >
          {link.icon}
          <span className="text-light-1">{link.label}</span>
        </Link>
      ))}
    </div>
  );
};
