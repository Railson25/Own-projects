"use client"

import Image from "next/image"

import { Stars } from "./stars"

interface TestimonialsCardProps{
    src: string
    title: string
    role?: string
    description: string
}

export const TestimonialsCard = ({description, title, role, src}: TestimonialsCardProps) => {
        
    return(
        <div className="group w-[260px] sm:w-[330px] md:w-[350px] lg:w-[420px] 2xl:w-[500px]  h-[383px] rounded-[20px shadow-md px-6 pt-8 pb-[73px] rounded-[20px] hover:bg-[#7253A4] hover:text-white">
            <div className="flex gap-x-3">
                <Image 
                    className="border-[2px] object-cover max-w-[61px] max-h-[61px] rounded-full border-[#7253A4] group-hover:border-white"
                    alt="Student Image"
                    src={src}
                    width={61}
                    height={61}
                />
                <div>
                    <h2 className=" text-[10px] md:text-[15px] lg:text-[19px] leading-[19px] md:leading-[29px] text-[#07152F] font-bold group-hover:text-white">
                        {title}
                    </h2>
                    <h3 className="text-[19px] text-[#6A6B6C] font-medium leading-[28px] group-hover:text-white">
                        {role}
                    </h3>
                </div>
            </div>
            <p className="my-[30px] text-[16px] md:text-[20px] lg:text-[22px] text-[#6A6B6C] font-normal leading-[25px] md:leading-[26px] lg:leading-[33px] group-hover:text-white">
                {description}
            </p>
              <Stars />
        </div>
    )
}