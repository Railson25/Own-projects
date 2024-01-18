import { MessageSquareHeart } from "lucide-react";

export const Header = () => {
  return (
    <header className="relative bg-[url('/oregairu.jpg')] bg-center bg-cover bg-no-repeat  flex justify-center lg:items-center  w-full h-[100vh]">
      <div className="absolute inset-0 bg-black/100 opacity-70"></div>

      <div className=" flex flex-col items-center justify-center max-w-screen-sm">
        <MessageSquareHeart className="z-10 text-white mb-10" size={55} />
        <h1 className="sm:text-6xl text-5xl text-white  font-bold leading-[120%] z-10">
          Explore o fascinante universo dos animes.
        </h1>
      </div>
    </header>
  );
};
