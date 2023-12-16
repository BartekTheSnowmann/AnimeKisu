import { AnimeIdk } from "@/app/public/assets";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function WorkInProgress() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="relative left-7"
          src={AnimeIdk}
          alt="work-in-progress-image"
          height={250}
          width={250}
        />
        <div className="mb-4 mt-2 text-center">
          <h4 className="text-2xl font-bold drop-shadow-xl">
            Work in pogress!
          </h4>

          <span className="flex justify-center gap-1 py-2 text-muted-foreground">
            Maybe...
            <Loader className="h-8 w-8" />
          </span>

          <Button asChild className="m-1 mx-auto block w-fit">
            <Link href={"/"}>Go Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WorkInProgress;
