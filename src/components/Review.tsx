import React from "react";
import Image from "next/image";
import { Calendar, StarIcon } from "lucide-react";
import UserComment from "./UserComment";
import { TAnimeReview } from "@/lib/animeTypes";
import { Badge } from "./ui/badge";
import UserBadge from "./UserBadge";

function Reviews({ animeData: anime }: { animeData: TAnimeReview }) {
  let reviewDate = new Date(anime.date).toDateString();
  reviewDate = reviewDate
    .trim()
    .split(" ")
    .slice(1, 4)
    .toString()
    .replaceAll(",", " ");

  return (
    <div className="flex w-full flex-col gap-8 md:gap-4 lg:flex-row">
      <Image
        className="mx-auto md:mx-0 rounded-sm"
        src={anime.entry.images.jpg.image_url}
        alt={anime.entry.title}
        width={400}
        height={800}
      />

      <div className="rounded-sm flex flex-1 flex-col rounded-br-lg bg-destructive p-4">
        <div className="mb-4 flex space-x-4 text-sm text-white drop-shadow-md">
          <Badge className="rounded-md flex items-center">
            <StarIcon className="mr-1  text-yellow-500" />
            {anime.score}
          </Badge>
          <Badge className="rounded-md p-2 flex items-center">
            <Calendar className="mr-2  text-red-700" />
            {reviewDate}
          </Badge>
        </div>

        <div className="my-2 space-y-8">
          <UserBadge
            username={anime.user.username}
            userImg={anime.user.images.jpg.image_url}
          />
        </div>

        <h4 className="mt-4 text-xl font-bold">{anime.entry.title}</h4>
        <div className="flex flex-col gap-2 pt-2">
          <p>
            {anime?.review?.length > 400
              ? anime.review.slice(0, 400) + "..."
              : anime.review}
          </p>
          <UserComment
            userReview={anime.review}
            animeName={anime.entry.title}
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
