import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TCharacterData } from "@/lib/animeTypes";

type Props = {
  promise: Promise<any>;
};

async function Characters({ promise }: Props) {
  const charactersData = await promise;

  return (
    <div>
      <div>
        <h4 className="font-bold">Characters</h4>
        <div className="divider" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4 gap-4 justify-items-start">
        {charactersData.map((character: TCharacterData) => (
          <div
            className="relative flex flex-col justify-between items-center"
            key={character.character.mal_id}
          >
            <Link href={`/character/${character.character.mal_id}`}>
              <Image
                className="w-full"
                src={character.character.images.jpg.image_url}
                alt={character.character.name}
                width={120}
                height={120}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
