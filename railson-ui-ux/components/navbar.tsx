import { NavLinks } from "@/data/data";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="h-8 w-40 relative">
        <Image src="/logo.svg" alt="Logo Image" fill className="absolute" />
      </div>
      <div className="mx-auto max-md:hidden flex gap-x-4 lg:gap-x-14 ">
        {NavLinks.map((link, index) => (
          <Link key={index} href="/" className="text-[#8746f7] font-bold">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-4">
        <User size={25} />
        <Menu size={25} className="md:hidden" />
        <div className="max-md:hidden font-medium flex gap-x-3">
          <button className="bg-gradient-to-br  from-purple-700 to-pink-400 text-white rounded-md px-3">
            Sign In
          </button>
          <button className="bg-gradient-to-br from-pink-400 to-purple-700  px-3 rounded-md text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
