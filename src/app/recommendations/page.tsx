import { getRecommendations } from "@/lib/api/apiCalls";
import React from "react";
import RecommendationCard from "./RecommendationCard";
import { Lightbulb } from "lucide-react";
import { TRecommendation } from "@/lib/animeTypes";

async function page() {
  const recommendations: TRecommendation[] = await getRecommendations(1);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="pb-12">
        <div className="flex items-center gap-x-2">
          <h1 className="text-3xl font-bold">Anime Recommendations</h1>
          <Lightbulb className="h-8 w-8 text-yellow-500" />
        </div>
        <div className="divider" />
        <p className="text-muted-foreground max-w-md">
          Still have problem with finding something for yourself? Hope you will
          find it here!
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {recommendations.map((recommendation) => (
          <RecommendationCard
            key={`recommendation-${recommendation.mal_id}`}
            animeRecommendation={recommendation}
          />
        ))}
      </div>
    </section>
  );
}

export default page;
