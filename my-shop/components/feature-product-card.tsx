"use client";

import Image from "next/image";
import { Stars } from "./stars";
import { LinkItem } from "./link";

import { AiOutlineShoppingCart } from "react-icons/ai";

interface FeatureProductCardProps {
  src: string;
  brand?: string;
  name?: string;
  price?: string;
  onclick?: () => void;
}

export const FeatureProductCard = ({
  src,
  brand,
  name,
  price,
  onclick,
}: FeatureProductCardProps) => {
  return (
    <div
      onClick={onclick}
      className="w-[23%] min-w-[250px] py-[10px] px-3 border border-[#cce7d0] rounded-[25px] cursor-pointer shadow-xl mx-0 my-[15px] hover:shadow-2xl transition relative "
    >
      <Image
        alt="Card image"
        src={src}
        width={1000}
        height={1}
        className="w-full rounded-[20px]"
      />
      <div className="text-start py-[10px] px-0">
        <span className="text-[#606063] text-xs">{brand}</span>
        <h5 className="pt-[7px] text-[14px] text-neutral-700">{name}</h5>
        <div>
          <Stars />
        </div>
        <h4 className="pt-[7px] text-[15px] font-bold text-[#088178]">
          {price}
        </h4>
      </div>

      <div className="w-10 h-10  rounded-[50px] bg-[#e8f6ea]  flex items-center justify-center border border-[#cce7d0] absolute bottom-5 right-[10px]">
        <LinkItem
          src="/"
          icon={AiOutlineShoppingCart}
          className="text-[#088178] font-medium leading-10"
        />
      </div>
    </div>
  );
};
