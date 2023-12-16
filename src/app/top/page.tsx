import { TAnime } from "@/lib/animeTypes";
import AnimeCard from "./AnimeCard";
import LoadMore from "@/components/LoadMore";
import { Flame } from "lucide-react";
import React from "react";

const getTopAnime = async (page: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${page}`,
  );
  const data = await response.json();
  return data.data;
};

async function Page() {
  const animeData = await getTopAnime(1);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="pb-12">
        <div className="pb-12">
          <div className="flex items-center gap-x-2">
            <h1 className="text-3xl font-bold">Top Anime</h1>
            <Flame className="h-8 w-8 text-destructive" />
          </div>
          <div className="divider" />
          <p className="text-muted-foreground">
            Ranking shows the most popular ones.
          </p>
        </div>
        <div className="grid grid-cols-3 justify-items-stretch gap-8 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
          {animeData &&
            animeData.map((anime: TAnime) => (
              <AnimeCard key={`top__anime-${anime.mal_id}`} anime={anime} />
            ))}
        </div>
      </div>
      <LoadMore />
    </section>
  );
}

export default Page;
