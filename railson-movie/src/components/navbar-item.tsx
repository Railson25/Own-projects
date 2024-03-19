"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface NavbarItemProps {
  title: string;
  param: string;
}

export const NavbarItem = ({ title, param }: NavbarItemProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-purple-800 font-semibold text-purple-800 dark:text-purple-100  ${
          genre === param &&
          "underline underline-offset-8 decoration-4   rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};
