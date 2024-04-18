"use client";

import { heroImages } from "@/constants";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HeroCarousel = () => {
  return (
    <div className="relative sm:px-10 py-5 sm:pt-20 w-full max-w-[560px] h-[700px] bg-[#f2f4f7] rounded-[30px] sm:mx-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={2000}
        width={400}
      >
        {heroImages.map((image) => (
          <Image
            key={image.alt}
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>

      <Image
        src="/images/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
};
