"use client";

import Spinner from "@/app/public/spinner.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "@/app/top/AnimeCard";
import { TAnime } from "@/lib/animeTypes";

let pageNumber = 2;
export type AnimeCard = JSX.Element;

const getTopAnime = async (page: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${page}`
  );
  const data = await response.json();
  return data.data;
};

function LoadMore() {
  const { ref, inView } = useInView();
  const [animeData, setAnimeData] = useState<TAnime[]>([]);

  useEffect(() => {
    if (inView) {
      getTopAnime(pageNumber).then((res) => {
        setAnimeData([...animeData, ...res]);
      });
      pageNumber++;
    }
  }, [inView]);

  return (
    <>
      <div className="grid grid-cols-3 justify-items-stretch gap-8 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
        {animeData.map((anime: TAnime) => (
          <AnimeCard key={`top__anime-${anime.mal_id}`} anime={anime} />
        ))}
      </div>

      <section className="flex w-full items-center justify-center">
        <div ref={ref}>
          <Image
            src={Spinner}
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
