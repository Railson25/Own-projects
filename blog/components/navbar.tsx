"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { navItemsType } from "@/lib/types";

const navItems: navItemsType[] = [
  {
    title: "Inicio",
    href: "#",
  },
  {
    title: "Sobre",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Podcast",
    href: "#",
  },
  {
    title: "Eventos",
    href: "#",
  },
];

export const Navbar = () => {
  return (
    <NavigationMenu className="list-none flex gap-x-2 max-sm:hidden">
      <NavigationMenuItem>
        {navItems.map((item) => (
          <Link href={item.href} key={item.title} className="uppercase">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {item.title}
            </NavigationMenuLink>
          </Link>
        ))}
      </NavigationMenuItem>
    </NavigationMenu>
  );
};
