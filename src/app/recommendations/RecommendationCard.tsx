import React from "react";
import { TRecommendation } from "./page";
import Image from "next/image";
import UserComment from "@/components/UserComment";
import UserBadge from "@/components/UserBadge";
import Link from "next/link";

function RecommendationCard({
  animeRecommendation,
}: {
  animeRecommendation: TRecommendation;
}) {
  return (
    <div className="flex gap-4 flex-col lg:flex-row bg-destructive p-4 rounded-sm">
      <div className="flex gap-4">
        {animeRecommendation.entry.map((recommendation) => (
          <React.Fragment key={`recommendation_anime-${recommendation.mal_id}`}>
            <Link className="" href={`/anime/${recommendation.mal_id}`}>
              <Image
                src={recommendation.images.jpg.image_url}
                alt={`anime_recommendation-${recommendation.title}`}
                width={150}
                height={180}
                className="h-full shadow-lg rounded-sm"
                loading="lazy"
              />
            </Link>
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col max-w-[600px]">
        <UserBadge username={animeRecommendation.user.username} />

        <div className="flex flex-col gap-2 pt-2">
          <p>
            {animeRecommendation?.content.length > 400
              ? animeRecommendation.content.slice(0, 400) + "..."
              : animeRecommendation.content}
          </p>
          <UserComment userReview={animeRecommendation.content} animeName="" />
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;
