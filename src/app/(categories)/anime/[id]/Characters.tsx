import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  promise: Promise<any>;
};

type TCharacterData = {
  character: {
    nicknames?: string[];
    favorites: number;
    about: string;
    mal_id: string;
    name: string;
    images: {
      jpg: { image_url: string };
    };
  };
};

async function Characters({ promise }: Props) {
  const charactersData = await promise;

  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <h4 className="font-bold">Characters</h4>
        <div className="divider" />
      </div>
      <div className="flex flex-wrap gap-4">
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
            <p className="absolute bottom-0 bg-white dark:bg-black w-full text-center p-1 text-muted-foreground">
              {character.character.name.length > 10
                ? character.character.name.slice(0, 10) + "..."
                : character.character.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
