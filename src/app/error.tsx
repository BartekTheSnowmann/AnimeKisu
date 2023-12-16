"use client";
import AnimeError from "@/app/public/assets/AnimeError.png";
import { Button } from "@/components/ui/button";
import { Flag, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

function Error() {
  const router = useRouter();

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
            Oops! Something went wrong!
          </h4>
          <span className="flex gap-1 py-2 text-muted-foreground">
            If you think, theres something wrong with the website, feel free to
            contact me. Thanks!
            <Flag />
          </span>
          <div className="mt-2 flex items-center justify-center gap-x-2">
            <Button variant={"secondary"} asChild>
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/bartosz-mr%C3%B3z-536710274/"
                }
              >
                Contact me
              </Link>
            </Button>
            <Button onClick={() => router.refresh()}>Refresh</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;
