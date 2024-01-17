import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { getAnimes } from "@/actions/getanimes";
import { AnimeType } from "@/lib/types";
import { Star, WalletCards } from "lucide-react";

export const AnimeCard = async () => {
  const animes: AnimeType[] = await getAnimes(1);
  return (
    <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {animes.map((anime) => (
        <Card
          key={anime.id}
          className="w-[300px] mx-auto bg-white shadow-lg rounded-t-xl overflow-hidden"
        >
          <CardContent className="w-full relative h-[37vh]">
            <Image
              src={`https://shikimori.one${anime.image.original}`}
              alt={anime.name}
              fill
              className="rounded-t-xl"
            />
          </CardContent>
          <div className="flex items-center justify-between">
            <CardHeader className="font-bold text-xl">{anime.name}</CardHeader>
            <span className="p-6 text-gray-700 text-base">{anime.kind}</span>
          </div>
          <CardFooter>
            <div className="flex items-center">
              <WalletCards className="pr-1 text-red-600" size={20} />
              {anime.episodes}
            </div>
            <div className="pl-8 flex items-center text-yellow-500">
              <Star size={20} className="pr-1" />
              {anime.score}
            </div>
          </CardFooter>
        </Card>
      ))}
    </li>
  );
};
