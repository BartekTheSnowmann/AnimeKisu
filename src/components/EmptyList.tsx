import Image from "next/image";
import React from "react";
import AnimeError from "@/../public/assets/AnimeError.png";
import { Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function EmptyList() {
  return (
    <section className="px-4 py-24">
      <div className="grid place-items-center">
        <Image
          src={AnimeError}
          alt="empty-list-image"
          height={250}
          width={250}
          className=""
        />
        <div className="mb-4 mt-2 text-center">
          <h4 className="text-2xl font-bold drop-shadow-xl">List is Empty!</h4>
          <span className="flex gap-1 py-2 text-muted-foreground">
            Start by adding something
            <Lightbulb />
          </span>
          <Button asChild className="m-1 mx-auto block w-fit">
            <Link href={"/top"}>Find Anime</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default EmptyList;
