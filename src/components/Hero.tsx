import Image from "next/image";
import Wallpaper from "@/app/public/assets/wallpaper.jpg";
import { PlayIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AnimeHeroSticker } from "@/app/public/assets";

function Hero() {
  return (
    <div className="relative mx-auto">
      <Image
        className="aspect-square object-cover md:aspect-auto"
        src={Wallpaper}
        alt="Home-Wallpaper"
        role="presentation"
        height={600}
        width={1280}
      />
      <Image
        className="absolute bottom-0 right-4 z-10 opacity-75"
        src={AnimeHeroSticker}
        alt="hero-sticker"
        role="presentation"
        height={600}
        width={180}
      />

      <div className="z-10 absolute top-1/2 w-full -translate-y-1/2 place-items-center">
        <div className="mx-auto w-fit p-4">
          <span className="text-lg font-bold tracking-widest text-destructive drop-shadow-md">
            Welcome 2
            <div className="divider" />
          </span>
          <h1 className="text-6xl font-bold tracking-wide text-white md:text-8xl">
            AnimeKisu
          </h1>
          <span className="block py-4">
            <p className="font-semibold max-w-lg drop-shadow-lg text-xl text-muted dark:text-muted-foreground md:max-w-xl">
              Find something you will enjoy. Share your expression with other
              watchers.
            </p>
          </span>
          <div className="flex">
            <Button
              asChild
              className="group flex items-center gap-x-2 rounded-none bg-white text-black"
            >
              <Link className="" href={"#newSeason"}>
                Get Started
                <PlayIcon className="group-hover:animate-ping group-hover:fill-red-600" />
              </Link>
            </Button>
            <Button asChild variant={"destructive"} className="rounded-l-none">
              <Link href={"sign-up"}>Join Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
