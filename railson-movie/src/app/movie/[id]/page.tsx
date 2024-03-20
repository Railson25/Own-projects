import { getMovieId } from "@/action/getMovieId";
import { Movie } from "@/type/api-type";
import Image from "next/image";

export default async function Movie({
  params: { id: movieId },
}: {
  params: { id: string };
}) {
  const movie: Movie = await getMovieId(movieId);

  console.log(movie);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Movie Image"
          width={400}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {/* @ts-ignore */}
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Date released:</span>
            {/* @ts-ignore */}
            {movie.release_date || movie.first_air_date}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
