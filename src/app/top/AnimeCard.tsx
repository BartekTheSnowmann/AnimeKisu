import React from "react";
import AnimeImg from "../(categories)/anime/[id]/AnimeImg";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TAnime } from "@/lib/animeTypes";

function AnimeCard({ anime }: { anime: TAnime }) {
  return (
    <Link href={`anime/${anime.mal_id}`}>
      <div
        className="flex cursor-pointer flex-col items-center gap-2 rounded-md"
        key={`top_anime-${anime.mal_id}`}
      >
        <div className="relative duration-300 hover:scale-95">
          <AnimeImg image={anime.images.jpg.image_url} />

          <div className="absolute left-2 top-2 rounded-r-md shadow-lg">
            <Badge className="flex w-fit items-center px-2">
              <Heart className="mr-1 h-3 w-3 fill-red-600 text-red-600" />
              <span className="text-muted-foreground">#{anime.favorites}</span>
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
