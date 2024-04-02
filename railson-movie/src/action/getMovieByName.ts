import { Movie } from "@/type/api-type";

const API_KEY = process.env.API_KEY;

export const getMovieByName = async (searchTerm: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  const result = data.results.map((movie: Movie) => {
    if (movie.backdrop_path || movie.poster_path) {
      movie.poster_path = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
        : `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    } else {
      movie.poster_path = "";
    }
    return movie;
  });

  const results = await Promise.all(result);
  console.log("dnhjkdbvhjdvbd", results);
  return results;
};
