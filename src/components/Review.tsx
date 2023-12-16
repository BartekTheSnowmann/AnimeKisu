import React from "react";
import Image from "next/image";
import { Calendar, StarIcon } from "lucide-react";
import UserComment from "./UserComment";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { TAnimeReview } from "@/lib/animeTypes";

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
        className="mx-auto md:mx-0"
        src={anime.entry.images.jpg.image_url}
        alt={anime.entry.title}
        width={400}
        height={800}
      />

      <div className="flex flex-1 flex-col rounded-br-lg bg-destructive p-4">
        <div className="mb-4 flex space-x-4 text-sm text-white drop-shadow-md">
          <div className="flex items-center">
            <StarIcon color="yellow" className="mr-1" />
            {anime.score}
          </div>
          <div className="flex items-center">
            <Calendar color="white" className="mr-2" />
            {reviewDate}
          </div>
        </div>

        <div className="my-2 space-y-8">
          <div className="flex items-center">
            <Avatar className="h-9 w-9 shadow-lg">
              <AvatarImage
                className="object-cover"
                src={anime.user.images.jpg.image_url}
                alt={anime.user.username}
              />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none drop-shadow-lg">
                {anime.user.username}
              </p>
            </div>
          </div>
        </div>

        <h4 className="mt-4 text-xl font-bold">{anime.entry.title}</h4>
        <div className="flex flex-col gap-2 pt-2">
          {anime?.review?.length > 400
            ? anime.review.slice(0, 400) + "..."
            : anime.review}
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
