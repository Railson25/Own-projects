import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

interface CardProps {
  movie_id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
  release_date: string;
}

export const Card = ({
  movie_id,
  poster_path,
  title,
  release_date,
  vote_count,
}: CardProps) => {
  +3;

  return (
    <div className="relative max-w-lg min-w-[250px] overflow-hidden rounded-xl shadow-lg group max-h-96">
      <Link href={`/movie/${movie_id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="Movie image"
          width={700}
          height={300}
          className="transition-transform group-hover:scale-110 duration-200 object-cover"
        />
        <div className="absolute inset-0 flex justify-end bg-gradient-to-t from-black/60 to-transparent flex-col p-4">
          <h2 className="text-lg font-bold  text-white">{title}</h2>
          <div className="mt-4 flex gap-x-3 text-white">
            {release_date}
            <button className="flex items-center">
              <FiThumbsUp size={20} className="mr-2" />
              {vote_count}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
