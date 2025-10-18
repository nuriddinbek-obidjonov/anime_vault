"use client";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import AnimeCard, { AnimeProp } from "./AnimeCard";

async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  return response.json();
}

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        if (res.length == 0) return;
        setData((prev) => [...prev, ...res]);
        setPage((prev) => prev + 1);
      });
    }
  }, [inView]);

  return (
    <section>
      <section className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>

      <div ref={ref} className="flex justify-center mt-20">
        <Image src="/spinner.svg" width={56} height={56} alt="spinner" />
      </div>
    </section>
  );
}
