import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import axios from "axios";

type TCharacter = {
  nicknames?: string[];
  favorites: number;
  about: string;
  mal_id: string;
  name: string;
  images: {
    jpg: { image_url: string };
  };
};

const fetchCharacter = async (id: string) => {
  const response = await axios.get(`https://api.jikan.moe/v4/characters/${id}`);
  return response.data.data;
};

async function page({ params: { id } }: { params: { id: string } }) {
  const character: TCharacter = await fetchCharacter(id);

  return (
    <section className="text-light mx-auto max-w-7xl px-4 py-12">
      {/* Anime IMG */}
      <div className="flex flex-wrap gap-4 pb-12 lg:flex-nowrap">
        <Image
          src={character.images.jpg.image_url}
          alt={`anime_character-${character.mal_id}`}
          priority={true}
          width={300}
          height={360}
        />

        {/* Anime Info */}
        <div className="flex flex-col gap-2">
          <div className="flex text-sm text-muted-foreground">
            <div className="flex items-center"></div>
            <div className="flex items-center">
              <Heart className="mr-1 h-3 w-3 fill-red-600 text-red-600" />
              {character.favorites}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="">
              <h1 className="text-3xl font-semibold drop-shadow-md">
                {character.name}
              </h1>
              {character?.nicknames &&
                character.nicknames.map((nickname) => (
                  <span
                    key={`${character.mal_id}-nickname`}
                    className="uppercase text-muted-foreground"
                  >
                    {nickname}
                  </span>
                ))}
            </div>
            <p className="flex items-center gap-2">
              <span className="flex items-center gap-x-1 font-semibold">
                {/* <Star className="text-gold h-6 w-6 fill-yellow-500 text-yellow-500 drop-shadow-md" />
                {anime?.score} */}
              </span>
            </p>
            <div>
              <p className="max-w-lg text-sm">{character.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
