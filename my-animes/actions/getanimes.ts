"use server";

export const getAnimes = async (page: number) => {
  const animes = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=9&order=popularity`
  );

  const data = await animes.json();

  return data;
};
