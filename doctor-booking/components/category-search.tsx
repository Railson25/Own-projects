"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { getCategory } from "@/app/_utils/global-api";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Category } from "@/types/types";
import { Skeleton } from "./ui/skeleton";

export const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="mb-10 flex flex-col items-center gap-4">
      <h2 className="text-4xl font-bold tracking-wide">
        Search
        <span className="text-primary">Doctors</span>
      </h2>
      <p className="text-xl text-primary">
        Search your Doctor and Book appointment in one click
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2 " />
          Search
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-5 mt-5 ">
        {categoryList.length > 0
          ? categoryList.map(
              (category, index) =>
                index < 6 && (
                  <div
                    key={index}
                    className="flex flex-col text-center bg-secondary items-center  gap-2 p-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer"
                  >
                    <Image
                      src={category.attributes?.icon?.data.attributes?.url}
                      alt="Icon"
                      width={40}
                      height={30}
                    />
                    <label className="text-sm text-foreground">
                      {category.attributes.name}
                    </label>
                  </div>
                )
            )
          : [1, 2, 3, 4, 5, 6].map((card, index) => (
              <Skeleton
                key={index}
                className="h-[60px] w-[100px] rounded-lg  animate-pulse bg-primary-foreground"
              />
            ))}
      </div>
    </div>
  );
};
