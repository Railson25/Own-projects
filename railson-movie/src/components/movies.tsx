import { Movie } from "@/type/api-type";

interface ResultProps {
  movies: Movie[];
}

export const Movies = ({ movies }: ResultProps) => {
  return (
    <div>
      {movies.map((movie) => (
        <ul key={movie.id}>
          <li>{movie.title}</li>
        </ul>
      ))}
    </div>
  );
};
