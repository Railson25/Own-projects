import { MenuItem } from "@/components/menu-item";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <div className="flex gap-4">
        <MenuItem icon={AiFillHome} src="/" title="Home" />
        <MenuItem icon={AiFillHome} src="/" title="About" />
      </div>
      <div>
        <Link
          href="/"
          className="text-2xl text-purple-100 font-bold py-1 px-2 bg-purple-800 rounded-xl hover:text-purple-800 hover:bg-purple-100"
        >
          RSMovie
        </Link>
      </div>
    </div>
  );
};
