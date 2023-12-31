"use client"

import Image from "next/image"
import { ClientOnly } from "./client-only"

import { HeaderInput } from "./header-input"

export const Header = () => {
  return(
    <ClientOnly>
      <div className=" relative w-full h-full bg-gradient-to-r from-[#d6bdff] to-[#f4effd]  flex items-start flex-col justify-center">
        <div className="pl-44 flex flex-row"> 
          <div>
            <h1 className="font-bold text-6xl text-[#07152F] leading-[120%] max-w-[855px]">
              Embark on a Delightful Journey of Growth with 
            </h1>
            <span className="font-bold text-6xl text-[#7253a4]">
                Online learning
              </span>
            <p className="mt-7 mb-10 text-1xl font-medium max-w-[786px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  
            </p>
            <HeaderInput />
          </div>
          <div className="absolute right-40 top-40 bg-[#7253a4] rounded-full">
              <Image 
                className="rounded-full"
                src='/images/header-image.png'
                alt="Estudante imagem"
                width={470}
                height={400}
              />
          </div> 
        </div>
        <nav className="mt-16 flex flex-row px-44 gap-x-[155px]">
          <Image 
            src='/images/Amstrad-logo.png'
            alt="Amstrad logo"
            width={185}
            height={123}
          />
          <Image 
            src='/images/Airbus-logo.png'
            alt="Amstrad logo"
            width={185}
            height={123}
          />
          <Image 
            src='/images/Sophos-logo.png'
            alt="Amstrad logo"
            width={185}
            height={123}
          />
          <Image 
            src='/images/Biovia-logo.png'
            alt="Amstrad logo"
            width={185}
            height={123}
          />
          <Image 
            src='/images/Aveva-logo.png'
            alt="Amstrad logo"
            width={185}
            height={123}
          />
        </nav>
      </div>
    </ClientOnly>
  )
}