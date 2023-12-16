import React from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";

const getSeasonAnime = async () => {
  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
  const data = await response.json();
  return data.data;
};

async function NewSeasonAnime() {
  const animeData = await getSeasonAnime();

  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    containScroll: "trimSnaps",
  };
  const SLIDE_COUNT = animeData?.length || 16;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="px-4 pb-8 pt-16" id="newSeason">
      <div className="pb-8">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold">Explore new Anime</h4>
        </div>
        <div>
          <p>Brand new ones awaits for you! Check it out!</p>
        </div>
      </div>

      {/* <Carousel /> */}
      <EmblaCarousel animeData={animeData} slides={SLIDES} options={OPTIONS} />
    </section>
  );
}

export default NewSeasonAnime;
