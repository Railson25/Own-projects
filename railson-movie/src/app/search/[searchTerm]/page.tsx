import { getMovieByName } from "@/action/getMovieByName";
import { Movies } from "@/components/movies";
import { Movie } from "@/type/api-type";

export default async function SearchPage({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) {
  const movieName: Movie[] = await getMovieByName(searchTerm);

  console.log(searchTerm);

  return (
    <div>
      {movieName && movieName.length === 0 && <h1>No results found</h1>}
      {movieName && <Movies movies={movieName} />}
    </div>
  );
}
