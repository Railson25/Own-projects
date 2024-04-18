import { navIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/" alt="logo" width={27} height={27} />
          <p className="text-[21px] font-bold text-secondary">
            Price <span className="text-primary">wise</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <span key={icon.alt} role="img" aria-label={icon.alt}>
              {icon.icon}
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
};
