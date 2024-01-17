import { MessageSquareHeart } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="relative bg-[url('/oregairu.jpg')] bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      {/* Adiciona o overlay escuro à imagem de fundo */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="flex-1 flex flex-col gap-10">
        <MessageSquareHeart />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore o fascinante universo dos animes.
        </h1>
      </div>
      <div className="relative w-full h-[50vh]">
        <Image
          src="/yukino.jpg"
          alt="Yukino"
          fill
          className="object-contain opacity-100"
        />
      </div>
    </header>
  );
};
