import { Movie } from "@/type/api-type";
import { Card } from "@/components/card";

interface ResultProps {
  movies: Movie[];
}

export const Movies = ({ movies }: ResultProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 py-10 px-4 gap-6">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          movie_id={movie.id}
          poster_path={movie.backdrop_path || movie.poster_path}
          // @ts-ignore
          title={movie.title || movie.name}
          overview={movie.overview}
          // @ts-ignore
          release_date={movie.release_date || movie.first_air_date}
          vote_count={movie.vote_count}
        />
      ))}
    </div>
  );
};
