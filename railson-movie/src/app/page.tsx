import { Result } from "@/components/results";
import type { Movie } from "@/type/api-type";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const movies: Movie[] = data.results;

  console.log("nsdgvijuoaerngijakoSWEEGN", movies);

  return (
    <div>
      <Result movies={movies} />
    </div>
  );
}
