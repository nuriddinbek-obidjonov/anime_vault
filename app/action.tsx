"use server";

import { AnimeProp } from "@/components/AnimeCard";
import AnimeCard from "@/components/AnimeCard";

export const findAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  console.log(data[0]);
  return (
    <>
      {data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))}
    </>
  );
};
