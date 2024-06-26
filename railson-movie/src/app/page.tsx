import { getMovies } from "@/action/getMovies";
import { Movies } from "@/components/movies";

export default async function Home({
  searchParams,
}: {
  searchParams: { genre: string };
}) {
  const genre = searchParams.genre || "fetchTrending";

  const movies = await getMovies(genre);

  return (
    <div className="max-md:flex max-md:justify-center">
      <Movies movies={movies} />
    </div>
  );
}
