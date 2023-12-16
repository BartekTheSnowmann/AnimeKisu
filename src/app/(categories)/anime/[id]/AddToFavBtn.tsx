"use client";

import { Button } from "@/components/ui/button";
import { addToFavorite } from "./actions";
import Image from "next/image";
import React, { useTransition } from "react";
import Spinner from "@/app/public/spinner.svg";
import { toast } from "sonner";
import { TAnime } from "@/lib/animeTypes";

function AddToFavBtn({ anime }: { anime: TAnime }) {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      {isPending ? (
        <Image src={Spinner} alt="spinner" width={48} height={48} />
      ) : (
        <Button
          onClick={() =>
            startTransition(async () => {
              try {
                await addToFavorite(anime);
                toast.success(`Added ${anime.title}`);
              } catch (err) {
                toast.error(`Could not add ${anime.title}`);
              }
            })
          }
          className="mt-2 w-fit"
          variant={"outline"}
        >
          Add to list
        </Button>
      )}
    </>
  );
}

export default AddToFavBtn;
