import React, { Suspense } from "react";
import axios from "axios";
import AddToFavBtn from "./AddToFavBtn";
import AnimeImg from "./AnimeImg";
import { CircleIcon, Flame, Heart, Star } from "lucide-react";
import { TAnime } from "@/lib/animeTypes";
import { Metadata } from "next";

interface pageParams {
  params: {
    id: string;
  };
}

const fetchAnime = async (animeId: string) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`);
  return response.data.data;
};

export async function generateMetadata({
  params: { id },
}: pageParams): Promise<Metadata> {
  const anime = await fetchAnime(id).then((res) => res);

  return {
    title: "Anime Kisu - " + anime.title,
    openGraph: {},
  };
}

async function page({ params: { id } }: pageParams) {
  const anime: TAnime = await fetchAnime(id);

  return (
    <section className="text-light mx-auto max-w-7xl px-4 py-12">
      {/* Anime IMG */}
      <div className="flex flex-wrap gap-4 pb-12 lg:flex-nowrap">
        <Suspense fallback={"...Loading"}>
          <AnimeImg image={anime.images.jpg.image_url} />
        </Suspense>

        {/* Anime Info */}
        <div className="flex flex-col gap-2">
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              {anime.airing ? (
                <>
                  <CircleIcon className="mr-1 h-3 w-3 fill-green-600 text-green-600" />
                  <p>On going</p>
                </>
              ) : (
                <>
                  <CircleIcon className="mr-1 h-3 w-3 fill-red-600 text-red-600" />
                  <p>Ended</p>
                </>
              )}
            </div>
            <div className="flex items-center">
              <Heart className="mr-1 h-3 w-3 fill-red-600 text-red-600" />
              {anime.favorites}
            </div>
            <div className="flex items-center">
              <Flame className="mr-1 h-3 w-3 fill-orange-600 text-orange-600" />
              #{anime.rank}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold drop-shadow-md">
              {anime.title}
            </h1>
            <p className="flex items-center gap-2">
              <span className="flex items-center gap-x-1 font-semibold">
                <Star className="text-gold h-6 w-6 fill-yellow-500 text-yellow-500 drop-shadow-md" />
                {anime?.score}
              </span>
            </p>
            <div>
              <p className="max-w-lg text-sm">{anime.synopsis}</p>
            </div>

            <AddToFavBtn anime={anime} />
          </div>
        </div>
      </div>

      {/* <Suspense fallback={<UpcomingSkeleton elements={10} variant={"small"} />}>
        <Characters promise={charactersPromise} />
      </Suspense> */}
    </section>
  );
}

export default page;
