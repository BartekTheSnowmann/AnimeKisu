import { TAnime } from "@/lib/animeTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function searchResults({ data }: { data: TAnime[] }) {
  return (
    <>
      {data?.map((result: any) => (
        <div
          className="flex h-20 w-full items-center bg-white p-2 dark:bg-black"
          key={result.mal_id}
        >
          <h4 className="flex-1 font-medium leading-none drop-shadow-lg">
            <Link href={`/anime/${result.mal_id}`}>
              {result.title?.length > 20
                ? result.title.slice(0, 16) + "..."
                : result.title}
            </Link>
          </h4>
          <Image
            className="aspect-square object-contain"
            src={result.images.jpg.image_url}
            alt={result.title}
            width={40}
            height={80}
          />
        </div>
      ))}
    </>
  );
}

export default searchResults;
