import React from "react";
import { Prisma } from "@prisma/client";
import { getFavoritesList } from "./actions";
import AnimeCard from "@/components/AnimeCard";
import { Heart } from "lucide-react";
import EmptyList from "@/components/EmptyList";

export type FavoritesWithAnimeItems = Prisma.FavoritesGetPayload<{
  include: { items: { include: { animeItem: true } } };
}>;

export type FavoritesItemWithAnimeItem = Prisma.FavoritesItemGetPayload<{
  include: {
    animeItem: true;
  };
}>;

async function page() {
  const favorites = await getFavoritesList();
  const items = favorites?.items;

  if (!items?.length) {
    return <EmptyList />;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="pb-12">
        <div className="flex items-center gap-x-2">
          <h1 className="text-3xl font-bold">Your Favorites</h1>
          <Heart className="h-8 w-8 text-destructive" />
        </div>
        <div className="divider" />
        <p className="text-muted-foreground">
          You have <span className="text-destructive">{items?.length} </span>
          items here.
        </p>
      </div>

      <div className="grid grid-cols-2 justify-items-stretch gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
        {items.map((anime: FavoritesItemWithAnimeItem) => (
          <AnimeCard
            key={`anime-${anime.id}-${anime.favoritesId}`}
            anime={anime.animeItem}
          />
        ))}
      </div>
    </section>
  );
}

export default page;
