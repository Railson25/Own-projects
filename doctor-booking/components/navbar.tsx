import Link from "next/link";
import { LogoIcon } from "./icons/logo";
import { Button } from "./ui/button";
import { FolderSearch, Home, User } from "lucide-react";

export const Navbar = () => {
  const menu = [
    {
      icon: <Home size={20} />,
      name: "Home",
      path: "/",
    },
    {
      icon: <FolderSearch size={20} />,
      name: "Explore",
      path: "/explore",
    },
    {
      icon: <User size={20} />,
      name: "Contact us ",
      path: "/contact",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-sm ">
      <div className="flex items-center gap-10 justify-between">
        <LogoIcon color="#788998" />
        <ul className="hidden gap-8 md:flex">
          {menu.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="flex gap-2 text-primary hover:text-foreground cursor-pointer hover:scale-105 transition-all ease-in-out"
            >
              <div className="w-4 h-4">{link.icon}</div>
              <li className=" font-medium">{link.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};
