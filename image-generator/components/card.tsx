import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const imagesRoute = [
  {
    src: "/images/img-1.jpg",
  },
  {
    src: "/images/img-2.jpg",
  },
  {
    src: "/images/img-3.jpg",
  },
  {
    src: "/images/img-4.jpg",
  },
];

export const Card = () => {
  return (
    <>
      {imagesRoute.map((image) => (
        <div
          className="w-[285px] aspect-square rounded-sm overflow-hidden relative group"
          key={image.src}
        >
          <Image
            src={image.src}
            alt="Image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          <Link
            href="#"
            className="absolute bottom-4 right-4 bg-white h-9 w-9 rounded-full hidden items-center justify-center group-hover:flex"
          >
            <Download className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </>
  );
};
