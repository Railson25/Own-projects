const API_KEY = process.env.API_KEY;

export const getMovieId = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
};
