import Image from "next/image";
import React from "react";

function animeImg({ image }: { image: string }) {
  return (
    <Image
      className="shadow-lg"
      priority={true}
      src={image}
      alt={`Anime-${image}`}
      width={300}
      height={360}
    />
  );
}

export default animeImg;
