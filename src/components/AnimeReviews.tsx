import React from "react";
import Review from "./Review";
import { TAnimeReview } from "@/lib/animeTypes";
import { getAnimeReviews } from "@/lib/api/apiCalls";

async function AnimeReviews() {
  const animeData: TAnimeReview[] = await getAnimeReviews();

  return (
    <section className="px-4 pt-4">
      <div className="border-img pb-12" />
      <div className="pb-8">
        <h4 className="text-2xl font-bold">Reviews</h4>
        <p className="text-muted-foreground font-semibold">
          See what others have to say
        </p>
      </div>

      {animeData &&
        animeData
          .slice(0, 1)
          .map((anime: TAnimeReview, index: number) => (
            <Review key={`review-${anime.mal_id}-${index}`} animeData={anime} />
          ))}
    </section>
  );
}

export default AnimeReviews;
