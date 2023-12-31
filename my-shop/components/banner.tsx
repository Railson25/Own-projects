"use client";

import { Button } from "./button";

export const Banner = () => {
  return (
    <div className="bg-[url('/images/banner/b2.jpg')] py-10 mx-0 flex flex-col justify-center items-center text-center w-full h-[40vh] max-md:h-[20vh] bg-cover bg-center pt-10px max-[477px]:h-[40vh]">
      <h4 className="text-white text-base">Repair Services</h4>
      <h2 className="text-white text-[30px] py-[10px]">
        Up to
        <span className="text-[#ef3636] px-2">70% off</span>- All t-Shirts $
        Accessories
      </h2>

      <Button
        className="hover:bg-[#088178] hover:text-white"
        label="Explore More"
      />
    </div>
  );
};
