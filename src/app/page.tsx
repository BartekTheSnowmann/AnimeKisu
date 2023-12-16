import AnimeReviews from "@/components/AnimeReviews";
import Hero from "@/components/Hero";
import NewSeasonAnime from "@/components/NewSeasonAnime";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <Hero />
      <NewSeasonAnime />
      <AnimeReviews />
    </main>
  );
}
