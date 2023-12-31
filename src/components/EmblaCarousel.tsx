"use client";

import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Hand } from "lucide-react";
import { TAnime } from "@/lib/animeTypes";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  animeData: TAnime[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, animeData } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla group">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {animeData.map((anime, index: number) => (
            <div className="embla__slide" key={index}>
              <Link href={`anime/${anime.mal_id}`}>
                <Image
                  loading="lazy"
                  className="rounded-sm border-2 border-destructive embla__slide__img duration-300 hover:scale-95"
                  src={anime.images.jpg.image_url}
                  alt="Your alt text"
                  height={800}
                  width={480}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="drop-shadow-lg flex gap-2 pt-6">
        <span className="text-muted-foreground flex items-center gap-x-2 font-semibold">
          Grab it!
          <div className="rounded-full bg-destructive p-2">
            <Hand className="text-white group-hover:animate-shake" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default EmblaCarousel;
