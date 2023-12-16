import Image from "next/image";
import React from "react";
import AnimeError from "@/app/public/assets/AnimeError.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function notFound() {
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
          <h4 className="text-2xl font-bold drop-shadow-xl">
            Such page doesnt exist!
          </h4>
          <Button asChild className="mx-auto mt-4 block w-fit">
            <Link href={"/"}>Go Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default notFound;
