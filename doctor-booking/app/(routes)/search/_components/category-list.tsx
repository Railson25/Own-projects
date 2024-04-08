"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getCategory } from "@/app/_utils/global-api";

import { Category } from "@/types/types";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { usePathname } from "next/navigation";

export const CategoryList = () => {
  const pathname = usePathname();
  const categoryName = pathname.split("/")[2].toLowerCase();

  const [categoryList, setCategoryList] = useState<Category[]>([]);
  console.log(categoryName);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="h-screen  flex flex-col mt-5 min-w-[200px]">
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList className="overflow-visible ">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Categories" className="">
            {categoryList.map((category) => (
              <CommandItem
                key={category.id}
                className="cursor-pointer  data-[disabled]:pointer-events-auto "
              >
                <Link
                  href="/"
                  className={`p-2 flex gap-2 text-sm bg-background items-center rounded-md cursor-pointer w-full hover:bg-secondary ${
                    categoryName === category.attributes.name.toLowerCase() &&
                    "bg-primary text-primary-foreground"
                  }`}
                >
                  <Image
                    src={category.attributes.icon.data.attributes.url}
                    alt="Icon"
                    width={25}
                    height={25}
                  />
                  <label className="cursor-pointer">
                    {category.attributes.name}
                  </label>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};
