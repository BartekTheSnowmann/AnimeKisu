import { AnimeItem } from "@prisma/client";
import React from "react";
import { Info } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import DeleteFromFavBtn from "./DeleteFromFavBtn";

function AnimeCard({ anime }: { anime: AnimeItem }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="group relative duration-300 hover:scale-95">
        <Image
          className="w-full"
          src={anime.imageUrl}
          alt={anime.name}
          width={120}
          height={200}
        />
        <div className="absolute right-2 top-2 flex flex-col items-end gap-2">
          <DeleteFromFavBtn
            className="opacity-80 shadow-lg duration-300 hover:bg-destructive hover:opacity-100"
            variant={"destructive"}
            animeId={anime.id}
            animeName={anime.name}
          />
          <Button
            size={"icon"}
            asChild
            className="px-2 opacity-80 shadow-lg hover:opacity-100"
          >
            <Link href={`/anime/${anime.mal_id}`}>
              <Info />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
