import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface MenuItemProps {
  title: string;
  src: string;
  icon: IconType;
}

export const MenuItem = ({ title, src, icon: Icon }: MenuItemProps) => {
  return (
    <Link href={src} className="hover:text-purple-800">
      <Icon className="text-2xl sm:hidden" />
      <h3 className="uppercase hidden sm:inline text-sm">{title}</h3>
    </Link>
  );
};
